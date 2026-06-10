import React, { useEffect, useRef, useState } from "react";
import { GraduationCap, Award, Users } from "lucide-react";

export const About: React.FC = () => {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 w-2/3 mx-auto bg-gray-dark rounded-3xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-silver mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-light max-w-3xl mx-auto">
              Full-Stack Developer passionate about creating innovative digital
              solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-silver mb-4">
                  Hello, I'm Antoine Hoareau 👋
                </h3>
                <p className="text-gray-light leading-relaxed mb-6">
                  EPITECH graduate with over 5 years of experience in full-stack
                  and mobile development. I specialize in building modern,
                  high-performance web applications, cross-platform mobile
                  solutions, and AI-powered automation systems that help
                  startups and SMEs optimize workflows, improve efficiency, and
                  scale faster in the digital landscape.
                </p>
                <p className="text-gray-light leading-relaxed">
                  My approach combines reliable delivery, scalable architecture,
                  and innovative AI integration to create smart digital
                  solutions tailored to real business needs while maintaining
                  close client relationships throughout the entire development
                  process.
                </p>
              </div>

              {/* Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-black rounded-xl shadow-sm border border-gray-dark">
                  <Award className="w-8 h-8 text-violet mx-auto mb-3" />
                  <h4 className="font-semibold text-silver mb-2">
                    Reliability
                  </h4>
                  <p className="text-sm text-gray-light">
                    On-time delivery and quality code
                  </p>
                </div>
                <div className="text-center p-6 bg-black rounded-xl shadow-sm border border-gray-dark">
                  <GraduationCap className="w-8 h-8 text-lavender mx-auto mb-3" />
                  <h4 className="font-semibold text-silver mb-2">Innovation</h4>
                  <p className="text-sm text-gray-light">
                    Modern solutions and best practices
                  </p>
                </div>
                <div className="text-center p-6 bg-black rounded-xl shadow-sm border border-gray-dark">
                  <Users className="w-8 h-8 text-violet mx-auto mb-3" />
                  <h4 className="font-semibold text-silver mb-2">
                    Client Proximity
                  </h4>
                  <p className="text-sm text-gray-light">
                    Close collaboration and communication
                  </p>
                </div>
              </div>
            </div>

            {/* Image/Avatar placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className=" p-[8px] rounded-2xl bg-gradient-to-r from-violet to-lavender shadow-xl flex items-center justify-center">
                  <div className="w-72 h-72 bg-gray-dark rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-violet-lavender rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-silver text-3xl font-bold">
                          AH
                        </span>
                      </div>
                      <p className="text-silver font-semibold">
                        Antoine Hoareau
                      </p>
                      <p className="text-gray-light text-sm">
                        Full-Stack Developer
                      </p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                {/*<div className="absolute -top-4 -right-4 w-8 h-8 bg-violet rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green rounded-full animate-pulse"></div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
