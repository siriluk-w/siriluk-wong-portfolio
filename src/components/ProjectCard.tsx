"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

type Project = {
  title: string;
  year: string;
  role: string;
  description: string;
  tech: string[];
  cover: string;
  gallery: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
      >
        <div className="relative h-[300px] overflow-hidden bg-gray-100">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
            <span className="rounded-full bg-white px-5 py-2 font-semibold">
              View Project
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{project.title}</h3>

            <span className="text-sm text-gray-500">{project.year}</span>
          </div>

          <p className="mt-2 text-sm font-medium text-indigo-600">
            {project.role}
          </p>

          <p className="mt-4 leading-7 text-gray-600">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((item) => (
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

      {open && (
        <ProjectModal project={project} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
