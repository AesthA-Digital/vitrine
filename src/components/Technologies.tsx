import React, { useState } from 'react';

interface Skill {
  name: string;
  category: string;
  logo: string;
  description: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'HTML/CSS', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', description: 'Semantic markup & responsive styling' },
  { name: 'Tailwind CSS', category: 'Frontend', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', description: 'Utility-first CSS framework' },
  { name: 'React', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', description: 'Component-based UI development' },
  { name: 'TypeScript', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', description: 'Type-safe JavaScript development' },
  { name: 'JavaScript', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', description: 'Modern ES6+ development' },
  { name: 'Angular', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', description: 'Enterprise web applications' },
  
  // Mobile
  { name: 'React Native', category: 'Mobile', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', description: 'Cross-platform mobile apps' },
  { name: 'Flutter', category: 'Mobile', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', description: 'Beautiful native applications' },
  { name: 'Dart', category: 'Mobile', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', description: 'Flutter development language' },
  
  // Backend
  { name: 'Next.js', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', description: 'Full-stack React framework' },
  { name: 'Node.js', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', description: 'JavaScript runtime environment' },
  { name: 'PHP', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', description: 'Server-side web development' },
  { name: 'Symfony', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg', description: 'PHP web application framework' },
  
  // Database
  { name: 'MySQL', category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', description: 'Relational database management' },
  
  // DevOps
  { name: 'Docker', category: 'DevOps', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', description: 'Containerization & deployment' },
  { name: 'Git CI/CD', category: 'DevOps', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', description: 'Version control & automation' },
];

const categories = ['All', 'Frontend', 'Mobile', 'Backend', 'Database', 'DevOps'];

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-dark">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-silver mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-light max-w-3xl mx-auto">
            Crafting digital experiences with cutting-edge technologies and modern development practices
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-violet-lavender text-white shadow-lg shadow-violet/30'
                  : 'bg-black/40 text-gray-light hover:bg-violet/10 hover:text-silver border border-gray-dark/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative overflow-hidden rounded-2xl p-[2px] bg-gradient-violet-lavender shadow-xl transition-all duration-500 hover:scale-105 hover:rotate-1"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Card Content */}
              <div className="relative bg-gray-dark rounded-2xl p-6 h-full">
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-black/60 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-8 h-8"
                  />
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-bold text-silver mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet group-hover:to-lavender transition-all duration-300">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-gray-light text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.description}
                </p>

                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-violet rounded-full animate-ping"></div>
                </div>
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <div className="w-1 h-1 bg-lavender rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-8 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                  <div className="w-1.5 h-1.5 bg-lavender rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-3xl font-bold text-silver mb-2 group-hover:text-violet transition-colors">
              {skills.length}+
            </div>
            <div className="text-gray-light text-sm">Technologies</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-silver mb-2 group-hover:text-lavender transition-colors">
              5+
            </div>
            <div className="text-gray-light text-sm">Categories</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-silver mb-2 group-hover:text-lavender transition-colors">
              24/7
            </div>
            <div className="text-gray-light text-sm">Learning</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-silver mb-2 group-hover:text-violet transition-colors">
              5+
            </div>
            <div className="text-gray-light text-sm">Years Experience</div>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-black/40 rounded-2xl p-8 border border-gray-dark/60">
            <h3 className="text-2xl font-semibold text-silver mb-4">
              Always Learning & Adapting
            </h3>
            <p className="text-gray-light max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. I continuously update
              my skills and explore new tools to ensure your projects benefit
              from the latest innovations and best practices in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}