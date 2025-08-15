export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              I&apos;m a passionate full-stack developer with expertise in modern web technologies. 
              I love building scalable applications and solving complex problems with clean, efficient code.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              My journey in software development has led me to work with various technologies, 
              from frontend frameworks like React and Next.js to backend solutions with Node.js and databases.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open source projects, 
              or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Quick Facts</h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li>🎓 Computer Science Background</li>
              <li>💻 3+ Years of Development Experience</li>
              <li>🌍 Based in Nigeria</li>
              <li>🚀 Always Learning New Technologies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
