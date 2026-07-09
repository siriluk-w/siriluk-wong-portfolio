export default function Experience() {
  const experiences = [
    {
      period: "2018 - 2026",
      role: "Senior UI Developer",
      company: "Socket9 Co., Ltd.",
      description:
        "Led UI and frontend development for 20+ enterprise and consumer-facing web applications across financial services, logistics, government, retail, and digital platforms.",
      highlights: [
        "Built scalable UI components and modular frontend architectures using Angular, React, Next.js, and TypeScript.",
        "Translated high-fidelity designs from Figma, Zeplin, and Adobe XD into responsive production-ready web applications.",
        "Developed enterprise systems, operational dashboards, and internal business platforms.",
      ],
    },
    {
      period: "2018",
      role: "WordPress UI Developer",
      company: "MFEC Public Company Limited",
      description:
        "Developed responsive e-commerce websites using WordPress and WooCommerce, focusing on frontend implementation and UI customization.",
      highlights: [
        "Customized WordPress themes and frontend interfaces.",
        "Built responsive layouts using HTML, CSS, SCSS, and PHP.",
      ],
    },
    {
      period: "2013 - 2018",
      role: "Web UI Developer & Senior UX/UI Designer",
      company: "OfficeMate Co., Ltd. / Cenergy Innovation Ltd. (Central Group)",
      description:
        "Designed and developed websites, promotional microsites, and digital campaigns for multiple Central Group business units.",
      highlights: [
        "Created responsive web interfaces and digital experiences.",
        "Translated UI designs into production-ready frontend implementations.",
      ],
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold">Experience</h2>

        <div className="mt-10 space-y-8">
          {experiences.map((experience) => (
            <div key={experience.company} className="rounded-xl border p-6">
              <p className="text-sm text-gray-500">{experience.period}</p>

              <h3 className="mt-2 text-xl font-semibold">{experience.role}</h3>

              <p className="mt-1 text-gray-600">{experience.company}</p>

              <p className="mt-4 text-gray-600">{experience.description}</p>

              <ul className="mt-4 space-y-2 text-gray-600">
                {experience.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
