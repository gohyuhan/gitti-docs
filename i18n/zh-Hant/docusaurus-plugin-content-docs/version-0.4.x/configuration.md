---
sidebar_position: 5
---

# Gitti 設定

## 語言切換

Gitti 支援國際化(i18n)功能,支援的語言包括 EN(英語,預設)、JA(日語)、ZH-HANS(簡體中文)和 ZH-HANT(繁體中文)。  
要設定 Gitti 的語言,可以執行以下指令:

```bash
gitti --language JA
```

`gitti`指令後面跟隨`--language`旗標和大寫的語言代碼

英語: `EN`  
日語: `JA`  
簡體中文: `ZH-HANS`  
繁體中文: `ZH-HANT`

## 設定 Git Init 的預設分支名稱

您可以為 git 初始化時的儲存庫設定預設分支名稱,否則將預設使用`master`。  
要設定 Gitti 觸發 git init 時使用的預設分支名稱,請執行以下指令:

```bash
gitti --init-dbranch <分支名稱>
```

將`<分支名稱>`替換為您想要的名稱。

## 啟用或停用自動更新

預設情況下,Gitti 設定為自動檢查更新,並在有新版本時提示使用者。  
如果您希望保持目前版本,可以選擇不更新。如果您希望完全停用自動更新,可以執行以下指令:

```bash
gitti --auto-update false
```

如果您希望啟用自動更新,可以執行:

```bash
gitti --auto-updater true
```

## 設定首選編輯器

您可以配置 Gitti 在打開檔案進行編輯時（例如：在檔案上按 `e`）使用的編輯器。預設編輯器是 `vim`。

要設定您的首選編輯器，請執行：

```bash
gitti --editor
```

## 配置提交日誌限制

為了提高在大型儲存庫中的效能，Gitti 預設限制獲取的提交日誌數量。您可以使用 `--max-commit-log-count` 標誌（整數）配置此限制。

```bash
gitti --max-commit-log-count 500
```

## 配置提交圖

對於非常大的儲存庫，Gitti 使用提交圖來加速日誌檢索。您可以啟用或停用提交圖的寫入。

```bash
gitti --allow-commit-graph-write true
```

## 配置日誌面板

Gitti 包含一個日誌面板（通過 `/` 訪問）。您可以配置保留在內存中的最大日誌數量以及 UI 中顯示的日誌數量。

**設定保留在內存中的最大日誌數：**

```bash
gitti --max-log-count 1000
```

**設定面板中顯示的日誌數：**

```bash
gitti --show-x-log 50
```
