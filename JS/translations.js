/**
 * 多语言翻译模块
 * 包含中/英/日/韩四种语言
 */
window._translations = {
    zh: {
        weather: { sunny: "晴", cloudy: "阴", rain: "雨", snow: "雪", unknown: "未知", fetchFailed: "无法获取天气" },
        navAbout: "成员介绍", navSkills: "核心能力", navPortfolio: "入坑必刷",
        navWork: "音乐作品", navOthers: "荣誉里程碑", navGames: "游戏区",
        navMerch: "周边区", navHd: "HD画册", navClothes: "服饰展示",
        navUniverse: "宇宙英雄", navAnzi: "秩序丶安", navContact: "社交平台",
        heroName: "四禧丸子", heroMotto: "老字号新传承，国风虚拟偶像",
        heroIntro: "四禧丸子是由四位虚拟偶像组成的国风虚拟偶像组合，恬豆、又一、沐霂、梨安四位成员传承百年老字号「禧运楼」，以Bilibili为主阵地，用音乐和直播传递快乐",
        heroBtn: "关注我们",
        sectionAbout: "✨ 成员介绍", sectionSkills: "⚡ 核心能力", sectionPortfolio: "🎬 入坑必刷",
        sectionWork: "🎵 音乐作品", sectionOthers: "🏆 荣誉里程碑", sectionGames: "🎮 游戏区",
        sectionMerch: "🖱️鼠标指针@Dream41", sectionHd: "📷 HD 画册", sectionClothes: "👗 服饰展示",
        sectionUniverse: "🌌 禧运宇宙英雄", sectionContact: "📱 社交平台 & 禧运谜题",
        memberNames: ["恬豆 Bekki", "又一 Yoyi", "沐霂 Queenie", "梨安 Lian"],
        memberRoles: ["禧运楼老板娘兼首席糕点师", "禧运楼舞台总管", "禧运楼掌柜兼队长", "禧运楼看板娘"],
        memberBdays: ["6月14日", "1月28日", "10月17日", "12月3日"],
        memberFans: ["恬豆包", "酥酥又", "小沐标", "向心梨"],
        memberColors: ["#A7C9D3", "#E3BA09", "#A1D29A", "#E38691"],
        memberSpecials: ["料理、唱歌", "唱歌(哈吉米)", "宅舞", "舞蹈、乒乓球"],
        memberDesc: ["咦？这里有颗豆豆好像快要发芽了。", "世界上又一美女诞生！（ '▿ ' ）", "来和我一起在雨中肆意奔跑吧！", "温柔的\"高智商\"美女。（店小二把引号去掉！！！）"],
        memberPersonality: ["用可爱和元气化解一切难题的神器团宠。反射弧很长，做事从不着急。贤惠能干的小厨娘。", "爱吐槽的古灵精怪小恶魔，但种种行为也经常被别人吐槽。总是沉浸在自己的世界里。", "沉着冷静的队长，是团内的拍板人。有主见，有时也被别人说是个傲娇。", "外表性感内心细腻，有明确的目标和信念。一直在别人看不到的地方默默认真努力，但是生活中是个大迷糊。"],
        memberExtra: ["✨ 恬豆因为某五字歌曲被唠了两辈子", "✨ 又别是大果村村花，和又爸又妈一样神", "✨ 沐霂的身高据(自己)说是167", "✨ 梨安有一次饿哭了，因为只能吃五个手枪腿"],
        skillNames: ["唱歌", "跳舞", "游戏", "杂谈", "做饭", "运动"],
        portfolioTitles: ["七夕特别直播", "端午特别直播", "运动主题", "二周年", "儿童节新衣", "复播3D", "BW神人事件", "智斗巅峰", "又一成名作", "梨安代表作", "恬豆包杰作", "123412", "哭泣的驴，冰冷的石头", "是多屁梨哇警觉", "月之女神陈恬豆", "禧运楼里流氓多"],
        portfolioDates: ["3D团播 2022.8.4", "2023.6.25", "2023.11.10", "2024.5.17", "2024.6.1", "2025.4.18", "2025.7.12", "2025.11.28", "哈吉米啊", "没噗噗啊", "发面团啊", "11,233", "你也一定在哭吧", "这张椅子太坏了", "OK豆跃马", "牛虻头子是沐霂"],
        groupSongTitles: ["《耀》", "《浅梦》", "《相思图》", "《四喜东家》", "《PLAYING_WITH_FIRE》", "《星光练习曲》", "《大四喜》", "《念我》", "新衣歌舞", "《免我蹉跎苦》", "《I'll_Be_Yours》", "《凑热闹》", "《四禧新年颂》"],
        groupSongDates: ["2022-02-15", "2022-03-31", "2022-09-11", "2023-01-22", "2023-04-29", "2024-02-02", "2024-02-25", "2024-05-18", "2024-05-21", "2025-01-26", "2025-08-24", "2026-02-08", "2026-03-04"],
        personalSongs: { tiandou: ["ChuLuBaby", "心动的节奏", "甜蜜冠冕", "日落海岸线"], lian: ["危险界限", "恋爱单日券", "暗里生花"], mumu: ["这一次", "下一站旅程", "相伴花海", "唯属你我"], yoyi: ["Chase the moon", "月相的监守自盗", "江湖浅影"] },
        gameNames: ["小豆剪刘海", "小梨爱做饭", "小沐要长高", "小又致富经", "四区姐妹", "猪猪出栏争霸赛", "禧运连连看", "禧运拼豆"],
        gameSubnames: ["我陈恬豆聪明绝顶", "测测你是不是又一是P", "我牛沐霂顶天立地", "一起加入酥(乞)又(丐)邦吧", "", "", "", ""],
        gameDescs: ["✨ 小豆的刘海可真厉害~", "🍐 小梨大厨上任咯~", "🐮 小沐再也不想看到身高笑话了~", "🐒 看小又如何靠捡纸壳子致富~", "", "", "", ""],
        gameLabels: ["#满30-12 #会当凌绝顶", "#禧运楼特供 #盲盒料理🐷🍐", "#167！！！ #👊👊👊👊👊", "#邦邦邦 #来点米吧", "", "", "", ""],
        fanworkNames: ["禧运小剧场", "禧运楼大饭堂", "3D二创", "CP手书", "丸和贵物", "烟店的监守自盗", "虚环英雄传", "爱又阵线联盟", "平行宇宙", "胃袋"],
        merchNames: ["恬豆 · 发面之力", "又一 · 哈吉米", "沐霂 · 159守护", "梨安 · 胃袋力量"],
        merchDescs: ["发面栗子 & 发际线之力", "大果村风格 / 小恶魔尾巴", "身高能量 / 拳力出击", "手枪腿 / 干饭魂"],
        hdTitle: "📷 HD 画册", clothesTitle: "👗 服饰展示 · 手风琴画廊",
        universeHeroDescs: ["VR大前辈 · 一头脆脆鲨", "已休眠 · 最好的🍅🥚", "烈焰红唇 · 初代工伤", "东北老妹 · 就爱这口", "懒狗一条 · 文静姐姐", "虚环求带 · 大厂人脉", "错过青春期别错过更年期", "这一拜 · 游戏回", "可爱るる · 天选国V", "天籁之音 · 二代工伤"],
        primaryQuizTitle: "禧运楼秘密需要全部答对以下四个问题才能解锁：",
        ans1Label: "恬豆最喜欢听什么歌？", ans1Placeholder: "例如 zmyyq",
        ans2Label: "沐霂身高多少？", ans2Placeholder: "标准答案167",
        ans3Label: "又爸又妈在哪认识的又一？", ans3Placeholder: "湘北雨姐最带派",
        ans4Label: "梨安几个手枪腿吃不饱？", ans4Placeholder: "大胃袋这一块",
        primarySubmit: "全部验证", errorMsg: "答案错误，请重新输入",
        dlc1Title: "🎥 恭喜解锁！点击进入DLC1", dlc2Title: "🎂 输入成员生日，解锁DLC2",
        dlc3Title: "🏷️ 终极问题：输入每位成员的粉丝牌名字解锁DLC3",
        fanPlaceholder: "粉丝牌名字", submitFan: "提交验证",
        birthdayPlaceholder: "例如 0614", verifyBtn: "验证",
        oilWorkersTitle: "石油工", socialLinksTitle: "社交媒体账号 (点击跳转)",
        thirdError: "答案错误，请重新输入",
        universeEldersTitle: "🧓 禧运宇宙老头们 (点击头像跳转微博)",
        elderNames: ["🦀 螃蟹老头 · 林思意", "🍲 酸汤老头 · 赵粤", "🐉 奶龙老头 · 孙芮", "🍳 锅 · 刘增艳", "🍍 菠萝 · 姜杉", "🐱 猫咪 · 颜沁", "🎤 年糕老头 · 易嘉爱", "🐻 小猪熊· 佳佳子", "🚥 红绿灯 · 黄婷婷", "🧛‍♀️ · 那位大人"],
        elderDescs: ["字节不给的，我给你", "一饭之恩", "初代目父母爱情", "AD钙奶UPUPUP", "我们仨过好日子比啥都重要", "我们仨过好日子比啥都重要", "1+2=6", "一麦克风开启禧运宇宙", "悄悄的今晚相遇这里", "若能化身成人拥抱你"],
        more: "更多", back: "← 返回上级", download: "下载 .zip",
        footer: "四禧丸子（SIXIWANZI）官方介绍站 | 资料来源：萌娘百科 | Copyright © 2025 SIXIWANZI All Rights Reserved"
    },
    en: {
        weather: { sunny: "Sunny", cloudy: "Cloudy", rain: "Rain", snow: "Snow", unknown: "Unknown", fetchFailed: "Weather unavailable" },
        navAbout: "Members", navSkills: "Core Skills", navPortfolio: "Must Watch",
        navWork: "Music", navOthers: "Milestones", navGames: "Games",
        navMerch: "Merch", navHd: "HD Gallery", navClothes: "Costumes",
        navUniverse: "Universe Heroes", navAnzi: "Anzi", navContact: "Social",
        heroName: "Sixi Wanzi", heroMotto: "Time-honored heritage, Chinese-style virtual idols",
        heroIntro: "Sixi Wanzi is a Chinese-style virtual idol group consisting of Bekki, Yoyi, Queenie, and Lian. They inherit the century-old brand 'Xiyun Lou' and spread joy through music and live streaming on Bilibili.",
        heroBtn: "Follow Us",
        sectionAbout: "✨ Members", sectionSkills: "⚡ Core Skills", sectionPortfolio: "🎬 Must Watch",
        sectionWork: "🎵 Music", sectionOthers: "🏆 Milestones", sectionGames: "🎮 Games",
        sectionMerch: "🖱️ Mouse Pointers @Dream41", sectionHd: "📷 HD Gallery", sectionClothes: "👗 Costume Showcase",
        sectionUniverse: "🌌 Universe Heroes", sectionContact: "📱 Social & Riddles",
        memberNames: ["Bekki", "Yoyi", "Queenie", "Lian"],
        memberRoles: ["Owner & Head Pastry Chef", "Stage Manager", "Manager & Captain", "Spokesperson"],
        memberBdays: ["Jun 14", "Jan 28", "Oct 17", "Dec 3"],
        memberFans: ["Bekki Bun", "Crispy Yoyi", "Mumu Mark", "Lian Heart"],
        memberColors: ["#A7C9D3", "#E3BA09", "#A1D29A", "#E38691"],
        memberSpecials: ["Cooking, Singing", "Singing (Hajimi)", "Dancing", "Dance, Table Tennis"],
        memberDesc: ["Huh? There's a bean sprouting.", "Another beautiful girl in the world was born!", "Come and run wildly in the rain with me!", "Gentle 'high IQ' beauty."],
        memberPersonality: ["Cute and energetic mascot. Long reflex arc, never in a hurry. Capable little chef.", "Sarcastic little devil, but often gets teased herself. Lives in her own world.", "Calm and decisive leader. Opinionated, sometimes called tsundere.", "Sensual exterior with delicate heart. Hardworking but absent-minded in daily life."],
        memberExtra: ["Bekki got teased for a certain five-word song for two lifetimes", "Yoyi is the village flower of Daguo Village", "Mumu's height (according to herself) is 167 cm", "Lian cried once because she could only eat five chicken legs"],
        skillNames: ["Singing", "Dancing", "Gaming", "Chatting", "Cooking", "Sports"],
        portfolioTitles: ["Qixi Special Live", "Dragon Boat Festival Live", "Sports Theme", "2nd Anniversary", "Children's Day New Outfit", "Return 3D Live", "BW Chaotic Event", "Peak Battle of Wits", "Yoyi's Masterpiece", "Lian's Masterpiece", "Bekki's Masterpiece", "123412", "Crying Donkey, Cold Stone", "It's Duopili Alert", "Moon Goddess Chen Tiandou", "A lot of hooligans in Xiyun Lou"],
        portfolioDates: ["3D Group Live 2022.8.4", "2023.6.25", "2023.11.10", "2024.5.17", "2024.6.1", "2025.4.18", "2025.7.12", "2025.11.28", "Hajimi ah", "No Poo Poo", "Dough ah", "11,233", "You must be crying too", "This chair is so bad", "OK Bean Jump Horse", "Mumu is the hooligan leader"],
        groupSongTitles: ["Yao", "Shallow Dream", "Yearning Picture", "Four Happiness Owners", "PLAYING WITH FIRE", "Starlight Etude", "Big Four Happiness", "Miss Me", "New Outfit Dance", "Save Me from Suffering", "I'll Be Yours", "Hustle and Bustle", "Sixi New Year Song"],
        groupSongDates: ["2022-02-15", "2022-03-31", "2022-09-11", "2023-01-22", "2023-04-29", "2024-02-02", "2024-02-25", "2024-05-18", "2024-05-21", "2025-01-26", "2025-08-24", "2026-02-08", "2026-03-04"],
        personalSongs: { tiandou: ["ChuLuBaby", "Rhythm of Heartbeat", "Sweet Crown", "Sunset Coastline"], lian: ["Dangerous Boundary", "Love One-Day Ticket", "Flowers in Dark"], mumu: ["This Time", "Next Journey", "Flower Sea Together", "Only You and Me"], yoyi: ["Chase the Moon", "Theft of Moon Phase", "Light Shadow in Jianghu"] },
        gameNames: ["Bean's Bangs", "Lian Loves Cooking", "Mumu Wants to Grow", "Yoyi's Fortune", "Four Sisters", "Piglet Race", "Xiyun Match", "Xiyun Puzzle"],
        gameSubnames: ["I'm Chen Tiandou, smart and bald", "Test if you are a P", "I'm Mumu, standing tall", "Join the beggar gang", "", "", "", ""],
        gameDescs: ["✨ Bean's bangs are amazing~", "🍐 Chef Lian is here~", "🐮 Mumu never wants to hear height jokes again~", "🐒 Watch Yoyi get rich by picking up cardboard~", "", "", "", ""],
        gameLabels: ["#30-12 #Climb to the top", "#Xiyun special #Blind box 🐷🍐", "#167!!! #👊👊👊", "#Bang bang bang #Send some rice", "", "", "", ""],
        fanworkNames: ["Xiyun Theater", "Xiyun Canteen", "3D Fan Creation", "CP Art", "Wanhe Guiwu", "Yandian's theft", "Xuhuan Heroes", "Love Yoyi Front Alliance", "Parallel Universe", "Stomach"],
        merchNames: ["Bekki · Power of Dough", "Yoyi · Hachimi", "Mumu · 159 Guardian", "Lian · Stomach Power"],
        merchDescs: ["Dough chestnut & hairline power", "Daguo village style / little devil tail", "Height energy / fist power", "Chicken leg / rice soul"],
        hdTitle: "📷 HD Gallery", clothesTitle: "👗 Costume Showcase · Accordion Gallery",
        universeHeroDescs: ["VR senior · A crispy shark", "Dormant · Best 🍅🥚", "Flaming lips · First injury", "Northeast sis · Just love this", "Lazy dog · Wenjing sis", "Xuhuan help · Big factory connections", "Don't miss menopause if you miss puberty", "This bow · game play", "Cute ruru · Chosen national V", "Heavenly voice · second generation injury"],
        primaryQuizTitle: "Answer all four questions correctly to unlock Xiyun's secrets:",
        ans1Label: "What song does Bekki like most?", ans1Placeholder: "e.g., zmyyq",
        ans2Label: "What is Mumu's height?", ans2Placeholder: "Standard answer 167",
        ans3Label: "Where did Yoyi's parents find Yoyi?", ans3Placeholder: "Xiangbei Yujie",
        ans4Label: "How many chicken legs can't fill Lian up?", ans4Placeholder: "Big stomach",
        primarySubmit: "Verify All", errorMsg: "Wrong answer, please try again",
        dlc1Title: "🎥 Congratulations! Click to enter DLC1", dlc2Title: "🎂 Enter member birthdays to unlock DLC2",
        dlc3Title: "🏷️ Enter each member's fan badge name to unlock DLC3",
        fanPlaceholder: "Fan badge name", submitFan: "Submit",
        birthdayPlaceholder: "e.g., 0614", verifyBtn: "Verify",
        oilWorkersTitle: "Oil Workers", socialLinksTitle: "Social Media Accounts",
        thirdError: "Wrong answer, please try again",
        universeEldersTitle: "🧓 Xiyun Universe Elders",
        elderNames: ["🦀 Crab Elder · Lin Siyi", "🍲 Sour Soup Elder · Zhao Yue", "🐉 Milk Dragon Elder · Sun Rui", "🍳 Pot · Liu Zengyan", "🍍 Pineapple · Jiang Shan", "🐱 Cat · Yan Qin", "🎤 Rice Cake Elder · Yi Jia'ai", "🐻 Little Bear · Jia Jiazi", "🚥 Traffic Light · Huang Tingting", "🧛‍♀️ · That Lord"],
        elderDescs: ["What Byte doesn't give, I'll give", "A meal's grace", "First generation parents' love", "AD Milk UPUPUP", "We three live well", "We three live well", "1+2=6", "One microphone opens the Xiyun universe", "Quietly meet here tonight", "If I could turn into a human and hug you"],
        more: "More", back: "← Back", download: "Download .zip",
        footer: "Sixi Wanzi Official Fan Site | Source: Moegirl | Copyright © 2025 Sixi Wanzi All Rights Reserved"
    },
    ja: {
        weather: { sunny: "晴れ", cloudy: "曇り", rain: "雨", snow: "雪", unknown: "不明", fetchFailed: "天気情報なし" },
        navAbout: "メンバー紹介", navSkills: "コアスキル", navPortfolio: "おすすめ動画",
        navWork: "音楽作品", navOthers: "功績", navGames: "ゲーム",
        navMerch: "グッズ", navHd: "HDギャラリー", navClothes: "衣装",
        navUniverse: "ユニバースヒーロー", navAnzi: "秩序丶安", navContact: "SNS",
        heroName: "四禧丸子（スーシーワンズ）", heroMotto: "老舗の新たな継承、中華風バーチャルアイドル",
        heroIntro: "四禧丸子は、恬豆、又一、沐霂、梨安の4人からなる中華風バーチャルアイドルグループです。",
        heroBtn: "フォローする",
        sectionAbout: "✨ メンバー紹介", sectionSkills: "⚡ コアスキル", sectionPortfolio: "🎬 おすすめ動画",
        sectionWork: "🎵 音楽作品", sectionOthers: "🏆 功績", sectionGames: "🎮 ゲーム",
        sectionMerch: "🖱️ マウスポインター @Dream41", sectionHd: "📷 HDギャラリー", sectionClothes: "👗 衣装展示",
        sectionUniverse: "🌌 ユニバースヒーロー", sectionContact: "📱 SNS＆謎解き",
        memberNames: ["恬豆（ベッキー）", "又一（ヨイ）", "沐霂（クイーニー）", "梨安（リアン）"],
        memberRoles: ["オーナー＆シェフ", "ステージマネージャー", "店長＆キャプテン", "看板娘"],
        memberBdays: ["6月14日", "1月28日", "10月17日", "12月3日"],
        memberFans: ["恬豆パン", "サクサクヨイ", "ムムマーク", "リアンハート"],
        memberColors: ["#A7C9D3", "#E3BA09", "#A1D29A", "#E38691"],
        memberSpecials: ["料理・歌", "歌（ハジミ）", "ダンス", "ダンス・卓球"],
        memberDesc: ["あら？豆が芽を出しそう。", "世界にまた一人美人が誕生！", "一緒に雨の中を走り抜けよう！", "優しい「高知能」美女。"],
        memberPersonality: ["可愛くて元気なマスコット。", "毒舌で小悪魔だが、よくツッコまれる。", "冷静で決断力のあるリーダー。", "セクシーで繊細、信念がある。"],
        memberExtra: ["✨ 恬豆、某五字ソングで二世もからかわれた", "✨ 又は大果村の村花", "✨ 沐霂の身長（自称）は167cm", "✨ 梨安、手羽先5本では足りずに泣いた"],
        skillNames: ["歌唱", "ダンス", "ゲーム", "雑談", "料理", "運動"],
        portfolioTitles: ["七夕特別配信", "端午の節句特別配信", "運動テーマ", "2周年", "こどもの日新衣装", "3D復活配信", "BW神人事件", "知恵比べの頂点", "ヨイの代表作", "リアンの代表作", "恬豆パンの傑作", "123412", "泣くロバ、冷たい石", "ドピリだぞ警戒", "月の女神・陳恬豆", "禧運楼には悪党が多い"],
        portfolioDates: ["3D団体配信 2022.8.4", "2023.6.25", "2023.11.10", "2024.5.17", "2024.6.1", "2025.4.18", "2025.7.12", "2025.11.28", "ハジミだよ", "プープーしない", "発酵パンだよ", "11,233", "君もきっと泣いている", "この椅子は悪すぎる", "OK豆ジャンプ馬", "牛虻のリーダーは沐霂"],
        groupSongTitles: ["『耀』", "『浅夢』", "『相思図』", "『四喜東家』", "『PLAYING WITH FIRE』", "『星光練習曲』", "『大四喜』", "『念我』", "新衣装歌舞", "『免我蹉跎苦』", "『I'll Be Yours』", "『湊熱鬧』", "『四禧新年頌』"],
        groupSongDates: ["2022-02-15", "2022-03-31", "2022-09-11", "2023-01-22", "2023-04-29", "2024-02-02", "2024-02-25", "2024-05-18", "2024-05-21", "2025-01-26", "2025-08-24", "2026-02-08", "2026-03-04"],
        personalSongs: { tiandou: ["ChuLuBaby", "ときめきのリズム", "甘い冠", "サンセット海岸線"], lian: ["危険な境界線", "恋の1日券", "闇に咲く花"], mumu: ["這一次", "次の旅", "共に花畑で", "君と僕だけ"], yoyi: ["Chase the moon", "月相の監守自盗", "江湖浅影"] },
        gameNames: ["小豆の前髪切り", "梨安のお料理", "沐霂の背伸び", "又一の致富経", "四区姉妹", "子豚レース", "禧運ペアマッチ", "禧運パズル"],
        gameSubnames: ["私は陳恬豆、天才ハゲ", "あなたはPですか？", "私は牛沐霂、天に立つ", "物乞いギャングに参加しよう", "", "", "", ""],
        gameDescs: ["✨ 小豆の前髪はすごい～", "🍐 梨安シェフがやってきた～", "🐮 沐霂、身長ネタはもう聞きたくない～", "🐒 又一が段ボール拾いで富豪に", "", "", "", ""],
        gameLabels: ["#30-12 #頂点に立つ", "#禧運楼特供 #ブラインドボックス", "#167！！！", "#ボンボンボン", "", "", "", ""],
        fanworkNames: ["禧運小劇場", "禧運楼大食堂", "3D二次創作", "CP手書き", "丸と貴物", "煙店の監守自盗", "虚環英雄伝", "愛・又戦線同盟", "パラレルユニバース", "胃袋"],
        merchNames: ["恬豆・発酵パワー", "又一・ハジミ", "沐霂・159ガーディアン", "梨安・胃袋パワー"],
        merchDescs: ["発酵クリ＆髪の毛ライン", "大果村スタイル / 小悪魔のしっぽ", "身長エナジー / 拳パワー", "手羽先 / 飯の魂"],
        hdTitle: "📷 HDギャラリー", clothesTitle: "👗 衣装展示・アコーディオンギャラリー",
        universeHeroDescs: ["VRの大先輩", "休眠中", "炎の唇・初代業務災害", "東北の姉さん", "怠け者", "虚環でお願い", "思春期を逃したら更年期を逃すな", "この一礼", "可愛いるる", "天使の声"],
        primaryQuizTitle: "禧運楼の秘密を解くには4つの質問に全て正解する必要があります：",
        ans1Label: "恬豆が一番好きな曲は？", ans1Placeholder: "例：zmyyq",
        ans2Label: "沐霂の身長は？", ans2Placeholder: "標準解答167",
        ans3Label: "又一の両親はどこで又一に出会った？", ans3Placeholder: "湘北雨姐",
        ans4Label: "梨安は手羽先何本では足りない？", ans4Placeholder: "大食い",
        primarySubmit: "全て検証", errorMsg: "答えが間違っています",
        dlc1Title: "🎥 ロック解除！", dlc2Title: "🎂 メンバーの誕生日を入力",
        dlc3Title: "🏷️ ファンバッジ名を入力",
        fanPlaceholder: "ファンバッジ名", submitFan: "検証する",
        birthdayPlaceholder: "例：0614", verifyBtn: "検証",
        oilWorkersTitle: "石油労働者", socialLinksTitle: "ソーシャルメディア",
        thirdError: "答えが間違っています",
        universeEldersTitle: "🧓 禧運ユニバースのおじいちゃんたち",
        elderNames: ["🦀 カニ・林思意", "🍲 酸スープ・趙粤", "🐉 ミルクドラゴン・孫芮", "🍳 鍋・劉增艶", "🍍 パイナップル・姜杉", "🐱 猫・顔沁", "🎤 もち・易嘉愛", "🐻 子グマ・佳佳子", "🚥 信号機・黄婷婷", "🧛‍♀️・かの御方"],
        elderDescs: ["バイトがくれないものは私があげる", "一食の恩義", "初代目の親愛", "ADカルシウムミルク", "私たち3人が仲良く暮らせばそれでいい", "私たち3人が仲良く", "1+2=6", "一本のマイクで", "今夜こっそりここで会おう", "もし人間になって君を抱きしめられたら"],
        more: "もっと見る", back: "← 戻る", download: "ダウンロード",
        footer: "四禧丸子公式ファンサイト | 出典：萌娘百科 | Copyright © 2025 四禧丸子 All Rights Reserved"
    },
    ko: {
        weather: { sunny: "맑음", cloudy: "흐림", rain: "비", snow: "눈", unknown: "알 수 없음", fetchFailed: "날씨 정보 없음" },
        navAbout: "멤버 소개", navSkills: "핵심 능력", navPortfolio: "추천 영상",
        navWork: "음악 작품", navOthers: "업적", navGames: "게임",
        navMerch: "굿즈", navHd: "HD 화보", navClothes: "의상",
        navUniverse: "유니버스 히어로", navAnzi: "안지", navContact: "소셜",
        heroName: "쓰시완즈", heroMotto: "오랜 전통의 계승, 중국풍 버추얼 아이돌",
        heroIntro: "쓰시완즈는 톈더우, 요이, 무무, 리안 네 명의 버추얼 아이돌로 구성된 중국풍 그룹입니다.",
        heroBtn: "팔로우",
        sectionAbout: "✨ 멤버 소개", sectionSkills: "⚡ 핵심 능력", sectionPortfolio: "🎬 추천 영상",
        sectionWork: "🎵 음악 작품", sectionOthers: "🏆 업적", sectionGames: "🎮 게임",
        sectionMerch: "🖱️ 마우스 포인터 @Dream41", sectionHd: "📷 HD 화보", sectionClothes: "👗 의상 전시",
        sectionUniverse: "🌌 유니버스 히어로", sectionContact: "📱 소셜 & 수수께끼",
        memberNames: ["톈더우 베키", "요이", "무무 퀴니", "리안"],
        memberRoles: ["주인 겸 수석 제과사", "무대 총괄", "지배인 겸 리더", "간판 소녀"],
        memberBdays: ["6월 14일", "1월 28일", "10월 17일", "12월 3일"],
        memberFans: ["톈더우빵", "바삭요이", "무무표", "리안하트"],
        memberColors: ["#A7C9D3", "#E3BA09", "#A1D29A", "#E38691"],
        memberSpecials: ["요리, 노래", "노래(하지미)", "댄스", "댄스, 탁구"],
        memberDesc: ["어? 여기 콩이 싹트려고 해요.", "세상에 또 한 명의 미녀 탄생!", "나와 함께 빗속을 질주하자!", "상냥한 '고지능' 미녀입니다."],
        memberPersonality: ["귀엽고 활기찬 마스코트.", "악담하는 꾀꼬리 악마.", "침착한 리더.", "섹시하고 섬세하며 확실한 목표가 있음."],
        memberExtra: ["✨ 톈더우, 다섯 글자 노래로 두 생을 놀림받음", "✨ 요이는 다과촌의 마을 꽃", "✨ 무무 키(자칭) 167cm", "✨ 리안, 닭다리 다섯 개만 먹어서 울었음"],
        skillNames: ["노래", "춤", "게임", "잡담", "요리", "운동"],
        portfolioTitles: ["칠석 특별 방송", "단오절 특별 방송", "운동 테마", "2주년", "어린이날 새 옷", "3D 복귀 방송", "BW 신인 사건", "지혜 대결 정점", "요이 대표작", "리안 대표작", "톈더우빵 걸작", "123412", "우는 당나귀, 차가운 돌", "또 삐리나 경계", "달의 여신 진톈더우", "시윈러우에 깡패 많다"],
        portfolioDates: ["3D 단체 방송 2022.8.4", "2023.6.25", "2023.11.10", "2024.5.17", "2024.6.1", "2025.4.18", "2025.7.12", "2025.11.28", "하지미야", "푸푸 안 해", "발효 반죽이야", "11,233", "너도 분명 울고 있을 거야", "이 의자 너무 나빠", "OK 콩 점프말", "깡패 우두머리는 무무"],
        groupSongTitles: ["《빛》", "《얕은 꿈》", "《그리움 그림》", "《네 개의 기쁨》", "《PLAYING WITH FIRE》", "《별빛 연습곡》", "《대사희》", "《나를 생각해》", "새 옷 춤", "《고통 면제》", "《I'll Be Yours》", "《북적북적》", "《쓰시 설날 송》"],
        groupSongDates: ["2022-02-15", "2022-03-31", "2022-09-11", "2023-01-22", "2023-04-29", "2024-02-02", "2024-02-25", "2024-05-18", "2024-05-21", "2025-01-26", "2025-08-24", "2026-02-08", "2026-03-04"],
        personalSongs: { tiandou: ["ChuLuBaby", "심장 두근의 리듬", "달콤한 왕관", "일몰 해안선"], lian: ["위험한 경계", "사랑 1일권", "어둠 속의 꽃"], mumu: ["이번 한 번", "다음 여행", "함께한 꽃바다", "너와 나만의 것"], yoyi: ["Chase the moon", "월상의 감수자도", "강호 천영"] },
        gameNames: ["콩 앞머리 자르기", "리안 요리 좋아해", "무무 키 크기", "요이 부자 되기", "네 자매", "돼지 경주", "시윈 짝맞추기", "시윈 퍼즐"],
        gameSubnames: ["난 진톈더우, 천재 대머리", "네가 P인지 테스트", "난 무무, 하늘 높이", "거지 갱단에 합류하자", "", "", "", ""],
        gameDescs: ["✨ 콩이 앞머리 진짜 대단해~", "🍐 리안 요리사 등장~", "🐮 무무, 키 농담 더 이상 듣기 싫어~", "🐒 요이가 종이 상자 주워서 부자 되는 과정", "", "", "", ""],
        gameLabels: ["#30-12 #정상에 오르다", "#시윈러우 특별", "#167!!!", "#봉봉봉", "", "", "", ""],
        fanworkNames: ["시윈 소극장", "시윈러우 대식당", "3D 2차 창작", "CP 손편지", "완과 귀물", "연기 가게의 감수자도", "허환 영웅전", "사랑·요이 전선 동맹", "평행 우주", "위장"],
        merchNames: ["톈더우 · 발효의 힘", "요이 · 하지미", "무무 · 159 가디언", "리안 · 위장의 힘"],
        merchDescs: ["발효 밤 & 헤어라인 힘", "다과촌 스타일 / 꼬마 악마 꼬리", "키 에너지 / 주먹 파워", "닭다리 / 밥 혼"],
        hdTitle: "📷 HD 화보", clothesTitle: "👗 의상 전시 · 아코디언 갤러리",
        universeHeroDescs: ["VR 대선배", "휴면 중", "불꽃 입술 · 1세대 업무 상해", "둥베이 언니", "게으른 강아지", "허환 도와줘", "사춘기 놓치면 갱년기도 놓치지 마", "이 절 · 게임 회차", "귀여운 루루", "천상의 목소리"],
        primaryQuizTitle: "시윈러우의 비밀을 풀려면 네 가지 질문에 모두 정답해야 합니다:",
        ans1Label: "톈더우가 가장 좋아하는 노래는?", ans1Placeholder: "예: zmyyq",
        ans2Label: "무무 키는 몇 cm?", ans2Placeholder: "표준 정답 167",
        ans3Label: "요이 부모님은 어디서 요이를 만났나?", ans3Placeholder: "샹베이 위제",
        ans4Label: "리안은 닭다리 몇 개로 배부르지 않나?", ans4Placeholder: "대식가",
        primarySubmit: "모두 검증", errorMsg: "정답이 틀렸습니다.",
        dlc1Title: "🎥 축하합니다!", dlc2Title: "🎂 멤버 생일 입력",
        dlc3Title: "🏷️ 팬 배지 이름을 입력",
        fanPlaceholder: "팬 배지 이름", submitFan: "제출",
        birthdayPlaceholder: "예: 0614", verifyBtn: "검증",
        oilWorkersTitle: "석유 노동자", socialLinksTitle: "소셜 미디어 계정",
        thirdError: "정답이 틀렸습니다.",
        universeEldersTitle: "🧓 시윈 유니버스 어르신들",
        elderNames: ["🦀 게 · 린쓰이", "🍲 시큼탕 · 자오웨", "🐉 밀크 드래곤 · 쑨루이", "🍳 냄비 · 류쩡옌", "🍍 파인애플 · 장샨", "🐱 고양이 · 옌친", "🎤 떡 · 이지아아이", "🐻 꼬마 돼지곰 · 지아지아쯔", "🚥 신호등 · 황팅팅", "🧛‍♀️ · 그 분"],
        elderDescs: ["바이트가 안 주는 건 내가 준다", "한 끼 은혜", "초대형 부모님 사랑", "AD 칼슘 우유", "우리 셋이 잘 사는 게 제일 중요해", "우리 셋이 잘 사는 게", "1+2=6", "하나의 마이크로", "오늘 밤 조용히 여기서 만나", "인간이 되어 너를 안아줄 수 있다면"],
        more: "더 보기", back: "← 뒤로가기", download: "다운로드",
        footer: "쓰시완즈 공식 팬 사이트 | 출처: 모에백과 | Copyright © 2025 쓰시완즈 All Rights Reserved"
    }
};

