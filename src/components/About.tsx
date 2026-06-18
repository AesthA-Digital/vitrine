import React, { useEffect, useRef, useState } from "react";
import { Shield, Zap, Users } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();

  const values = [
    { icon: Shield, label: t('about.value1'), sub: t('about.value1.sub'), color: '#782CFF' },
    { icon: Zap,    label: t('about.value2'), sub: t('about.value2.sub'), color: '#B18CFF' },
    { icon: Users,  label: t('about.value3'), sub: t('about.value3.sub'), color: '#782CFF' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-mesh-violet"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-45" />
      </div>

      {/* Drifting aurora blobs */}
      <div
        className="absolute pointer-events-none animate-aurora-drift-rev"
        style={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(120,44,255,0.09) 0%, transparent 65%)',
          top: '50%',
          right: -180,
          transform: 'translateY(-50%)',
        }}
      />
      <div
        className="absolute pointer-events-none animate-aurora-drift"
        style={{
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(177,140,255,0.06) 0%, transparent 65%)',
          bottom: '5%',
          left: '5%',
          animationDelay: '3s',
        }}
      />

      {/* Sparkle dots */}
      {[
        { top: '8%',  left: '5%',  delay: '0s',   dur: '3s',   color: '#782CFF' },
        { top: '15%', left: '90%', delay: '1.2s', dur: '2.5s', color: '#B18CFF' },
        { top: '80%', left: '88%', delay: '0.5s', dur: '3.5s', color: '#782CFF' },
        { top: '90%', left: '15%', delay: '1.8s', dur: '4s',   color: '#B18CFF' },
      ].map((s, i) => (
        <div
          key={i}
          className="absolute pointer-events-none animate-twinkle-slow"
          style={{ top: s.top, left: s.left, animationDelay: s.delay, animationDuration: s.dur }}
        >
          <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
            <path d="M5 0L5.8 4.2L10 5L5.8 5.8L5 10L4.2 5.8L0 5L4.2 4.2Z" fill={s.color} opacity="0.7" />
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
              {t('about.label')}
            </span>
          </div>

          <div className="mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mb-4" style={{ color: '#DDE1E6' }}>
              {t('about.title')}
            </h2>
            <p className="text-xl max-w-2xl" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="space-y-8">
              <div className="space-y-5">
                <p className="text-lg leading-relaxed" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {t('about.p1')}{' '}
                  <span style={{ color: '#DDE1E6', fontWeight: 600 }}>{t('about.p1.name')}</span>
                  {t('about.p1.rest')}
                </p>
                <p className="text-lg leading-relaxed" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {t('about.p2')}
                </p>
              </div>

              {/* Values */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {values.map(({ icon: Icon, label, sub, color }) => (
                  <div
                    key={label}
                    className="p-5 rounded-xl text-center transition-all duration-300"
                    style={{
                      background: '#14161C',
                      border: '1px solid rgba(120,44,255,0.15)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(120,44,255,0.45)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(120,44,255,0.15)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(120,44,255,0.15)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <Icon className="w-7 h-7 mx-auto mb-3" style={{ color }} />
                    <h4 className="font-orbitron text-xs font-bold tracking-wider mb-1" style={{ color: '#DDE1E6' }}>
                      {label}
                    </h4>
                    <p className="text-xs" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
                      {sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Crystal identity card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Rotating ring */}
                <div
                  className="absolute animate-rotate-slow pointer-events-none"
                  style={{
                    width: 360,
                    height: 360,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    border: '1px solid rgba(120,44,255,0.1)',
                    borderRadius: '50%',
                  }}
                />
                <div
                  className="absolute animate-rotate-rev pointer-events-none"
                  style={{
                    width: 290,
                    height: 290,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    border: '1px dashed rgba(177,140,255,0.08)',
                    borderRadius: '50%',
                  }}
                />

                {/* Card — spinning conic gradient border */}
                <div
                  className="relative w-72 rounded-2xl overflow-hidden border-conic-spin"
                  style={{
                    boxShadow: '0 0 50px rgba(120,44,255,0.15), inset 0 0 30px rgba(120,44,255,0.04)',
                  }}
                >
                  {/* Top gradient bar */}
                  <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #782CFF, #B18CFF)' }} />

                  <div className="p-8 text-center">
                    {/* Logo */}
                    <div className="flex justify-center mb-5">
                      <div
                        className="w-24 h-24 rounded-2xl flex items-center justify-center animate-pulse-glow"
                        style={{
                          background: 'rgba(120,44,255,0.1)',
                          border: '1px solid rgba(120,44,255,0.3)',
                        }}
                      >
                        <svg width="50" height="56" viewBox="0 0 200 220" fill="none" className="animate-crystal-pulse">
                          <polygon points="100,8 192,180 8,180" fill="none" stroke="rgba(120,44,255,0.8)" strokeWidth="8" />
                          <polygon points="100,50 130,120 70,120" fill="rgba(120,44,255,0.5)" />
                          <circle cx="100" cy="88" r="14" fill="#782CFF" />
                          <circle cx="100" cy="88" r="7" fill="#DDE1E6" />
                        </svg>
                      </div>
                    </div>

                    <p className="font-orbitron text-lg font-bold mb-1" style={{ color: '#DDE1E6' }}>
                      OBSIDIAN STUDIO
                    </p>
                    <p className="font-mono-brand text-xs tracking-widest mb-4" style={{ color: '#782CFF' }}>
                      Antoine Hoareau
                    </p>
                    <p className="text-sm mb-1" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
                      {t('about.role')}
                    </p>
                    <p className="text-xs mb-6" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
                      {t('about.exp')}
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center">
                      {['React', 'Flutter', 'Node.js', 'AI'].map(tag => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full font-mono-brand text-xs"
                          style={{
                            background: 'rgba(120,44,255,0.12)',
                            color: '#B18CFF',
                            border: '1px solid rgba(120,44,255,0.22)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating shards */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
