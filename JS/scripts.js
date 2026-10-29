/**
 * 四禧丸子官方站 - 主脚本
 * 包含所有页面交互逻辑，由 loader.js 在组件加载完成后触发初始化
 */

// ==================== 全局工具函数 ====================

window.openVideo = function (bvid) {
    if (bvid) window.open(`https://www.bilibili.com/video/${bvid}`, '_blank');
    else alert('该事件暂无视频链接');
};

window.openGame = function (path) { window.open(path, '_blank'); };

window.toggleExtraInfo = function (id) {
    let el = document.getElementById(id);
    if (el) el.style.display = el.style.display === 'block' ? 'none' : 'block';
};

window.toggleMilestone = function (el) {
    let h4 = el.querySelector('.timeline-date');
    let p = el.querySelector('span:last-child');
    if (h4 && p) {
        if (h4.innerText.includes('2022年1月16日')) {
            h4.innerText = '2021年8月28日';
            p.innerText = '袁雨桢 温晶婕 最后一次公演';
        } else {
            h4.innerText = '2022年1月16日';
            p.innerText = '禧运楼开张营业';
        }
    }
};

window.downloadPointer = function (type) {
    let path = '';
    switch (type) {
        case 'tiandou': path = 'mouse/tiandou.zip'; break;
        case 'youyi': path = 'mouse/Youyi.zip'; break;
        case 'mumu': path = 'mouse/mumu.zip'; break;
        case 'lian': path = 'mouse/lian_v1.0.zip'; break;
        default: alert('未知指针类型'); return;
    }
    window.open(path, '_blank');
};

// ==================== 进度条 ====================

function initProgressBar() {
    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let docHeight = document.documentElement.scrollHeight - window.innerHeight;
        let percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        const bar = document.getElementById('progressBar');
        if (bar) bar.style.width = percent + '%';
    });
}

// ==================== 平滑滚动 ====================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ==================== 动态背景 ====================

const memberVoiceMap = {
    'tian-dou-skills': 'voice/恬豆限定音声/恬豆Bekki·揉一揉…揉一揉….wav',
    'you-yi-skills': 'voice/又一限定音声/又一Yoyi·最"心动"的选择❤.wav',
    'mu-mu-skills': 'voice/沐霂限定音声/沐霖Queenie·让我们继续闪耀.wav',
    'li-an-skills': 'voice/梨安限定音声/梨安Lian·专属大厨的膝枕休憩☆.wav'
};

function getTimePeriodBackground() {
    const hour = new Date().getHours();
    const periodMap = [
        { start: 7, end: 11, name: '早晨', file: 'background/早晨.jpg' },
        { start: 11, end: 15, name: '上午', file: 'background/上午.jpg' },
        { start: 15, end: 19, name: '下午', file: 'background/下午.jpg' },
        { start: 19, end: 21, name: '傍晚', file: 'background/傍晚.jpg' },
        { start: 21, end: 24, name: '夜晚', file: 'background/深夜.jpg' },
        { start: 0, end: 5, name: '夜晚', file: 'background/深夜.jpg' }
    ];
    return periodMap.find(p => hour >= p.start && hour < p.end) || periodMap[1];
}

function setBackgroundWithFallback(url, fallbackUrl) {
    const bgLayer = document.querySelector('.background-layer');
    if (!bgLayer) return;
    const img = new Image();
    img.onload = () => {
        bgLayer.style.backgroundImage = `url('${url}')`;
    };
    img.onerror = () => {
        bgLayer.style.backgroundImage = `url('${fallbackUrl}')`;
    };
    img.src = url;
}

function updateTimeBackground() {
    const period = getTimePeriodBackground();
    setBackgroundWithFallback(period.file, 'images/四禧丸子_官方背景.jpg');
    const glassOverlay = document.querySelector('.glass-overlay');
    if (glassOverlay) {
        const classes = ['glass-morning', 'glass-noon', 'glass-afternoon', 'glass-evening', 'glass-night'];
        glassOverlay.classList.remove(...classes);
        if (period.name === '早晨') glassOverlay.classList.add('glass-morning');
        else if (period.name === '上午') glassOverlay.classList.add('glass-noon');
        else if (period.name === '下午') glassOverlay.classList.add('glass-afternoon');
        else if (period.name === '傍晚') glassOverlay.classList.add('glass-evening');
        else if (period.name === '夜晚') glassOverlay.classList.add('glass-night');
    }
}

// ==================== 语音播放 ====================

let currentAudio = null;

function playMemberVoice() {
    const activeSkillPanel = document.querySelector('.skill-bars-container.active');
    if (!activeSkillPanel) return;
    const panelId = activeSkillPanel.id;
    const audioSrc = memberVoiceMap[panelId];
    if (!audioSrc) return;
    try {
        if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
        const audio = new Audio(audioSrc);
        currentAudio = audio;
        audio.play().catch(e => console.warn('播放被阻止', e));
    } catch (e) { console.warn(e); }
}

// ==================== 成员头像点击 ====================

