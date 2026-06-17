import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FAQ: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();

  const faqs = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
    { question: t('faq.q6'), answer: t('faq.a6') },
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
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-mesh-violet"
    >
      {/* Top edge with traveling light */}
      {/*<div className="absolute top-0 left-0 right-0 h-px overflow-hidden" style={{ background: 'rgba(120,44,255,0.12)' }}>
        <div className="divider-light" style={{ animationDelay: '2s' }} />
      </div>*/}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-25" />
      </div>

      {/* Drifting aurora blobs */}
      <div
        className="absolute pointer-events-none animate-aurora-drift"
        style={{
          width: 450,
          height: 450,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(120,44,255,0.08) 0%, transparent 65%)',
          top: '40%',
          left: '-12%',
        }}
      />
      <div
        className="absolute pointer-events-none animate-aurora-drift-rev"
        style={{
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(177,140,255,0.06) 0%, transparent 65%)',
          bottom: '10%',
          right: '-8%',
          animationDelay: '4s',
        }}
      />

      {/* Sparkle dots */}
      {[
        { top: '6%',  left: '12%', delay: '0s',   dur: '3s',   color: '#782CFF' },
        { top: '15%', left: '88%', delay: '1.1s', dur: '2.6s', color: '#B18CFF' },
        { top: '82%', left: '92%', delay: '0.5s', dur: '3.3s', color: '#782CFF' },
        { top: '90%', left: '8%',  delay: '1.7s', dur: '4s',   color: '#B18CFF' },
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              {t('faq.label')}
            </span>
          </div>

          <div className="mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mb-4" style={{ color: '#DDE1E6' }}>
              {t('faq.title')}
            </h2>
            <p className="text-xl" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
              {t('faq.subtitle')}
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  background: '#0A0A0D',
                  border: openIndex === i ? '1px solid rgba(120,44,255,0.45)' : '1px solid rgba(120,44,255,0.12)',
                  boxShadow: openIndex === i ? '0 0 20px rgba(120,44,255,0.1)' : 'none',
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-7 py-5 text-left flex items-center justify-between transition-colors duration-200 group"
                >
                  <h3 className="text-sm font-semibold pr-6" style={{ color: '#DDE1E6', fontFamily: 'Space Grotesk, sans-serif' }}>
                    {faq.question}
                  </h3>
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      background: openIndex === i ? 'rgba(120,44,255,0.3)' : 'rgba(120,44,255,0.08)',
                      border: '1px solid rgba(120,44,255,0.25)',
                    }}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300`}
                      style={{
                        color: '#782CFF',
                        transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    />
                  </div>
                </button>

                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{
                    maxHeight: openIndex === i ? '300px' : '0',
                    opacity: openIndex === i ? 1 : 0,
                  }}
                >
                  <div className="px-7 pb-6">
                    <div
                      className="h-px mb-4"
                      style={{ background: 'linear-gradient(90deg, rgba(120,44,255,0.3), transparent)' }}
                    />
                    <p className="text-sm leading-relaxed" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div
            className="mt-12 rounded-2xl p-8 text-center relative overflow-hidden border-conic-spin-dark"
            style={{
              background: '#0A0A0D',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(120,44,255,0.06), transparent)' }}
            />
            <h3 className="font-orbitron text-xl font-bold mb-3 relative z-10" style={{ color: '#DDE1E6' }}>
              {t('faq.more.title')}
            </h3>
            <p className="mb-6 relative z-10" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
              {t('faq.more.desc')}
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-orbitron text-xs font-bold tracking-wider px-8 py-3.5 rounded-xl transition-all duration-300 relative z-10 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #782CFF, #B18CFF)',
                color: '#fff',
                boxShadow: '0 0 20px rgba(120,44,255,0.35)',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 0 35px rgba(120,44,255,0.6)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(120,44,255,0.35)'}
            >
              {t('faq.more.button')}
            </button>
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
};
