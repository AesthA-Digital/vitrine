import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Smartphone, Monitor } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'HR Management Platform',
      description: 'Complete HR solution with employee management, payroll, and performance tracking built with React and Symfony.',
      technologies: ['React', 'TypeScript', 'Symfony', 'MySQL'],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Web Application',
      icon: Monitor
    },
    {
      title: 'Mobile Booking App',
      description: 'Cross-platform appointment booking app for service providers with real-time notifications and payment integration.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Stripe API'],
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Mobile App',
      icon: Smartphone
    },
    {
      title: 'E-commerce Dashboard',
      description: 'Admin dashboard for e-commerce management with analytics, inventory tracking, and order processing.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Web Application',
      icon: Monitor
    },
    {
      title: 'Fitness Tracking App',
      description: 'Personal fitness tracker with workout logging, progress tracking, and social features built with Flutter.',
      technologies: ['Flutter', 'Dart', 'SQLite', 'REST API'],
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Mobile App',
      icon: Smartphone
    }
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-black">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-silver mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-light max-w-2xl mx-auto">
              A showcase of recent work and successful client collaborations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-dark rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Project image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium">{project.type}</span>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-silver mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-light mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-violet-lavender text-white rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 text-gray-light hover:text-violet transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">View Project</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-light hover:text-violet transition-colors">
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Source Code</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gray-dark rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-light mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help bring your ideas to life with custom development solutions.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-violet-lavender text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};