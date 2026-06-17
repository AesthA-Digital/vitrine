import React, { useEffect, useRef, useState } from 'react';
import { Mail, Clock, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#0A0A0D',
    border: '1px solid rgba(120,44,255,0.25)',
    borderRadius: '10px',
    padding: '14px 16px',
    color: '#DDE1E6',
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'IBM Plex Mono, monospace',
    fontSize: '11px',
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    color: '#8A8F9A',
    marginBottom: '8px',
  };

  return (
    <section
      id="contact"
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

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none animate-pulse-glow"
        style={{
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(120,44,255,0.08) 0%, transparent 70%)',
          bottom: -100,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />

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
              Contact
            </span>
          </div>

          <div className="mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mb-4" style={{ color: '#DDE1E6' }}>
              START A PROJECT
            </h2>
            <p className="text-xl max-w-2xl" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
              Ready to build something extraordinary? Let's talk.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Info */}
            <div className="space-y-8">
              <p className="text-lg leading-relaxed" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
                We're always excited to discuss new projects and opportunities. Whether you need
                a custom web application, mobile app, or ongoing development support, Obsidian
                Studio is here to help turn your vision into reality.
              </p>

              {/* Contact methods */}
              <div className="space-y-4">
                <a
                  href="mailto:aestha.digital@gmail.com"
                  className="flex items-center gap-4 p-5 rounded-xl transition-all duration-300 group"
                  style={{
                    background: '#14161C',
                    border: '1px solid rgba(120,44,255,0.15)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(120,44,255,0.5)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(120,44,255,0.12)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(120,44,255,0.15)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(120,44,255,0.15)', border: '1px solid rgba(120,44,255,0.3)' }}
                  >
                    <Mail className="w-5 h-5" style={{ color: '#782CFF' }} />
                  </div>
                  <div>
                    <h4 className="font-orbitron text-xs font-bold tracking-wider mb-0.5" style={{ color: '#DDE1E6' }}>
                      EMAIL US
                    </h4>
                    <p style={{ color: '#782CFF', fontFamily: 'IBM Plex Mono, monospace', fontSize: '13px' }}>
                      aestha.digital@gmail.com
                    </p>
                  </div>
                </a>

                <div
                  className="flex items-center gap-4 p-5 rounded-xl"
                  style={{ background: '#14161C', border: '1px solid rgba(120,44,255,0.1)' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(177,140,255,0.12)', border: '1px solid rgba(177,140,255,0.25)' }}
                  >
                    <Clock className="w-5 h-5" style={{ color: '#B18CFF' }} />
                  </div>
                  <div>
                    <h4 className="font-orbitron text-xs font-bold tracking-wider mb-0.5" style={{ color: '#DDE1E6' }}>
                      RESPONSE TIME
                    </h4>
                    <p style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif', fontSize: '14px' }}>
                      Usually within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Next steps */}
              <div
                className="rounded-xl p-6 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(120,44,255,0.15), rgba(177,140,255,0.08))',
                  border: '1px solid rgba(120,44,255,0.25)',
                }}
              >
                <h4 className="font-orbitron text-xs font-bold tracking-wider mb-4" style={{ color: '#DDE1E6' }}>
                  WHAT HAPPENS NEXT?
                </h4>
                <ul className="space-y-2">
                  {[
                    'We review your project requirements',
                    'Schedule a free consultation call',
                    'Provide detailed proposal & timeline',
                    'Begin development upon agreement',
                  ].map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      <span className="font-mono-brand text-xs mt-0.5" style={{ color: '#782CFF' }}>
                        0{i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: '#14161C',
                border: '1px solid rgba(120,44,255,0.2)',
                boxShadow: '0 0 40px rgba(120,44,255,0.08)',
              }}
            >
              {/* Top bar */}
              <div className="h-1" style={{ background: 'linear-gradient(90deg, #782CFF, #B18CFF)' }} />

              <div className="p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label style={labelStyle}>Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                        placeholder="Antoine Hoareau"
                        onFocus={e => {
                          (e.target as HTMLElement).style.borderColor = 'rgba(120,44,255,0.6)';
                          (e.target as HTMLElement).style.boxShadow = '0 0 15px rgba(120,44,255,0.15)';
                        }}
                        onBlur={e => {
                          (e.target as HTMLElement).style.borderColor = 'rgba(120,44,255,0.25)';
                          (e.target as HTMLElement).style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                        placeholder="hello@obsidian.studio"
                        onFocus={e => {
                          (e.target as HTMLElement).style.borderColor = 'rgba(120,44,255,0.6)';
                          (e.target as HTMLElement).style.boxShadow = '0 0 15px rgba(120,44,255,0.15)';
                        }}
                        onBlur={e => {
                          (e.target as HTMLElement).style.borderColor = 'rgba(120,44,255,0.25)';
                          (e.target as HTMLElement).style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Project Details</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={{ ...inputStyle, resize: 'none' }}
                        placeholder="Tell us about your project, requirements, timeline, and budget..."
                        onFocus={e => {
                          (e.target as HTMLElement).style.borderColor = 'rgba(120,44,255,0.6)';
                          (e.target as HTMLElement).style.boxShadow = '0 0 15px rgba(120,44,255,0.15)';
                        }}
                        onBlur={e => {
                          (e.target as HTMLElement).style.borderColor = 'rgba(120,44,255,0.25)';
                          (e.target as HTMLElement).style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full font-orbitron text-sm font-bold tracking-wider py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-0.5"
                      style={{
                        background: 'linear-gradient(135deg, #782CFF, #B18CFF)',
                        color: '#fff',
                        boxShadow: '0 0 25px rgba(120,44,255,0.4)',
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 0 45px rgba(120,44,255,0.7)'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(120,44,255,0.4)'}
                    >
                      <Send className="w-4 h-4" />
                      SEND MESSAGE
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 mx-auto mb-5 animate-pulse-glow" style={{ color: '#782CFF' }} />
                    <h3 className="font-orbitron text-xl font-bold mb-3" style={{ color: '#DDE1E6' }}>
                      MESSAGE SENT
                    </h3>
                    <p style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
