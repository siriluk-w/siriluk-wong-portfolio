"use client";
import { useState } from "react";

export default function Certificates() {
  const certificates = [
    {
      title: "Foundations of User Experience (UX) Design",
      issuer: "Google / Coursera",
      date: "15 Aug 2026",
      image: "/images/certificates/google-ux.jpg",
    },
    {
      title: "English Communication for Work and Business",
      issuer: "tockto / depa",
      date: "9 Aug 2026",
      image: "/images/certificates/english-communication.png",
    },
    {
      title: "Gemini CLI",
      issuer: "DataRockie / Canvas Credentials",
      date: "10 May 2026",
      image: "/images/certificates/datarockie-gemini-cli.jpg",
    },
    {
      title: "Data Science Bootcamp Batch 12",
      issuer: "DataRockie",
      date: "29 Apr 2026",
      image: "/images/certificates/bootcamp12.jpg",
    },
    {
      title: "HTML Certified Developer",
      issuer: "W3Schools",
      date: "10 Apr 2025",
      image: "/images/certificates/html.png",
    },
    {
      title: "CSS Certified Developer",
      issuer: "W3Schools",
      date: "4 Apr 2025",
      image: "/images/certificates/css.png",
    },
    {
      title: "Mini Bootcamp 2025",
      issuer: "DataRockie School",
      date: "22 Mar 2025",
      image: "/images/certificates/mini-bootcamp-2025.png",
    },
    {
      title: "Oracle Database 11g Fundamental",
      issuer: "Oracle / Thai-Nichi Institute of Technology",
      date: "2009",
      image: "/images/certificates/oracle.jpg",
    },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold">Certificates</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="overflow-hidden rounded-xl border"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(certificate.image)}
                className="flex h-96 w-full cursor-zoom-in items-center justify-center bg-gray-100"
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-full w-full object-contain transition hover:scale-[1.02]"
                />
              </button>

              <div className="p-6">
                <h3 className="text-xl font-semibold">{certificate.title}</h3>

                <p className="mt-2 text-gray-600">{certificate.issuer}</p>

                <p className="mt-1 text-sm text-gray-500">{certificate.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 text-3xl text-white transition hover:opacity-70"
            aria-label="Close image"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Certificate preview"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