function initAvatarClick() {
    document.querySelectorAll('.member-avatar').forEach(avatar => {
        let clickCount = 0;
        const memberCard = avatar.closest('.member-card');
        const memberType = memberCard.dataset.member;
        const counterElement = memberCard.querySelector('.click-counter');
        avatar.addEventListener('click', function (e) {
            e.stopPropagation();
            clickCount++;
            memberCard.dataset.clickCount = clickCount;
            counterElement.textContent = `点击: ${clickCount}`;
            if (clickCount >= 4) {
                clickCount = 0;
                memberCard.dataset.clickCount = 0;
                counterElement.textContent = '点击: 0';
                let searchQuery = { bekki: '张怡', lian: '温晶婕', queenie: '万丽娜', yoyi: '袁雨桢' }[memberType] || '四禧丸子';
                window.open(`https://baike.baidu.com/item/${encodeURIComponent(searchQuery)}`, '_blank');
            }
        });
    });

    document.querySelectorAll('.member-card').forEach(card => {
        card.addEventListener('click', function (e) {
            if (!e.target.closest('.member-avatar')) {
                this.dataset.clickCount = '0';
                this.querySelector('.click-counter').textContent = '点击: 0';
            }
        });
    });
}

// ==================== 核心能力 Tab ====================

function initSkillsTab() {
    const tabButtons = document.querySelectorAll('.member-tab-button');
    const skillContainers = document.querySelectorAll('.skill-bars-container');
    tabButtons.forEach(btn => btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        skillContainers.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.target).classList.add('active');
    }));
}

// ==================== 技能名称隐藏文本 ====================

function initSkillNameClick() {
    document.querySelectorAll('.skill-name').forEach(span => {
        span.addEventListener('click', function (e) {
            playMemberVoice();
            const hidden = this.getAttribute('data-hidden');
            if (hidden) {
                if (this.textContent === this.getAttribute('data-visible')) {
                    this.textContent = hidden;
                } else {
                    this.textContent = this.getAttribute('data-visible');
                }
            }
            e.stopPropagation();
        });
    });
}

// ==================== 音乐作品 Tab ====================

