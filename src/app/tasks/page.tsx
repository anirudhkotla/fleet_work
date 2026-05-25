import { TasksContent } from '@/components/tasks/tasks-content';

export default function TasksPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Tasks</h1>
      <TasksContent />
    </div>
  );
}
