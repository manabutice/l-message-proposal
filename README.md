# L Message改善提案サイト

株式会社ミショナ職種別適性テスト提出用のNext.jsサイトです。

## 内容

- L Messageを実際に操作して感じた課題
- 改善案3つ
- 課題カード・改善案カード
- 優先順位表
- 工数見積もり表
- 既存機能との重複確認
- noindex設定
- Basic認証

## Basic認証

- ユーザー名: `missiona`
- パスワード: `kadai`

## ローカルで確認する方法

```bash
npm install
npm run dev
```

ブラウザで以下を開きます。

```text
http://localhost:3000
```

## Vercelで公開する方法

1. このフォルダをGitHubにアップロード
2. Vercelで「Add New Project」
3. GitHubのリポジトリを選択
4. Deploy
5. 発行されたURLを提出フォームに入力

## 提出前チェック

- URLを開くとBasic認証が出る
- `missiona / kadai` でログインできる
- ページが表示される
- スマホでも崩れていない
- noindex設定が入っている
- 提出フォーム送信後の「提出確認用URL」をクリックする
