/**
 * 组件加载器 - 将拆分后的 HTML 组件文件加载到主页面
 */
(function () {
    // 组件映射：容器ID → 组件文件路径
    const componentMap = [
        { id: 'comp-nav',        file: 'components/nav.html' },
        { id: 'comp-hero',      file: 'components/hero.html' },
        { id: 'comp-about',     file: 'components/about.html' },
        { id: 'comp-skills',    file: 'components/skills.html' },
        { id: 'comp-portfolio', file: 'components/portfolio.html' },
        { id: 'comp-music',     file: 'components/music.html' },
        { id: 'comp-milestones',file: 'components/milestones.html' },
        { id: 'comp-games',     file: 'components/games.html' },
        { id: 'comp-merch',     file: 'components/merch.html' },
        { id: 'comp-gallery',   file: 'components/gallery.html' },
        { id: 'comp-universe',  file: 'components/universe.html' },
        { id: 'comp-anzi',      file: 'components/anzi.html' },
        { id: 'comp-social',    file: 'components/social.html' },
        { id: 'comp-footer',    file: 'components/footer.html' },
        { id: 'comp-modal',     file: 'components/modal.html' }
    ];

    // 加载单个组件
    async function loadComponent(id, file) {
        const container = document.getElementById(id);
        if (!container) {
            console.warn(`[Loader] 找不到容器: #${id}`);
            return;
        }
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            container.innerHTML = await response.text();
            console.log(`[Loader] 已加载: ${file} → #${id}`);
        } catch (err) {
            console.error(`[Loader] 加载失败: ${file}`, err);
        }
    }

    // 批量加载所有组件
    async function loadAllComponents() {
        const promises = componentMap.map(({ id, file }) => loadComponent(id, file));
        await Promise.all(promises);

        // 所有组件加载完成后，触发 DOMContentLoaded 相关初始化
        // 通知 scripts.js 可以开始初始化了
        window.dispatchEvent(new CustomEvent('componentsLoaded'));
    }

    // 页面加载后立即开始加载组件
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAllComponents);
    } else {
        loadAllComponents();
    }
})();
