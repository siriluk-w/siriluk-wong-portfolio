import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Senior UI Developer | Frontend Developer
        </p>

        <h1 className="mt-4 text-5xl font-bold">Siriluk Wong (Lily)</h1>

        <p className="mt-6 text-lg text-gray-600">
          Specialized in UI development, responsive web applications, and modern
          frontend technologies.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="#projects"
            className="rounded-lg bg-black px-6 py-3 text-white transition hover:opacity-80"
          >
            View Projects
          </Link>

          <a
            href="/resume-siriluk-wong.pdf"
            target="_blank"
            className="rounded-lg border px-6 py-3 transition hover:bg-gray-100"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
