export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      skills: [
        "Angular",
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "SCSS",
        "Tailwind CSS",
      ],
    },
    {
      title: "UI / UX & Design",
      skills: [
        "UI Development",
        "Responsive Design",
        "Figma",
        "Design Systems",
        "Component-based Design",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "WordPress",
        "WooCommerce",
        "PHP",
        "Git",
        "GitHub",
        "Vercel",
        "Cloudflare",
      ],
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold">Skills</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-xl border p-6">
              <h3 className="text-xl font-semibold">{group.title}</h3>

              <ul className="mt-4 space-y-2 text-gray-600">
                {group.skills.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
