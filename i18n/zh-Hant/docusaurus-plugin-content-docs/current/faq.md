---
id: faq
title: Gitti 常見問題 – Git TUI (終端介面)
slug: /faq
description: 關於 Gitti 的常見問題。Gitti 是一個快速、輕量級的 Git TUI（終端介面），在您的終端中提供視覺化的 Git 介面。
---

# Gitti 常見問題 – Git TUI (終端介面)

## 什麼是 Gitti？

Gitti 是一個 **Git TUI（終端使用者介面）**，它直接在您的終端內為您提供**視覺化的 Git 介面**。它可以幫助您瀏覽分支、提交、差異和檔案，而無需離開鍵盤。

## 什麼是 Git TUI（終端介面）？

**Git TUI（終端介面）** 是一個基於文字的 UI，它在您的終端中執行，但行為更像是一個應用程式，而不是普通的 `git` 命令。您無需輸入長命令，而是使用按鍵進行導航，並以視覺化方式檢視 Git 資料。

Gitti 專注於：

- 快速啟動和低資源佔用
- 分支、提交和變更的清晰視覺化檢視
- 留在終端內的鍵盤驅動工作流

## Gitti 與普通 Git 命令有何不同？

傳統的 Git 命令功能強大，但難以記憶，並且通常需要多個命令來回答基本問題，例如：

- 「這個分支有什麼變化？」
- 「這個提交是從哪裡來的？」
- 「哪些檔案已暫存，哪些未暫存？」

Gitti 在**單個視覺化介面**中顯示此資訊。您仍然在終端中工作，但您看到的是結構化檢視，而不是原始命令輸出。

## Gitti 可以取代我的圖形化 Git 客戶端嗎？

對於許多工作流程，是的。Gitti 旨在成為**終端內的視覺化 Git 介面**，因此您可以：

- 檢查分支和提交
- 暫存、取消暫存和提交變更
- 檢視差異

一些高階或小眾操作可能仍然使用 CLI 或完整的 GUI 更容易，但 Gitti 涵蓋了最常見的日常 Git 任務。

## Gitti 適合誰？

Gitti 專為以下人群設計：

- 生活在終端中的開發人員
- 想要 **Git TUI** 而不是沉重 GUI 的使用者
- 喜歡鍵盤驅動、快速工作流的人

如果您經常在終端中執行 `git` 並希望它更直觀，那麼 Gitti 適合您。

## Gitti 支援哪些平台？

Gitti 使用 **Go** 和 **Bubble Tea** 構建，旨在在擁有終端的主要平台上良好執行：

- macOS
- Linux
- Windows（透過相容的終端）

有關目前的安裝說明，請參閱 [安裝](./installation.md) 頁面。

## 如何安裝 Gitti？

請轉到 [安裝](./installation.md) 指南以獲取最新的命令。簡而言之，您通常可以透過以下方式安裝 Gitti：

- `go install`（Go 工具鏈）
- 套件管理器（如果可用）

文件會保持安裝命令的最新狀態。

## Gitti 是開源的嗎？

是的。Gitti 是開源的，託管在 GitHub 上。您可以：

- 閱讀和稽核原始程式碼
- 透過 GitHub issues 報告可複現的錯誤

有關詳細資訊，請訪問 [Gitti 儲存庫](https://github.com/gohyuhan/gitti)。

## Gitti 如何幫助 Git 視覺化？

Gitti 專注於透過以下方式**在終端中視覺化 Git 歷史和狀態**：

- 在結構化檢視中呈現提交和分支
- 高亮顯示目前分支和 HEAD 提交
- 清晰地顯示已暫存與未暫存的變更

這使得與普通的 `git log` 或 `git status` 輸出相比，一眼就能更容易地理解您的儲存庫。

## 如何學習鍵綁定？

檢視 [鍵綁定](./keybindings.md) 頁面以獲取完整列表。許多按鍵都受到流行終端工具的啟發，因此很容易記住。

## 我在哪裡可以獲得幫助或提供反饋？

- 閱讀 [文件](./intro.md)
- 在 [GitHub](https://github.com/gohyuhan/gitti) 上開啟一個 issue

特別歡迎關於可用性、Git 工作流或 **Git TUI** 新想法的反饋。

## 解除安裝與清理

### macOS (Homebrew)
```bash
# 1. 解除安裝 + 刪除所有版本
brew uninstall --force gitti

# 2. 移除 tap
brew untap gohyuhan/gitti

# 3. 直接刪除二進位檔案 (以防它不是符號連結或 brew 遺漏了它)
rm -f /opt/homebrew/bin/gitti
rm -f /usr/local/bin/gitti

# 4. 刪除 gitti 的整個 Cellar 資料夾 (舊 keg)
rm -rf /opt/homebrew/Cellar/gitti
rm -rf /usr/local/Cellar/gitti

# 5. 刪除任何殘留的符號連結
rm -rf /opt/homebrew/opt/gitti
rm -rf /usr/local/opt/gitti

# 6. 刪除 gitti 的所有快取下載
rm -rf ~/Library/Caches/Homebrew/gitti*
rm -rf ~/Library/Caches/Homebrew/downloads/*gitti*
```

### Windows (Scoop)
```powershell
# 1. 解除安裝應用程式 (所有版本)
scoop uninstall gitti 2>$null

# 2. 移除 bucket
scoop bucket rm gitti 2>$null

# 3. 完全刪除應用程式資料夾 (包括 shims + persist)
rm -r -force "$env:USERPROFILE\scoop\apps\gitti" 2>$null

# 4. 刪除 bucket 複製
rm -r -force "$env:USERPROFILE\scoop\buckets\gitti" 2>$null

# 5. 刪除 gitti 的所有快取安裝程式
scoop cache rm "gitti*" 2>$null
```

### 手動安裝 (curl / powershell)

#### macOS / Linux
```bash
# 刪除二進位檔案 (如果透過 curl 安裝)
sudo rm -f /usr/local/bin/gitti
```

#### Windows
```powershell
# 刪除二進位檔案和目錄
Remove-Item -Path "$env:LOCALAPPDATA\gitti" -Recurse -Force
```

### 設定清理

要完全刪除 Gitti 的配置檔案：

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
