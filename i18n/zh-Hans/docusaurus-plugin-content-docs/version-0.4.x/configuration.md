---
sidebar_position: 5
---

# Gitti 配置

## 语言切换

Gitti 支持国际化(i18n)功能,支持的语言包括 EN(英语,默认)、JA(日语)、ZH-HANS(简体中文)和 ZH-HANT(繁体中文)。  
要设置 Gitti 的语言,可以运行以下命令:

```bash
gitti --language JA
```

`gitti`命令后面跟随`--language`标志和大写的语言代码

英语: `EN`  
日语: `JA`  
简体中文: `ZH-HANS`  
繁体中文: `ZH-HANT`

## 设置 Git Init 的默认分支名称

您可以为 git 初始化时的仓库设置默认分支名称,否则将默认使用`master`。  
要设置 Gitti 触发 git init 时使用的默认分支名称,请运行以下命令:

```bash
gitti --init-dbranch <分支名称>
```

将`<分支名称>`替换为您想要的名称。

## 启用或禁用自动更新

默认情况下,Gitti 配置为自动检查更新,并在有新版本时提示用户。  
如果您希望保持当前版本,可以选择不更新。如果您希望完全禁用自动更新,可以运行以下命令:

```bash
gitti --auto-update false
```

如果您希望启用自动更新,可以运行:

```bash
gitti --auto-updater true
```

## 设置首选编辑器

您可以配置 Gitti 在打开文件进行编辑时（例如：在文件上按 `e`）使用的编辑器。默认编辑器是 `vim`。

要设置您的首选编辑器，请运行：

```bash
gitti --editor
```

## 配置提交日志限制

为了提高在大型仓库中的性能，Gitti 默认限制获取的提交日志数量。您可以使用 `--max-commit-log-count` 标志（整数）配置此限制。

```bash
gitti --max-commit-log-count 500
```

## 配置提交图

对于非常大的仓库，Gitti 使用提交图来加速日志检索。您可以启用或禁用提交图的写入。

```bash
gitti --allow-commit-graph-write true
```

## 配置日志面板

Gitti 包含一个日志面板（通过 `/` 访问）。您可以配置保留在内存中的最大日志数量以及 UI 中显示的日志数量。

**设置保留在内存中的最大日志数：**

```bash
gitti --max-log-count 1000
```

**设置面板中显示的日志数：**

```bash
gitti --show-x-log 50
```