window.showTab = function (tabName) {
    document.querySelectorAll('#work .content-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('#work .tab-button').forEach(b => b.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    if (event && event.target) event.target.classList.add('active');
};

// ==================== 天气系统 ====================

(function () {
    const SHANGHAI_COORDS = { lat: 31.2304, lon: 121.4737 };

    const weatherTypeMap = {
        0: { type: "sunny" }, 1: { type: "cloudy" }, 2: { type: "cloudy" }, 3: { type: "cloudy" },
        45: { type: "cloudy" }, 48: { type: "cloudy" },
        51: { type: "rain" }, 53: { type: "rain" }, 55: { type: "rain" },
        61: { type: "rain" }, 63: { type: "rain" }, 65: { type: "rain" },
        71: { type: "snow" }, 73: { type: "snow" }, 75: { type: "snow" },
        80: { type: "rain" }, 81: { type: "rain" }, 82: { type: "rain" },
        85: { type: "snow" }, 86: { type: "snow" },
        95: { type: "rain" }, 96: { type: "rain" }, 99: { type: "rain" }
    };

    let currentWeather = { type: "cloudy", temp: "--", wmoCode: null, weatherKey: "unknown" };

    function getWeatherInfo(wmoCode) {
        const info = weatherTypeMap[wmoCode];
        if (!info) return { type: "cloudy", weatherKey: "unknown" };
        return { type: info.type, weatherKey: info.type };
    }

    async function fetchShanghaiWeather() {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${SHANGHAI_COORDS.lat}&longitude=${SHANGHAI_COORDS.lon}&current_weather=true`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('天气API请求失败');
            const data = await response.json();
            const wmoCode = data.current_weather.weathercode;
            const temperature = Math.round(data.current_weather.temperature);
            const { type, weatherKey } = getWeatherInfo(wmoCode);
            currentWeather = { type, temp: temperature, wmoCode, weatherKey };
            return currentWeather;
        } catch (error) {
            console.warn('[天气] 获取失败', error);
            currentWeather = { type: "cloudy", temp: "--", wmoCode: null, weatherKey: "unknown" };
            return currentWeather;
        }
    }

    function applyWeatherEffect(type) {
        const effectDiv = document.getElementById('weatherEffect');
        if (!effectDiv) return;
        effectDiv.classList.remove('weather-sunny', 'weather-cloudy', 'weather-rain', 'weather-snow');
        if (type === 'sunny') effectDiv.classList.add('weather-sunny');
        else if (type === 'cloudy') effectDiv.classList.add('weather-cloudy');
        else if (type === 'rain') effectDiv.classList.add('weather-rain');
        else if (type === 'snow') effectDiv.classList.add('weather-snow');
    }

    function updateWeatherDisplayByLang() {
        const weatherTextSpan = document.getElementById('weatherText');
        if (!weatherTextSpan) return;
        const activeLangBtn = document.querySelector('.lang-btn.active');
        let lang = activeLangBtn ? activeLangBtn.getAttribute('data-lang') : 'zh';
        const translations = window._translations;
        if (!translations || !translations[lang]) lang = 'zh';
        const t = translations[lang].weather;
        let descText = t.unknown;
        if (currentWeather.weatherKey === 'sunny') descText = t.sunny;
        else if (currentWeather.weatherKey === 'cloudy') descText = t.cloudy;
        else if (currentWeather.weatherKey === 'rain') descText = t.rain;
        else if (currentWeather.weatherKey === 'snow') descText = t.snow;

        if (currentWeather.temp !== '--') {
            weatherTextSpan.innerHTML = `🌍 上海 · ${descText} · ${currentWeather.temp}°C`;
        } else {
            weatherTextSpan.innerHTML = `🌍 上海 · ${t.fetchFailed}`;
        }
        const iconSpan = document.querySelector('#weatherWidget .weather-icon');
        if (iconSpan) {
            if (currentWeather.weatherKey === 'sunny') iconSpan.innerHTML = '☀️';
            else if (currentWeather.weatherKey === 'cloudy') iconSpan.innerHTML = '☁️';
            else if (currentWeather.weatherKey === 'rain') iconSpan.innerHTML = '🌧️';
            else if (currentWeather.weatherKey === 'snow') iconSpan.innerHTML = '❄️';
            else iconSpan.innerHTML = '🌡️';
        }
    }

    window.refreshWeather = async function () {
        const widget = document.getElementById('weatherWidget');
        if (widget) widget.style.opacity = '0.6';
        await fetchShanghaiWeather();
        applyWeatherEffect(currentWeather.type);
        updateWeatherDisplayByLang();
        if (widget) widget.style.opacity = '1';
    };

    async function initWeather() {
        await fetchShanghaiWeather();
        applyWeatherEffect(currentWeather.type);
        updateWeatherDisplayByLang();
    }

    // 延迟初始化天气（等组件加载完）
    window._initWeather = initWeather;
    window._updateWeatherDisplayByLang = updateWeatherDisplayByLang;
})();

// ==================== 宇宙英雄数据 ====================

const heroes = [
    { name: "七海Nana7mi", file: "七海Nana7mi.jpg", uid: "434334701", desc: "VR大前辈 · 一头脆脆鲨" },
    { name: "安可anko_Official", file: "安可anko_Official.jpg", uid: "440738032", desc: "已休眠 · 最好的🍅🥚" },
    { name: "宣小纸不怕火", file: "宣小纸不怕火.jpg", uid: "3461582034045213", desc: "烈焰红唇 · 初代工伤" },
    { name: "小可学妹", file: "小可学妹.jpg", uid: "14387072", desc: "东北老妹 · 就爱这口" },
    { name: "明前奶绿", file: "明前奶绿.png", uid: "2132180406", desc: "懒狗一条 · 文静姐姐" },
    { name: "星瞳_Official", file: "星瞳_Official.jpg", uid: "401315430", desc: "虚环求带 · 大厂人脉" },
    { name: "泽音melody", file: "泽音melody.jpg", uid: "1203217682", desc: "错过青春期别错过更年期" },
    { name: "阿梓从小就很可爱", file: "阿梓从小就很可爱.jpg", uid: "7706705", desc: "这一拜 · 游戏回" },
    { name: "雫るる_Official", file: "雫るる_Official.jpg", uid: "387636363", desc: "可爱るる · 天选国V" },
    { name: "露米Lumi_Official", file: "露米Lumi_Official.jpg", uid: "2000609327", desc: "天籁之音 · 二代工伤" },
    { name: "栞栞Shiori", file: "栞栞Shiori.jpg", uid: "1609526545", desc: "海獭冲击 · GN硕士" },
    { name: "黎歌Neeko", file: "黎歌Neeko.jpg", uid: "671538942", desc: "榜一大姐 · 送上新衣" }
];

let heroIndex = 0;
let heroList = [];

function buildUniverseHeroes() {
    heroList = [...heroes];
    if (!heroList.length) return;

    const leftImg = document.querySelector('#cardLeft .card-bg-img');
    const rightImg = document.querySelector('#cardRight .card-bg-img');
    const centerAvatar = document.getElementById('centerAvatar');
    const centerName = document.getElementById('centerName');
    const centerDesc = document.getElementById('centerDesc');
    const leftCard = document.getElementById('cardLeft');
    const rightCard = document.getElementById('cardRight');
    const centerCard = document.getElementById('cardCenter');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const dotsContainer = document.getElementById('carouselDots');

    function getPrevIndex(idx) { return (idx - 1 + heroList.length) % heroList.length; }
    function getNextIndex(idx) { return (idx + 1) % heroList.length; }

    function updateCarousel() {
        const current = heroList[heroIndex];
        const prev = heroList[getPrevIndex(heroIndex)];
        const next = heroList[getNextIndex(heroIndex)];
        centerAvatar.src = `characters/${encodeURIComponent(current.file)}`;
        centerAvatar.alt = current.name;
        centerAvatar.onerror = function () { this.src = 'images/placeholder.jpg'; };
        centerName.textContent = current.name;
        centerDesc.textContent = current.desc;
        leftImg.src = `characters/${encodeURIComponent(prev.file)}`;
        leftImg.onerror = function () { this.src = 'images/placeholder.jpg'; };
        rightImg.src = `characters/${encodeURIComponent(next.file)}`;
        rightImg.onerror = function () { this.src = 'images/placeholder.jpg'; };
        renderDots();
    }

    function renderDots() {
        dotsContainer.innerHTML = '';
        heroList.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.className = 'dot' + (idx === heroIndex ? ' active' : '');
            dot.addEventListener('click', () => { heroIndex = idx; updateCarousel(); });
            dotsContainer.appendChild(dot);
        });
    }

    function prevHero() { heroIndex = getPrevIndex(heroIndex); updateCarousel(); }
    function nextHero() { heroIndex = getNextIndex(heroIndex); updateCarousel(); }

    prevBtn.onclick = prevHero;
    nextBtn.onclick = nextHero;
    leftCard.onclick = prevHero;
    rightCard.onclick = nextHero;
    centerCard.onclick = () => {
        const current = heroList[heroIndex];
        if (current && current.uid) window.open(`https://space.bilibili.com/${current.uid}`, '_blank');
    };

    heroIndex = 0;
    updateCarousel();
}

// ==================== 里程碑（年份 + 事件） ====================

function initMilestones() {
    const yearCoverMap = {
        "2022": "milestone/2022.png", "2023": "milestone/2023.jpg",
        "2024": "milestone/2024.png", "2025": "milestone/2025.jpg", "2026": "milestone/2026.jpg"
    };

    const eventsData = {
        "2022": [
            { date: "2022-01-16", title: "禧运楼开张营业", desc: "禧运楼正式开业", video: "BV1aS4y1f7Cg", img: "milestone/四禧丸子出道首播.jpg" },
            { date: "2022-03-25", title: "梨安超链接电波", desc: "明前奶绿加入禧运宇宙", video: "BV1AU4y1d7La", img: "milestone/超链接电台时间.jpg" },
            { date: "2022-03-27", title: "冰火春日宴", desc: "2022冰火春日宴", video: "BV1K44y1K7s1", img: "milestone/冰火春日宴.jpg" },
            { date: "2022-06-30", title: "恬豆首场全景3D生日会", desc: "恬豆首场全景3D生日会", video: "BV1Ua411W7tg", img: "milestone/恬豆生日会.jpg" },
            { date: "2022-10-29", title: "沐霂生日会", desc: "沐霂生日会千人舰队", video: "BV1ft4y1T7kn", img: "milestone/沐霂生日会.jpg" }
        ],
        "2023": [
            { date: "2023-01-14", title: "梨安舰长服生日会", desc: "梨安舰长服生日会", video: "BV1dA411d79M", img: "milestone/梨安舰长服.jpg" },
            { date: "2023-03-31", title: "又一生日会", desc: "又一生日会千人舰队", video: "BV1UM411K7yG", img: "milestone/又一生日会.jpg" },
            { date: "2023-11-16", title: "收藏集发售", desc: "收藏集发售", video: "864104517794267144", img: "milestone/花嫁收藏集.jpeg" }
        ],
        "2024": [
            { date: "2024-01-26", title: "春运联动", desc: "上海铁路公安处春运联动", video: "BV1ik4y1Z7vm", img: "milestone/平安春运，铁警护航.jpg" },
            { date: "2024-02-03", title: "首次线下演出", desc: "首次线下演出《星光练习曲》", video: "V1S7421P7aa", img: "milestone/星光练习曲.jpg" },
            { date: "2024-07-19", title: "以你之名", desc: "恬豆万人舰队生日会", video: "BV1Jb42177LY", img: "milestone/以你之名.jpg" }
        ],
        "2025": [
            { date: "2025-01-01", title: "加入VirtuaReal", desc: "加入VirtuaReal", video: "", img: "milestone/_VirtuaReal.jpg" },
            { date: "2025-04-25", title: "《尖叫浴场》", desc: "欢迎来到洗浴楼！", video: "BV1WuhRz9EFu", img: "milestone/尖叫浴场.jpg" },
            { date: "2025-05-02", title: "VirtuaReal Music Mixup", desc: "VirtuaReal Music Mixup", video: "BV1yAZVYhEgb", img: "milestone/VirtuaReal_2025_Music_Mixup.jpg" },
            { date: "2025-09-18", title: "全新收藏集", desc: "四禧丸子·溯梦幻境", video: "BV1HGpxzSEKL", img: "milestone/四禧丸子·溯梦幻境收藏集.jpg" },
            { date: "2025-12-23", title: "又一加冕虚拟最强音", desc: "又一《哈雪大冒险》", video: "BV1HWBMBWEvy", img: "milestone/虚拟最强音.jpg" }
        ],
        "2026": [
            { date: "2026-02-07", title: "菜王杯斗地主", desc: "沐霂是冠军", video: "BV1wGF4zFEGi", img: "milestone/勇闯决赛圈.jpg" },
            { date: "2026-03-04", title: "2026虚拟新春会", desc: "我们是 四禧丸子！", video: "BV14FPKzHEnT", img: "milestone/四禧新年颂.jpg" },
            { date: "2026-03-05", title: "UP！大侦探", desc: "《胡闹厨房》", video: "BV1ukPyzTEat", img: "milestone/胡闹厨房.jpg" },
            { date: "2026-04-24", title: "四禧丸子四周年纪念", desc: "露米工伤2.0", video: "BV1HaoEBYE8U", img: "milestone/四禧丸子四周年纪念回.jpg" }
        ]
    };

    const yearGrid = document.getElementById('yearGrid');
    const yearView = document.getElementById('yearView');
    const eventView = document.getElementById('eventView');
    const eventYearTitle = document.getElementById('eventYearTitle');
    const eventGrid = document.getElementById('eventGrid');

    function renderYears() {
        if (!yearGrid) return;
        yearGrid.innerHTML = '';
        for (let year in eventsData) {
            const count = eventsData[year].length;
            const card = document.createElement('div');
            card.className = 'year-card';
            const coverImg = yearCoverMap[year];
            if (coverImg) {
                card.style.backgroundImage = `url('${coverImg}')`;
                card.style.backgroundSize = 'cover';
                card.style.backgroundPosition = 'center';
            } else {
                card.style.background = 'linear-gradient(135deg, #d74177, #f39c12)';
            }
            card.innerHTML = `<div class="year-number">${year}</div><div class="year-count">✨ ${count} 个瞬间</div>`;
            card.addEventListener('click', () => showEvents(year));
            yearGrid.appendChild(card);
        }
    }

    function showEvents(year) {
        const events = eventsData[year];
        if (!events) return;
        eventYearTitle.innerText = `${year} 年 · 禧运大事记`;
        eventGrid.innerHTML = '';
        events.forEach(ev => {
            const card = document.createElement('div');
            card.className = 'event-card';
            if (ev.img) {
                card.style.backgroundImage = `url('${ev.img}')`;
                card.style.backgroundSize = 'cover';
                card.style.backgroundPosition = 'center';
            }
            const displayDate = ev.date.slice(5);
            card.innerHTML = `<div class="event-card-content"><div class="event-date">📅 ${displayDate}</div><div class="event-title">${ev.title}</div><div class="event-desc">${ev.desc}</div></div>`;
            card.addEventListener('click', () => {
                if (ev.video) openVideo(ev.video);
                else alert('该事件的视频暂未关联');
            });
            eventGrid.appendChild(card);
        });
        yearView.style.display = 'none';
        eventView.style.display = 'block';
    }

    window.backToYear = function () {
        yearView.style.display = 'block';
        eventView.style.display = 'none';
    };

    renderYears();
}

// ==================== 一级谜题验证 ====================

const correctAnswers = { ans1: "aytdd", ans2: "159", ans3: "大果村", ans4: "5" };

window.verifyAllAnswers = function () {
    const a1 = document.getElementById('ans1').value.trim().toLowerCase();
    const a2 = document.getElementById('ans2').value.trim();
    const a3 = document.getElementById('ans3').value.trim();
    const a4 = document.getElementById('ans4').value.trim();
    if (a1 === correctAnswers.ans1 && a2 === correctAnswers.ans2 && a3 === correctAnswers.ans3 && a4 === correctAnswers.ans4) {
        document.getElementById('errorMessage').style.display = 'none';
        document.getElementById('primaryQuiz').style.display = 'none';
        document.getElementById('bilibiliRooms').style.display = 'block';
        document.getElementById('secondLevelQuiz').style.display = 'block';
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
};

// ==================== 二级生日验证 ====================

let birthdayStatus = { tiandou: false, youyi: false, mumu: false, lian: false };
const birthdayMap = { tiandou: '0622', youyi: '0110', mumu: '1002', lian: '0315' };

const socialMap = {
    favorite_song: { weibo: { text: '微博@开朗小栗', url: 'https://weibo.com/u/7569110245' }, xhs: { text: '小红书@普通小栗', url: 'https://www.xiaohongshu.com/explore/普通小栗' } },
    height: { weibo: { text: '微博@小孩子少吃糖', url: 'https://weibo.com/u/5482136589' }, xhs: { text: '小红书@小孩子少吃糖', url: 'https://www.xiaohongshu.com/explore/小孩子少吃糖' } },
    favorite_food: { weibo: { text: '微博@不是你俊的俊', url: 'https://weibo.com/u/7440469872' }, xhs: { text: '小红书@不是你俊的俊', url: 'https://www.xiaohongshu.com/explore/不是你俊的俊' } },
    chicken_legs: { weibo: { text: '微博@士多啤梨挖掘机', url: 'https://weibo.com/u/8010499842' }, xhs: { text: '小红书@士多啤梨挖掘机', url: 'https://www.xiaohongshu.com/explore/士多啤梨挖掘机' } }
};

function normalizeBirthday(input) {
    const digits = input.replace(/\D/g, '');
    if (digits.length === 8) return digits.slice(4);
    if (digits.length === 4) return digits;
    if (digits.length === 3) return '0' + digits;
    return null;
}

window.verifyBirthday = function (member) {
    if (birthdayStatus[member]) { alert('该成员生日已验证过了'); return; }
    const inputId = 'bday' + member.charAt(0).toUpperCase() + member.slice(1);
    const input = document.getElementById(inputId).value.trim();
    const normalized = normalizeBirthday(input);
    const correct = birthdayMap[member];
    if (normalized === correct) {
        birthdayStatus[member] = true;
        document.getElementById(inputId).disabled = true;
        document.getElementById('btn' + member.charAt(0).toUpperCase() + member.slice(1)).disabled = true;
        if (birthdayStatus.tiandou && birthdayStatus.youyi && birthdayStatus.mumu && birthdayStatus.lian) {
            document.getElementById('oil-workers-block').style.display = 'block';
            let linksHtml = '';
            for (let key in socialMap) {
                linksHtml += `<li><a href="${socialMap[key].weibo.url}" target="_blank">${socialMap[key].weibo.text}</a></li>`;
                linksHtml += `<li><a href="${socialMap[key].xhs.url}" target="_blank">${socialMap[key].xhs.text}</a></li>`;
            }
            document.getElementById('social-links-list').innerHTML = linksHtml;
            document.getElementById('social-actions').style.display = 'block';
            document.getElementById('thirdLevelQuiz').style.display = 'block';
            document.getElementById('birthdayHint').innerText = '🎉 所有生日正确！石油工和社交媒体已解锁，继续挑战终极问题！';
        } else {
            document.getElementById('birthdayHint').innerText = `已验证 ${Object.values(birthdayStatus).filter(v => v).length}/4 个生日`;
        }
    } else {
        alert('❌ 生日不对，请重试');
    }
};

// ==================== 三级粉丝牌验证 ====================

window.verifyThirdLevel = function () {
    const fanTiandou = document.getElementById('fanTiandou').value.trim().replace(/\s+/g, '');
    const fanMumu = document.getElementById('fanMumu').value.trim().replace(/\s+/g, '');
    const fanYouyi = document.getElementById('fanYouyi').value.trim().replace(/\s+/g, '');
    const fanLian = document.getElementById('fanLian').value.trim().replace(/\s+/g, '');
    if (fanTiandou === '爱栗丝' && fanMumu === '汽水糖' && fanYouyi === '小雨点' && fanLian === '温度计') {
        document.getElementById('thirdError').style.display = 'none';
        document.getElementById('thirdLevelQuiz').style.display = 'none';
        document.getElementById('universeElders').style.display = 'block';
    } else {
        document.getElementById('thirdError').style.display = 'block';
    }
};

// ==================== 留言板 ====================

let currentFan = 'onlywan';
const fanColors = { tiandou: '#A7C9D3', yoyi: '#E3BA09', mumu: '#A1D29A', lian: '#E38691', onlywan: '#A50C12' };
let currentPage = 1;
const pageSize = 50;
let totalMessages = 0;

function setFanTheme(fanId) {
    currentFan = fanId;
    document.querySelectorAll('.fan-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-fan') === fanId) btn.classList.add('active');
    });
    const color = fanColors[fanId];
    const newGradient = `linear-gradient(45deg, ${color}, #ffaa66, ${color}, #ffaa66)`;
    let styleTag = document.getElementById('dynamic-fan-style');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'dynamic-fan-style';
        document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = `.guestbook::before { background: ${newGradient} !important; background-size: 300% 300% !important; }`;
    const addBtn = document.querySelector('.message-input-area button');
    if (addBtn) addBtn.style.backgroundColor = color;
}
window.setFanTheme = setFanTheme;

