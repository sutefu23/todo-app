"use client";

interface TaskFilterProps {
  showCompleted: boolean;
  onToggleShowCompleted: (show: boolean) => void;
}

export default function TaskFilter({ showCompleted, onToggleShowCompleted }: TaskFilterProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={(e) => onToggleShowCompleted(e.target.checked)}
          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
        />
        <span className="text-gray-700">完了済みのタスクを表示</span>
      </label>
    </div>
  );
}