export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
          Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Favour Effiong</span>
        </h1>
        <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
          Full-stack developer passionate about creating innovative web solutions with modern technologies
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
