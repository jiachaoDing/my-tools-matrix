import os
import re

def batch_update_tools():
    # 目标 HTML
    target_html = '\n            <div id="related-tools-section" class="lg:col-span-12 mt-12 hidden"></div>'
    # 用于匹配可能已存在的组件（包括旧位置的）
    existing_pattern = re.compile(r'\s*<div id="related-tools-section"[^>]*></div>')

    for root, dirs, files in os.walk("."):
        if root == "." or "node_modules" in root:
            continue
            
        for file in files:
            if file == "index.html":
                file_path = os.path.join(root, file)
                
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # 1. 先清理掉所有已存在的该组件（无论在什么位置）
                content = existing_pattern.sub('', content)
                
                # 2. 查找 tool-wrapper 的起始位置
                wrapper_match = re.search(r'<div id="tool-wrapper"[^>]*>', content)
                if not wrapper_match:
                    continue
                
                # 3. 寻找 tool-wrapper 自己的闭合标签 </div>
                # 逻辑：从 wrapper 起始处开始，追踪 div 嵌套计数
                start_pos = wrapper_match.start()
                count = 0
                pos = start_pos
                insert_pos = -1
                
                while pos < len(content):
                    # 查找下一个 <div 或 </div>
                    next_open = content.find('<div', pos)
                    next_close = content.find('</div>', pos)
                    
                    if next_close == -1: break # 理论上不会发生
                    
                    # 如果找到新的起始标签
                    if next_open != -1 and next_open < next_close:
                        count += 1
                        pos = next_open + 4
                    # 如果找到闭合标签
                    else:
                        count -= 1
                        if count == 0:
                            # 找到了 tool-wrapper 自己的闭合标签
                            insert_pos = next_close
                            break
                        pos = next_close + 6
                
                # 4. 在闭合标签前插入
                if insert_pos != -1:
                    new_content = content[:insert_pos] + target_html + content[insert_pos:]
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"✅ Fixed & Updated: {file_path}")

if __name__ == "__main__":
    batch_update_tools()