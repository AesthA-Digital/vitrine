import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const CrystalLogo: React.FC = () => (
  <svg
    viewBox="0 0 200 220"
    className="w-full h-full animate-crystal-pulse"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#782CFF" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#B18CFF" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="cg2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#B18CFF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#782CFF" stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="cg3" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#DDE1E6" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#782CFF" stopOpacity="0.8" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <filter id="glowCore">
        <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
        <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    {/* Outer triangle */}
    <polygon points="100,8 192,180 8,180" fill="url(#cg3)" opacity="0.04" />
    <polygon points="100,8 192,180 8,180" fill="none" stroke="url(#cg1)" strokeWidth="1.5" filter="url(#glow)" opacity="0.7" />
    {/* Left shard */}
    <polygon points="100,8 8,180 60,130" fill="url(#cg2)" opacity="0.3" />
    <polygon points="100,8 8,180 60,130" fill="none" stroke="#782CFF" strokeWidth="0.8" opacity="0.5" />
    {/* Right shard */}
    <polygon points="100,8 192,180 140,130" fill="url(#cg1)" opacity="0.22" />
    <polygon points="100,8 192,180 140,130" fill="none" stroke="#B18CFF" strokeWidth="0.8" opacity="0.45" />
    {/* Center bottom shard */}
    <polygon points="60,130 140,130 100,180" fill="url(#cg1)" opacity="0.28" />
    <polygon points="60,130 140,130 100,180" fill="none" stroke="#782CFF" strokeWidth="0.8" opacity="0.45" />
    {/* Inner crystal */}
    <polygon points="100,50 130,120 70,120" fill="url(#cg1)" opacity="0.6" filter="url(#glowCore)" />
    <polygon points="100,50 130,120 70,120" fill="none" stroke="#B18CFF" strokeWidth="1.2" />
    {/* Core spike */}
    <polygon points="100,50 112,95 88,95" fill="#B18CFF" opacity="0.8" filter="url(#glowCore)" />
    {/* Center dot */}
    <circle cx="100" cy="88" r="6" fill="#782CFF" opacity="0.9" filter="url(#glowCore)" />
    <circle cx="100" cy="88" r="3" fill="#DDE1E6" opacity="1" />
    {/* Crystalline lines */}
    <line x1="100" y1="8" x2="100" y2="50" stroke="#B18CFF" strokeWidth="1" opacity="0.5" />
    <line x1="8" y1="180" x2="60" y2="130" stroke="#782CFF" strokeWidth="0.8" opacity="0.4" />
    <line x1="192" y1="180" x2="140" y2="130" stroke="#782CFF" strokeWidth="0.8" opacity="0.4" />
    <line x1="60" y1="130" x2="100" y2="50" stroke="#B18CFF" strokeWidth="0.6" opacity="0.3" />
    <line x1="140" y1="130" x2="100" y2="50" stroke="#B18CFF" strokeWidth="0.6" opacity="0.3" />
    {/* Vertices */}
    <circle cx="100" cy="8"   r="2.5" fill="#782CFF" filter="url(#glow)" />
    <circle cx="8"   cy="180" r="2"   fill="#782CFF" filter="url(#glow)" opacity="0.7" />
    <circle cx="192" cy="180" r="2"   fill="#782CFF" filter="url(#glow)" opacity="0.7" />
  </svg>
);

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const particles = Array.from({ length: 16 }, (_, i) => i);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0A0A0D' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 50%, transparent 20%, #0A0A0D 100%)' }}
        />
      </div>

      {/* Scan line effect */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none z-10"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(120,44,255,0.6), transparent)',
          animation: 'scan-line 8s linear 1s infinite',
          top: 0,
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(120,44,255,0.10) 0%, transparent 65%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Rising particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${5 + (i * 6) % 90}%`,
              bottom: '0',
              width: 2 + (i % 3),
              height: 2 + (i % 3),
              background: i % 2 === 0
                ? 'radial-gradient(circle, rgba(120,44,255,0.9), rgba(120,44,255,0.2))'
                : 'radial-gradient(circle, rgba(177,140,255,0.8), rgba(177,140,255,0.2))',
              '--px': `${(i % 2 === 0 ? 1 : -1) * (15 + (i * 7) % 45)}px`,
              '--py': `-${70 + (i * 17) % 130}px`,
              animation: `particle-rise ${3.5 + (i * 0.4) % 3}s ease-out ${i * 0.45}s infinite`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-28 lg:py-0 min-h-screen">

          {/* Text column */}
          <div
            className="space-y-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s',
            }}
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-full animate-pulse-glow"
                style={{ background: '#782CFF' }}
              />
              <span
                className="font-mono-brand text-xs tracking-[0.3em] uppercase"
                style={{ color: '#782CFF' }}
              >
                Premium Development Studio
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-orbitron leading-[1.05]">
              <span className="block text-5xl md:text-6xl xl:text-[4.5rem] font-black" style={{ color: '#DDE1E6' }}>
                POWERFUL
              </span>
              <span className="block text-5xl md:text-6xl xl:text-[4.5rem] font-black text-shimmer">
                DIGITAL
              </span>
              <span className="block text-5xl md:text-6xl xl:text-[4.5rem] font-black" style={{ color: '#DDE1E6' }}>
                EXPERIENCES
              </span>
            </h1>

            {/* Sub-tagline */}
            <p
              className="text-lg md:text-xl leading-relaxed max-w-lg"
              style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}
            >
              We build fast, reliable, and scalable websites & applications enhanced
              with AI automation — helping businesses grow, operate smarter, and stand&nbsp;out.
            </p>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #782CFF, transparent)' }} />
              <span className="font-mono-brand text-xs tracking-[0.2em] uppercase" style={{ color: '#8A8F9A' }}>
                Build. Perform. Grow.
              </span>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.9s ease 0.5s',
              }}
            >
              <button
                onClick={() => scrollTo("contact")}
                className="group relative overflow-hidden font-orbitron text-sm font-bold tracking-wider px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, #782CFF, #B18CFF)',
                  color: '#fff',
                  boxShadow: '0 0 25px rgba(120,44,255,0.5), 0 4px 20px rgba(0,0,0,0.5)',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 0 45px rgba(120,44,255,0.8), 0 0 90px rgba(120,44,255,0.3), 0 4px 20px rgba(0,0,0,0.5)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(120,44,255,0.5), 0 4px 20px rgba(0,0,0,0.5)'}
              >
                <span className="relative z-10 flex items-center gap-2">
                  START YOUR PROJECT
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => scrollTo("portfolio")}
                className="group font-orbitron text-sm font-bold tracking-wider px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'transparent',
                  color: '#DDE1E6',
                  border: '1px solid rgba(120,44,255,0.35)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(120,44,255,0.75)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(120,44,255,0.2), inset 0 0 20px rgba(120,44,255,0.06)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(120,44,255,0.35)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                VIEW OUR WORK
              </button>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-8 pt-2"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.9s ease 0.7s',
              }}
            >
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Shipped' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="font-orbitron text-2xl font-bold" style={{ color: '#782CFF' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-wider mt-1" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Crystal visual */}
          <div
            className="flex justify-center lg:justify-end"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(18px) scale(0.96)',
              transition: 'opacity 1.1s ease 0.35s, transform 1.1s ease 0.35s',
            }}
          >
            <div className="relative">
              {/* Outer ring */}
              <div
                className="absolute animate-rotate-slow pointer-events-none"
                style={{
                  width: 440,
                  height: 440,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  border: '1px solid rgba(120,44,255,0.14)',
                  borderRadius: '50%',
                }}
              />
              {/* Dashed ring */}
              <div
                className="absolute animate-rotate-rev pointer-events-none"
                style={{
                  width: 350,
                  height: 350,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  border: '1px dashed rgba(177,140,255,0.1)',
                  borderRadius: '50%',
                }}
              />

              {/* Crystal */}
              <div className="relative animate-float" style={{ width: 290, height: 320 }}>
                <CrystalLogo />
                {/* Ground glow */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    bottom: -15,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 170,
                    height: 45,
                    background: 'radial-gradient(ellipse, rgba(120,44,255,0.55) 0%, transparent 70%)',
                    filter: 'blur(14px)',
                    animation: 'pulse-glow 3s ease-in-out infinite',
                  }}
                />
              </div>

              {/* Floating micro shards */}
              {[
                { top: 10, right: -35, delay: '1.2s', dur: '5s', size: 38 },
                { bottom: 25, left: -45, delay: '2.1s', dur: '6.5s', size: 26 },
                { top: 110, left: -55, delay: '0.4s', dur: '4.5s', size: 18 },
              ].map((s, i) => (
                <div
                  key={i}
                  className="absolute pointer-events-none animate-float"
                  style={{
                    top: s.top,
                    right: s.right,
                    bottom: s.bottom,
                    left: s.left,
                    animationDelay: s.delay,
                    animationDuration: s.dur,
                  }}
                >
                  <svg width={s.size} height={s.size} viewBox="0 0 40 40" fill="none">
                    <polygon
                      points="20,2 38,35 2,35"
                      fill={i === 1 ? 'rgba(120,44,255,0.15)' : 'rgba(177,140,255,0.1)'}
                      stroke={i % 2 === 0 ? '#782CFF' : '#B18CFF'}
                      strokeWidth="1"
                      opacity="0.6"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity hover:opacity-100"
        style={{ color: '#8A8F9A', opacity: 0.55 }}
        aria-label="Scroll down"
      >
        <span className="font-mono-brand text-xs tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};
