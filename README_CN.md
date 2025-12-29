# WebUtilityKit.com

> **100+ 隐私优先的工具集，使用 Vanilla JS 和 Tailwind CSS 构建**

[English](README.md) | [简体中文](README_CN.md)

🔗 **在线演示：** [WebUtilityKit.com](https://webutilitykit.com)

---

## 🚀 项目故事

我使用 AI 结对编程在极短时间内构建了这套包含 100+ 工具的完整套件。但真正的秘密在于：**关键不在于更快地写代码，而在于将设计决策编码到 `.cursorrules` 文件中。**

与其为每个工具重复相同的 UI/UX 指令，我创建了一个全面的规则集，它就像"设计系统宪法"。AI 成为你的首席设计师、工程师和 QA 测试员——全部遵循相同的严格准则。

### `.cursorrules` 的哲学

1. **设计即代码：** 每个视觉决策（布局对称性、按钮层级、间距）都被编码为可执行的规则。
2. **UX 零妥协：** 工具必须像原生桌面应用（如 Linear、Raycast），而不是通用的 Web 表单。
3. **架构级隐私：** 客户端处理不是一个功能——它是规则集强制执行的约束。
4. **模板驱动生成：** 灵活的 HTML 骨架确保一致性而不失灵活性。

**结果：** 每个新工具只需约 5分钟即可构建、测试和部署——同时保持生产级质量。

---

## ✨ 核心特性

- 🔒 **100% 客户端处理** – 您的数据永远不会离开您的设备
- ⚡ **即时性能** – 无服务器往返，无加载动画
- 🎨 **沉浸式设计** – 受现代桌面应用启发的高端 UI
- 📱 **移动优先** – 在所有设备上完全响应
- 🌓 **深色模式** – 优雅的主题切换，带 localStorage 持久化
- 🎯 **零依赖** – 纯 Vanilla JS，无框架臃肿
- 🚀 **Cloudflare Pages** – 全球 CDN，加载时间低于 100ms

---

## 🛠️ 技术栈

| 组件 | 技术 | 原因 |
|-----------|-----------|------|
| **框架** | Vanilla JS | 最大性能，零开销 |
| **样式** | Tailwind CSS (CLI) | 实用优先，生产编译 |
| **托管** | Cloudflare Pages | 全球边缘网络，即时部署 |
| **处理** | FileReader API, Web APIs | 仅客户端，隐私优先 |
| **构建** | Tailwind CLI (独立版) | 无需 Node.js/npm |

### 为什么不用传统构建工具？

- **无 webpack/vite/parcel：** 降低复杂性，提高可维护性
- **无 npm 依赖：** 避免供应链风险和版本地狱
- **独立 Tailwind CLI：** 单个可执行文件，无 `node_modules`

---

```

### 智能布局协议
- **类型 A（分屏）：** 自动平衡列，操作按钮对齐底部
- **类型 B（居中工作流）：** 大输入 → 操作 → 结果流程
- **类型 C（多步骤）：** 向导式，带进度指示器

### SEO 与内容结构
每个工具都包括：
- **特性网格：** 2-3 列布局，带 SVG 图标
- **使用步骤：** 大数字指示器，层次清晰
- **FAQ 部分：** 交互式 `<details>` 折叠面板
- **编辑式样式：** 有意对比的排版（900/600 字重）

---

## 🚦 快速开始

### 对于用户
直接访问 [WebUtilityKit.com](https://webutilitykit.com) – 无需安装！

### 对于开发者

1. **克隆仓库：**
   ```bash
   git clone https://github.com/yourusername/my-tools-matrix.git
   cd my-tools-matrix
   ```

2. **启动 Tailwind 监听模式：**
   ```powershell
   # Windows（调整路径为你的 Tailwind CLI 可执行文件）
   D:\APP\tailwindcss-windows-x64.exe -i .\input.css -o .\assets\css\styles.css -w
   ```
   
   ```bash
   # macOS/Linux
   ./tailwindcss -i ./input.css -o ./assets/css/styles.css -w
   ```

3. **本地启动服务：**
   ```bash
   # 使用任何静态服务器，例如：
   python -m http.server 8000
   # 或
   npx serve .
   ```

4. **在浏览器中打开：**
   ```
   http://localhost:8000
   ```

---

## 📁 项目结构

```
my-tools-matrix/
├── index.html              # 主页，带工具网格
├── input.css               # Tailwind 源文件
├── .cursorrules            # AI 设计系统规则集
├── tools-config.js         # 工具元数据，用于导航
├── assets/
│   └── css/
│       └── styles.css      # 编译后的 Tailwind 输出
├── json-formatter/
│   └── index.html          # 单个工具页面
├── image-compressor/
│   └── index.html
└── [100+ 工具目录...]
```

---

## 🤖 `.cursorrules` 详解

### 1. 技术栈约束
```markdown
- 核心：HTML5, Vanilla JS, Tailwind CSS（CLI 编译）
- 禁止：React/Vue, 后端, Node/npm 工具链
- 处理：仅客户端（FileReader, Blob）
```

### 2. 设计角色授权
```markdown
**你是首席 UI/UX 设计师。**
- 在分屏布局中强制执行视觉对称性
- 将操作按钮推送到容器底部
- 主工具容器无边框/阴影
```

### 3. 功能需求
```markdown
- 隐私徽章：绿色药丸形状，居中
- 批处理：为文件工具自动实现
- SEO 结构：编辑级排版
- FAQ：交互式 <details> 折叠面板
```

### 4. 代码生成模板
一个 320 行的 HTML 骨架，包含：
- 预配置的页眉/页脚
- 主题切换逻辑
- 工具包装容器
- 编辑式文章部分

---

## 🎯 添加新工具

1. 创建新目录：`your-tool-name/`
2. 从 `.cursorrules` 复制模板（第 107-322 行）
3. 在 `<script>` 标签内自定义工具逻辑
4. 使用元数据更新 `tools-config.js`
5. Tailwind 监听将自动编译你的新类

**AI 辅助：** 只需告诉你的 AI 助手："按照 .cursorrules 创建一个 [工具名称]"

---

## 🌟 精选工具

- **JSON 格式化** – 美化/压缩，带语法高亮
- **图片压缩** – 批量调整大小，带质量预设
- **密码生成器** – 密码学安全的随机性
- **二维码生成器** – 即时生成，可自定义
- **PDF 工具** – 合并、拆分、旋转、保护（客户端）
- **单位转换器** – 长度、重量、温度、速度、数据
- **计算器** – BMI、贷款、小费、百分比、折扣
- **文本工具** – 大小写转换器、字数统计、Lorem Ipsum
- **加密工具** – MD5、SHA-256、base64 编码

[查看所有 100+ 工具 →](https://webutilitykit.com)

---

## 🤝 贡献

欢迎贡献！请遵循 `.cursorrules` 准则：

1. **Fork 仓库**
2. **创建功能分支：** `git checkout -b feature/new-tool`
3. **遵循模板** 在 `.cursorrules` 中以保持一致性
4. **本地测试** 运行 Tailwind 监听
5. **提交拉取请求** 并附上清晰的描述

### 贡献准则
- ✅ 仅保持客户端处理
- ✅ 使用 Tailwind 实用类（无内联样式）
- ✅ 包含 SEO 部分（使用方法、FAQ、特性）
- ✅ 在明/暗模式下测试
- ✅ 确保移动端响应式

---

## 📄 许可证

**MIT License**

版权所有 (c) 2025 WebUtilityKit.com

特此免费授予任何获得本软件及相关文档文件（"软件"）副本的人不受限制地处理软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许向其提供软件的人这样做，但须符合以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或主要部分中。

本软件按"原样"提供，不提供任何明示或暗示的保证，包括但不限于适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任负责，无论是在合同诉讼、侵权行为还是其他方面，由软件或软件的使用或其他交易引起、产生或与之相关。

---

## 📬 联系方式

- **邮箱：** yinb9933@gmail.com
- **网站：** [WebUtilityKit.com](https://webutilitykit.com)
- **问题反馈：** [GitHub Issues](https://github.com/yourusername/my-tools-matrix/issues)

---

## 🙏 致谢

- **Tailwind CSS** – 出色的实用优先框架
- **Cloudflare Pages** – 超快的全球托管服务
- **AI 结对编程** – 让这个雄心勃勃的项目在极短时间内成为可能

---

<div align="center">

**用 ❤️ 和 AI 构建**

如果觉得有用，请[⭐ Star 这个仓库](https://github.com/yourusername/my-tools-matrix)！

</div>

