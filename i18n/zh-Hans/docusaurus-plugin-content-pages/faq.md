---
id: faq
title: Gitti 常见问题 – Git TUI (终端界面)
slug: /faq
description: 关于 Gitti 的常见问题。Gitti 是一个快速、轻量级的 Git TUI（终端界面），在您的终端中提供可视化的 Git 界面。
---

# Gitti 常见问题 – Git TUI (终端界面)

## 什么是 Gitti？

Gitti 是一个 **Git TUI（终端用户界面）**，它直接在您的终端内为您提供**可视化的 Git 界面**。它可以帮助您浏览分支、提交、差异和文件，而无需离开键盘。

## 什么是 Git TUI（终端界面）？

**Git TUI（终端界面）** 是一个基于文本的 UI，它在您的终端中运行，但行为更像是一个应用程序，而不是普通的 `git` 命令。您无需输入长命令，而是使用按键进行导航，并以可视化方式查看 Git 数据。

Gitti 专注于：

- 快速启动和低资源占用
- 分支、提交和更改的清晰可视化视图
- 留在终端内的键盘驱动工作流

## Gitti 与普通 Git 命令有何不同？

传统的 Git 命令功能强大，但难以记忆，并且通常需要多个命令来回答基本问题，例如：

- "这个分支有什么变化？"
- "这个提交是从哪里来的？"
- "哪些文件已暂存，哪些未暂存？"

Gitti 在**单个可视化界面**中显示此信息。您仍然在终端中工作，但您看到的是结构化视图，而不是原始命令输出。

## Gitti 可以取代我的图形化 Git 客户端吗？

对于许多工作流程，是的。Gitti 旨在成为**终端内的可视化 Git 界面**，因此您可以：

- 检查分支和提交
- 暂存、取消暂存和提交更改
- 查看差异

一些高级或小众操作可能仍然使用 CLI 或完整的 GUI 更容易，但 Gitti 涵盖了最常见的日常 Git 任务。

## Gitti 适合谁？

Gitti 专为以下人群设计：

- 生活在终端中的开发人员
- 想要 **Git TUI** 而不是沉重 GUI 的用户
- 喜欢键盘驱动、快速工作流的人

如果您经常在终端中运行 `git` 并希望它更直观，那么 Gitti 适合您。

## Gitti 支持哪些平台？

Gitti 使用 **Go** 和 **Bubble Tea** 构建，旨在在拥有终端的主要平台上良好运行：

- macOS
- Linux
- Windows（通过兼容的终端）

有关当前的安装说明，请参阅 [安装](/docs/installation) 页面。

## 如何安装 Gitti？

请转到 [安装](/docs/installation) 指南以获取最新的命令。简而言之，您通常可以通过以下方式安装 Gitti：

- `go install`（Go 工具链）
- 包管理器（如果可用）

文档会保持安装命令的最新状态。

## Gitti 是开源的吗？

是的。Gitti 是开源的，托管在 GitHub 上。您可以：

- 阅读和审核源代码
- 通过 GitHub issues 报告可复现的错误

有关详细信息，请访问 [Gitti 存储库](https://github.com/gohyuhan/gitti)。

## Gitti 如何帮助 Git 可视化？

Gitti 专注于通过以下方式**在终端中可视化 Git 历史和状态**：

- 在结构化视图中呈现提交和分支
- 高亮显示当前分支和 HEAD 提交
- 清晰地显示已暂存与未暂存的更改

这使得与普通的 `git log` 或 `git status` 输出相比，一眼就能更容易地理解您的存储库。

## 如何学习键绑定？

查看 [键绑定](/docs/keybindings) 页面以获取完整列表。许多按键都受到流行终端工具的启发，因此很容易记住。

## 我在哪里可以获得帮助或提供反馈？

- 阅读 [文档](/docs/intro)
- 在 [GitHub](https://github.com/gohyuhan/gitti) 上打开一个 issue

特别欢迎关于可用性、Git 工作流或 **Git TUI** 新想法的反馈。

## 卸载与清理

### macOS (Homebrew)
```bash
# 1. 卸载 + 删除所有版本
brew uninstall --force gitti

# 2. 移除 tap
brew untap gohyuhan/gitti

# 3. 直接删除二进制文件 (以防它不是符号链接或 brew 遗漏了它)
rm -f /opt/homebrew/bin/gitti
rm -f /usr/local/bin/gitti

# 4. 删除 gitti 的整个 Cellar 文件夹 (旧 keg)
rm -rf /opt/homebrew/Cellar/gitti
rm -rf /usr/local/Cellar/gitti

# 5. 删除任何残留的符号链接
rm -rf /opt/homebrew/opt/gitti
rm -rf /usr/local/opt/gitti

# 6. 删除 gitti 的所有缓存下载
rm -rf ~/Library/Caches/Homebrew/gitti*
rm -rf ~/Library/Caches/Homebrew/downloads/*gitti*
```

---

### Windows (Scoop)
```powershell
# 1. 卸载应用程序 (所有版本)
scoop uninstall gitti 2>$null

# 2. 移除 bucket
scoop bucket rm gitti 2>$null

# 3. 完全删除应用程序文件夹 (包括 shims + persist)
rm -r -force "$env:USERPROFILE\scoop\apps\gitti" 2>$null

# 4. 删除 bucket 克隆
rm -r -force "$env:USERPROFILE\scoop\buckets\gitti" 2>$null

# 5. 删除 gitti 的所有缓存安装程序
scoop cache rm "gitti*" 2>$null
```

---

### 手动安装 (curl / powershell)

#### macOS / Linux
```bash
# 删除二进制文件 (如果通过 curl 安装)
sudo rm -f /usr/local/bin/gitti
```

#### Windows
```powershell
# 删除二进制文件和目录
Remove-Item -Path "$env:LOCALAPPDATA\gitti" -Recurse -Force
```

---

### 配置清理

要完全删除 Gitti 的配置文件：

#### macOS
```bash
rm -rf "$HOME/Library/Application Support/gitti"
```

#### Linux
```bash
rm -rf "$HOME/.config/gitti"
```

#### Windows
```powershell
Remove-Item -Path "$env:APPDATA\gitti" -Recurse -Force
```
