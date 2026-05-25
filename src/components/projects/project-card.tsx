'use client';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Archive, Edit, Trash } from 'lucide-react';
import { deleteProject } from '@/lib/api/projects';
import { useRouter } from 'next/navigation';

export function ProjectCard({ project }) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await deleteProject(project.id);
      router.refresh();
    } catch (err) {
      console.error('Failed to delete project:', err);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Status: {project.status}</p>
        <p>Created: {new Date(project.created_at).toLocaleDateString()}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" onClick={() => router.push(`/projects/${project.id}`)}>
          View
        </Button>
        <Button variant="outline" size="sm">
          <Edit className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" onClick={handleDelete}>
          <Trash className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm">
          <Archive className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
