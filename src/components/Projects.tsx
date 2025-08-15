const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    gradient: "from-blue-500 to-purple-600",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    technologies: ["React", "Node.js", "MongoDB"],
    gradient: "from-green-500 to-teal-600",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts and interactive charts.",
    technologies: ["Vue.js", "Chart.js", "API"],
    gradient: "from-purple-500 to-pink-600",
    demoUrl: "#",
    githubUrl: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`h-48 bg-gradient-to-br ${project.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.demoUrl} className="text-blue-600 dark:text-blue-400 hover:underline">Live Demo</a>
                  <a href={project.githubUrl} className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
