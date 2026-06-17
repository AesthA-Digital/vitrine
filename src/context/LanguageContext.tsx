import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',

    // Hero
    'hero.label': 'Full-Stack & Mobile Developer',
    'hero.title': 'BUILDING THE FUTURE',
    'hero.subtitle': 'Obsidian Studio crafts high-performance web applications, cross-platform mobile solutions, and AI-powered automation systems for forward-thinking businesses.',
    'hero.cta.primary': 'START A PROJECT',
    'hero.cta.secondary': 'VIEW PORTFOLIO',

    // Services
    'services.label': 'Services',
    'services.title': 'WHAT WE BUILD',
    'services.subtitle': 'Comprehensive development services to bring your digital ideas to life',
    'services.web.title': 'Web Development',
    'services.web.desc': 'Custom web applications, SaaS platforms, landing pages, and AI-enhanced business tools built with modern scalable technologies.',
    'services.mobile.title': 'Mobile Development',
    'services.mobile.desc': 'Cross-platform mobile applications with Flutter, including AI-powered features such as smart assistants, automation, and real-time data experiences.',
    'services.api.title': 'API & Backend',
    'services.api.desc': 'Scalable backend architectures, APIs, databases, and AI integrations designed to automate workflows and power modern digital products.',
    'services.performance.title': 'Performance & SEO',
    'services.performance.desc': 'Website optimization for speed, accessibility, and search engine rankings to maximize your online presence and conversion rates.',
    'services.maintenance.title': 'Maintenance & Support',
    'services.maintenance.desc': 'Ongoing maintenance, bug fixes, and feature updates with flexible monthly retainer packages and priority support.',
    'services.devops.title': 'DevOps & CI/CD',
    'services.devops.desc': 'Automated deployment pipelines, server setup, containerization with Docker, and cloud infrastructure on AWS, GCP, and Azure.',

    // About
    'about.label': 'About',
    'about.title': 'WHO WE ARE',
    'about.subtitle': 'A premium development studio built on precision, performance, and passion',
    'about.p1': 'Founded by',
    'about.p1.name': 'Antoine Hoareau',
    'about.p1.rest': ', an EPITECH graduate with over 5 years of expertise in full-stack and mobile development. We specialize in building modern, high-performance web applications, cross-platform mobile solutions, and AI-powered automation systems.',
    'about.p2': 'Our approach combines reliable delivery, scalable architecture, and innovative AI integration — creating smart digital solutions tailored to real business needs while maintaining close client relationships throughout the entire development process.',
    'about.value1': 'Reliability',
    'about.value1.sub': 'On-time delivery & quality code',
    'about.value2': 'Performance',
    'about.value2.sub': 'Modern solutions & best practices',
    'about.value3': 'Partnership',
    'about.value3.sub': 'Close collaboration at every step',
    'about.role': 'Full-Stack & Mobile Developer',
    'about.exp': 'EPITECH Graduate · 5+ Years Experience',

    // Portfolio
    'portfolio.label': 'Portfolio',
    'portfolio.title': 'FEATURED PROJECTS',
    'portfolio.subtitle': 'A showcase of recent work and successful client collaborations',
    'portfolio.project1.title': 'HR Management Platform',
    'portfolio.project1.desc': 'Complete HR solution with employee management, payroll, and performance tracking built with React and Symfony.',
    'portfolio.project2.title': 'Mobile Booking App',
    'portfolio.project2.desc': 'Cross-platform appointment booking app for service providers with real-time notifications and payment integration.',
    'portfolio.project3.title': 'E-commerce Dashboard',
    'portfolio.project3.desc': 'Admin dashboard for e-commerce management with analytics, inventory tracking, and order processing.',
    'portfolio.project4.title': 'Fitness Tracking App',
    'portfolio.project4.desc': 'Personal fitness tracker with workout logging, progress tracking, and social features built with Flutter.',
    'portfolio.type.web': 'Web Application',
    'portfolio.type.mobile': 'Mobile App',
    'portfolio.view': 'View Project',
    'portfolio.source': 'Source Code',
    'portfolio.cta.title': 'READY TO START YOUR PROJECT?',
    'portfolio.cta.desc': "Let's discuss how we can help bring your ideas to life with custom development solutions.",
    'portfolio.cta.button': 'GET IN TOUCH',

    // Technologies
    'tech.label': 'Technology Stack',
    'tech.title': 'WORKS WITH ANY STACK',
    'tech.stats.tech': 'Technologies',
    'tech.stats.years': 'Years',
    'tech.stats.domains': 'Domains',
    'tech.tagline': 'Technology evolves rapidly — so do we. We continuously learn and adapt to ensure your project benefits from the latest innovations and best practices.',
    'tech.always': 'Always Learning',

    // Pricing
    'pricing.label': 'Pricing',
    'pricing.title': 'ENGAGEMENT MODELS',
    'pricing.subtitle': 'Transparent pricing with flexible models to fit your project needs',
    'pricing.daily.name': 'Daily Rate',
    'pricing.daily.sub': 'TJM',
    'pricing.daily.desc': 'Flexible daily rate based on project complexity and requirements.',
    'pricing.fixed.name': 'Fixed-Price',
    'pricing.fixed.sub': 'Projects',
    'pricing.fixed.desc': 'Complete project packages with defined scope and deliverables.',
    'pricing.retainer.name': 'Retainer',
    'pricing.retainer.sub': 'Maintenance',
    'pricing.retainer.desc': 'Ongoing support and maintenance for existing applications.',
    'pricing.popular': 'POPULAR',
    'pricing.cta': 'GET STARTED',
    'pricing.custom.title': 'CUSTOM SOLUTIONS AVAILABLE',
    'pricing.custom.desc': "Every project is unique. We're happy to discuss custom pricing and engagement models that perfectly fit your specific requirements, timeline, and budget.",

    // FAQ
    'faq.label': 'FAQ',
    'faq.title': 'COMMON QUESTIONS',
    'faq.subtitle': 'Everything you need to know about working with us',
    'faq.q1': 'What are your typical project delivery times?',
    'faq.a1': 'Delivery times vary by project scope. Simple landing pages typically take 1–2 weeks, custom web applications 4–8 weeks, and mobile apps 6–12 weeks. We provide detailed timelines during our initial consultation.',
    'faq.q2': 'How do you handle billing and payments?',
    'faq.a2': 'We offer flexible payment terms: 50% upfront for fixed-price projects, weekly/bi-weekly invoicing for daily rate work, and monthly billing for retainer services. All payments are handled through secure invoicing systems.',
    'faq.q3': 'Do you provide ongoing maintenance after project completion?',
    'faq.a3': 'Yes! We offer comprehensive maintenance packages starting from €100/month, including bug fixes, security updates, performance monitoring, and feature enhancements. All projects include 30 days of free support post-delivery.',
    'faq.q4': 'Can you work with existing development teams?',
    'faq.a4': 'Absolutely. We frequently collaborate with existing teams, whether as a lead developer, specialist consultant, or team member. We adapt to your existing workflows, tools, and methodologies seamlessly.',
    'faq.q5': 'What technologies do you recommend for my project?',
    'faq.a5': 'Technology choices depend on your specific requirements, budget, timeline, and long-term goals. We provide detailed technology recommendations with pros and cons during our consultation phase.',
    'faq.q6': 'Do you handle deployment and hosting setup?',
    'faq.a6': 'Yes, we provide complete DevOps services including CI/CD pipeline setup, cloud deployment (AWS, Google Cloud, Azure), domain configuration, SSL certificates, and ongoing server management as needed.',
    'faq.more.title': 'STILL HAVE QUESTIONS?',
    'faq.more.desc': "We're here to help. Reach out for any specific questions about your project.",
    'faq.more.button': 'ASK YOUR QUESTION',

    // Contact
    'contact.label': 'Contact',
    'contact.title': 'START A PROJECT',
    'contact.subtitle': 'Ready to build something extraordinary? Let\'s talk.',
    'contact.desc': "We're always excited to discuss new projects and opportunities. Whether you need a custom web application, mobile app, or ongoing development support, Obsidian Studio is here to help turn your vision into reality.",
    'contact.email.title': 'EMAIL US',
    'contact.response.title': 'RESPONSE TIME',
    'contact.response.value': 'Usually within 24 hours',
    'contact.next.title': 'WHAT HAPPENS NEXT?',
    'contact.next.1': 'We review your project requirements',
    'contact.next.2': 'Schedule a free consultation call',
    'contact.next.3': 'Provide detailed proposal & timeline',
    'contact.next.4': 'Begin development upon agreement',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.message': 'Project Details',
    'contact.form.placeholder': 'Tell us about your project, requirements, timeline, and budget...',
    'contact.form.send': 'SEND MESSAGE',
    'contact.form.sent': 'MESSAGE SENT',
    'contact.form.thanks': "Thank you for reaching out. We'll get back to you within 24 hours.",

    // Footer
    'footer.tagline': 'Premium development studio for modern digital solutions',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.resources': 'Resources',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Tarifs',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',

    // Hero
    'hero.label': 'Développeur Full-Stack & Mobile',
    'hero.title': 'CONSTRUIRE L\'AVENIR',
    'hero.subtitle': 'Obsidian Studio conçoit des applications web haute performance, des solutions mobiles multiplateformes et des systèmes d\'automatisation alimentés par l\'IA pour les entreprises visionnaires.',
    'hero.cta.primary': 'DÉMARRER UN PROJET',
    'hero.cta.secondary': 'VOIR LE PORTFOLIO',

    // Services
    'services.label': 'Services',
    'services.title': 'CE QUE NOUS CRÉONS',
    'services.subtitle': 'Des services de développement complets pour donner vie à vos idées numériques',
    'services.web.title': 'Développement Web',
    'services.web.desc': 'Applications web personnalisées, plateformes SaaS, sites vitrines et outils métier enrichis par l\'IA, construits avec des technologies modernes et évolutives.',
    'services.mobile.title': 'Développement Mobile',
    'services.mobile.desc': 'Applications mobiles multiplateformes avec Flutter, incluant des fonctionnalités alimentées par l\'IA telles que des assistants intelligents, l\'automatisation et des expériences de données en temps réel.',
    'services.api.title': 'API & Backend',
    'services.api.desc': 'Architectures backend évolutives, API, bases de données et intégrations IA conçues pour automatiser les flux de travail et alimenter les produits numériques modernes.',
    'services.performance.title': 'Performance & SEO',
    'services.performance.desc': 'Optimisation de sites web pour la vitesse, l\'accessibilité et le référencement afin de maximiser votre présence en ligne et vos taux de conversion.',
    'services.maintenance.title': 'Maintenance & Support',
    'services.maintenance.desc': 'Maintenance continue, corrections de bugs et mises à jour de fonctionnalités avec des forfaits mensuels flexibles et un support prioritaire.',
    'services.devops.title': 'DevOps & CI/CD',
    'services.devops.desc': 'Pipelines de déploiement automatisés, configuration de serveurs, conteneurisation avec Docker et infrastructure cloud sur AWS, GCP et Azure.',

    // About
    'about.label': 'À propos',
    'about.title': 'QUI SOMMES-NOUS',
    'about.subtitle': 'Un studio de développement premium bâti sur la précision, la performance et la passion',
    'about.p1': 'Fondé par',
    'about.p1.name': 'Antoine Hoareau',
    'about.p1.rest': ', diplômé de l\'EPITECH avec plus de 5 ans d\'expertise en développement full-stack et mobile. Nous sommes spécialisés dans la création d\'applications web modernes et haute performance, de solutions mobiles multiplateformes et de systèmes d\'automatisation alimentés par l\'IA.',
    'about.p2': 'Notre approche combine livraison fiable, architecture évolutive et intégration IA innovante — créant des solutions numériques intelligentes adaptées aux besoins réels des entreprises tout en maintenant des relations clients étroites tout au long du processus de développement.',
    'about.value1': 'Fiabilité',
    'about.value1.sub': 'Livraison à temps & code de qualité',
    'about.value2': 'Performance',
    'about.value2.sub': 'Solutions modernes & bonnes pratiques',
    'about.value3': 'Partenariat',
    'about.value3.sub': 'Collaboration étroite à chaque étape',
    'about.role': 'Développeur Full-Stack & Mobile',
    'about.exp': 'Diplômé EPITECH · 5+ Ans d\'Expérience',

    // Portfolio
    'portfolio.label': 'Portfolio',
    'portfolio.title': 'PROJETS RÉALISÉS',
    'portfolio.subtitle': 'Présentation de travaux récents et de collaborations clients réussies',
    'portfolio.project1.title': 'Plateforme de Gestion RH',
    'portfolio.project1.desc': 'Solution RH complète avec gestion des employés, paie et suivi des performances construite avec React et Symfony.',
    'portfolio.project2.title': 'Application de Réservation Mobile',
    'portfolio.project2.desc': 'Application de prise de rendez-vous multiplateforme pour prestataires de services avec notifications en temps réel et intégration de paiement.',
    'portfolio.project3.title': 'Tableau de Bord E-commerce',
    'portfolio.project3.desc': 'Tableau de bord administratif pour la gestion e-commerce avec analyses, suivi des stocks et traitement des commandes.',
    'portfolio.project4.title': 'Application de Suivi Fitness',
    'portfolio.project4.desc': 'Suivi de fitness personnel avec enregistrement des séances, suivi des progrès et fonctionnalités sociales construit avec Flutter.',
    'portfolio.type.web': 'Application Web',
    'portfolio.type.mobile': 'Application Mobile',
    'portfolio.view': 'Voir le Projet',
    'portfolio.source': 'Code Source',
    'portfolio.cta.title': 'PRÊT À DÉMARRER VOTRE PROJET?',
    'portfolio.cta.desc': 'Discutons de la façon dont nous pouvons vous aider à concrétiser vos idées avec des solutions de développement personnalisées.',
    'portfolio.cta.button': 'NOUS CONTACTER',

    // Technologies
    'tech.label': 'Stack Technologique',
    'tech.title': 'FONCTIONNE AVEC TOUTE STACK',
    'tech.stats.tech': 'Technologies',
    'tech.stats.years': 'Années',
    'tech.stats.domains': 'Domaines',
    'tech.tagline': 'La technologie évolue rapidement — nous aussi. Nous apprenons et nous adaptons continuellement pour garantir que votre projet bénéficie des dernières innovations et meilleures pratiques.',
    'tech.always': 'Toujours en Apprentissage',

    // Pricing
    'pricing.label': 'Tarifs',
    'pricing.title': 'MODÈLES D\'ENGAGEMENT',
    'pricing.subtitle': 'Tarification transparente avec des modèles flexibles adaptés à vos besoins',
    'pricing.daily.name': 'Tarif Journalier',
    'pricing.daily.sub': 'TJM',
    'pricing.daily.desc': 'Tarif journalier flexible basé sur la complexité du projet et les exigences.',
    'pricing.fixed.name': 'Prix Fixe',
    'pricing.fixed.sub': 'Projets',
    'pricing.fixed.desc': 'Forfaits projet complets avec périmètre et livrables définis.',
    'pricing.retainer.name': 'Retainer',
    'pricing.retainer.sub': 'Maintenance',
    'pricing.retainer.desc': 'Support et maintenance continus pour les applications existantes.',
    'pricing.popular': 'POPULAIRE',
    'pricing.cta': 'DÉMARRER',
    'pricing.custom.title': 'SOLUTIONS PERSONNALISÉES DISPONIBLES',
    'pricing.custom.desc': 'Chaque projet est unique. Nous sommes heureux de discuter de tarification et de modèles d\'engagement personnalisés qui s\'adaptent parfaitement à vos exigences, délais et budget.',

    // FAQ
    'faq.label': 'FAQ',
    'faq.title': 'QUESTIONS COURANTES',
    'faq.subtitle': 'Tout ce que vous devez savoir sur notre collaboration',
    'faq.q1': 'Quels sont vos délais de livraison typiques?',
    'faq.a1': 'Les délais varient selon la portée du projet. Les sites vitrines simples prennent généralement 1–2 semaines, les applications web personnalisées 4–8 semaines, et les applications mobiles 6–12 semaines. Nous fournissons des calendriers détaillés lors de notre consultation initiale.',
    'faq.q2': 'Comment gérez-vous la facturation et les paiements?',
    'faq.a2': 'Nous offrons des conditions de paiement flexibles: 50% à l\'avance pour les projets à prix fixe, facturation hebdomadaire/bi-hebdomadaire pour le tarif journalier, et facturation mensuelle pour les services de retainer. Tous les paiements sont traités via des systèmes de facturation sécurisés.',
    'faq.q3': 'Fournissez-vous une maintenance continue après la livraison?',
    'faq.a3': 'Oui! Nous offrons des forfaits de maintenance complets à partir de 100€/mois, incluant corrections de bugs, mises à jour de sécurité, surveillance des performances et améliorations de fonctionnalités. Tous les projets incluent 30 jours de support gratuit post-livraison.',
    'faq.q4': 'Pouvez-vous travailler avec des équipes de développement existantes?',
    'faq.a4': 'Absolument. Nous collaborons fréquemment avec des équipes existantes, que ce soit en tant que développeur principal, consultant spécialiste ou membre de l\'équipe. Nous nous adaptons à vos flux de travail, outils et méthodologies existants de manière transparente.',
    'faq.q5': 'Quelles technologies recommandez-vous pour mon projet?',
    'faq.a5': 'Les choix technologiques dépendent de vos exigences spécifiques, budget, délais et objectifs à long terme. Nous fournissons des recommandations technologiques détaillées avec avantages et inconvénients lors de la phase de consultation.',
    'faq.q6': 'Gérez-vous le déploiement et la configuration de l\'hébergement?',
    'faq.a6': 'Oui, nous fournissons des services DevOps complets incluant la mise en place de pipelines CI/CD, déploiement cloud (AWS, Google Cloud, Azure), configuration de domaine, certificats SSL et gestion continue des serveurs si nécessaire.',
    'faq.more.title': 'VOUS AVEZ D\'AUTRES QUESTIONS?',
    'faq.more.desc': 'Nous sommes là pour vous aider. Contactez-nous pour toute question spécifique concernant votre projet.',
    'faq.more.button': 'POSER VOTRE QUESTION',

    // Contact
    'contact.label': 'Contact',
    'contact.title': 'DÉMARRER UN PROJET',
    'contact.subtitle': 'Prêt à créer quelque chose d\'extraordinaire? Parlons-en.',
    'contact.desc': 'Nous sommes toujours ravis de discuter de nouveaux projets et opportunités. Que vous ayez besoin d\'une application web personnalisée, d\'une application mobile ou d\'un support de développement continu, Obsidian Studio est là pour vous aider à concrétiser votre vision.',
    'contact.email.title': 'EMAIL',
    'contact.response.title': 'TEMPS DE RÉPONSE',
    'contact.response.value': 'Généralement sous 24 heures',
    'contact.next.title': 'QUE SE PASSE-T-IL ENSUITE?',
    'contact.next.1': 'Nous examinons vos exigences',
    'contact.next.2': 'Planification d\'un appel de consultation gratuit',
    'contact.next.3': 'Proposition détaillée & calendrier fourni',
    'contact.next.4': 'Début du développement après accord',
    'contact.form.name': 'Votre Nom',
    'contact.form.email': 'Adresse Email',
    'contact.form.message': 'Détails du Projet',
    'contact.form.placeholder': 'Parlez-nous de votre projet, exigences, délais et budget...',
    'contact.form.send': 'ENVOYER LE MESSAGE',
    'contact.form.sent': 'MESSAGE ENVOYÉ',
    'contact.form.thanks': 'Merci de nous avoir contactés. Nous vous répondrons sous 24 heures.',

    // Footer
    'footer.tagline': 'Studio de développement premium pour solutions numériques modernes',
    'footer.services': 'Services',
    'footer.company': 'Entreprise',
    'footer.resources': 'Ressources',
    'footer.rights': 'Tous droits réservés.',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
