import os
from datetime import datetime

# === 配置区域 ===
DOMAIN = "https://webutilitykit.com"
# 根目录下需要排除的文件夹
EXCLUDE_DIRS = {'.git', '.github', 'assets', 'node_modules', 'test-components', '__pycache__'}
# =================

def get_xml_entry(url, priority="0.8"):
    """生成单个 URL 的 XML 块"""
    date_str = datetime.now().strftime("%Y-%m-%d")
    return (
        f'  <url>\n'
        f'    <loc>{url}</loc>\n'
        f'    <lastmod>{date_str}</lastmod>\n'
        f'    <priority>{priority}</priority>\n'
        f'  </url>'
    )

def generate_sitemap():
    sitemap_content = ['<?xml version="1.0" encoding="UTF-8"?>']
    sitemap_content.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')

    root_dir = os.getcwd()
    
    # -------------------------------------------------
    # 1. 添加主页 (英文 & 印地语)
    # -------------------------------------------------
    print("Adding Homepages...")
    sitemap_content.append(get_xml_entry(f'{DOMAIN}/', "1.0"))
    
    # 检查是否存在 hi 目录，存在则添加印地语主页
    hi_dir = os.path.join(root_dir, 'hi')
    if os.path.exists(os.path.join(hi_dir, 'index.html')):
        sitemap_content.append(get_xml_entry(f'{DOMAIN}/hi/', "1.0"))

    # -------------------------------------------------
    # 2. 扫描根目录下的工具 (英文版)
    # -------------------------------------------------
    print("Scanning English tools...")
    for item in os.listdir(root_dir):
        # 排除 hi 目录（稍后单独处理），排除配置中的目录，排除文件
        if item == 'hi' or item in EXCLUDE_DIRS:
            continue
            
        item_path = os.path.join(root_dir, item)
        if os.path.isdir(item_path):
            # 只有包含 index.html 才算一个工具
            if "index.html" in os.listdir(item_path):
                url = f"{DOMAIN}/{item}/"
                print(f"  [EN] Found: {item}")
                sitemap_content.append(get_xml_entry(url, "0.8"))

    # -------------------------------------------------
    # 3. 扫描 hi 目录下的工具 (印地语版)
    # -------------------------------------------------
    if os.path.exists(hi_dir):
        print("Scanning Hindi tools...")
        for item in os.listdir(hi_dir):
            item_path = os.path.join(hi_dir, item)
            # 同样排除可能存在的资源文件夹
            if item in EXCLUDE_DIRS:
                continue

            if os.path.isdir(item_path):
                if "index.html" in os.listdir(item_path):
                    # 注意这里的 URL 结构：/hi/工具名/
                    url = f"{DOMAIN}/hi/{item}/"
                    print(f"  [HI] Found: {item}")
                    sitemap_content.append(get_xml_entry(url, "0.8"))

    sitemap_content.append('</urlset>')

    # 写入文件
    with open("sitemap.xml", "w", encoding="utf-8") as f:
        f.write("\n".join(sitemap_content))
    
    print(f"\n✅ sitemap.xml 生成成功！总共包含 {len(sitemap_content) - 3} 个页面 (估算值)。")

if __name__ == "__main__":
    generate_sitemap()