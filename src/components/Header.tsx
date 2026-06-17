import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const navItems = [
    { label: t('nav.services'), id: 'services' },
    { label: t('nav.portfolio'), id: 'portfolio' },
    { label: t('nav.pricing'), id: 'pricing' },
    { label: t('nav.faq'), id: 'faq' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  const ctaLabel = language === 'en' ? 'GET IN TOUCH' : 'NOUS CONTACTER';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: isScrolled
          ? 'rgba(10,10,13,0.92)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(120,44,255,0.12)' : 'none',
        boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group"
          >
            {/* Crystal mini icon */}
            <svg width="24" height="28" viewBox="0 0 200 220" fill="none" className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(120,44,255,0.8)]">
              <polygon points="100,8 192,180 8,180" fill="none" stroke="rgba(120,44,255,0.8)" strokeWidth="8" />
              <polygon points="100,50 130,120 70,120" fill="rgba(120,44,255,0.6)" />
              <circle cx="100" cy="88" r="10" fill="#782CFF" />
              <circle cx="100" cy="88" r="5" fill="#DDE1E6" />
            </svg>
            <span
              className="font-orbitron text-base font-bold tracking-wider transition-colors duration-300"
              style={{ color: '#DDE1E6' }}
            >
              OBSIDIAN
              <span style={{ color: '#782CFF' }}> STUDIO</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative font-space text-sm font-medium tracking-wide transition-colors duration-200 group"
                style={{ color: '#8A8F9A' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#DDE1E6'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#8A8F9A'}
              >
                {item.label}
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, #782CFF, #B18CFF)' }}
                />
              </button>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-300"
              style={{
                background: 'rgba(120,44,255,0.1)',
                border: '1px solid rgba(120,44,255,0.25)',
                color: '#DDE1E6',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(120,44,255,0.5)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(120,44,255,0.18)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(120,44,255,0.25)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(120,44,255,0.1)';
              }}
            >
              <Globe className="w-4 h-4" style={{ color: '#782CFF' }} />
              <span className="font-mono-brand text-xs font-bold uppercase">{language}</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="font-orbitron text-xs font-bold tracking-wider px-5 py-2.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #782CFF, #B18CFF)',
                color: '#fff',
                boxShadow: '0 0 15px rgba(120,44,255,0.4)',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(120,44,255,0.7)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 0 15px rgba(120,44,255,0.4)'}
            >
              {ctaLabel}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Language Toggle Mobile */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all duration-300"
              style={{
                background: 'rgba(120,44,255,0.1)',
                border: '1px solid rgba(120,44,255,0.25)',
                color: '#DDE1E6',
              }}
            >
              <Globe className="w-4 h-4" style={{ color: '#782CFF' }} />
              <span className="font-mono-brand text-xs font-bold uppercase">{language}</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{
                background: 'rgba(120,44,255,0.1)',
                color: '#DDE1E6',
                border: '1px solid rgba(120,44,255,0.2)',
              }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div
            className="md:hidden py-4 space-y-1"
            style={{
              borderTop: '1px solid rgba(120,44,255,0.15)',
              background: 'rgba(10,10,13,0.98)',
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 font-space text-sm font-medium transition-colors duration-200 rounded-lg"
                style={{ color: '#8A8F9A' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = '#DDE1E6';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(120,44,255,0.08)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = '#8A8F9A';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full font-orbitron text-xs font-bold tracking-wider py-3 rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, #782CFF, #B18CFF)',
                  color: '#fff',
                }}
              >
                {ctaLabel}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
