// assets/js/app.js

// 1. 放在最外面，证明 app.js 被加载了
console.log('🚀 App.js is running...');

document.addEventListener('DOMContentLoaded', () => {
    try {
        injectRelatedTools();
    } catch (e) {
        console.error('❌ Critical Error in injectRelatedTools:', e);
    }
});

function normalizePath(path) {
    return path.replace(/\/index\.html$/, '').replace(/\/$/, '').replace(/^\//, '');
}

function injectRelatedTools() {
    const container = document.getElementById('related-tools-section');
    if (!container) {
        console.warn('⚠️ Container not found on this page.');
        return;
    }

    // 🔥 核心修复：安全检查
    if (typeof window.toolsConfig === 'undefined') {
        console.error('❌ Fatal: toolsConfig is missing! Check script order in HTML.');
        // 紧急补救：显示一个简单的提示，或者隐藏容器
        container.innerHTML = '<p class="text-center text-gray-500">More tools coming soon...</p>';
        container.classList.remove('hidden');
        return;
    }

    // 数据准备
    const allTools = window.toolsConfig.categories.flatMap(cat => cat.tools.map(tool => ({
        ...tool,
        categoryID: cat.id
    })));

    const currentBrowserPath = normalizePath(window.location.pathname);
    console.log('📍 Current Path:', currentBrowserPath);

    // 匹配逻辑
    const currentTool = allTools.find(t => normalizePath(t.url) === currentBrowserPath);
    
    // 如果匹配不到，打印警告但继续（走随机推荐）
    if (!currentTool) {
        console.log('ℹ️ No exact match for this page. Showing random tools.');
    }

    // 推荐算法 (同之前)
    let recommendations = [];
    if (currentTool) {
        recommendations = allTools
            .filter(t => t.url !== currentTool.url)
            .map(tool => {
                let score = 0;
                if (currentTool.tags && tool.tags) {
                    const shared = tool.tags.filter(tag => currentTool.tags.includes(tag));
                    score += shared.length * 10;
                }
                if (tool.categoryID === currentTool.categoryID) score += 5;
                return { ...tool, score };
            })
            .sort((a, b) => b.score - a.score)
            .slice(0, 3);
    }

    // 兜底补齐
    if (recommendations.length < 3) {
        const existingUrls = [
            (currentTool ? currentTool.url : ''), 
            ...recommendations.map(r => r.url)
        ];
        const remaining = allTools.filter(t => !existingUrls.includes(t.url));
        const fillers = remaining.sort(() => 0.5 - Math.random()).slice(0, 3 - recommendations.length);
        recommendations = [...recommendations, ...fillers];
    }

    console.log('✨ Recommendations generated:', recommendations.length);
    
    // 渲染 (保持你之前漂亮的样式函数 renderTools 不变)
    renderTools(container, recommendations);
}

// 辅助函数：生成 HTML 并注入 (V2.0 美化版)
function renderTools(container, tools) {
    // 定义不同分类的颜色映射 (可选，增加精致感)
    const categoryColors = {
        'image': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
        'pdf': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
        'developer': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
        'security': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
        'default': 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
    };

    const html = `
        <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Related Tools You Might Need
            </h3>
            <a href="/" class="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center gap-1 group">
                View All <span class="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            ${tools.map(tool => {
                // 获取分类颜色，没有就用默认
                const catID = tool.categoryID || 'default';
                const badgeClass = categoryColors[catID] || categoryColors['default'];
                
                return `
                <a href="${tool.url}" class="group relative flex flex-col p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none hover:border-blue-500/50 dark:hover:border-blue-500 hover:-translate-y-1">
                    
                    <div class="flex justify-between items-start mb-4">
                        <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        
                        <span class="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full ${badgeClass}">
                            ${tool.categoryID || 'TOOL'}
                        </span>
                    </div>

                    <div class="mb-2">
                        <h4 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                            ${tool.name}
                        </h4>
                    </div>
                    
                    <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-grow">
                        ${tool.description || tool.desc}
                    </p>

                    <div class="flex items-center text-sm font-semibold text-blue-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mt-auto">
                        Try this tool <span class="ml-1">→</span>
                    </div>
                </a>
                `;
            }).join('')}
        </div>
    `;
    
    container.innerHTML = html;
    container.classList.remove('hidden');
}
// ... 保持 renderTools 和 getRandomTools 函数不变 ...