---
sidebar_position: 5
---

# Gitti設定

## 語言切換
Gitti支援國際化(i18n)功能,支援的語言包括EN(英語,預設)、JA(日語)、ZH-HANS(簡體中文)和ZH-HANT(繁體中文)。  
要設定Gitti的語言,可以執行以下指令:

```bash
gitti --language JA
```

`gitti`指令後面跟隨`--language`旗標和大寫的語言代碼

英語: `EN`  
日語: `JA`  
簡體中文: `ZH-HANS`  
繁體中文: `ZH-HANT`

## 設定Git Init的預設分支名稱
您可以為git初始化時的儲存庫設定預設分支名稱,否則將預設使用`master`。  
要設定Gitti觸發git init時使用的預設分支名稱,請執行以下指令:

```bash
gitti --init-dbranch <分支名稱>
```
將`<分支名稱>`替換為您想要的名稱。

## 啟用或停用自動更新
預設情況下,Gitti設定為自動檢查更新,並在有新版本時提示使用者。  
如果您希望保持目前版本,可以選擇不更新。如果您希望完全停用自動更新,可以執行以下指令:

```bash
gitti --auto-update false
```

如果您希望啟用自動更新,可以執行:
```bash
gitti --auto-updater true
```
