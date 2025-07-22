# コンポーネントドキュメント

## コンポーネント一覧

### TaskForm

タスクを追加するためのフォームコンポーネント。

**Props:**
```typescript
interface TaskFormProps {
  onAddTask: (title: string, dueDate?: string) => void;
}
```

**機能:**
- タスク名の入力
- 期限の設定（オプション）
- Enterキーでの送信対応
- 期限クリアボタン

**使用例:**
```tsx
<TaskForm onAddTask={(title, dueDate) => addTask(title, dueDate)} />
```

### TaskList

タスク一覧を表示するコンポーネント。

**Props:**
```typescript
interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onEdit: (id: string, title: string, dueDate?: string) => void;
  onDelete: (id: string) => void;
}
```

**機能:**
- タスク一覧の表示
- 空の状態の表示
- 個別タスクの管理

**使用例:**
```tsx
<TaskList
  tasks={filteredTasks}
  onToggleComplete={toggleComplete}
  onEdit={editTask}
  onDelete={deleteTask}
/>
```

### TaskItem

個別のタスクを表示するコンポーネント。

**Props:**
```typescript
interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onEdit: (id: string, title: string, dueDate?: string) => void;
  onDelete: (id: string) => void;
}
```

**機能:**
- タスクの表示（タイトル、期限、完了状態）
- インライン編集
- 完了状態の切り替え
- 削除確認ダイアログ
- 期限の色分け表示

**使用例:**
```tsx
<TaskItem
  task={task}
  onToggleComplete={onToggleComplete}
  onEdit={onEdit}
  onDelete={onDelete}
/>
```

### TaskFilter

完了済みタスクの表示/非表示を切り替えるフィルターコンポーネント。

**Props:**
```typescript
interface TaskFilterProps {
  showCompleted: boolean;
  onToggleShowCompleted: (show: boolean) => void;
}
```

**機能:**
- チェックボックスによる表示切り替え
- ホバー効果

**使用例:**
```tsx
<TaskFilter
  showCompleted={showCompleted}
  onToggleShowCompleted={setShowCompleted}
/>
```

## カスタムフック

### useTodos

TODOアプリケーションのビジネスロジックを管理するカスタムフック。

**返り値:**
```typescript
{
  tasks: Task[];              // フィルタリング済みのタスク一覧
  isLoading: boolean;         // ローディング状態
  showCompleted: boolean;     // 完了済み表示フラグ
  setShowCompleted: (show: boolean) => void;
  addTask: (title: string, dueDate?: string) => void;
  editTask: (id: string, title: string, dueDate?: string) => void;
  deleteTask: (id: string) => void;
  toggleComplete: (id: string) => void;
}
```

**機能:**
- タスクの状態管理
- ローカルストレージとの同期
- CRUD操作
- フィルタリング

## 型定義

### Task

```typescript
export interface Task {
  id: string;
  title: string;
  completed: boolean;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}
```

## パフォーマンス最適化

全てのコンポーネントは`React.memo`でラップされており、不要な再レンダリングを防いでいます。

## スタイリング

Tailwind CSSを使用し、以下の設計原則に従っています：
- レスポンシブデザイン（モバイルファースト）
- ホバー効果とトランジション
- アクセシビリティを考慮したコントラスト