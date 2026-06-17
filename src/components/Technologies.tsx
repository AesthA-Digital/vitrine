import React, { useState } from 'react';

interface Skill {
  name: string;
  category: string;
  logo: string;
  description: string;
}

const skills: Skill[] = [
  { name: 'HTML/CSS',     category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',       description: 'Semantic markup & responsive styling' },
  { name: 'Tailwind CSS', category: 'Frontend', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',            description: 'Utility-first CSS framework' },
  { name: 'React',        category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',          description: 'Component-based UI development' },
  { name: 'TypeScript',   category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', description: 'Type-safe JavaScript development' },
  { name: 'JavaScript',   category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', description: 'Modern ES6+ development' },
  { name: 'Angular',      category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',   description: 'Enterprise web applications' },
  { name: 'React Native', category: 'Mobile',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',          description: 'Cross-platform mobile apps' },
  { name: 'Flutter',      category: 'Mobile',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',      description: 'Beautiful native applications' },
  { name: 'Dart',         category: 'Mobile',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',            description: 'Flutter development language' },
  { name: 'Next.js',      category: 'Backend',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',        description: 'Full-stack React framework' },
  { name: 'Node.js',      category: 'Backend',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',        description: 'JavaScript runtime environment' },
  { name: 'PHP',          category: 'Backend',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',              description: 'Server-side web development' },
  { name: 'Symfony',      category: 'Backend',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg',      description: 'PHP web application framework' },
  { name: 'MySQL',        category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',          description: 'Relational database management' },
  { name: 'Docker',       category: 'DevOps',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',        description: 'Containerization & deployment' },
  { name: 'Git CI/CD',    category: 'DevOps',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',              description: 'Version control & automation' },
];

const categories = ['All', 'Frontend', 'Mobile', 'Backend', 'Database', 'DevOps'];

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: '#14161C' }}
    >
      {/* Top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(120,44,255,0.4), rgba(177,140,255,0.4), transparent)' }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #14161C 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #782CFF, transparent)' }} />
          <span className="font-mono-brand text-xs tracking-[0.25em] uppercase" style={{ color: '#782CFF' }}>
            Stack
          </span>
        </div>

        <div className="mb-12">
          <h2 className="font-orbitron text-4xl md:text-5xl font-black mb-4" style={{ color: '#DDE1E6' }}>
            TECHNICAL SKILLS
          </h2>
          <p className="text-xl max-w-2xl" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
            Cutting-edge technologies and modern development practices
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="font-orbitron text-xs font-bold tracking-wider px-5 py-2.5 rounded-full transition-all duration-300"
              style={
                selectedCategory === cat
                  ? {
                      background: 'linear-gradient(135deg, #782CFF, #B18CFF)',
                      color: '#fff',
                      boxShadow: '0 0 18px rgba(120,44,255,0.4)',
                    }
                  : {
                      background: 'rgba(120,44,255,0.06)',
                      color: '#8A8F9A',
                      border: '1px solid rgba(120,44,255,0.2)',
                    }
              }
              onMouseEnter={e => {
                if (selectedCategory !== cat) {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(120,44,255,0.5)';
                  (e.currentTarget as HTMLElement).style.color = '#DDE1E6';
                }
              }}
              onMouseLeave={e => {
                if (selectedCategory !== cat) {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(120,44,255,0.2)';
                  (e.currentTarget as HTMLElement).style.color = '#8A8F9A';
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredSkills.map((skill, i) => (
            <div
              key={skill.name}
              className="group relative overflow-hidden rounded-xl p-5 text-center transition-all duration-300"
              style={{
                background: '#0A0A0D',
                border: '1px solid rgba(120,44,255,0.15)',
                animationDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(120,44,255,0.5)';
                el.style.boxShadow = '0 0 25px rgba(120,44,255,0.15)';
                el.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(120,44,255,0.15)';
                el.style.boxShadow = 'none';
                el.style.transform = 'translateY(0)';
              }}
            >
              {/* Sweep shimmer */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, transparent 0%, rgba(120,44,255,0.08) 50%, transparent 100%)',
                }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: 'rgba(120,44,255,0.08)',
                  border: '1px solid rgba(120,44,255,0.18)',
                }}
              >
                <img src={skill.logo} alt={skill.name} className="w-7 h-7" />
              </div>

              <h3
                className="font-orbitron text-xs font-bold tracking-wide mb-1 transition-colors duration-300"
                style={{ color: '#DDE1E6' }}
              >
                {skill.name}
              </h3>

              <p
                className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {skill.description}
              </p>

              {/* Pulse dot on hover */}
              <div
                className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"
                style={{ background: '#782CFF' }}
              />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: `${skills.length}+`, label: 'Technologies' },
            { value: '5+',   label: 'Categories' },
            { value: '24/7', label: 'Learning' },
            { value: '5+',   label: 'Years Experience' },
          ].map(stat => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl transition-all duration-300"
              style={{
                background: '#0A0A0D',
                border: '1px solid rgba(120,44,255,0.12)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(120,44,255,0.4)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(120,44,255,0.1)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(120,44,255,0.12)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div className="font-orbitron text-3xl font-black mb-2" style={{ color: '#782CFF' }}>
                {stat.value}
              </div>
              <div className="font-mono-brand text-xs tracking-widest uppercase" style={{ color: '#8A8F9A' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(120,44,255,0.3), transparent)' }}
      />
    </section>
  );
}
