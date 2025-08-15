'use client';

import { useEffect, useState } from 'react';
import SkillCard from './SkillCard';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "JavaScript", "HTML5", "CSS3"]
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL", "Firebase"]
  },
  {
    title: "Tools & Technologies",
    icon: "🛠️",
    skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code", "Linux", "CI/CD"]
  }
];

export default function Skills() {
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

    const element = document.getElementById('skills');
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-black dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg font-body text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <SkillCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
