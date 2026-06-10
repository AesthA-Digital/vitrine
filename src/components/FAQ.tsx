import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const faqs = [
    {
      question: 'What are your typical project delivery times?',
      answer: 'Delivery times vary by project scope. Simple landing pages typically take 1-2 weeks, custom web applications 4-8 weeks, and mobile apps 6-12 weeks. I provide detailed timelines during our initial consultation.'
    },
    {
      question: 'How do you handle billing and payments?',
      answer: 'I offer flexible payment terms: 50% upfront for fixed-price projects, weekly/bi-weekly invoicing for daily rate work, and monthly billing for retainer services. All payments are handled through secure invoicing systems.'
    },
    {
      question: 'Do you provide ongoing maintenance after project completion?',
      answer: 'Yes! I offer comprehensive maintenance packages starting from €100/month, including bug fixes, security updates, performance monitoring, and feature enhancements. All projects include 30 days of free support post-delivery.'
    },
    {
      question: 'Can you work with existing development teams?',
      answer: 'Absolutely! I frequently collaborate with existing teams, whether as a lead developer, specialist consultant, or team member. I adapt to your existing workflows, tools, and methodologies seamlessly.'
    },
    {
      question: 'What technologies do you recommend for my project?',
      answer: 'Technology choices depend on your specific requirements, budget, timeline, and long-term goals. I provide detailed technology recommendations with pros and cons during our consultation phase.'
    },
    {
      question: 'Do you handle deployment and hosting setup?',
      answer: 'Yes, I provide complete DevOps services including CI/CD pipeline setup, cloud deployment (AWS, Google Cloud, Azure), domain configuration, SSL certificates, and ongoing server management as needed.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-light">
              Common questions about working together and project processes
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm here to help! Feel free to reach out for any specific questions about your project.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
              >
                Ask Your Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};