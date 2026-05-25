'use client';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function CreateTaskButton() {
  const router = useRouter();

  return (
    <Button onClick={() => router.push('/tasks/new')}>
      <Plus className="h-4 w-4" />
      New Task
    </Button>
  );
}
