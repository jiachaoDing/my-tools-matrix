/**
 * WebUtilityKit एकीकृत घटक प्रबंधन (Hindi Version)
 * सभी उपकरण पृष्ठों में एकीकृत हेडर और फुटर इंजेक्ट करने के लिए उपयोग किया जाता है
 */

// ========== कॉन्फ़िगरेशन ==========
const SITE_CONFIG = {
    name: 'WebUtilityKit',
    domain: '.com',
    email: 'yinb9933@gmail.com',
    githubRepo: 'https://github.com/jiachaoDing/my-tools-matrix',
    githubIssues: 'https://github.com/jiachaoDing/my-tools-matrix/issues'
};

// ========== Header घटक ==========
function createHeader() {
    const header = document.createElement('header');
    header.className = 'sticky top-0 w-full z-50 border-b border-slate-200/70 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur';
    
    // होम लिंक हमेशा /hi/ पर ले जाना चाहिए
    const homeLink = '/hi/';
    
    header.innerHTML = `
        <nav class="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
            <a href="${homeLink}" class="flex items-center gap-2 text-lg font-bold tracking-tight text-blue-600 dark:text-blue-400">
                ${SITE_CONFIG.name}<span class="text-slate-400 font-normal">${SITE_CONFIG.domain}</span>
            </a>
            <div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <span class="hidden lg:inline text-xs opacity-70">100+ गोपनीयता-प्रथम उपकरण</span>

                <a href="mailto:${SITE_CONFIG.email}" 
                   class="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 px-2.5 py-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                   title="प्रतिक्रिया या सुझाव के लिए हमसे संपर्क करें">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span class="hidden lg:inline">संपर्क (Contact)</span>
                </a>
                <button id="theme-toggle" class="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 px-2.5 py-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                    <span id="theme-icon" class="text-xs">🌗</span>
                    <span class="hidden sm:inline">थीम (Theme)</span>
                </button>
                <a href="${SITE_CONFIG.githubRepo}" 
                   target="_blank"
                   rel="noopener noreferrer"
                   class="flex items-center gap-2 rounded-lg bg-slate-900 dark:bg-slate-100 px-2.5 py-1.5 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition font-semibold shadow-sm"
                   title="हमें GitHub पर स्टार दें">
                    <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span class="hidden sm:inline text-xs">स्टार (Star)</span>
                </a>
            </div>
        </nav>
    `;
    
    return header;
}

// ========== Footer घटक ==========
function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur';
    
    footer.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 py-8">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
                <div class="text-slate-600 dark:text-slate-400">
                    &copy; 2025 ${SITE_CONFIG.name}${SITE_CONFIG.domain}
                </div>
                <div class="flex items-center gap-4">
                    <a href="${SITE_CONFIG.githubIssues}" 
                       target="_blank"
                       rel="noopener noreferrer"
                       class="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition font-medium"
                       title="बग रिपोर्ट करें या नई सुविधा का अनुरोध करें">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                        <span>बग रिपोर्ट करें (Report Bug)</span>
                    </a>
                    <span class="text-slate-300 dark:text-slate-700">|</span>
                    <a href="${SITE_CONFIG.githubRepo}" 
                       target="_blank"
                       rel="noopener noreferrer"
                       class="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
                       title="GitHub पर सोर्स कोड देखें">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>GitHub</span>
                    </a>
                    <span class="text-slate-300 dark:text-slate-700">|</span>
                    <span class="text-slate-500 dark:text-slate-400">Cloudflare Pages के लिए निर्मित</span>
                </div>
            </div>
        </div>
    `;
    
    return footer;
}

// ========== थीम स्विचिंग लॉजिक ==========
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;
    
    // पुराने 'wuk-theme' से 'theme' पर माइग्रेट करें (पिछड़ा अनुकूलता)
    if (localStorage.getItem('wuk-theme') && !localStorage.getItem('theme')) {
        localStorage.setItem('theme', localStorage.getItem('wuk-theme'));
        localStorage.removeItem('wuk-theme');
    }
    
    function updateTheme() {
        const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        
        if (isDark) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        
        // आइकन अपडेट करें
        if (themeIcon) {
            themeIcon.textContent = isDark ? '🌙' : '☀️';
        }
    }
    
    updateTheme();
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // प्रदर्शन अनुकूलन: संक्रमण एनिमेशन को अस्थायी रूप से अक्षम करें
            html.classList.add('no-transitions');
            
            const isDark = html.classList.toggle('dark');
            localStorage.theme = isDark ? 'dark' : 'light';
            
            // आइकन अपडेट करें
            if (themeIcon) {
                themeIcon.textContent = isDark ? '🌙' : '☀️';
            }

            // तत्काल आवेदन सुनिश्चित करें
            window.getComputedStyle(html).opacity;
            
            // अतुल्यकालिक रूप से हटाएं
            requestAnimationFrame(() => {
                html.classList.remove('no-transitions');
            });
        });
    }
}

// ========== स्वचालित प्रारंभ ==========
function initComponents() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        const body = document.body;

        const header = createHeader();
        body.insertBefore(header, body.firstChild);

        const footer = createFooter();
        body.appendChild(footer);

        initTheme();
    }
}

// तुरंत निष्पादन
initComponents();

