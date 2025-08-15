'use client';

import { useEffect, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-black dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg font-body text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, experience, and what drives my passion for development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-lg font-body text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I&apos;m a passionate full-stack developer with expertise in modern web technologies.
              I love building scalable applications and solving complex problems with clean, efficient code.
            </p>
            <p className="text-lg font-body text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My journey in software development has led me to work with various technologies,
              from frontend frameworks like React and Next.js to backend solutions with Node.js and databases.
            </p>
            <p className="text-lg font-body text-gray-700 dark:text-gray-300 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open source projects,
              or sharing knowledge with the developer community.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 p-8">
              <h3 className="text-xl font-heading font-semibold text-black dark:text-white mb-6">Quick Facts</h3>
              <ul className="space-y-4 font-body">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-2xl mr-4">🎓</span>
                  Computer Science Background
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-2xl mr-4">💻</span>
                  3+ Years of Development Experience
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-2xl mr-4">🌍</span>
                  Based in Nigeria
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-2xl mr-4">🚀</span>
                  Always Learning New Technologies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
