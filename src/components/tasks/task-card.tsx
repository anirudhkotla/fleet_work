'use client';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Edit, Trash } from 'lucide-react';
import { deleteTask } from '@/lib/api/tasks';
import { useRouter } from 'next/navigation';

export function TaskCard({ task }) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await deleteTask(task.id);
      router.refresh();
    } catch (err) {
      console.error('Failed to delete task:', err);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>{task.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Status: {task.status}</p>
        <p>Priority: {task.priority}</p>
        <p>Due: {new Date(task.due_date).toLocaleDateString()}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" onClick={() => router.push(`/tasks/${task.id}`)}>
          View
        </Button>
        <Button variant="outline" size="sm">
          <Edit className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" onClick={handleDelete}>
          <Trash className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