function loadMessages() {
    let msgs = localStorage.getItem('xiyunFanMessages');
    if (msgs) return JSON.parse(msgs);
    return [
        { name: '丸子老粉', text: '祝四禧丸子越来越好！日月同辉，禧运长流。', fan: 'tiandou' },
        { name: '酥酥又铁粉', text: '又一唱歌太好听了！哈吉米～', fan: 'yoyi' },
        { name: '小沐标001', text: '沐霂队长身高167！拳力出击！', fan: 'mumu' },
        { name: '向心梨', text: '梨安好温柔，胃袋力量无穷！', fan: 'lian' }
    ];
}

function saveMessages(messages) { localStorage.setItem('xiyunFanMessages', JSON.stringify(messages)); }

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function (m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function renderMessages() {
    const messages = loadMessages();
    totalMessages = messages.length;
    const totalPages = Math.ceil(totalMessages / pageSize);
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    const pageMessages = [...messages].reverse().slice(start, end);
    const container = document.getElementById('messageList');
    if (!container) return;
    container.innerHTML = '';
    pageMessages.forEach((msg, idx) => {
        const color = fanColors[msg.fan] || fanColors.tiandou;
        const msgDiv = document.createElement('div');
        msgDiv.className = 'message-item';
        msgDiv.style.borderLeftColor = color;
        const textSpan = document.createElement('div');
        textSpan.className = 'message-text';
        const strong = document.createElement('strong');
        strong.textContent = escapeHtml(msg.name);
        strong.style.color = color;
        const textNode = document.createElement('span');
        textNode.textContent = ` ： ${escapeHtml(msg.text)}`;
        textSpan.appendChild(strong);
        textSpan.appendChild(textNode);
        const delBtn = document.createElement('button');
        delBtn.innerHTML = '🗑️';
        delBtn.className = 'delete-msg';
        delBtn.title = '删除留言';
        const originalIndex = messages.length - 1 - (start + idx);
        delBtn.onclick = (function (idx) { return function () { deleteMessage(idx); }; })(originalIndex);
        msgDiv.appendChild(textSpan);
        msgDiv.appendChild(delBtn);
        container.appendChild(msgDiv);
    });
    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    const container = document.querySelector('.pagination');
    if (!container) return;
    container.innerHTML = `<button ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">上一页</button><span class="page-info">第 ${currentPage} / ${totalPages} 页 (共 ${totalMessages} 条)</span><button ${currentPage === totalPages || totalPages === 0 ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">下一页</button>`;
}

window.changePage = function (page) {
    if (page < 1) return;
    const totalPages = Math.ceil(loadMessages().length / pageSize);
    if (page > totalPages) return;
    currentPage = page;
    renderMessages();
};

function deleteMessage(index) {
    let messages = loadMessages();
    if (index >= 0 && index < messages.length) {
        messages.splice(index, 1);
        saveMessages(messages);
        const newTotalPages = Math.ceil(messages.length / pageSize);
        if (currentPage > newTotalPages && newTotalPages > 0) currentPage = newTotalPages;
        else if (messages.length === 0) currentPage = 1;
        renderMessages();
    }
}

window.addMessage = function () {
    currentPage = 1;
    const nameInput = document.getElementById('visitorName');
    const msgInput = document.getElementById('visitorMsg');
    let name = nameInput.value.trim();
    let text = msgInput.value.trim();
    if (!text) { alert('请留下你想说的话~'); return; }
    if (!name) name = "禧运客官";
    if (text.length > 200) { alert('寄语请控制在200字以内'); return; }
    const newMsg = { name, text, fan: currentFan };
    let messages = loadMessages();
    messages.push(newMsg);
    saveMessages(messages);
    nameInput.value = '';
    msgInput.value = '';
    renderMessages();
};

// ==================== HD画册 + 服饰展示 ====================

function renderHDFolders() {
    const container = document.getElementById('hd-folders');
    if (!container) return;
    const folders = Object.keys(window.hdData || {});
    if (folders.length === 0) {
        container.innerHTML = '<p style="grid-column:1/-1; text-align:center;">暂无文件夹</p>';
        return;
    }
    let html = '';
    folders.forEach(folder => {
        html += `<div class="game-card" onclick="showHDFolder('${folder}')"><div class="game-icon" style="background:#eee; display:flex; align-items:center; justify-content:center; font-size:2rem;">📁</div><div class="game-name">${folder}</div></div>`;
    });
    container.innerHTML = html;
}

window.showHDFolder = function (folderName) {
    const files = window.hdData[folderName];
    if (!files || files.length === 0) { alert('该文件夹中没有图片'); return; }
    document.getElementById('hd-current-folder').textContent = folderName;
    const imagesContainer = document.getElementById('hd-images');
    let html = '';
    files.forEach(file => {
        const ext = file.split('.').pop().toLowerCase();
        const isImage = ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext);
        const path = `HD/${folderName}/${file}`;
        if (isImage) {
            html += `<div class="game-card" onclick="window.open('${path}', '_blank')"><img class="game-icon" src="${path}" alt="${file}" onerror="this.src='images/placeholder.jpg';"><div class="game-name">${file}</div></div>`;
        } else {
            html += `<div class="game-card" onclick="window.open('${path}', '_blank')"><div class="game-icon" style="background:#eee; display:flex; align-items:center; justify-content:center;">📄</div><div class="game-name">${file}</div></div>`;
        }
    });
    imagesContainer.innerHTML = html;
    document.getElementById('hd-root').style.display = 'none';
    document.getElementById('hd-folder-view').style.display = 'block';
};

