---
sidebar_position: 2
---

# インストール

GittiはGoで構築されており、`go install`を使用するか、ビルド済みのバイナリをダウンロードしてインストールできます。

## 前提条件

- **Git**: Gitがインストールされ、PATHに含まれていることを確認してください。
- **ターミナル**: True Colorをサポートするターミナルエミュレータを推奨します。

## Goを使用したインストール

Goがインストールされている場合（バージョン1.21以上推奨）:

```bash
go install github.com/gohyuhan/gitti@latest
```

`gitti`をどこからでも実行できるように、`$GOPATH/bin`が`$PATH`に含まれていることを確認してください。

## ソースからビルド

1.  リポジトリをクローンします:
    ```bash
    git clone https://github.com/gohyuhan/gitti.git
    cd gitti
    ```

2.  バイナリをビルドします:
    ```bash
    go build -o gitti .
    ```

3.  PATHに含まれるディレクトリに移動します（オプション）:
    ```bash
    mv gitti /usr/local/bin/
    ```

## 検証

以下のコマンドを実行して、インストールを確認します:

```bash
gitti --version
```
