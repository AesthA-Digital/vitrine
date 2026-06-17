import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Smartphone, Monitor } from 'lucide-react';

const projects = [
  {
    title: 'HR Management Platform',
    description: 'Complete HR solution with employee management, payroll, and performance tracking built with React and Symfony.',
    technologies: ['React', 'TypeScript', 'Symfony', 'MySQL'],
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'Web Application',
    icon: Monitor,
  },
  {
    title: 'Mobile Booking App',
    description: 'Cross-platform appointment booking app for service providers with real-time notifications and payment integration.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Stripe API'],
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'Mobile App',
    icon: Smartphone,
  },
  {
    title: 'E-commerce Dashboard',
    description: 'Admin dashboard for e-commerce management with analytics, inventory tracking, and order processing.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'Web Application',
    icon: Monitor,
  },
  {
    title: 'Fitness Tracking App',
    description: 'Personal fitness tracker with workout logging, progress tracking, and social features built with Flutter.',
    technologies: ['Flutter', 'Dart', 'SQLite', 'REST API'],
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'Mobile App',
    icon: Smartphone,
  },
];

export const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: '#0A0A0D' }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-35" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 90% 60% at 50% 50%, transparent 30%, #0A0A0D 100%)' }}
        />
      </div>

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
              Portfolio
            </span>
          </div>

          <div className="mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mb-4" style={{ color: '#DDE1E6' }}>
              FEATURED PROJECTS
            </h2>
            <p className="text-xl max-w-2xl" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
              A showcase of recent work and successful client collaborations
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
                      View Project
                    </button>
                    <button
                      className="flex items-center gap-2 text-sm transition-colors duration-200"
                      style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#782CFF'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#8A8F9A'}
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div
              className="rounded-2xl p-10 relative overflow-hidden"
              style={{
                background: '#14161C',
                border: '1px solid rgba(120,44,255,0.2)',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(120,44,255,0.08), transparent)' }}
              />
              <h3 className="font-orbitron text-2xl font-bold mb-4 relative z-10" style={{ color: '#DDE1E6' }}>
                READY TO START YOUR PROJECT?
              </h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto relative z-10" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
                Let's discuss how we can help bring your ideas to life with custom development solutions.
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
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
