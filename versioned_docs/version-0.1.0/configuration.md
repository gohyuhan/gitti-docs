---
sidebar_position: 5
---

# Gitti Configurations

## Language Switching
Gitti support i18n (internationalization), the supported language are EN(default), JA (Japanese), ZH-HANS (Simplified Chinese) and ZH-HANT (Traditional Chinese).  
To set the language of gitti you can run the following command

```bash
gitti --language JA
```

The `gitti` command follow by `--language` flag and the language code in capital 

English: `EN`  
Japanese : `JA`  
Simplified Chinese: `ZH-HANS`  
Traditional Chinese: `ZH-HANT`  

## Set Default Branch Naming for Git Init
You can set a default name for the branch when the repo was git initialized else it will be defaulting to use `master`  
To set the default branch name to be use when git init was triggered by gitti, run the following command

```bash
gitti --init-dbranch <BRANCH NAME>
```
replace `<BRANCH NAME>` with the name that you desire.

## Enable or disable auto updater
By default, gitti was configure to auto check for update and will prompt user when there is a newer version.  
If you wish to stay at current version you can choose not to update. And if you wish to disable auto updater completely
you can run the following command

```bash
gitti --auto-update false
```

and if you wish to enable auto updater, you can run  
```bash
gitti --auto-updater true
```
