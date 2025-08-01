# GPT Prompts 提示词分享平台

一个专为工作提效打造的 GPT Prompts 提示词分享网站，帮助用户快速找到高质量的 AI 提示词模板。

## 🎯 项目简介

本项目是一个纯前端的 GPT Prompts 提示词分享平台，旨在为用户提供：

- 📝 展示工作提示词模板
- 🔍 每种提示词都支持添加适合的部门，作为标签
- 🔍 支持根据类型筛选提示词
- 🔍 支持搜索提示词
- 📋 一键复制粘贴功能


## 🛠️ 技术栈

- **框架**: [Next.js 14](https://nextjs.org/) - React 全栈框架
- **语言**: TypeScript - 类型安全的 JavaScript
- **样式**: Tailwind CSS - 实用优先的 CSS 框架
- **UI组件**: shadcn/ui - 现代化组件库
- **图标**: Lucide React - 美观的图标库
- **部署**: Vercel - 零配置部署平台
- **数据存储**: 静态 JSON 文件 (无后端/数据库)

## 🎨 UI风格

### 设计原则

本项目采用**简洁高级**的设计风格，遵循以下核心原则：

- **极简主义**: 去除冗余元素，专注于内容本身
- **现代感**: 使用当代流行的设计语言和交互模式
- **可读性**: 优秀的排版和对比度，确保信息清晰传达
- **一致性**: 统一的视觉语言和交互规范
- **响应式**: 完美适配各种设备和屏幕尺寸

### 可访问性

- 确保颜色对比度符合 WCAG 2.1 AA 标准
- 为交互元素提供清晰的焦点状态
- 使用语义化的 HTML 标签
- 为图片和图标提供适当的 alt 文本
- 支持键盘导航

### 暗色模式支持

```css
/* 暗色模式适配 */
dark:bg-gray-900 dark:text-white
dark:border-gray-700
dark:hover:bg-gray-800
```

通过遵循以上UI风格指南，确保整个应用具有统一、现代、易用的视觉体验。


## 📋 待办事项

- [ ] 设计并实现主页布局：包括网址标题、分类导航栏、搜索框、提示词列表
- [ ] 实现提示词列表：卡片式设计，每个包含标题、复制按钮、简介、提示词的具体内容、标签；每个卡片的宽度相同，高度也相同，提示词在区域内显示不下的话，需要滚动条；
- [ ] 添加分类筛选功能
- [ ] 实现搜索功能


## 🚀 快速开始

### 环境要求
- Node.js 18.0 或更高版本
- npm、yarn、pnpm 或 bun

### 安装依赖
```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 启动开发服务器
```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看项目。

### 构建生产版本
```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

## 📁 项目结构

```
gptprompts/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # React 组件
│   ├── lib/                 # 工具函数和配置
│   ├── data/                # 静态数据文件
│   └── types/               # TypeScript 类型定义
├── public/                  # 静态资源
├── package.json
└── README.md
```

## 🌐 部署

### Vercel 部署（推荐）

1. 将代码推送到 GitHub 仓库
2. 在 [Vercel](https://vercel.com) 中导入项目
3. Vercel 会自动检测 Next.js 项目并进行部署
4. 每次推送到主分支都会自动重新部署

### 手动部署

```bash
# 构建项目
npm run build

# 导出静态文件（如需要）
npm run export
```

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Next.js](https://nextjs.org/) - 强大的 React 框架
- [Tailwind CSS](https://tailwindcss.com/) - 优秀的 CSS 框架
- [shadcn/ui](https://ui.shadcn.com/) - 精美的组件库
- [Vercel](https://vercel.com/) - 优秀的部署平台
