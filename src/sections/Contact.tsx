export default function Contact() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold">Contact</h2>

        <p className="mt-6 text-lg text-gray-600">
          I am open to new opportunities and would love to connect with you.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="mailto:siriluk16.wong@gmail.com"
            className="rounded-lg bg-black px-6 py-3 text-white"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/siriluk-wong/"
            className="rounded-lg border px-6 py-3"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
