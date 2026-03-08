// 页面加载完成后渲染数据
$(document).ready(function() {
    // 1. 渲染头部信息
    $(".log").text(config.log);
    $(".myphoto").attr("src", config.url[1]); // 组合头像
    $(".name").text(config.name);
    $(".motto").text(config.motto[Math.floor(Math.random() * config.motto.length)]); // 随机显示座右铭
    $(".self-intro").html(config.welcome);

    // 2. 渲染组合介绍
    $(".me").html(config.about);
    $(".gg.name").text(config.name);
    $(".age").text(config.age);
    $(".excpect_work").text(config.excpect_work);

    // 3. 渲染核心能力
    var skillHtml = "";
    config.skills.forEach(function(item) {
        skillHtml += `
            <div class="skill-item">
                <div class="skill-name">${item[0]}</div>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: ${item[1]}%; background-color: ${item[2]};" aria-valuenow="${item[1]}" aria-valuemin="0" aria-valuemax="100">${item[1]}%</div>
                </div>
            </div>
        `;
    });
    $(".skill-container").html(skillHtml);
    $(".skills-desc").html(config.skills_description);

    // 4. 渲染作品展示
    var portfolioHtml = "";
    config.portfolio.forEach(function(item) {
        portfolioHtml += `
            <div class="col-md-4 col-sm-6" data-aos="fade-up">
                <div class="card">
                    <a href="${item[1]}" target="_blank">
                        <img src="${item[0]}" alt="${item[2]}">
                        <h5 class="card-title">${item[2]}</h5>
                        <p class="card-text">${item[3]}</p>
                    </a>
                </div>
            </div>
        `;
    });
    $(".portfolio-container").html(portfolioHtml);

    // 5. 渲染演艺经历
    var workHtml = "";
    config.work.forEach(function(item) {
        workHtml += `
            <div class="card mb-3" data-aos="fade-up">
                <div class="card-header">
                    <h5 class="mb-0">${item[0]} - ${item[1]}</h5>
                </div>
                <div class="card-body">
                    ${item[2]}
                </div>
            </div>
        `;
    });
    $(".work-container").html(workHtml);

    // 6. 渲染荣誉里程碑
    var othersHtml = "";
    config.others.forEach(function(item) {
        othersHtml += `
            <li>
                <h5>${item[0]}</h5>
                <h6>${item[1]}</h6>
                <p>${item[2]}</p>
            </li>
        `;
    });
    $(".others-container").html(othersHtml);

    // 7. 渲染社交平台
    var iconHtml = "";
    config.icon.forEach(function(item) {
        iconHtml += `
            <a href="${item[1]}" target="_blank" title="${item[2]}">
                <img src="${item[0]}" alt="${item[2]}">
            </a>
        `;
    });
    $(".icon-insert").html(iconHtml);

    // 8. 设置首页背景
    $(".page-header").css("background-image", `url(${config.url[0]})`);

    // 9. 平滑滚动
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 70
        }, 800);
    });

    // 10. 加载动画
    $(".fakeLoader").fadeOut(1000);
});