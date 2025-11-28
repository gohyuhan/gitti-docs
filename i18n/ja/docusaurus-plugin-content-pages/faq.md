---
id: faq
title: Gitti FAQ – Git TUI (ターミナルインターフェース)
slug: /faq
description: Gittiに関するよくある質問。Gittiは、高速で軽量なGit TUI（ターミナルインターフェース）であり、ターミナル内で視覚化されたGitインターフェースを提供します。
---

# Gitti FAQ – Git TUI (ターミナルインターフェース)

## Gittiとは何ですか？

Gittiは、ターミナル内で直接**視覚化されたGitインターフェース**を提供する**Git TUI（ターミナルユーザーインターフェース）**です。キーボードから手を離すことなく、ブランチ、コミット、差分、ファイルを閲覧するのに役立ちます。

## Git TUI（ターミナルインターフェース）とは何ですか？

**Git TUI（ターミナルインターフェース）**は、ターミナルで実行されるテキストベースのUIですが、通常の`git`コマンドよりもアプリケーションのように動作します。長いコマンドを入力する代わりに、キーで操作し、Gitデータを視覚的にレイアウトして表示します。

Gittiは以下に重点を置いています：

- 高速な起動と低いリソース使用量
- ブランチ、コミット、変更の明確で視覚的な表示
- ターミナル内で完結するキーボード駆動のワークフロー

## Gittiは通常のGitコマンドとどう違いますか？

従来のGitコマンドは強力ですが、覚えるのが難しく、次のような基本的な質問に答えるために複数のコマンドが必要になることがよくあります：

- 「このブランチで何が変わったのか？」
- 「このコミットはどこから来たのか？」
- 「どのファイルがステージングされていて、どれがされていないのか？」

Gittiはこの情報を**単一の視覚的インターフェース**で表示します。ターミナルで作業することに変わりはありませんが、生のコマンド出力の代わりに構造化されたビューが表示されます。

## GittiはグラフィカルなGitクライアントの代わりになりますか？

多くのワークフローにとって、はい、なります。Gittiは**ターミナル内の視覚化されたGitインターフェース**を目指しているため、以下のことができます：

- ブランチとコミットの検査
- 変更のステージング、アンステージング、コミット
- 差分の確認

一部の高度な操作やニッチな操作は、CLIやフルGUIの方が簡単な場合がありますが、Gittiは最も一般的な日常のGitタスクをカバーしています。

## Gittiは誰のためのものですか？

Gittiは以下のような人のために設計されています：

- ターミナルで生活する開発者
- 重いGUIではなく**Git TUI**を望むユーザー
- キーボード駆動の高速なワークフローを好む人々

ターミナルで頻繁に`git`を実行し、もっと視覚的であればいいのにと思うなら、Gittiはあなたのためのものです。

## Gittiはどのプラットフォームをサポートしていますか？

Gittiは**Go**と**Bubble Tea**で構築されており、ターミナルがある主要なプラットフォームでうまく動作するように意図されています：

- macOS
- Linux
- Windows（互換性のあるターミナル経由）

現在のインストール手順については、[インストール](/docs/installation)ページをご覧ください。

## Gittiのインストール方法は？

最新のコマンドについては、[インストール](/docs/installation)ガイドをご覧ください。簡単に言うと、通常は以下のようにGittiをインストールできます：

- `go install`（Goツールチェーン）
- パッケージマネージャー（利用可能な場合）

ドキュメントでは、インストールコマンドを最新の状態に保っています。

## Gittiはオープンソースですか？

はい。Gittiはオープンソースであり、GitHubでホストされています。以下のことができます：

- ソースコードの閲覧と監査
- GitHubのissueを通じた再現可能なバグの報告

詳細については、[Gittiリポジトリ](https://github.com/gohyuhan/gitti)をご覧ください。

## GittiはGitの視覚化にどのように役立ちますか？

Gittiは、以下によって**ターミナルでのGit履歴と状態の視覚化**に重点を置いています：

- コミットとブランチを構造化されたビューで表示する
- 現在のブランチとHEADコミットを強調表示する
- ステージングされた変更とされていない変更を明確に表示する

これにより、通常の`git log`や`git status`の出力と比較して、リポジトリを一目で理解するのが簡単になります。

## キーバインディングはどうやって覚えればいいですか？

完全なリストについては、[キーバインディング](/docs/keybindings)ページを確認してください。多くのキーは人気のあるターミナルツールに触発されているため、覚えやすいです。

## どこで助けを求めたり、フィードバックを送ったりできますか？

- [ドキュメント](/docs/intro)を読む
- [GitHub](https://github.com/gohyuhan/gitti)でissueを開く

ユーザビリティ、Gitワークフロー、または**Git TUI**の新しいアイデアに関するフィードバックは特に歓迎します。

## アンインストールとクリーンアップ

### macOS (Homebrew)
```bash
# 1. アンインストール + すべてのバージョンを削除
brew uninstall --force gitti

# 2. タップを削除
brew untap gohyuhan/gitti

# 3. バイナリを直接削除 (シンボリックリンクでない場合やbrewが見逃した場合)
rm -f /opt/homebrew/bin/gitti
rm -f /usr/local/bin/gitti

# 4. gittiのCellarフォルダ全体を削除 (古いkeg)
rm -rf /opt/homebrew/Cellar/gitti
rm -rf /usr/local/Cellar/gitti

# 5. 残っているシンボリックリンクを削除
rm -rf /opt/homebrew/opt/gitti
rm -rf /usr/local/opt/gitti

# 6. gittiのキャッシュされたダウンロードをすべて削除
rm -rf ~/Library/Caches/Homebrew/gitti*
rm -rf ~/Library/Caches/Homebrew/downloads/*gitti*
```

---

### Windows (Scoop)
```powershell
# 1. アプリをアンインストール (すべてのバージョン)
scoop uninstall gitti 2>$null

# 2. バケットを削除
scoop bucket rm gitti 2>$null

# 3. アプリフォルダを完全に削除 (shims + persistを含む)
rm -r -force "$env:USERPROFILE\scoop\apps\gitti" 2>$null

# 4. バケットのクローンを削除
rm -r -force "$env:USERPROFILE\scoop\buckets\gitti" 2>$null

# 5. gittiのキャッシュされたインストーラーをすべて削除
scoop cache rm "gitti*" 2>$null
```

---

### 手動インストール (curl / powershell)

#### macOS / Linux
```bash
# バイナリを削除 (curl経由でインストールした場合)
sudo rm -f /usr/local/bin/gitti
```

#### Windows
```powershell
# バイナリとディレクトリを削除
Remove-Item -Path "$env:LOCALAPPDATA\gitti" -Recurse -Force
```

---

### 設定のクリーンアップ

Gittiの設定ファイルを完全に削除するには:

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
