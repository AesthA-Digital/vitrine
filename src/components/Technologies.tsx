import React from 'react';

interface Tech {
  name: string;
  logo: string;
  category: string;
}

const allTechs: Tech[] = [
  // Frontend
  { name: 'React',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',           category: 'Frontend' },
  { name: 'TypeScript',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Frontend' },
  { name: 'Next.js',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',         category: 'Frontend' },
  { name: 'JavaScript',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Frontend' },
  { name: 'Angular',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',   category: 'Frontend' },
  { name: 'Tailwind CSS',  logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',             category: 'Frontend' },
  { name: 'HTML/CSS',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',           category: 'Frontend' },
  // Mobile
  { name: 'Flutter',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',      category: 'Mobile' },
  { name: 'React Native',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',           category: 'Mobile' },
  { name: 'Dart',          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',             category: 'Mobile' },
  // Backend
  { name: 'Node.js',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',        category: 'Backend' },
  { name: 'PHP',           logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',               category: 'Backend' },
  { name: 'Symfony',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg',       category: 'Backend' },
  { name: 'Python',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',         category: 'Backend' },
  // Database
  { name: 'MySQL',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',           category: 'Database' },
  { name: 'PostgreSQL',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'Database' },
  { name: 'MongoDB',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',       category: 'Database' },
  { name: 'Firebase',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',        category: 'Database' },
  // DevOps
  { name: 'Docker',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',         category: 'DevOps' },
  { name: 'Git',           logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',               category: 'DevOps' },
  { name: 'AWS',           logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', category: 'DevOps' },
  { name: 'Google Cloud',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', category: 'DevOps' },
  { name: 'Linux',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',           category: 'DevOps' },
];

// Split into 3 rows
const row1 = allTechs.slice(0, 8);
const row2 = allTechs.slice(8, 16);
const row3 = allTechs.slice(16);

const categoryColors: Record<string, string> = {
  Frontend: '#782CFF',
  Mobile:   '#B18CFF',
  Backend:  '#782CFF',
  Database: '#B18CFF',
  DevOps:   '#782CFF',
};

const TechPill: React.FC<{ tech: Tech }> = ({ tech }) => (
  <div
    className="flex items-center gap-3 px-5 py-3 rounded-full flex-shrink-0 transition-all duration-300 cursor-default group"
    style={{
      background: 'rgba(120,44,255,0.06)',
      border: '1px solid rgba(120,44,255,0.18)',
      margin: '0 8px',
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLElement;
      el.style.background = 'rgba(120,44,255,0.14)';
      el.style.borderColor = 'rgba(120,44,255,0.5)';
      el.style.boxShadow = '0 0 15px rgba(120,44,255,0.2)';
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLElement;
      el.style.background = 'rgba(120,44,255,0.06)';
      el.style.borderColor = 'rgba(120,44,255,0.18)';
      el.style.boxShadow = 'none';
    }}
  >
    <img
      src={tech.logo}
      alt={tech.name}
      className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
      onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
    />
    <span
      className="font-mono-brand text-xs font-medium tracking-wide whitespace-nowrap"
      style={{ color: '#DDE1E6' }}
    >
      {tech.name}
    </span>
    <span
      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
      style={{ background: categoryColors[tech.category] ?? '#782CFF', opacity: 0.7 }}
    />
  </div>
);

const MarqueeRow: React.FC<{ techs: Tech[]; direction: 'left' | 'right' }> = ({ techs, direction }) => {
  const doubled = [...techs, ...techs];
  return (
    <div className="overflow-hidden py-2">
      <div className={direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'} style={{ display: 'flex', width: 'max-content' }}>
        {doubled.map((tech, i) => (
          <TechPill key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <section
      className="py-20 relative overflow-hidden bg-mesh-lavender"
    >
      {/* Top edge with traveling light */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden" style={{ background: 'rgba(120,44,255,0.12)' }}>
        <div className="divider-light" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      {/* Drifting aurora blobs */}
      <div
        className="absolute pointer-events-none animate-aurora-drift-rev"
        style={{
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(120,44,255,0.07) 0%, transparent 65%)',
          top: '30%',
          left: '-10%',
        }}
      />
      <div
        className="absolute pointer-events-none animate-aurora-drift"
        style={{
          width: 380,
          height: 380,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(177,140,255,0.05) 0%, transparent 65%)',
          bottom: '10%',
          right: '-8%',
          animationDelay: '5s',
        }}
      />

      {/* Sparkle dots */}
      {[
        { top: '5%',  left: '8%',  delay: '0s',   dur: '3s',   color: '#782CFF' },
        { top: '92%', left: '85%', delay: '1s',  dur: '2.8s', color: '#B18CFF' },
        { top: '50%', left: '95%', delay: '0.4s', dur: '3.5s', color: '#782CFF' },
      ].map((s, i) => (
        <div
          key={i}
          className="absolute pointer-events-none animate-twinkle-slow"
          style={{ top: s.top, left: s.left, animationDelay: s.delay, animationDuration: s.dur }}
        >
          <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
            <path d="M5 0L5.8 4.2L10 5L5.8 5.8L5 10L4.2 5.8L0 5L4.2 4.2Z" fill={s.color} opacity="0.6" />
          </svg>
        </div>
      ))}

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #782CFF, transparent)' }} />
                <span className="font-mono-brand text-xs tracking-[0.25em] uppercase" style={{ color: '#782CFF' }}>
                  Technology Stack
                </span>
              </div>
              <h2 className="font-orbitron text-4xl md:text-5xl font-black" style={{ color: '#DDE1E6' }}>
                WORKS WITH ANY STACK
              </h2>
            </div>

            {/* Stats inline */}
            <div className="flex gap-8 pb-1">
              {[
                { value: `${allTechs.length}+`, label: 'Technologies' },
                { value: '5+',   label: 'Years' },
                { value: '6',    label: 'Domains' },
              ].map(s => (
                <div key={s.label} className="text-right">
                  <div className="font-orbitron text-2xl font-black" style={{ color: '#782CFF' }}>
                    {s.value}
                  </div>
                  <div className="font-mono-brand text-xs tracking-widest uppercase mt-0.5" style={{ color: '#8A8F9A' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category legend */}
          <div className="flex flex-wrap gap-3 mt-8">
            {['Frontend', 'Mobile', 'Backend', 'Database', 'DevOps'].map(cat => (
              <span
                key={cat}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full font-mono-brand text-xs"
                style={{
                  background: 'rgba(120,44,255,0.06)',
                  border: '1px solid rgba(120,44,255,0.15)',
                  color: '#8A8F9A',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: categoryColors[cat] }}
                />
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Marquee tracks with edge fade masks */}
        <div
          className="relative"
          style={{
            maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
        >
          <div className="space-y-3">
            <MarqueeRow techs={row1} direction="left" />
            <MarqueeRow techs={row2} direction="right" />
            <MarqueeRow techs={row3} direction="left" />
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div
            className="rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-conic-spin-dark"
            style={{
              background: '#0A0A0D',
            }}
          >
            <p style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif', fontSize: '14px' }}>
              Technology evolves rapidly — so do we. We continuously learn and adapt to ensure
              your project benefits from the latest innovations and best practices.
            </p>
            <span
              className="font-mono-brand text-xs tracking-[0.2em] uppercase whitespace-nowrap"
              style={{ color: '#782CFF' }}
            >
              Always Learning
            </span>
          </div>
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
