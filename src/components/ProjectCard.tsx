'use client';

import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  demoUrl,
  githubUrl,
  imageUrl
}: ProjectCardProps) {
  return (
    <div className="group bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-black dark:hover:border-white">
      {/* Project Image/Placeholder */}
      <div className="relative h-48 bg-gray-100 dark:bg-gray-900 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
            <div className="text-4xl font-heading font-bold text-gray-400 dark:text-gray-600">
              {title.charAt(0)}
            </div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-black dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 font-body mb-4 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-body bg-gray-100 dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white font-body font-medium hover:underline transition-all duration-200"
            >
              Live Demo →
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 font-body font-medium hover:text-black dark:hover:text-white hover:underline transition-all duration-200"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
