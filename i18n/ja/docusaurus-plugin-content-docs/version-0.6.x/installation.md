---
sidebar_position: 2
---

# インストール

GittiはGoで構築されており、`go install`またはビルド済みのバイナリをダウンロードしてインストールできます。

## 前提条件

- **Git**: Gitがインストールされ、PATHに含まれていることを確認してください。
- **ターミナル**: True Colorをサポートするターミナルエミュレータを推奨します。

## Goでインストール

Goがインストールされている場合（バージョン1.21以上推奨）:

```bash
go install github.com/gohyuhan/gitti@latest
```

`gitti`をどこからでも実行できるように、`$GOPATH/bin`が`$PATH`に含まれていることを確認してください。

## macOS (curl または homebrew)

```bash
curl --proto "=https" -sSfL https://github.com/gohyuhan/gitti/releases/latest/download/install.sh | bash

# homebrew 経由
# タップを追加 (初回のみ)
brew tap gohyuhan/gitti

# 最新版をインストール
brew update && brew install gitti
```

## Linux

```bash
curl --proto "=https" -sSfL https://github.com/gohyuhan/gitti/releases/latest/download/install.sh | bash
```

## Windows (PowerShell または scoop)

```powershell
powershell -c "irm https://github.com/gohyuhan/gitti/releases/latest/download/install.ps1 | iex"

# scoop 経由
# バケットを追加 (初回のみ)
scoop bucket add gitti https://github.com/gohyuhan/scoop-gitti

# 最新版をインストール
scoop update; scoop install gitti
```

## ソースからビルド

1.  リポジトリをクローン:

    ```bash
    git clone git@github.com:gohyuhan/gitti.git
    cd gitti
    ```

2.  バイナリをビルド:

    ```bash
    go build -o gitti .
    ```

3.  PATHに含まれるディレクトリに移動（任意）:
    ```bash
    mv gitti /usr/local/bin/
    ```

## 検証

インストールを確認するには、次のコマンドを実行します:

```bash
gitti --version
```
