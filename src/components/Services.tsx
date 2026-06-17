import React, { useEffect, useRef, useState } from "react";
import { Monitor, Smartphone, Database, Zap, Wrench, Server } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Monitor,
      title: t('services.web.title'),
      description: t('services.web.desc'),
      features: language === 'en'
        ? ["Custom web apps", "Landing pages", "AI integrations", "E-commerce platforms"]
        : ["Applications web", "Sites vitrines", "Intégrations IA", "E-commerce"],
    },
    {
      icon: Smartphone,
      title: t('services.mobile.title'),
      description: t('services.mobile.desc'),
      features: language === 'en'
        ? ["Flutter & Dart", "iOS & Android", "Native performance", "AI-powered features"]
        : ["Flutter & Dart", "iOS & Android", "Performance native", "Fonctionnalités IA"],
    },
    {
      icon: Database,
      title: t('services.api.title'),
      description: t('services.api.desc'),
      features: language === 'en'
        ? ["Third-party APIs", "Microservices", "REST & AI", "Database design"]
        : ["API tierces", "Microservices", "REST & IA", "Conception BDD"],
    },
    {
      icon: Zap,
      title: t('services.performance.title'),
      description: t('services.performance.desc'),
      features: language === 'en'
        ? ["Speed optimization", "SEO implementation", "Accessibility", "Core Web Vitals"]
        : ["Optimisation vitesse", "Implémentation SEO", "Accessibilité", "Core Web Vitals"],
    },
    {
      icon: Wrench,
      title: t('services.maintenance.title'),
      description: t('services.maintenance.desc'),
      features: language === 'en'
        ? ["Bug fixes", "Feature updates", "Security updates", "Monthly retainers"]
        : ["Corrections bugs", "Mises à jour", "Sécurité", "Retainers mensuels"],
    },
    {
      icon: Server,
      title: t('services.devops.title'),
      description: t('services.devops.desc'),
      features: language === 'en'
        ? ["CI/CD pipelines", "Docker containers", "Cloud deployment", "Server management"]
        : ["Pipelines CI/CD", "Conteneurs Docker", "Déploiement cloud", "Gestion serveurs"],
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
      id="services"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-mesh-lavender"
    >
      {/* Top edge with traveling light */}
      {/*<div className="absolute top-0 left-0 right-0 h-px overflow-hidden" style={{ background: 'rgba(120,44,255,0.12)' }}>
        <div className="divider-light" />
      </div>*/}

      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-35" />
      </div>

      {/* Drifting aurora blobs */}
      <div
        className="absolute pointer-events-none animate-aurora-drift"
        style={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(120,44,255,0.08) 0%, transparent 65%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Sparkle dots */}
      {[
        { top: '10%', left: '92%', delay: '0s',   dur: '2.8s', color: '#782CFF' },
        { top: '85%', left: '3%',  delay: '1.4s', dur: '3.2s', color: '#B18CFF' },
        { top: '55%', left: '97%', delay: '0.7s', dur: '4s',   color: '#782CFF' },
        { top: '30%', left: '2%',  delay: '2.1s', dur: '3s',   color: '#B18CFF' },
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
              {t('services.label')}
            </span>
          </div>

          <div className="mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mb-4" style={{ color: '#DDE1E6' }}>
              {t('services.title')}
            </h2>
            <p className="text-xl max-w-2xl" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl p-7 transition-all duration-400"
                style={{
                  background: '#14161C',
                  border: '1px solid rgba(120,44,255,0.15)',
                  animationDelay: `${i * 0.1}s`,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(120,44,255,0.5)';
                  el.style.boxShadow = '0 0 35px rgba(120,44,255,0.15), inset 0 0 25px rgba(120,44,255,0.04)';
                  el.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(120,44,255,0.15)';
                  el.style.boxShadow = 'none';
                  el.style.transform = 'translateY(0)';
                }}
              >
                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                  style={{ background: 'linear-gradient(135deg, rgba(120,44,255,0.04) 0%, transparent 60%)' }}
                />

                {/* Corner triangle accent */}
                <div
                  className="absolute top-0 right-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                >
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <polygon points="60,0 60,60 0,0" fill="rgba(120,44,255,0.3)" />
                  </svg>
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(120,44,255,0.12)',
                      border: '1px solid rgba(120,44,255,0.25)',
                    }}
                  >
                    <service.icon className="w-5 h-5" style={{ color: '#782CFF' }} />
                  </div>

                  <h3 className="font-orbitron text-sm font-bold tracking-wider mb-3" style={{ color: '#DDE1E6' }}>
                    {service.title.toUpperCase()}
                  </h3>

                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#782CFF' }} />
                        <span className="text-xs" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom edge with traveling light */}
      {/*<div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden" style={{ background: 'rgba(120,44,255,0.1)' }}>
        <div className="divider-light" style={{ animationDelay: '2.5s' }} />
      </div>*/}
    </section>
  );
};
