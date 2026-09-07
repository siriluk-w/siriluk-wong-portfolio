import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const selectedProjects = projects.filter(
    (project) => project.category !== "wordpress",
  );

  const wordpressProjects = projects.filter(
    (project) => project.category === "wordpress",
  );

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Selected Projects */}
        <h2 className="text-4xl font-bold">Selected Projects</h2>

        <p className="mt-4 text-gray-600">
          Enterprise web applications, dashboard platforms, public-sector
          systems, and corporate websites delivered across multiple industries.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* WordPress & Web Experience */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold">WordPress & Web Experience</h2>

          <p className="mt-4 text-gray-600">
            Selected WordPress projects featuring custom UI implementation,
            content management, and website development.
          </p>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {wordpressProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
