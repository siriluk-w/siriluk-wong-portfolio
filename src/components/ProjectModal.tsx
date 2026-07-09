"use client";

import Image from "next/image";

type Props = {
  project: any;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[95vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white p-4 md:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{project.title}</h2>

          <button onClick={onClose} className="text-3xl">
            ×
          </button>
        </div>

        <div className="grid gap-6">
          {project.gallery.map((image: string) => (
            <div
              key={image}
              className="relative h-[70vh] overflow-hidden rounded-xl bg-gray-100"
            >
              <Image
                src={image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold">About this project</h3>

          <p className="mt-3 leading-7 text-gray-600">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((item: string) => (
              <span
                key={item}
                className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
