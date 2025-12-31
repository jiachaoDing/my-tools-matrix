// assets/js/app.js


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
        categoryID: cat.id,
        categoryName: cat.name
    })));

    const currentBrowserPath = normalizePath(window.location.pathname);
    // console.log('📍 Current Path:', currentBrowserPath);

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

    // console.log('✨ Recommendations generated:', recommendations.length);
    
    // 渲染 (SEO 增强版)
    renderTools(container, recommendations, currentTool);
    // 注入 JSON-LD
    injectJSONLD(recommendations);
}

// 辅助函数：注入 JSON-LD 提升 SEO
function injectJSONLD(tools) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": tools.map((tool, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": window.location.origin + tool.url,
            "name": tool.name,
            "description": tool.description || tool.desc
        }))
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
}

// 辅助函数：生成 HTML 并注入 (V2.2 SEO 增强版)
function renderTools(container, tools, currentTool) {
    // 定义不同分类的颜色映射
    const categoryColors = {
        'image': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
        'pdf': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
        'developer': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
        'security': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
        'default': 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
    };

    // 动态生成 SEO 友好的标题
    const sectionTitle = currentTool 
        ? `Related ${currentTool.categoryName || currentTool.categoryID.charAt(0).toUpperCase() + currentTool.categoryID.slice(1)} Tools` 
        : 'Recommended Tools';

    const html = `
        <div class="flex items-center justify-between mb-5">
            <h3 class="text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                ${sectionTitle}
            </h3>
            <a href="/" class="text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center gap-1 group transition-colors">
                Explore All Tools <span class="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${tools.map(tool => {
                const catID = tool.categoryID || 'default';
                const badgeClass = categoryColors[catID] || categoryColors['default'];
                
                return `
                <a href="${tool.url}" 
                   title="Use ${tool.name} - ${tool.description || tool.desc}"
                   class="group flex items-center gap-4 p-3.5 bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/50 rounded-xl transition-all duration-200 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5">
                    
                    <div class="flex-shrink-0 w-11 h-11 rounded-lg bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    
                    <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between mb-0.5">
                            <h4 class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors truncate">
                                ${tool.name}
                            </h4>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mb-1.5">
                            ${tool.description || tool.desc}
                        </p>
                        <span class="inline-block text-[9px] uppercase tracking-widest font-black px-1.5 py-0.5 rounded-md ${badgeClass} opacity-80 group-hover:opacity-100 transition-opacity">
                            ${tool.categoryID || 'TOOL'}
                        </span>
                    </div>

                    <div class="flex-shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                </a>
                `;
            }).join('')}
        </div>
    `;
    
    container.innerHTML = html;
    container.classList.remove('hidden');
}