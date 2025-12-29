# ⚡ 快速开始 - 5 分钟上手统一组件系统

## 🎯 30 秒概览

这套系统让你无需在每个页面手动编写 Header 和 Footer。只需引入一个 JS 文件，一切自动完成！

## 📝 三步创建新页面

### 步骤 1️⃣：复制模板

```bash
# 对于工具页面（在子目录中）
cp _template-with-components.html your-tool-name/index.html

# 对于根目录页面
cp _template-root-with-components.html index.html
```

### 步骤 2️⃣：编辑内容

只需修改 `<main>` 标签内的内容：

```html
<main class="flex-grow w-full py-12 px-4 sm:px-6">
    <!-- 修改标题和描述 -->
    <h1>你的工具名称</h1>
    <p>工具描述</p>
    
    <!-- 编写你的工具逻辑 -->
    <div id="tool-wrapper">
        <!-- 你的内容 -->
    </div>
</main>

<!-- Header 和 Footer 会自动加载，无需编写！ -->
```

### 步骤 3️⃣：完成！

就这么简单！Header、Footer 和主题切换已经自动集成。

## 🔧 三步迁移旧页面

### 方式 A：全自动（推荐）

```powershell
# 运行迁移脚本
.\migrate-to-components.ps1

# 脚本会自动处理所有页面
# 并创建 .backup 备份文件
```

### 方式 B：手动迁移

1. **删除三个代码块：**
   - `<header>...</header>`
   - `<footer>...</footer>`
   - `// === Theme Logic ===` JavaScript 代码

2. **在 `</body>` 之前添加：**
   ```html
   <script src="../assets/js/components.js"></script>
   ```

3. **完成！**

## 🧪 验证结果

打开浏览器访问：`http://localhost:8080/test-components/index.html`

**检查：**
- ✅ 看到 Header（Logo、按钮）
- ✅ 看到 Footer（链接、版权）
- ✅ 主题切换按钮工作

## ⚙️ 修改配置

编辑 `assets/js/components.js`：

```javascript
const SITE_CONFIG = {
    email: 'your@email.com',     // 改成你的邮箱
    githubRepo: 'your-repo-url'   // 改成你的仓库
};
```

**保存后，所有页面自动更新！**

## 📍 路径速查表

| 页面位置 | CSS 路径 | JS 路径 |
|---------|---------|---------|
| 根目录 | `assets/css/styles.css` | `assets/js/components.js` |
| 子目录 | `../assets/css/styles.css` | `../assets/js/components.js` |

## 🆘 遇到问题？

### 问题：页面显示两个 Header

**解决**：删除旧的 `<header>` HTML 代码

### 问题：主题切换不工作

**解决**：删除旧的主题切换 JavaScript 代码

### 问题：找不到 components.js

**解决**：检查路径
- 子目录用 `../assets/js/components.js`
- 根目录用 `assets/js/components.js`

## 📚 更多文档

- **详细说明**：查看 `统一组件系统说明.md`
- **完整迁移指南**：查看 `MIGRATION_GUIDE.md`
- **系统文档**：查看 `COMPONENTS_README.md`

## 💡 示例对比

### ❌ 以前（需要写 100+ 行）

```html
<body>
    <header>
        <!-- 50+ 行 Header HTML -->
    </header>
    
    <main>
        <!-- 工具内容 -->
    </main>
    
    <footer>
        <!-- 40+ 行 Footer HTML -->
    </footer>
    
    <script>
        // 20+ 行主题切换代码
        // 工具逻辑
    </script>
</body>
```

### ✅ 现在（只需要 1 行）

```html
<body>
    <!-- Header 自动注入 -->
    
    <main>
        <!-- 工具内容 -->
    </main>
    
    <!-- Footer 自动注入 -->
    
    <script src="../assets/js/components.js"></script>
    <script>
        // 只写工具逻辑
    </script>
</body>
```

**代码减少 70%，效率提升 10 倍！**

## 🎯 下一步

1. ✅ 复制模板创建新页面
2. ✅ 或运行迁移脚本处理旧页面
3. ✅ 在浏览器中测试
4. ✅ 开始享受简化的开发体验！

---

**有问题？** 查看完整文档或联系维护者！

