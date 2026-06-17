import React, { useEffect, useRef, useState } from 'react';
import { Check, Clock, Package, Wrench } from 'lucide-react';

const plans = [
  {
    icon: Clock,
    name: 'Daily Rate',
    sub: 'TJM',
    price: '€350–500',
    period: 'per day',
    description: 'Flexible daily rate based on project complexity and requirements.',
    features: [
      'Full-stack development',
      'Direct communication',
      'Agile methodology',
      'Code reviews',
      'Documentation included',
      'Post-delivery support',
    ],
    popular: false,
    accentColor: '#782CFF',
  },
  {
    icon: Package,
    name: 'Fixed-Price',
    sub: 'Projects',
    price: 'From €1000',
    period: 'per project',
    description: 'Complete project packages with defined scope and deliverables.',
    features: [
      'Landing pages & websites',
      'MVP development',
      'Mobile app development',
      'Custom web applications',
      'E-commerce solutions',
      'Migration projects',
    ],
    popular: true,
    accentColor: '#B18CFF',
  },
  {
    icon: Wrench,
    name: 'Retainer',
    sub: 'Maintenance',
    price: 'From €100',
    period: 'per month',
    description: 'Ongoing support and maintenance for existing applications.',
    features: [
      'Bug fixes & updates',
      'Security patches',
      'Performance monitoring',
      'Feature enhancements',
      'Priority support',
      'Monthly reports',
    ],
    popular: false,
    accentColor: '#782CFF',
  },
];

export const Pricing: React.FC = () => {
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
      id="pricing"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: '#0A0A0D' }}
    >
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
              Pricing
            </span>
          </div>

          <div className="mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mb-4" style={{ color: '#DDE1E6' }}>
              ENGAGEMENT MODELS
            </h2>
            <p className="text-xl max-w-2xl" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
              Transparent pricing with flexible models to fit your project needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {plans.map((plan, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden transition-all duration-400"
                style={{
                  background: '#14161C',
                  border: plan.popular ? '1px solid rgba(177,140,255,0.5)' : '1px solid rgba(120,44,255,0.15)',
                  boxShadow: plan.popular ? '0 0 40px rgba(177,140,255,0.12)' : 'none',
                  transform: plan.popular ? 'scale(1.03)' : 'scale(1)',
                }}
                onMouseEnter={e => {
                  if (!plan.popular) {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(120,44,255,0.45)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(120,44,255,0.12)';
                  }
                }}
                onMouseLeave={e => {
                  if (!plan.popular) {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(120,44,255,0.15)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }
                }}
              >
                {/* Top gradient bar */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: plan.popular
                      ? 'linear-gradient(90deg, #782CFF, #B18CFF)'
                      : 'linear-gradient(90deg, rgba(120,44,255,0.5), rgba(177,140,255,0.3))',
                  }}
                />

                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute top-5 right-5">
                    <span
                      className="font-orbitron text-xs font-bold tracking-wider px-3 py-1 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #782CFF, #B18CFF)', color: '#fff' }}
                    >
                      POPULAR
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Icon & name */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: 'rgba(120,44,255,0.1)',
                      border: '1px solid rgba(120,44,255,0.25)',
                    }}
                  >
                    <plan.icon className="w-6 h-6" style={{ color: plan.accentColor }} />
                  </div>

                  <div className="mb-1">
                    <span className="font-orbitron text-sm font-bold tracking-wider" style={{ color: '#DDE1E6' }}>
                      {plan.name.toUpperCase()}
                    </span>
                    <span className="font-mono-brand text-xs ml-2" style={{ color: '#8A8F9A' }}>
                      / {plan.sub}
                    </span>
                  </div>

                  <div className="mt-4 mb-2 flex items-baseline gap-2">
                    <span className="font-orbitron text-3xl font-black" style={{ color: '#DDE1E6' }}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="font-mono-brand text-xs mb-1" style={{ color: '#8A8F9A' }}>
                    {plan.period}
                  </p>
                  <p
                    className="text-sm mt-3 mb-7 leading-relaxed"
                    style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#782CFF' }} />
                        <span className="text-sm" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full font-orbitron text-xs font-bold tracking-wider py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                    style={
                      plan.popular
                        ? {
                            background: 'linear-gradient(135deg, #782CFF, #B18CFF)',
                            color: '#fff',
                            boxShadow: '0 0 20px rgba(120,44,255,0.4)',
                          }
                        : {
                            background: 'transparent',
                            color: '#DDE1E6',
                            border: '1px solid rgba(120,44,255,0.3)',
                          }
                    }
                    onMouseEnter={e => {
                      if (plan.popular)
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 35px rgba(120,44,255,0.65)';
                      else {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(120,44,255,0.6)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 15px rgba(120,44,255,0.15)';
                      }
                    }}
                    onMouseLeave={e => {
                      if (plan.popular)
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(120,44,255,0.4)';
                      else {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(120,44,255,0.3)';
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      }
                    }}
                  >
                    GET STARTED
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Custom note */}
          <div
            className="mt-12 rounded-2xl p-8 text-center relative overflow-hidden"
            style={{
              background: '#14161C',
              border: '1px solid rgba(120,44,255,0.15)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(120,44,255,0.06), transparent)' }}
            />
            <h3 className="font-orbitron text-xl font-bold mb-3 relative z-10" style={{ color: '#DDE1E6' }}>
              CUSTOM SOLUTIONS AVAILABLE
            </h3>
            <p className="max-w-2xl mx-auto relative z-10" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
              Every project is unique. We're happy to discuss custom pricing and engagement models
              that perfectly fit your specific requirements, timeline, and budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