window.showHDRoot = function () {
    document.getElementById('hd-root').style.display = 'block';
    document.getElementById('hd-folder-view').style.display = 'none';
    document.getElementById('hd-images').innerHTML = '';
};

function renderClothesFolders() {
    const container = document.getElementById('clothes-folders');
    if (!container) return;
    const folders = Object.keys(window.clothesData || {});
    if (folders.length === 0) {
        container.innerHTML = '<p style="grid-column:1/-1; text-align:center;">暂无文件夹</p>';
        return;
    }
    let html = '';
    folders.forEach(folder => {
        html += `<div class="game-card" onclick="showClothesFolder('${folder}')"><div class="game-icon" style="background:#eee; display:flex; align-items:center; justify-content:center; font-size:2rem;">📁</div><div class="game-name">${folder}</div></div>`;
    });
    container.innerHTML = html;
}

let accordionResizeHandler = null;

function setAverageWidths(container) {
    const items = Array.from(container.children);
    if (!items.length) return;
    const rect = container.getBoundingClientRect();
    const gap = parseFloat(getComputedStyle(container).gap) || 8;
    const totalGap = gap * (items.length - 1);
    let avgWidth = (rect.width - totalGap) / items.length;
    avgWidth = Math.max(avgWidth, 90);
    items.forEach(item => { item.style.width = avgWidth + 'px'; });
}

