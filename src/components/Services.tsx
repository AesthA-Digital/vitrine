import React, { useEffect, useRef, useState } from "react";
import {
  Monitor,
  Smartphone,
  Database,
  Zap,
  Wrench,
  Server,
} from "lucide-react";
import GlareHover from "./GlareHover";

export const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description:
        "Custom web applications, SaaS platforms, landing pages, and AI-enhanced business tools built with modern scalable technologies.",
      features: [
        "Custom web apps",
        "Landing pages",
        "AI integrations",
        "E-commerce platforms",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Cross-platform mobile applications with Flutter, including AI-powered features such as smart assistants, automation, and real-time data experiences.",
      features: [
        "Flutter & Dart",
        "iOS & Android",
        "Native performance",
        "AI-powered features",
      ],
    },
    {
      icon: Database,
      title: "API & Backend",
      description:
        "Scalable backend architectures, APIs, databases, and AI integrations designed to automate workflows and power modern digital products.",
      features: [
        "Third-party APIs",
        "Microservices",
        "REST & AI",
        "Database design",
      ],
    },
    {
      icon: Zap,
      title: "Performance & SEO",
      description:
        "Website optimization for speed, accessibility, and search engine rankings to maximize your online presence.",
      features: [
        "Speed optimization",
        "SEO implementation",
        "Accessibility",
        "Core Web Vitals",
      ],
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description:
        "Ongoing maintenance, bug fixes, and feature updates with flexible monthly retainer packages.",
      features: [
        "Bug fixes",
        "Feature updates",
        "Security updates",
        "Monthly retainers",
      ],
    },
    {
      icon: Server,
      title: "DevOps & CI/CD",
      description:
        "Automated deployment pipelines, server setup, containerization with Docker, and cloud infrastructure.",
      features: [
        "CI/CD pipelines",
        "Docker containers",
        "Cloud deployment",
        "Server management",
      ],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 mt-20 bg-gray-dark rounded-t-4xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-silver mb-4">
              Services I Offer
            </h2>
            <p className="text-xl text-gray-light max-w-3xl mx-auto">
              Comprehensive development services to bring your digital ideas to
              life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GlareHover
                background="transparent"
                glareColor="#782CFF"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
              >
                <div key={index} className="group p-8 bg-black rounded-2xl border border-gray-dark/60">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-violet/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-violet group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-silver mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-light leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-light"
                      >
                        <div className="w-1.5 h-1.5 bg-violet rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlareHover>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
