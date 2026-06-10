import React, { useEffect, useState } from "react";
import { ArrowRight, Code, Smartphone } from "lucide-react";
import DarkVeil from "./Darkveil";

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <DarkVeil />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <div className="p-4 bg-blue-900/30 rounded-2xl">
              <Code className="w-8 h-8 text-blue" />
            </div>
            <div className="p-4 bg-green-900/30 rounded-2xl">
              <Smartphone className="w-8 h-8 text-green" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="block">Full-Stack &</span>
            <span className="block bg-gradient-green-blue bg-clip-text text-transparent">
              Mobile Developer
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-gray-light mt-2">
              Freelance
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            I design and develop custom web & mobile applications enhanced with
            AI automation, helping startups and SMEs automate their business,
            save hundreds of hours, and scale faster.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-20">
            <button
              onClick={scrollToContact}
              className="group bg-gradient-blue-violet text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Work with me</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
      </div>
    </section>
  );
};
