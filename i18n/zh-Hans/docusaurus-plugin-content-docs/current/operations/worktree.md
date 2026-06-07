---
sidebar_position: 11
description: 在 Gitti 中管理 Git worktree（工作树）— 无需离开仓库即可在终端 UI 中列出、切换、添加、删除、修剪以及锁定/解锁 worktree。
keywords:
  - git worktree
  - git 工作树
  - 管理 git worktree
  - git worktree tui
  - 添加 git worktree
  - 切换 git worktree
  - 修剪 git worktree
  - 锁定 git worktree
---

# Worktree

**Worktree 面板**让您无需离开终端即可直接在 Gitti 中管理 Git worktree — 列出、切换、添加、删除、修剪以及锁定/解锁。worktree 允许您从单个仓库将多个分支检出到不同的目录中。

:::info
Worktree 管理针对您的**主仓库**运行。不支持裸仓库（bare repository）。
:::

## 访问 Worktree 面板

Worktree 面板与**本地分支**、**标签**和**远程**共用左上角的组件面板。

1.  按 `1` 聚焦 **本地分支 / 标签 / 远程 / Worktree** 面板。
2.  按 `>` 向右循环切换面板：本地分支 → 标签 → 远程 → **Worktree**。
3.  按 `<` 返回。

## 键位绑定

| 键          | 操作                   | 备注                                       |
| :---------- | :--------------------- | :----------------------------------------- |
| `< / >`     | 切换组件面板           | 在本地分支、标签、远程和 Worktree 之间切换 |
| `↑ / k`     | 移动到上一条目         |                                            |
| `↓ / j`     | 移动到下一条目         |                                            |
| `enter`     | 切换 Worktree          | 切换到选定的 Worktree                      |
| `n`         | 新建 Worktree          | 打开添加 Worktree 输入流程                 |
| `backspace` | 删除 Worktree          | 打开删除确认弹出窗口                       |
| `o`         | 锁定 / 解锁 Worktree   | 切换锁定状态（主 Worktree 不可用）         |
| `ctrl+p`    | 修剪 Worktree          | 移除陈旧/丢失的 Worktree 引用              |
| `?`         | 快捷键和操作说明       | 打开专用帮助弹出窗口                       |

## 每个条目显示的内容

每个 worktree 条目可能显示以下状态标记：

- **Main** — 主 worktree（无法删除或锁定）。
- **Current Worktree** — 您当前所在的 worktree。
- **Locked** — 已锁定、防止被修剪/删除的 worktree。
- **Locked Reason** — 锁定时提供的原因（如果有）。
- **Prunable** — 目录已丢失/陈旧、可被修剪的 worktree。

## 工作流程

### 添加新的 Worktree

1.  使用 `< / >` 选择 **Worktree** 面板。
2.  按 `n`。
3.  出现**添加新 Worktree**输入弹出窗口：
    - **Worktree 名称** — 新 worktree 的目录名称（必填）。
    - **分支名称** — _可选。_ 要检出的本地或远程分支。使用 `origin/<branch>` 会导致 **detached HEAD**（分离头指针）。
4.  按 `enter` 创建 worktree。

---

### 切换到 Worktree

1.  使用 `↑/↓` 选择目标 worktree。
2.  按 `enter`。

:::note
您无法切换到当前已在的 worktree，也无法切换到**可修剪**（陈旧/丢失）的 worktree。
:::

---

### 锁定 / 解锁 Worktree

锁定可防止 worktree 被修剪或删除。

1.  使用 `↑/↓` 选择目标 worktree。
2.  按 `o`。
    - 若为**未锁定**状态，将出现弹出窗口以输入可选的**锁定原因**，然后将其锁定。
    - 若为**已锁定**状态，则立即解锁。

:::note
**主 worktree** 无法锁定或解锁。
:::

---

### 删除 Worktree

1.  使用 `↑/↓` 选择目标 worktree。
2.  按 `backspace`。
3.  出现显示 worktree 路径的确认弹出窗口。
4.  确认以删除该 worktree。

---

### 修剪 Worktree

清理目录已不存在的 worktree（显示为 **Prunable**）的管理引用。

1.  选择 **Worktree** 面板。
2.  按 `ctrl+p`。
