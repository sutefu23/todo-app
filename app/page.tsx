"use client";

import { useTodos } from "@/hooks/useTodos";
import TaskForm from "@/components/TaskForm";
import TaskFilter from "@/components/TaskFilter";
import TaskList from "@/components/TaskList";

export default function Home() {
  const {
    tasks,
    isLoading,
    showCompleted,
    setShowCompleted,
    addTask,
    editTask,
    deleteTask,
    toggleComplete,
  } = useTodos();

  // 静的サイトでも動作するように、初期表示では空のタスクリストを表示
  if (isLoading && typeof window !== 'undefined') {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">読み込み中...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* タスク追加フォーム */}
          <TaskForm onAddTask={addTask} />
          
          {/* フィルター */}
          <TaskFilter
            showCompleted={showCompleted}
            onToggleShowCompleted={setShowCompleted}
          />
          
          {/* タスク一覧 */}
          <TaskList
            tasks={tasks}
            onToggleComplete={toggleComplete}
            onEdit={editTask}
            onDelete={deleteTask}
          />
        </div>
      </div>
    </main>
  );
}