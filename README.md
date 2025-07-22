# TODO App

シンプルで使いやすいTODOアプリケーション。タスクの管理、期限設定、完了状態の管理が可能です。

## 機能

- ✅ タスクの追加・編集・削除
- 📅 期限の設定と管理
- 🎯 完了状態の切り替え
- 🔍 完了済みタスクの表示/非表示
- 💾 ローカルストレージによるデータ永続化
- 📱 レスポンシブデザイン

## 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Storage**: Local Storage

## セットアップ

### 必要な環境

- Node.js 18.0.0以上
- npm または yarn

### インストール

```bash
# リポジトリのクローン
git clone [repository-url]
cd todo-app

# 依存関係のインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認できます。

## 使用方法

### タスクの追加

1. 「タスク名」フィールドにタスクを入力
2. 必要に応じて「期限」を設定
3. 「タスクを追加」ボタンをクリック、またはEnterキーを押す

### タスクの編集

1. タスクの「編集」ボタンをクリック
2. タスク名や期限を変更
3. 「保存」をクリックして変更を保存

### タスクの削除

1. タスクの「削除」ボタンをクリック
2. 確認ダイアログで「OK」を選択

### タスクの完了

- タスク左側のチェックボックスをクリックして完了状態を切り替え

### フィルタリング

- 「完了済みのタスクを表示」チェックボックスで表示/非表示を切り替え

## プロジェクト構造

```
todo-app/
├── app/
│   ├── layout.tsx    # アプリケーションレイアウト
│   ├── page.tsx      # メインページ
│   └── globals.css   # グローバルスタイル
├── components/
│   ├── TaskForm.tsx   # タスク追加フォーム
│   ├── TaskList.tsx   # タスク一覧
│   ├── TaskItem.tsx   # 個別タスク表示
│   └── TaskFilter.tsx # フィルターコンポーネント
├── hooks/
│   └── useTodos.ts    # TODOロジックのカスタムフック
├── types/
│   └── task.ts        # Task型定義
└── utils/
    ├── constants.ts   # 定数定義
    ├── storage.ts     # ローカルストレージ操作
    └── migration.ts   # データマイグレーション
```

## スクリプト

```bash
npm run dev      # 開発サーバー起動
npm run build    # プロダクションビルド
npm run start    # プロダクションサーバー起動
npm run lint     # ESLintの実行
```

## ライセンス

MIT