/**
 * 应用语言切换
 */
function applyLanguage(lang) {
    const t = window._translations[lang];
    if (!t) return;

    // 导航栏
    const navLinks = document.querySelectorAll('nav ul li a');
    const navTexts = [t.navAbout, t.navSkills, t.navPortfolio, t.navWork, t.navOthers, t.navGames, t.navMerch, t.navHd, t.navClothes, t.navUniverse, t.navAnzi, t.navContact];
    navLinks.forEach((link, idx) => { if (navTexts[idx]) link.innerText = navTexts[idx]; });

    // Hero 区域
    const heroName = document.querySelector('.hero .name');
    const heroMotto = document.querySelector('.hero .motto');
    const heroIntro = document.querySelector('.hero .self-intro');
    const heroBtn = document.querySelector('.hero .btn');
    if (heroName) heroName.innerText = t.heroName;
    if (heroMotto) heroMotto.innerText = t.heroMotto;
    if (heroIntro) heroIntro.innerText = t.heroIntro;
    if (heroBtn) heroBtn.innerText = t.heroBtn;

    // 各版块标题
    const sections = ['about', 'skills', 'portfolio', 'work', 'others', 'games', 'merch', 'hd', 'clothes', 'universe-heroes', 'contact'];
    const titles = [t.sectionAbout, t.sectionSkills, t.sectionPortfolio, t.sectionWork, t.sectionOthers, t.sectionGames, t.sectionMerch, t.sectionHd, t.sectionClothes, t.sectionUniverse, t.sectionContact];
    sections.forEach((id, idx) => {
        const h2 = document.querySelector(`#${id} h2`);
        if (h2 && titles[idx]) h2.innerHTML = titles[idx];
    });

    // 成员卡片
    const cards = document.querySelectorAll('.member-card');
    cards.forEach((card, idx) => {
        const nameDiv = card.querySelector('.member-name');
        if (nameDiv) nameDiv.innerText = t.memberNames[idx];
        const roleDiv = card.querySelector('.member-jp-name');
        if (roleDiv) roleDiv.innerText = t.memberRoles[idx];
        const infoPs = card.querySelectorAll('.member-info p');
        if (infoPs.length >= 4) {
            infoPs[0].innerHTML = `<strong>生日：</strong>${t.memberBdays[idx]}`;
            infoPs[1].innerHTML = `<strong>粉丝名：</strong>${t.memberFans[idx]}`;
            infoPs[2].innerHTML = `<strong>代表色：</strong>${t.memberColors[idx]}`;
            infoPs[3].innerHTML = `<strong>特长：</strong>${t.memberSpecials[idx]}`;
        }
        const descDiv = card.querySelector('.member-desc');
        if (descDiv) descDiv.innerText = t.memberDesc[idx];
        const personalityDiv = card.querySelector('.member-personality');
        if (personalityDiv) personalityDiv.innerText = t.memberPersonality[idx];
        const extraDiv = card.querySelector('.extra-info');
        if (extraDiv) extraDiv.innerHTML = t.memberExtra[idx];
    });

    // 技能名称
    const skillNamesSpans = document.querySelectorAll('.skill-name');
    skillNamesSpans.forEach((span, i) => {
        const idx = i % t.skillNames.length;
        if (t.skillNames[idx]) span.innerText = t.skillNames[idx];
    });

    // 入坑必刷
    const portfolioCards = document.querySelectorAll('#portfolio .card');
    portfolioCards.forEach((card, idx) => {
        const title = card.querySelector('.card-body h5');
        if (title && t.portfolioTitles[idx]) title.innerText = t.portfolioTitles[idx];
        const date = card.querySelector('.card-body p');
        if (date && t.portfolioDates[idx]) date.innerText = t.portfolioDates[idx];
    });

    // 团体歌曲
    const groupSongs = document.querySelectorAll('#group .songs-grid .song-card');
    groupSongs.forEach((song, idx) => {
        const titleDiv = song.querySelector('.song-title');
        if (titleDiv && t.groupSongTitles[idx]) titleDiv.innerText = t.groupSongTitles[idx];
        const dateDiv = song.querySelector('.song-date');
        if (dateDiv && t.groupSongDates[idx]) dateDiv.innerText = t.groupSongDates[idx];
    });

    // 成员个人曲
    const tiandouSongs = document.querySelectorAll('#members .member-section:first-child .song-card');
    tiandouSongs.forEach((card, idx) => { const title = card.querySelector('.song-title'); if (title && t.personalSongs.tiandou[idx]) title.innerText = t.personalSongs.tiandou[idx]; });
    const lianSongs = document.querySelectorAll('#members .member-section:nth-child(2) .song-card');
    lianSongs.forEach((card, idx) => { const title = card.querySelector('.song-title'); if (title && t.personalSongs.lian[idx]) title.innerText = t.personalSongs.lian[idx]; });
    const mumuSongs = document.querySelectorAll('#members .member-section:nth-child(3) .song-card');
    mumuSongs.forEach((card, idx) => { const title = card.querySelector('.song-title'); if (title && t.personalSongs.mumu[idx]) title.innerText = t.personalSongs.mumu[idx]; });
    const yoyiSongs = document.querySelectorAll('#members .member-section:nth-child(4) .song-card');
    yoyiSongs.forEach((card, idx) => { const title = card.querySelector('.song-title'); if (title && t.personalSongs.yoyi[idx]) title.innerText = t.personalSongs.yoyi[idx]; });

    // 游戏区
    const gameCards = document.querySelectorAll('#games .game-grid .game-card');
    gameCards.forEach((card, idx) => {
        const nameDivs = card.querySelectorAll('.game-name');
        if (nameDivs[0] && t.gameNames[idx]) nameDivs[0].innerText = t.gameNames[idx];
        if (nameDivs[1] && t.gameSubnames[idx]) nameDivs[1].innerText = t.gameSubnames[idx];
        const descDiv = card.querySelector('.game-desc');
        if (descDiv && t.gameDescs[idx]) descDiv.innerText = t.gameDescs[idx];
        const labelDiv = card.querySelector('.game-label');
        if (labelDiv && t.gameLabels[idx]) labelDiv.innerText = t.gameLabels[idx];
    });

    // 二创
    const fanItems = document.querySelectorAll('.fanworks-scroll .fan-item a');
    fanItems.forEach((item, idx) => {
        if (t.fanworkNames[idx]) {
            const textNode = item.childNodes[item.childNodes.length - 1];
            if (textNode && textNode.nodeType === Node.TEXT_NODE) textNode.textContent = t.fanworkNames[idx];
        }
    });

    // 周边区
    const merchCards = document.querySelectorAll('#merch .game-grid .game-card');
    merchCards.forEach((card, idx) => {
        const nameDiv = card.querySelector('.game-name');
        if (nameDiv && t.merchNames[idx]) nameDiv.innerText = t.merchNames[idx];
        const descDiv = card.querySelector('.game-desc');
        if (descDiv && t.merchDescs[idx]) descDiv.innerText = t.merchDescs[idx];
        const btn = card.querySelector('.download-btn');
        if (btn) btn.innerText = t.download;
    });

    // 谜题区域
    const primaryQuizTitle = document.querySelector('#primaryQuiz p');
    if (primaryQuizTitle) primaryQuizTitle.innerText = t.primaryQuizTitle;
    const ansLabels = document.querySelectorAll('.primary-quiz-grid label');
    if (ansLabels.length >= 4) {
        ansLabels[0].innerText = t.ans1Label;
        ansLabels[1].innerText = t.ans2Label;
        ansLabels[2].innerText = t.ans3Label;
        ansLabels[3].innerText = t.ans4Label;
    }
    const ansInputs = document.querySelectorAll('.primary-quiz-grid input[type="text"]');
    if (ansInputs[0]) ansInputs[0].placeholder = t.ans1Placeholder;
    if (ansInputs[1]) ansInputs[1].placeholder = t.ans2Placeholder;
    if (ansInputs[2]) ansInputs[2].placeholder = t.ans3Placeholder;
    if (ansInputs[3]) ansInputs[3].placeholder = t.ans4Placeholder;
    const submitBtn = document.querySelector('.primary-submit');
    if (submitBtn) submitBtn.innerText = t.primarySubmit;
    const errorMsg = document.getElementById('errorMessage');
    if (errorMsg) errorMsg.innerText = t.errorMsg;

    // 标记当前激活语言按钮
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    localStorage.setItem('preferredLang', lang);

    // 更新天气显示
    if (window._updateWeatherDisplayByLang) window._updateWeatherDisplayByLang();
}

window.applyLanguage = applyLanguage;

// 语言按钮事件绑定
function bindLanguageButtons() {
    const btns = document.querySelectorAll('.lang-btn');
    btns.forEach(btn => {
        btn.removeEventListener('click', btn._langHandler);
        const handler = () => {
            const lang = btn.getAttribute('data-lang');
            if (window._translations[lang]) applyLanguage(lang);
        };
        btn.addEventListener('click', handler);
        btn._langHandler = handler;
    });
}

// 注册到全局供 scripts.js 调用
window._bindLanguageButtons = bindLanguageButtons;
