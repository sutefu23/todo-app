export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* タスク追加フォーム */}
          <div>{/* TaskForm will be here */}</div>
          
          {/* フィルター */}
          <div>{/* TaskFilter will be here */}</div>
          
          {/* タスク一覧 */}
          <div>{/* TaskList will be here */}</div>
        </div>
      </div>
    </main>
  );
}