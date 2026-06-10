import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-dark text-silver">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-silver">AesthA Digital</h3>
            <p className="text-gray-light mb-6 max-w-md leading-relaxed">
              Full-Stack & Mobile Freelance Developer specializing in modern web and mobile applications.
              EPITECH graduate with a passion for creating innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/antoine-hoareau"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/40 hover:bg-violet/20 hover:text-violet rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/antoine-hoareau"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/40 hover:bg-violet/20 hover:text-violet rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://malt.fr/profile/antoinehoareau"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/40 hover:bg-violet/20 hover:text-violet rounded-lg transition-colors"
                aria-label="Malt"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-silver">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-light hover:text-lavender transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-silver">Services</h4>
            <ul className="space-y-2 text-gray-light">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>API Development</li>
              <li>Performance & SEO</li>
              <li>Maintenance</li>
              <li>DevOps & CI/CD</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-dark/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-light text-sm">
            © {currentYear} AesthA Digital - Full-Stack & Mobile Freelance Developer
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <button className="text-gray-light hover:text-silver text-sm transition-colors">
              Legal Mentions
            </button>
            <button className="text-gray-light hover:text-silver text-sm transition-colors">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};