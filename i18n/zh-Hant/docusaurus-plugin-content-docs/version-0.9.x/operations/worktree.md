---
sidebar_position: 11
description: 在 Gitti 中管理 Git worktree（工作樹）— 無需離開倉庫即可在終端 UI 中列出、切換、添加、刪除、修剪以及鎖定/解鎖 worktree。
keywords:
  - git worktree
  - git 工作樹
  - 管理 git worktree
  - git worktree tui
  - 添加 git worktree
  - 切換 git worktree
  - 修剪 git worktree
  - 鎖定 git worktree
---

# Worktree

**Worktree 面板**讓您無需離開終端即可直接在 Gitti 中管理 Git worktree — 列出、切換、添加、刪除、修剪以及鎖定/解鎖。worktree 允許您從單一倉庫將多個分支檢出到不同的目錄中。

:::info
Worktree 管理針對您的**主倉庫**執行。不支援裸倉庫（bare repository）。
:::

## 存取 Worktree 面板

Worktree 面板與**本地分支**、**標籤**和**遠端**共用左上角的組件面板。

1.  按 `1` 聚焦 **本地分支 / 標籤 / 遠端 / Worktree** 面板。
2.  按 `>` 向右循環切換面板：本地分支 → 標籤 → 遠端 → **Worktree**。
3.  按 `<` 返回。

## 鍵位綁定

| 鍵          | 操作                   | 備註                                       |
| :---------- | :--------------------- | :----------------------------------------- |
| `< / >`     | 切換組件面板           | 在本地分支、標籤、遠端和 Worktree 之間切換 |
| `↑ / k`     | 移動到上一條目         |                                            |
| `↓ / j`     | 移動到下一條目         |                                            |
| `enter`     | 切換 Worktree          | 切換到選定的 Worktree                      |
| `n`         | 新建 Worktree          | 打開添加 Worktree 輸入流程                 |
| `backspace` | 刪除 Worktree          | 打開刪除確認彈出視窗                       |
| `o`         | 鎖定 / 解鎖 Worktree   | 切換鎖定狀態（主 Worktree 不可用）         |
| `ctrl+p`    | 修剪 Worktree          | 移除陳舊/遺失的 Worktree 引用              |
| `F`         | 篩選 Worktree 清單     | 輸入以篩選，`enter` 套用，`esc` 清除       |
| `?`         | 快捷鍵和操作說明       | 打開專用說明彈出視窗                       |

## 每個條目顯示的內容

每個 worktree 條目可能顯示以下狀態標記：

- **Main** — 主 worktree（無法刪除或鎖定）。
- **Current Worktree** — 您當前所在的 worktree。
- **Locked** — 已鎖定、防止被修剪/刪除的 worktree。
- **Locked Reason** — 鎖定時提供的原因（如果有）。
- **Prunable** — 目錄已遺失/陳舊、可被修剪的 worktree。

## 工作流程

### 添加新的 Worktree

1.  使用 `< / >` 選擇 **Worktree** 面板。
2.  按 `n`。
3.  出現**添加新 Worktree**輸入彈出視窗：
    - **Worktree 名稱** — 新 worktree 的目錄名稱（必填）。
    - **分支名稱** — _可選。_ 要檢出的本地或遠端分支。使用 `origin/<branch>` 會導致 **detached HEAD**（分離頭指針）。
4.  按 `enter` 創建 worktree。

---

### 切換到 Worktree

1.  使用 `↑/↓` 選擇目標 worktree。
2.  按 `enter`。

:::note
您無法切換到當前已在的 worktree，也無法切換到**可修剪**（陳舊/遺失）的 worktree。
:::

---

### 鎖定 / 解鎖 Worktree

鎖定可防止 worktree 被修剪或刪除。

1.  使用 `↑/↓` 選擇目標 worktree。
2.  按 `o`。
    - 若為**未鎖定**狀態，將出現彈出視窗以輸入可選的**鎖定原因**，然後將其鎖定。
    - 若為**已鎖定**狀態，則立即解鎖。

:::note
**主 worktree** 無法鎖定或解鎖。
:::

---

### 刪除 Worktree

1.  使用 `↑/↓` 選擇目標 worktree。
2.  按 `backspace`。
3.  出現顯示 worktree 路徑的確認彈出視窗。
4.  確認以刪除該 worktree。

---

### 修剪 Worktree

清理目錄已不存在的 worktree（顯示為 **Prunable**）的管理引用。

1.  選擇 **Worktree** 面板。
2.  按 `ctrl+p`。
