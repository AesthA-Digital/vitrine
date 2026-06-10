import React, { useEffect, useRef, useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-silver mb-4">
              Let's Discuss Your Project
            </h2>
            <p className="text-xl text-gray-light max-w-2xl mx-auto">
              Ready to bring your ideas to life? Get in touch and let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-silver mb-6">
                  Get In Touch
                </h3>
                <p className="text-gray-light leading-relaxed mb-8">
                  I'm always excited to discuss new projects and opportunities. Whether you need a
                  custom web application, mobile app, or ongoing development support, I'm here to help
                  turn your vision into reality.
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-6">
                <a
                  href="mailto:aestha.digital@gmail.com"
                  className="flex items-center p-6 bg-gray-dark border border-gray-dark/60 rounded-2xl hover:border-violet/40 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-violet/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-violet transition-colors duration-200">
                    <Mail className="w-6 h-6 text-violet group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-silver">Email Me</h4>
                    <p className="text-violet">aestha.digital@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center p-6 bg-gray-dark border border-gray-dark/60 rounded-2xl">
                  <div className="w-12 h-12 bg-lavender/20 rounded-xl flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-lavender" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-silver">Response Time</h4>
                    <p className="text-gray-light">Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Additional info */}
              <div className="bg-gradient-violet-lavender rounded-2xl p-6 text-white">
                <h4 className="font-semibold mb-2">What happens next?</h4>
                <ul className="text-sm text-silver/80 space-y-1">
                  <li>• I'll review your project requirements</li>
                  <li>• Schedule a free consultation call</li>
                  <li>• Provide detailed proposal and timeline</li>
                  <li>• Begin development upon agreement</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-dark border border-gray-dark/60 rounded-2xl p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-silver mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-dark/60 rounded-xl focus:ring-2 focus:ring-violet focus:border-transparent bg-black text-silver transition-colors placeholder:text-gray-light/50"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-silver mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-dark/60 rounded-xl focus:ring-2 focus:ring-violet focus:border-transparent bg-black text-silver transition-colors placeholder:text-gray-light/50"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-silver mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-dark/60 rounded-xl focus:ring-2 focus:ring-violet focus:border-transparent bg-black text-silver transition-colors resize-none placeholder:text-gray-light/50"
                      placeholder="Tell me about your project, requirements, timeline, and any specific questions you have..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-violet-lavender text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:opacity-90 transform hover:-translate-y-1"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-violet mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-silver mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-light">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};