function unifyHeights(container) {
    const items = Array.from(container.children);
    if (!items.length) return;
    let maxHeight = 0;
    items.forEach(item => { item.style.height = 'auto'; });
    items.forEach(item => {
        const h = item.getBoundingClientRect().height;
        if (h > maxHeight) maxHeight = h;
    });
    if (maxHeight > 0) items.forEach(item => { item.style.height = maxHeight + 'px'; });
}

function setHoverWidths(container, focusedItem) {
    const items = Array.from(container.children);
    const rect = container.getBoundingClientRect();
    const gap = parseFloat(getComputedStyle(container).gap) || 8;
    const enlargeWidth = Math.min(420, rect.width * 0.55);
    const otherCount = items.length - 1;
    const remaining = rect.width - enlargeWidth - (gap * (items.length - 1));
    let otherWidth = remaining / otherCount;
    if (otherWidth < 70) { setAverageWidths(container); return; }
    items.forEach(item => {
        item.style.width = (item === focusedItem) ? enlargeWidth + 'px' : otherWidth + 'px';
    });
}

function bindAccordionEvents(container) {
    let leaveTimer = null;
    const onLeave = () => { if (leaveTimer) clearTimeout(leaveTimer); leaveTimer = setTimeout(() => setAverageWidths(container), 20); };
    container.addEventListener('mouseleave', onLeave);
    Array.from(container.children).forEach(item => {
        const onEnter = () => { if (leaveTimer) clearTimeout(leaveTimer); setHoverWidths(container, item); };
        item.addEventListener('mouseenter', onEnter);
        item._enterHandler = onEnter;
    });
    container._leaveHandler = onLeave;
}

