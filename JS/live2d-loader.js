/**
 * Live2D 终极稳定版：固定大小、绝对贴底、严格对称
 */
(function () {
    'use strict';

    // 从左到右的顺序：左1, 左2, 右1, 右2
    const modelPaths = [
        './live2d/saichelian/saichelian.model3.json',      // 梨安 (最左)
        './live2d/saichetiandou/saichetiandou.model3.json', // 恬豆 (左侧靠内)
        './live2d/saichemumu/saichemumu.model3.json',       // 沐霂 (右侧靠内)
        './live2d/saicheyoyi/saicheyoyi.model3.json'        // 又一 (最右)
    ];

    let isLoaded = false;
    let waitTimer = null;
    let app = null;
    let loadedModels = [];

    function initLive2D() {
        if (isLoaded) return;

        // 1. 依赖检查
        if (typeof PIXI === 'undefined' || !PIXI.live2d || !PIXI.live2d.Live2DModel) {
            console.error('❌ [Live2D] 依赖未挂载，请检查本地 js 文件。');
            return;
        }

        const heroArea = document.getElementById('comp-hero');
        const container = document.getElementById('live2d-container');
        const canvas = document.getElementById('live2d-stage');

        if (!heroArea || !container || !canvas) return;

        // 2. 注入 CSS：清除背景，确保 Hero 有固定高度，并且相对定位
        const style = document.createElement('style');
        style.innerHTML = `
            #comp-hero {
                background-image: none !important;
                background-color: transparent !important;
                min-height: 550px !important; /* 固定高度，确保空间够放模型 */
                position: relative !important;
                display: flex;
                flex-direction: column;
                justify-content: flex-start; /* 内容靠上，给模型留空间 */
            }
            #oml2d-container, .oml2d-widget { display: none !important; }
        `;
        document.head.appendChild(style);

        // 3. 挂载容器
        heroArea.appendChild(container);

        // 确保文字和按钮浮在模型上方
        const heroContent = heroArea.querySelector('.hero-content') || heroArea.firstElementChild;
        if (heroContent && heroContent !== container) {
            heroContent.style.position = 'relative';
            heroContent.style.zIndex = '10';
            heroContent.style.marginTop = '50px'; // 让文字稍微往下一点，居中好看
        }

        // 4. 设置画布容器：绝对贴底
        const stageWidth = heroArea.clientWidth || window.innerWidth;
        const stageHeight = heroArea.clientHeight || 550;

        container.style.cssText = `
            position: absolute;
            bottom: 0; /* 绝对贴底，与下方页签完美对接 */
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
        `;

        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'auto';

        isLoaded = true;
        if (waitTimer) clearInterval(waitTimer);
        console.log('✅ [Live2D] 开始初始化舞台...');

        // 5. 创建 PIXI 舞台
        app = new PIXI.Application({
            view: canvas,
            width: stageWidth,
            height: stageHeight,
            transparent: true,
            autoStart: true,
            antialias: true,
            resolution: window.devicePixelRatio || 1,
        });

        // 6. 加载模型
        Promise.allSettled(modelPaths.map(path => PIXI.live2d.Live2DModel.from(path)))
            .then(results => {
                loadedModels = [];
                results.forEach((result, index) => {
                    if (result.status === 'fulfilled') {
                        const model = result.value;
                        app.stage.addChild(model);

                        // 核心：将模型的锚点固定在底部中心
                        model.anchor.set(0.5, 1);

                        model.interactive = true;
                        model.on('hit', (hitAreas) => {
                            if (hitAreas.includes('body')) {
                                model.motion('tap_body');
                            }
                        });

                        loadedModels.push(model);
                    } else {
                        console.warn(`⚠️ [Live2D] 模型加载失败:`, result.reason);
                    }
                });

                // 7. 初始排版
                layoutModels();

                // 窗口尺寸变化时重新排版
                window.addEventListener('resize', () => {
                    if (!app || !heroArea) return;
                    app.renderer.resize(heroArea.clientWidth, heroArea.clientHeight);
                    layoutModels();
                });
            });
    }

    // 排版核心逻辑：固定大小 + 绝对对称 + 贴底
    function layoutModels() {
        if (loadedModels.length < 4) return;

        const stageWidth = app.screen.width;
        const stageHeight = app.screen.height;

        // 1. 固定模型高度：不随屏幕缩放而无限变大，最高 450px
        const fixedHeight = Math.min(450, stageHeight * 0.9);
        const maxModelHeight = Math.max(...loadedModels.map(m => m.height));
        const globalScale = fixedHeight / maxModelHeight;

        // 应用缩放，并将 Y 轴坐标固定在舞台的最底边（因为锚点已经设为了底边中心）
        loadedModels.forEach(m => {
            m.scale.set(globalScale);
            m.y = stageHeight; // 绝对贴底
        });

        // 2. 计算宽度
        const gap = 15; // 模型间的间距
        const centerX = stageWidth / 2; // 屏幕中心轴（Logo位置）

        // 中心留白：给 Logo 和按钮留出空间（根据屏幕宽度自适应）
        const centerGap = Math.min(320, stageWidth * 0.35);

        // 左侧组：最右边缘为 centerX - centerGap / 2
        const leftEdgeX = centerX - (centerGap / 2);
        // 右侧组：最左边缘为 centerX + centerGap / 2
        const rightEdgeX = centerX + (centerGap / 2);

        // --- 计算左侧模型 X 坐标 ---
        // loadedModels[1] (恬豆) 在最右，贴着 leftEdgeX
        const modelLeft2 = loadedModels[1];
        const wLeft2 = modelLeft2.width * globalScale;
        modelLeft2.x = leftEdgeX - (wLeft2 / 2);

        // loadedModels[0] (梨安) 在最左，排在恬豆左边
        const modelLeft1 = loadedModels[0];
        const wLeft1 = modelLeft1.width * globalScale;
        modelLeft1.x = leftEdgeX - wLeft2 - gap - (wLeft1 / 2);

        // --- 计算右侧模型 X 坐标 ---
        // loadedModels[2] (沐霂) 在最左，贴着 rightEdgeX
        const modelRight1 = loadedModels[2];
        const wRight1 = modelRight1.width * globalScale;
        modelRight1.x = rightEdgeX + (wRight1 / 2);

        // loadedModels[3] (又一) 在最右，排在沐霂右边
        const modelRight2 = loadedModels[3];
        const wRight2 = modelRight2.width * globalScale;
        modelRight2.x = rightEdgeX + wRight1 + gap + (wRight2 / 2);
    }

    // 等待组件渲染
    function startWaiting() {
        if (waitTimer) return;
        const MAX_WAIT = 15000;
        const START_TIME = Date.now();

        waitTimer = setInterval(() => {
            const heroArea = document.getElementById('comp-hero');
            if (heroArea && heroArea.innerHTML.trim() !== '') {
                clearInterval(waitTimer);
                waitTimer = null;
                setTimeout(initLive2D, 200);
            } else if (Date.now() - START_TIME > MAX_WAIT) {
                clearInterval(waitTimer);
                waitTimer = null;
                console.warn('[Live2D] ⚠️ 等待 Hero 区域超时。');
            }
        }, 300);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startWaiting);
    } else {
        startWaiting();
    }
})();