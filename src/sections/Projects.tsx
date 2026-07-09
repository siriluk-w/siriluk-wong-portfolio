import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold">Selected Projects</h2>

        <p className="mt-4 max-w-2xl text-gray-600">
          Enterprise web applications, dashboard platforms, public-sector
          systems, and corporate websites delivered across multiple industries.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
