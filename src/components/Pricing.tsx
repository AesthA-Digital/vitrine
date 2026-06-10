import React, { useEffect, useRef, useState } from 'react';
import { Check, Clock, Package, Wrench } from 'lucide-react';

export const Pricing: React.FC = () => {
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

  const pricingPlans = [
    {
      icon: Clock,
      name: 'Daily Rate (TJM)',
      price: '€350-500',
      period: 'per day',
      description: 'Flexible daily rate based on project complexity and requirements',
      features: [
        'Full-stack development',
        'Direct communication',
        'Agile methodology',
        'Code reviews',
        'Documentation included',
        'Post-delivery support'
      ],
      color: 'blue'
    },
    {
      icon: Package,
      name: 'Fixed-Price Projects',
      price: 'From €1000',
      period: 'per project',
      description: 'Complete project packages with defined scope and deliverables',
      features: [
        'Landing pages & websites',
        'MVP development',
        'Mobile app development',
        'Custom web applications',
        'E-commerce solutions',
        'Migration projects'
      ],
      color: 'green',
      popular: true
    },
    {
      icon: Wrench,
      name: 'Maintenance Retainer',
      price: 'From €100',
      period: 'per month',
      description: 'Ongoing support and maintenance for existing applications',
      features: [
        'Bug fixes & updates',
        'Security patches',
        'Performance monitoring',
        'Feature enhancements',
        'Priority support',
        'Monthly reports'
      ],
      color: 'purple'
    }
  ];

  return (
    <section id="pricing" ref={sectionRef} className="py-20  dark:bg-gray-900">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Pricing & Collaboration Models
            </h2>
            <p className="text-xl text-gray-light max-w-2xl mx-auto">
              Transparent pricing with flexible engagement models to fit your project needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-gray-dark rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                    plan.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                    plan.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                    'bg-purple-100 dark:bg-purple-900/30'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${
                      plan.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                      plan.color === 'green' ? 'text-green-600 dark:text-green-400' :
                      'text-purple-600 dark:text-purple-400'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-light ml-2">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-light text-sm">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-light text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-16 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Custom Solutions Available
              </h3>
              <p className="text-gray-light max-w-3xl mx-auto">
                Every project is unique. I'm happy to discuss custom pricing and engagement models 
                that perfectly fit your specific requirements, timeline, and budget constraints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};