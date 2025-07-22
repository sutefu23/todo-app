# TODOアプリ開発ガイドライン

このプロジェクトは、@SPECIFICATION.mdに基づいて開発されるシンプルなTODOアプリケーションです。

## プロジェクト概要

- **アプリ名**: TODO App
- **種別**: 個人利用向けWebアプリケーション
- **主要機能**: タスク管理、期限設定、ローカル保存
- **開発期間**: 3日間

## 技術スタック

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- ローカルストレージ

## 開発ルール

### コーディング規約

1. **TypeScript**
   - 厳密な型定義を使用
   - `any`型の使用は避ける
   - インターフェースは`interface`を使用

2. **コンポーネント設計**
   - 関数コンポーネントを使用
   - カスタムフックで状態管理ロジックを分離
   - 小さく再利用可能なコンポーネントに分割

3. **ファイル構成**
   ```
   src/
   ├── app/
   │   ├── page.tsx
   │   ├── layout.tsx
   │   └── globals.css
   ├── components/
   │   ├── TaskList.tsx
   │   ├── TaskItem.tsx
   │   ├── TaskForm.tsx
   │   └── TaskFilter.tsx
   ├── hooks/
   │   └── useTodos.ts
   ├── types/
   │   └── task.ts
   └── utils/
       └── storage.ts
   ```

4. **命名規則**
   - コンポーネント: PascalCase
   - 関数・変数: camelCase
   - 定数: UPPER_SNAKE_CASE
   - ファイル名: コンポーネントはPascalCase、その他はcamelCase

### データ管理

1. **タスクデータ構造**（@SPECIFICATION.mdに準拠）
   ```typescript
   interface Task {
     id: string;
     title: string;
     completed: boolean;
     dueDate?: string;
     createdAt: string;
     updatedAt: string;
   }
   ```

2. **ローカルストレージ**
   - キー名: `todos`
   - JSON形式で保存
   - 読み込み/保存時にエラーハンドリング

### UI/UX実装指針

1. **デザイン原則**
   - シンプルで直感的なUI
   - レスポンシブ対応必須
   - アクセシビリティを考慮

2. **期限表示の色分け**
   - 期限切れ: `text-red-500`
   - 本日期限: `text-orange-500`
   - 期限内: デフォルトカラー

3. **完了済みタスク**
   - 取り消し線: `line-through`
   - グレーアウト: `opacity-50`

### 開発フロー

1. **Day 1**: 基盤構築
   - Next.jsプロジェクトセットアップ
   - 基本レイアウト実装
   - タスク追加・表示機能

2. **Day 2**: 機能実装
   - 編集・削除機能
   - 完了状態管理
   - ローカルストレージ連携

3. **Day 3**: 仕上げ
   - 期限管理機能
   - レスポンシブ対応
   - テストと最終調整

### テスト方針

1. **手動テスト項目**
   - タスクの追加・編集・削除
   - 期限設定と警告表示
   - レスポンシブ表示
   - ローカルストレージの永続性

2. **ブラウザテスト**
   - Chrome, Firefox, Safari, Edge
   - モバイルブラウザ

### コミットメッセージ規約

```
feat: 新機能追加
fix: バグ修正
style: UIスタイル変更
refactor: リファクタリング
docs: ドキュメント更新
test: テスト追加・修正
```

### 注意事項

1. **除外機能**（@SPECIFICATION.md参照）
   - ユーザー認証、クラウド同期、カテゴリ分けなどは実装しない
   - スコープを守り、シンプルさを保つ

2. **パフォーマンス**
   - 不要な再レンダリングを避ける
   - メモ化を適切に使用

3. **エラーハンドリング**
   - ローカルストレージアクセス時のエラー処理
   - ユーザーフレンドリーなエラーメッセージ

このガイドラインに従って、@SPECIFICATION.mdの要件を満たす高品質なTODOアプリを開発してください。