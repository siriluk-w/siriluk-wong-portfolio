export default function Experience() {
  const experiences = [
    {
      period: "Nov 2018 - Apr 2026",
      role: "Senior UI Developer",
      company: "Socket9 Co., Ltd.",
      description:
        "Led frontend and web platform development across 20+ enterprise and consumer-facing web applications spanning financial services, logistics, government, retail, and digital platforms.",
      highlights: [
        "Developed and supported WordPress and WooCommerce-based solutions in selected projects, applying frontend customization and PHP-based adjustments when required.",
        "Designed and delivered large-scale Angular-based back-office systems, operational dashboards, and internal business platforms for Nathalin Group, Asset World Corp (AWC), and Otteri.",
        "Built scalable, reusable UI components and modular frontend architectures using Angular, React, Next.js, and TypeScript.",
        "Translated high-fidelity UI/UX designs from Figma, Zeplin, and Adobe XD into responsive, production-ready web applications with strong design fidelity and cross-device compatibility.",
        "Delivered enterprise and public-sector web applications including the Department of Intellectual Property (DIP), TrueMoney, BYD, DEPA COVID-19 Mapping Platform, and SnapPink x AOT.",
        "Collaborated with business analysts, UX/UI designers, QA teams, and frontend developers to clarify requirements and deliver user-friendly interfaces across complex systems.",
      ],
    },
    {
      period: "May 2018 - Oct 2018",
      role: "WordPress UI Developer",
      company: "MFEC Public Company Limited",
      description:
        "Developed and delivered an e-commerce website for FN Furniture using WordPress and WooCommerce, focusing on responsive UI implementation and website customization.",
      highlights: [
        "Built responsive web interfaces and customized WordPress themes using HTML5, CSS3, SCSS, and PHP.",
        "Customized WordPress pages and WooCommerce interfaces to match provided UI designs.",
        "Translated UI designs into production-ready web pages with cross-browser and cross-device compatibility.",
        "Collaborated with designers and developers to support website enhancements, testing, and deployment activities.",
      ],
    },
    {
      period: "Nov 2013 - Apr 2018",
      role: "Web UI Developer & Senior UX/UI Designer",
      company: "OfficeMate Co., Ltd. / Cenergy Innovation Ltd. (Central Group)",
      description:
        "Developed websites, promotional microsites, and digital campaigns for multiple Central Group business units, combining UI development, UX/UI design, and WordPress website work.",
      highlights: [
        "Developed and maintained websites and promotional microsites for OfficeMate, Central, Robinson, ZEN, Supersports, Power Buy, Tops, The 1, and other Central Group businesses.",
        "Built, maintained, and enhanced WordPress websites, including the Central Embassy website.",
        "Developed responsive frontend templates using HTML, CSS, JavaScript, and jQuery, collaborating with backend developers for system integration.",
        "Developed HTML EDM campaigns, landing pages, and marketing assets with cross-browser and email compatibility.",
      ],
    },
    {
      period: "Sep 2012 - Oct 2013",
      role: "Web Developer",
      company: "MAM Enterprise",
      description:
        "Developed WordPress-based corporate websites with a focus on responsive UI implementation and SEO-friendly website structures.",
      highlights: [
        "Developed WordPress websites using HTML, CSS, and PHP.",
        "Built SEO-friendly website structures and responsive UI layouts.",
        "Implemented website interfaces based on project requirements and design specifications.",
      ],
    },
    {
      period: "Oct 2011 - Aug 2012",
      role: "Software Developer",
      company: "CyberQuote (Thailand) Co., Ltd.",
      description:
        "Supported backend data operations and automated scheduled jobs for FX trading systems used by banking clients.",
      highlights: [
        "Supported backend data operations and scheduled jobs for financial trading systems.",
        "Maintained system stability and data flow for financial applications used by banking clients.",
      ],
    },
    {
      period: "Apr 2011 - Oct 2011",
      role: "Web Developer",
      company: "Exa Web Solutions",
      description:
        "Developed corporate websites and microsites using frontend web technologies, with a focus on UI consistency and cross-browser compatibility.",
      highlights: [
        "Developed corporate websites and microsites using HTML, CSS, and JavaScript.",
        "Ensured cross-browser compatibility and consistent user interfaces across web pages.",
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
