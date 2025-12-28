import os
from datetime import datetime

# === 配置区域 ===
DOMAIN = "https://webutilitykit.com"  # 替换成你的真实域名
EXCLUDE_DIRS = {'.git', '.github', 'assets', 'node_modules'} # 排除的目录
# =================

def generate_sitemap():
    sitemap_content = ['<?xml version="1.0" encoding="UTF-8"?>']
    sitemap_content.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')

    # 1. 添加首页
    sitemap_content.append('  <url>')
    sitemap_content.append(f'    <loc>{DOMAIN}/</loc>')
    sitemap_content.append(f'    <lastmod>{datetime.now().strftime("%Y-%m-%d")}</lastmod>')
    sitemap_content.append('    <priority>1.0</priority>')
    sitemap_content.append('  </url>')

    # 2. 扫描所有子目录下的工具
    root_dir = os.getcwd()
    
    for item in os.listdir(root_dir):
        if os.path.isdir(item) and item not in EXCLUDE_DIRS:
            # 检查该目录下是否有 index.html
            if "index.html" in os.listdir(os.path.join(root_dir, item)):
                url = f"{DOMAIN}/{item}/"
                print(f"Found tool: {item}")
                
                sitemap_content.append('  <url>')
                sitemap_content.append(f'    <loc>{url}</loc>')
                sitemap_content.append(f'    <lastmod>{datetime.now().strftime("%Y-%m-%d")}</lastmod>')
                sitemap_content.append('    <priority>0.8</priority>')
                sitemap_content.append('  </url>')

    sitemap_content.append('</urlset>')

    # 写入文件
    with open("sitemap.xml", "w", encoding="utf-8") as f:
        f.write("\n".join(sitemap_content))
    
    print("\n✅ sitemap.xml 生成成功！")

if __name__ == "__main__":
    generate_sitemap()