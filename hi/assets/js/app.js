// hi/assets/js/app.js

document.addEventListener('DOMContentLoaded', () => {
    try {
        injectRelatedTools();
    } catch (e) {
        console.error('❌ injectRelatedTools में गंभीर त्रुटि:', e);
    }
});

function normalizePath(path) {
    // हटाएँ /hi/ प्रिफिक्स यदि मौजूद है, फिर इंडेक्स और ट्रेलिंग स्लैश को साफ़ करें
    return path.replace(/^\/hi/, '').replace(/\/index\.html$/, '').replace(/\/$/, '').replace(/^\//, '');
}

function injectRelatedTools() {
    const container = document.getElementById('related-tools-section');
    if (!container) {
        return;
    }

    if (typeof window.toolsConfig === 'undefined') {
        console.error('❌ Fatal: toolsConfig गायब है!');
        container.innerHTML = '<p class="text-center text-gray-500">जल्द ही और भी उपकरण आ रहे हैं...</p>';
        container.classList.remove('hidden');
        return;
    }

    // डेटा तैयार करें
    const allTools = window.toolsConfig.categories.flatMap(cat => cat.tools.map(tool => ({
        ...tool,
        categoryID: cat.id
    })));

    const currentBrowserPath = normalizePath(window.location.pathname);

    // मैचिंग लॉजिक
    const currentTool = allTools.find(t => normalizePath(t.url) === currentBrowserPath);
    
    // सिफारिश एल्गोरिथम
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

    // कमी होने पर रैंडम से भरें
    if (recommendations.length < 3) {
        const existingUrls = [
            (currentTool ? currentTool.url : ''), 
            ...recommendations.map(r => r.url)
        ];
        const remaining = allTools.filter(t => !existingUrls.includes(t.url));
        const fillers = remaining.sort(() => 0.5 - Math.random()).slice(0, 3 - recommendations.length);
        recommendations = [...recommendations, ...fillers];
    }
    
    // रेंडरिंग
    renderTools(container, recommendations);
}

function renderTools(container, tools) {
    const categoryColors = {
        'images': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
        'pdf': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
        'developer': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
        'security': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
        'default': 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
    };

    const html = `
        <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                संबंधित उपकरण जिनकी आपको आवश्यकता हो सकती है
            </h3>
            <a href="/hi/" class="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center gap-1 group">
                सभी देखें (View All) <span class="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            ${tools.map(tool => {
                const catID = tool.categoryID || 'default';
                const badgeClass = categoryColors[catID] || categoryColors['default'];
                
                // सुनिश्चित करें कि URL /hi/ से शुरू होता है
                const localizedUrl = tool.url.startsWith('/hi/') ? tool.url : `/hi${tool.url}`;
                
                return `
                <a href="${localizedUrl}" class="group relative flex flex-col p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none hover:border-blue-500/50 dark:hover:border-blue-500 hover:-translate-y-1">
                    
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
                        इसे आजमाएं (Try this tool) <span class="ml-1">→</span>
                    </div>
                </a>
                `;
            }).join('')}
        </div>
    `;
    
    container.innerHTML = html;
    container.classList.remove('hidden');
}

