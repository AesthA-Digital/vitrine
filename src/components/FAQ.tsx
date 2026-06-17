import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What are your typical project delivery times?',
    answer: 'Delivery times vary by project scope. Simple landing pages typically take 1–2 weeks, custom web applications 4–8 weeks, and mobile apps 6–12 weeks. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'How do you handle billing and payments?',
    answer: 'We offer flexible payment terms: 50% upfront for fixed-price projects, weekly/bi-weekly invoicing for daily rate work, and monthly billing for retainer services. All payments are handled through secure invoicing systems.',
  },
  {
    question: 'Do you provide ongoing maintenance after project completion?',
    answer: 'Yes! We offer comprehensive maintenance packages starting from €100/month, including bug fixes, security updates, performance monitoring, and feature enhancements. All projects include 30 days of free support post-delivery.',
  },
  {
    question: 'Can you work with existing development teams?',
    answer: 'Absolutely. We frequently collaborate with existing teams, whether as a lead developer, specialist consultant, or team member. We adapt to your existing workflows, tools, and methodologies seamlessly.',
  },
  {
    question: 'What technologies do you recommend for my project?',
    answer: 'Technology choices depend on your specific requirements, budget, timeline, and long-term goals. We provide detailed technology recommendations with pros and cons during our consultation phase.',
  },
  {
    question: 'Do you handle deployment and hosting setup?',
    answer: 'Yes, we provide complete DevOps services including CI/CD pipeline setup, cloud deployment (AWS, Google Cloud, Azure), domain configuration, SSL certificates, and ongoing server management as needed.',
  },
];

export const FAQ: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
      ref={sectionRef}
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
              FAQ
            </span>
          </div>

          <div className="mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mb-4" style={{ color: '#DDE1E6' }}>
              COMMON QUESTIONS
            </h2>
            <p className="text-xl" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
              Everything you need to know about working with us
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
            className="mt-12 rounded-2xl p-8 text-center relative overflow-hidden"
            style={{
              background: '#0A0A0D',
              border: '1px solid rgba(120,44,255,0.2)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(120,44,255,0.06), transparent)' }}
            />
            <h3 className="font-orbitron text-xl font-bold mb-3 relative z-10" style={{ color: '#DDE1E6' }}>
              STILL HAVE QUESTIONS?
            </h3>
            <p className="mb-6 relative z-10" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
              We're here to help. Reach out for any specific questions about your project.
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
              ASK YOUR QUESTION
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