function renderClothesAccordion(folderName, files) {
    const wrapper = document.getElementById('clothes-accordion-wrapper');
    if (!wrapper) return;
    wrapper.innerHTML = '';
    if (!files || files.length === 0) { wrapper.innerHTML = '<p style="padding:2rem;text-align:center;">暂无服饰图片</p>'; return; }
    const accordionDiv = document.createElement('div');
    accordionDiv.className = 'clothes-accordion';
    accordionDiv.id = 'dynamic-accordion';
    const imgPromises = [];
    files.forEach(file => {
        const ext = file.split('.').pop().toLowerCase();
        const isImage = ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext);
        const imgPath = `clothes/${folderName}/${file}`;
        const item = document.createElement('div');
        item.className = 'accordion-item';
        if (isImage) {
            const img = document.createElement('img');
            img.src = imgPath;
            img.alt = file;
            const loadPromise = new Promise((resolve) => { img.onload = () => resolve(img); img.onerror = () => resolve(null); });
            imgPromises.push(loadPromise);
            item.appendChild(img);
        } else {
            const fallback = document.createElement('div');
            fallback.style.width = '100%';
            fallback.style.background = '#eee';
            fallback.style.display = 'flex';
            fallback.style.alignItems = 'center';
            fallback.style.justifyContent = 'center';
            fallback.innerText = '📄';
            fallback.style.minHeight = '150px';
            item.appendChild(fallback);
        }
        const label = document.createElement('div');
        label.className = 'img-label';
        label.innerText = file;
        item.appendChild(label);
        item.addEventListener('click', (e) => { e.stopPropagation(); window.open(imgPath, '_blank'); });
        accordionDiv.appendChild(item);
    });
    wrapper.appendChild(accordionDiv);
    setAverageWidths(accordionDiv);
    Promise.all(imgPromises).then(() => {
        setAverageWidths(accordionDiv);
        unifyHeights(accordionDiv);
        bindAccordionEvents(accordionDiv);
    });
}

