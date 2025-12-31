import os
import re

def batch_update_tools():
    target_html = '\n            <div id="related-tools-section" class="lg:col-span-12 mt-12 hidden"></div>'
    
    # 遍历当前目录下所有子文件夹
    for root, dirs, files in os.walk("."):
        # 跳过根目录的 index.html
        if root == ".":
            continue
            
        for file in files:
            if file == "index.html":
                file_path = os.path.join(root, file)
                
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # 1. 检查是否已经存在相关组件
                if 'id="related-tools-section"' in content:
                    print(f"Skipping (Already exists): {file_path}")
                    continue
                
                # 2. 查找 tool-wrapper
                wrapper_match = re.search(r'<div id="tool-wrapper"[^>]*>', content)
                if not wrapper_match:
                    print(f"Skipping (No tool-wrapper): {file_path}")
                    continue
                
                wrapper_start = wrapper_match.end()
                
                # 3. 寻找第一个子 div 的闭合处
                # 我们寻找 tool-wrapper 内部的第一个大容器 div 的结尾
                # 逻辑：找到第一个 <div 后的配对 </div>
                count = 0
                pos = wrapper_start
                found_first_div = False
                insert_pos = -1
                
                while pos < len(content):
                    div_open = content.find('<div', pos)
                    div_close = content.find('</div>', pos)
                    
                    if div_close == -1: break
                    
                    if div_open != -1 and div_open < div_close:
                        count += 1
                        pos = div_open + 4
                        found_first_div = True
                    else:
                        count -= 1
                        pos = div_close + 6
                        if count == 0 and found_first_div:
                            insert_pos = pos
                            break
                
                if insert_pos != -1:
                    new_content = content[:insert_pos] + target_html + content[insert_pos:]
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"✅ Updated: {file_path}")

if __name__ == "__main__":
    batch_update_tools()