import { ProjectsContent } from '@/components/projects/projects-content';

export default function ProjectsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ProjectsContent />
    </div>
  );
}