function destroyAccordionEvents() {
    const oldAcc = document.getElementById('dynamic-accordion');
    if (oldAcc) {
        if (oldAcc._leaveHandler) oldAcc.removeEventListener('mouseleave', oldAcc._leaveHandler);
        Array.from(oldAcc.children).forEach(child => { if (child._enterHandler) child.removeEventListener('mouseenter', child._enterHandler); });
    }
    if (accordionResizeHandler) { window.removeEventListener('resize', accordionResizeHandler); accordionResizeHandler = null; }
}

window.showClothesFolder = function (folderName) {
    const files = window.clothesData && window.clothesData[folderName];
    if (!files || files.length === 0) { alert('该系列暂无服饰图片'); return; }
    document.getElementById('clothes-current-folder').innerText = folderName;
    document.getElementById('clothes-root').style.display = 'none';
    document.getElementById('clothes-folder-view').style.display = 'block';
    destroyAccordionEvents();
    renderClothesAccordion(folderName, files);
};

window.showClothesRoot = function () {
    document.getElementById('clothes-root').style.display = 'block';
    document.getElementById('clothes-folder-view').style.display = 'none';
    destroyAccordionEvents();
    const wrapper = document.getElementById('clothes-accordion-wrapper');
    if (wrapper) wrapper.innerHTML = '';
};

// ==================== 视频弹窗关闭 ====================

function initModal() {
    const modal = document.getElementById('videoModal');
    const closeBtn = document.querySelector('.close-video');
    if (closeBtn) {
        closeBtn.onclick = () => { modal.style.display = 'none'; document.getElementById('videoFrame').src = ''; };
    }
    window.onclick = (e) => { if (e.target === modal) { modal.style.display = 'none'; document.getElementById('videoFrame').src = ''; } };
}

// ==================== 主初始化 ====================

function initAll() {
    console.log('[Init] 所有组件已加载，开始初始化...');

    initProgressBar();
    initSmoothScroll();
    initAvatarClick();
    initSkillsTab();
    initSkillNameClick();
    initMilestones();
    buildUniverseHeroes();
    renderHDFolders();
    renderClothesFolders();
    initModal();

    // 初始化背景
    updateTimeBackground();
    setInterval(updateTimeBackground, 30 * 60 * 1000);

    // 初始化天气
    if (window._initWeather) window._initWeather();

    // 初始化留言板
    if (document.getElementById('flowGuestbook')) {
        setFanTheme('onlywan');
        renderMessages();
    }

    // 绑定语言按钮事件
    if (window._bindLanguageButtons) window._bindLanguageButtons();

    // 语言初始化（如果有 translations 对象）
    if (window._translations) {
        const savedLang = localStorage.getItem('preferredLang');
        if (savedLang && window._translations[savedLang]) applyLanguage(savedLang);
        else applyLanguage('zh');
    }
}

// 监听组件加载完成事件
window.addEventListener('componentsLoaded', initAll);

// 备用：如果组件加载很快，DOMContentLoaded 时组件可能已就绪
window.addEventListener('DOMContentLoaded', function () {
    // 延迟一小段时间再尝试初始化（给 loader 时间完成）
    setTimeout(() => {
        if (document.getElementById('comp-nav') && document.getElementById('comp-nav').innerHTML) {
            initAll();
        }
    }, 500);
});
