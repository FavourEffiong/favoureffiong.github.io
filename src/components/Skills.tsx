const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "blue",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"]
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "green",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Tools",
    icon: "🛠️",
    color: "purple",
    skills: ["Git", "Docker", "AWS", "Vercel", "Figma"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center">
              <div className={`bg-${category.color}-100 dark:bg-${category.color}-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl">{category.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
