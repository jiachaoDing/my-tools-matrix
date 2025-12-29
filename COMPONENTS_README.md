# 统一组件管理系统

## 🎯 概述

为了统一管理项目中 100+ 个工具页面的 Header 和 Footer，我们创建了一个基于 JavaScript 的组件注入系统。

## 📁 文件结构

```
my-tools-matrix/
├── assets/
│   └── js/
│       └── components.js          # 核心组件文件
├── _template-with-components.html # 工具页面模板
├── _template-root-with-components.html # 根页面模板
├── MIGRATION_GUIDE.md             # 详细迁移指南
├── migrate-to-components.ps1      # 批量迁移脚本
└── test-components/
    └── index.html                 # 测试页面
```

## 🚀 快速开始

### 新建页面

直接复制 `_template-with-components.html` 或 `_template-root-with-components.html`，然后修改内容即可。

### 在现有页面中使用

在 `</body>` 之前添加：

```html
<!-- 统一组件管理 -->
<script src="../assets/js/components.js"></script>
```

**就这么简单！** Header、Footer 和主题切换会自动注入和初始化。

## ✨ 功能特性

- ✅ **自动注入** Header 和 Footer
- ✅ **统一管理** 所有页面的布局
- ✅ **主题切换** 深色/浅色模式，并持久化保存
- ✅ **路径智能** 自动识别根目录和子目录页面
- ✅ **配置集中** 一处修改，全站生效
- ✅ **零依赖** 纯 Vanilla JS，无框架

## 🔧 配置

编辑 `assets/js/components.js` 中的配置：

```javascript
const SITE_CONFIG = {
    name: 'WebUtilityKit',        // 网站名称
    domain: '.com',                // 域名后缀
    email: 'yinb9933@gmail.com',  // 联系邮箱
    githubRepo: 'https://github.com/jiachaoDing/my-tools-matrix',
    githubIssues: 'https://github.com/jiachaoDing/my-tools-matrix/issues'
};
```

## 🔄 迁移现有页面

### 方法一：手动迁移（推荐用于少量页面）

参考 `MIGRATION_GUIDE.md` 中的详细步骤。

### 方法二：批量迁移（推荐用于大量页面）

运行 PowerShell 脚本：

```powershell
.\migrate-to-components.ps1
```

脚本会自动：
- 删除旧的 Header/Footer HTML
- 删除旧的主题切换代码
- 注入新的组件脚本引用
- 创建备份文件（.backup）

## 🧪 测试

访问 `test-components/index.html` 来测试组件系统是否正常工作。

测试清单：
- [ ] Header 显示正常
- [ ] Footer 显示正常
- [ ] 主题切换功能正常
- [ ] 主题持久化保存
- [ ] 所有链接可点击

## 🎨 自定义样式

如果需要修改 Header 或 Footer 的样式，编辑 `components.js` 中的 `createHeader()` 和 `createFooter()` 函数。

## 📊 优势对比

### ❌ 之前（手动管理）

- 每个页面都有重复的 Header/Footer HTML（100+ 份）
- 修改邮箱需要改 100+ 个文件
- 主题逻辑分散在每个页面
- 维护困难，容易出错

### ✅ 现在（统一组件）

- Header/Footer 只在一个文件中定义
- 修改配置只需改一处
- 主题逻辑统一管理
- 易于维护，代码清晰

## 🛠️ 技术细节

- **组件注入时机**: `DOMContentLoaded` 或立即执行（如果 DOM 已加载）
- **插入位置**: Header 在 `<body>` 开头，Footer 在 `<body>` 结尾
- **主题存储**: 使用 `localStorage.theme` 持久化保存
- **路径识别**: 通过 `window.location.pathname` 判断当前页面位置

## 📝 注意事项

1. **路径问题**: 确保正确使用相对路径
   - 子目录: `../assets/js/components.js`
   - 根目录: `assets/js/components.js`

2. **执行顺序**: 组件脚本应在工具逻辑之前引入

3. **ID 冲突**: 如果工具页面有 `#theme-toggle` ID，请重命名

4. **自定义需求**: 如果某个页面需要特殊的 Header/Footer，暂时不要使用组件系统

## 🔗 相关链接

- [详细迁移指南](MIGRATION_GUIDE.md)
- [工具页面模板](_template-with-components.html)
- [测试页面](test-components/index.html)

## 💡 未来计划

- [ ] 添加面包屑导航
- [ ] 添加页面搜索功能
- [ ] 添加通知系统
- [ ] 支持自定义主题色

---

**维护者**: WebUtilityKit Team  
**更新日期**: 2025-12-29

