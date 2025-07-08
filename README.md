# Vercel Test Monorepo

这是一个使用 pnpm workspace 管理的 monorepo 项目，包含两个子项目：
- `web`: React + Vite + TypeScript 项目
- `website`: Next.js + TypeScript 项目

## 🚀 项目结构

```
vercel-test/
├── .github/
│   └── workflows/
│       └── ci.yml                    # GitHub Actions CI 工作流
├── web/                              # React 项目
│   ├── src/
│   │   ├── components/
│   │   ├── utils/
│   │   └── test/
│   ├── package.json
│   └── vitest.config.ts
├── website/                          # Next.js 项目
│   ├── src/
│   │   ├── app/
│   │   ├── utils/
│   │   └── test/
│   ├── package.json
│   └── vitest.config.ts
├── package.json                      # 根 package.json
├── pnpm-workspace.yaml               # pnpm workspace 配置
└── README.md
```

## 🛠️ 技术栈

- **包管理器**: pnpm
- **构建工具**: Vite (React) + Next.js
- **测试框架**: Vitest
- **类型检查**: TypeScript
- **样式**: Tailwind CSS
- **CI/CD**: GitHub Actions

## 📋 快速开始

### 安装依赖

```bash
# 安装所有项目的依赖
pnpm install
```

### 开发模式

```bash
# 同时启动两个项目的开发服务器
pnpm dev

# 或者单独启动
pnpm --filter web dev      # 启动 React 项目
pnpm --filter website dev  # 启动 Next.js 项目
```

### 运行测试

```bash
# 运行所有项目的测试
pnpm test:run

# 或者单独运行
pnpm test:web               # 只运行 React 项目测试
pnpm test:website          # 只运行 Next.js 项目测试

# 交互式测试模式
pnpm test
```

### 构建项目

```bash
# 构建所有项目
pnpm build

# 或者单独构建
pnpm --filter web build      # 构建 React 项目
pnpm --filter website build  # 构建 Next.js 项目
```

### 代码检查

```bash
# 运行所有项目的 lint
pnpm lint

# 或者单独运行
pnpm --filter web lint      # 检查 React 项目
pnpm --filter website lint  # 检查 Next.js 项目
```

## 🔧 可用脚本

在根目录下可以使用以下脚本：

- `pnpm dev` - 同时启动两个项目的开发服务器
- `pnpm build` - 构建所有项目
- `pnpm test` - 运行所有测试（交互模式）
- `pnpm test:run` - 运行所有测试（一次性）
- `pnpm test:web` - 只运行 React 项目测试
- `pnpm test:website` - 只运行 Next.js 项目测试
- `pnpm lint` - 运行所有项目的代码检查
- `pnpm clean` - 清理构建文件

## 🚀 GitHub Actions CI/CD

本项目配置了完整的 GitHub Actions 工作流，当代码推送到 `main` 分支时会自动触发：

### 工作流程

1. **代码质量检查 (Lint)**
   - 检查代码格式和语法
   - 并行检查两个项目

2. **测试 (Test)**
   - 在 Node.js 18.x 和 20.x 上运行测试
   - 并行测试两个项目
   - 生成测试报告

3. **构建 (Build)**
   - 验证项目是否能正确构建
   - 并行构建两个项目
   - 上传构建产物

4. **结果汇总 (Summary)**
   - 检查所有步骤的结果
   - 提供最终的 CI 状态

### 触发条件

- 推送到 `main` 分支
- 向 `main` 分支提交 Pull Request

### 测试矩阵

- **Node.js 版本**: 18.x, 20.x
- **项目**: web, website
- **总共**: 4 个测试任务并行运行

## 📊 测试覆盖

### Web 项目测试

- ✅ App 组件测试 (10 个测试)
- ✅ 工具函数测试 (28 个测试)
- ✅ 交互测试和状态管理测试

### Website 项目测试

- ✅ 数学工具函数测试 (27 个测试)
- ✅ 包括 `1+1=2` 验证测试
- ✅ 边界情况和错误处理测试

**总计**: 65 个测试用例，全部通过 ✅

## 🎯 特性

- 🔧 **Monorepo 管理**: 使用 pnpm workspace 统一管理依赖
- 🧪 **完整测试**: 两个项目都配置了 vitest 测试框架
- 🚀 **自动化 CI**: GitHub Actions 自动运行测试和构建
- 📦 **并行构建**: 支持同时开发和构建多个项目
- 🎨 **现代化 UI**: 两个项目都采用 AI 风格的现代界面
- 📊 **测试报告**: 自动生成测试结果和构建产物

## 📝 开发规范

1. **提交代码前**: 确保运行 `pnpm test:run` 和 `pnpm lint`
2. **添加新功能**: 请为新功能添加对应的测试用例
3. **修改依赖**: 在对应的子项目中添加，而不是根目录
4. **代码格式**: 使用项目配置的 ESLint 和 Prettier 规则

## 🔍 故障排除

### 常见问题

1. **pnpm 版本问题**: 确保使用 pnpm 8.x 以上版本
2. **Node.js 版本**: 推荐使用 Node.js 18.x 或 20.x
3. **依赖安装失败**: 尝试清除缓存 `pnpm store prune`

### 清理项目

```bash
# 清理所有 node_modules
find . -name "node_modules" -type d -exec rm -rf {} +

# 清理 pnpm 缓存
pnpm store prune

# 重新安装依赖
pnpm install
```

## �� 许可证

MIT License 