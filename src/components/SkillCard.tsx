'use client';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon?: string;
}

export default function SkillCard({ title, skills, icon }: SkillCardProps) {
  return (
    <div className="group bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-black dark:hover:border-white">
      <div className="text-center">
        {/* Icon */}
        {icon && (
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gray-100 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 transition-all duration-300 group-hover:border-black dark:group-hover:border-white">
            <span className="text-2xl">{icon}</span>
          </div>
        )}
        
        {/* Title */}
        <h3 className="text-xl font-heading font-semibold text-black dark:text-white mb-6">
          {title}
        </h3>
        
        {/* Skills */}
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm font-body bg-gray-100 dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-700 transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
