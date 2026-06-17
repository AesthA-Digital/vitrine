import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Smartphone, Monitor } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();

  const projects = [
    {
      title: t('portfolio.project1.title'),
      description: t('portfolio.project1.desc'),
      technologies: ['React', 'TypeScript', 'Symfony', 'MySQL'],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: t('portfolio.type.web'),
      icon: Monitor,
    },
    {
      title: t('portfolio.project2.title'),
      description: t('portfolio.project2.desc'),
      technologies: ['Flutter', 'Dart', 'Firebase', 'Stripe API'],
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: t('portfolio.type.mobile'),
      icon: Smartphone,
    },
    {
      title: t('portfolio.project3.title'),
      description: t('portfolio.project3.desc'),
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: t('portfolio.type.web'),
      icon: Monitor,
    },
    {
      title: t('portfolio.project4.title'),
      description: t('portfolio.project4.desc'),
      technologies: ['Flutter', 'Dart', 'SQLite', 'REST API'],
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: t('portfolio.type.mobile'),
      icon: Smartphone,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [language]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-mesh-center"
    >
      {/* Top edge with traveling light */}
      {/*<div className="absolute top-0 left-0 right-0 h-px overflow-hidden" style={{ background: 'rgba(120,44,255,0.12)' }}>
        <div className="divider-light" style={{ animationDelay: '0.5s' }} />
      </div>*/}

      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-35" />
      </div>

      {/* Drifting aurora blobs */}
      <div
        className="absolute pointer-events-none animate-aurora-drift"
        style={{
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(120,44,255,0.08) 0%, transparent 65%)',
          top: '20%',
          right: '-15%',
        }}
      />
      <div
        className="absolute pointer-events-none animate-aurora-drift-rev"
        style={{
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(177,140,255,0.06) 0%, transparent 65%)',
          bottom: '15%',
          left: '-10%',
          animationDelay: '4s',
        }}
      />

      {/* Sparkle dots */}
      {[
        { top: '8%',  left: '10%', delay: '0s',   dur: '3s',   color: '#782CFF' },
        { top: '18%', left: '88%', delay: '1.2s', dur: '2.8s', color: '#B18CFF' },
        { top: '75%', left: '92%', delay: '0.6s', dur: '3.5s', color: '#782CFF' },
        { top: '88%', left: '5%',  delay: '1.8s', dur: '4s',   color: '#B18CFF' },
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #782CFF, transparent)' }} />
            <span className="font-mono-brand text-xs tracking-[0.25em] uppercase" style={{ color: '#782CFF' }}>
              {t('portfolio.label')}
            </span>
          </div>

          <div className="mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mb-4" style={{ color: '#DDE1E6' }}>
              {t('portfolio.title')}
            </h2>
            <p className="text-xl max-w-2xl" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
              {t('portfolio.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden transition-all duration-400"
                style={{
                  background: '#14161C',
                  border: '1px solid rgba(120,44,255,0.15)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(120,44,255,0.45)';
                  el.style.boxShadow = '0 0 40px rgba(120,44,255,0.12)';
                  el.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(120,44,255,0.15)';
                  el.style.boxShadow = 'none';
                  el.style.transform = 'translateY(0)';
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,13,0.9) 0%, transparent 60%)' }} />
                  {/* Violet overlay tint */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ background: 'rgba(120,44,255,0.3)' }} />

                  {/* Type badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                      style={{
                        background: 'rgba(10,10,13,0.8)',
                        border: '1px solid rgba(120,44,255,0.3)',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      <project.icon className="w-3.5 h-3.5" style={{ color: '#782CFF' }} />
                      <span className="font-mono-brand text-xs" style={{ color: '#DDE1E6' }}>
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="font-orbitron text-sm font-bold tracking-wider mb-3" style={{ color: '#DDE1E6' }}>
                    {project.title.toUpperCase()}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, ti) => (
                      <span
                        key={ti}
                        className="px-3 py-1 rounded-full font-mono-brand text-xs"
                        style={{
                          background: 'rgba(120,44,255,0.12)',
                          color: '#B18CFF',
                          border: '1px solid rgba(120,44,255,0.22)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-5" style={{ borderTop: '1px solid rgba(120,44,255,0.1)', paddingTop: '1rem' }}>
                    <button
                      className="flex items-center gap-2 text-sm transition-colors duration-200"
                      style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#782CFF'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#8A8F9A'}
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t('portfolio.view')}
                    </button>
                    <button
                      className="flex items-center gap-2 text-sm transition-colors duration-200"
                      style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#782CFF'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#8A8F9A'}
                    >
                      <Github className="w-4 h-4" />
                      {t('portfolio.source')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div
              className="rounded-2xl p-10 relative overflow-hidden border-conic-spin"
              style={{
                background: '#14161C',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(120,44,255,0.08), transparent)' }}
              />
              <h3 className="font-orbitron text-2xl font-bold mb-4 relative z-10" style={{ color: '#DDE1E6' }}>
                {t('portfolio.cta.title')}
              </h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto relative z-10" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
                {t('portfolio.cta.desc')}
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-orbitron text-sm font-bold tracking-wider px-10 py-4 rounded-lg transition-all duration-300 relative z-10 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, #782CFF, #B18CFF)',
                  color: '#fff',
                  boxShadow: '0 0 25px rgba(120,44,255,0.4)',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 0 45px rgba(120,44,255,0.7)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(120,44,255,0.4)'}
              >
                {t('portfolio.cta.button')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
