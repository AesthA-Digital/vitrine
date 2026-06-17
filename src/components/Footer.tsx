import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const { t, language } = useLanguage();

  const navItems = language === 'en'
    ? ['About', 'Services', 'Portfolio', 'Pricing', 'Contact']
    : ['À propos', 'Services', 'Portfolio', 'Tarifs', 'Contact'];

  const services = language === 'en'
    ? ['Web Development', 'Mobile Apps', 'API & Backend', 'Performance & SEO', 'Maintenance', 'DevOps & CI/CD']
    : ['Développement Web', 'Applications Mobile', 'API & Backend', 'Performance & SEO', 'Maintenance', 'DevOps & CI/CD'];

  const tagline = language === 'en'
    ? 'BUILT IN OBSIDIAN. DESIGNED TO PERFORM.'
    : 'CONÇU DANS OBSIDIAN. CONÇU POUR PERFORMER.';

  const copyright = language === 'en'
    ? `© ${currentYear} Obsidian Studio — Premium Development. Powerful Results.`
    : `© ${currentYear} Obsidian Studio — Développement Premium. Résultats Puissants.`;

  const legalItems = language === 'en'
    ? ['Legal Mentions', 'Privacy Policy']
    : ['Mentions Légales', 'Politique de Confidentialité'];

  return (
    <footer style={{ background: '#0A0A0D', borderTop: '1px solid rgba(120,44,255,0.12)' }}>
      {/* Top glow line */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(120,44,255,0.5), rgba(177,140,255,0.5), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <svg width="22" height="26" viewBox="0 0 200 220" fill="none">
                <polygon points="100,8 192,180 8,180" fill="none" stroke="rgba(120,44,255,0.8)" strokeWidth="8" />
                <polygon points="100,50 130,120 70,120" fill="rgba(120,44,255,0.5)" />
                <circle cx="100" cy="88" r="10" fill="#782CFF" />
                <circle cx="100" cy="88" r="5" fill="#DDE1E6" />
              </svg>
              <h3 className="font-orbitron text-xl font-bold" style={{ color: '#DDE1E6' }}>
                OBSIDIAN<span style={{ color: '#782CFF' }}> STUDIO</span>
              </h3>
            </div>

            <p className="leading-relaxed max-w-sm" style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}>
              {t('footer.tagline')}
            </p>

            <p className="font-mono-brand text-xs tracking-widest" style={{ color: 'rgba(120,44,255,0.7)' }}>
              {tagline}
            </p>

            <div className="flex gap-3">
              {[
                { href: 'https://linkedin.com/in/antoine-hoareau', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://github.com/antoine-hoareau', icon: Github, label: 'GitHub' },
                { href: 'https://malt.fr/profile/antoinehoareau', icon: ExternalLink, label: 'Malt' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg transition-all duration-300"
                  style={{
                    background: 'rgba(120,44,255,0.08)',
                    color: '#8A8F9A',
                    border: '1px solid rgba(120,44,255,0.15)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(120,44,255,0.2)';
                    (e.currentTarget as HTMLElement).style.color = '#782CFF';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(120,44,255,0.4)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 15px rgba(120,44,255,0.3)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(120,44,255,0.08)';
                    (e.currentTarget as HTMLElement).style.color = '#8A8F9A';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(120,44,255,0.15)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-orbitron text-xs font-bold tracking-[0.2em] uppercase mb-6"
              style={{ color: '#782CFF' }}
            >
              {language === 'en' ? 'Navigation' : 'Navigation'}
            </h4>
            <ul className="space-y-3">
              {navItems.map((link, i) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(['about', 'services', 'portfolio', 'pricing', 'contact'][i])}
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#B18CFF'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#8A8F9A'}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-orbitron text-xs font-bold tracking-[0.2em] uppercase mb-6"
              style={{ color: '#782CFF' }}
            >
              {t('footer.services')}
            </h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li
                  key={s}
                  className="text-sm"
                  style={{ color: '#8A8F9A', fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(120,44,255,0.1)' }}
        >
          <p className="font-mono-brand text-xs" style={{ color: '#8A8F9A' }}>
            {copyright}
          </p>
          <div className="flex gap-6">
            {legalItems.map(label => (
              <button
                key={label}
                className="font-mono-brand text-xs transition-colors"
                style={{ color: '#8A8F9A' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#DDE1E6'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#8A8F9A'}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
