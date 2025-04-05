
export type Language = 'de' | 'en' | 'fr';

export const translations = {
  de: {
    header: {
      automation: 'Automation',
      academy: 'Academy',
      about: 'Über uns',
      contact: 'Kontakt',
      services: 'Services',
      projects: 'Projekte',
      creativeModeButton: 'Projekt starten',
      automationModeButton: 'Strategiegespräch vereinbaren'
    },
    hero: {
      creative: {
        heading: 'Design. Create. Disrupt.',
        description: 'Entfesseln Sie die Kraft künstlicher Intelligenz in Ihrem kreativen Prozess. Wir erschaffen digitale Experiences, die begeistern.',
        primaryButton: 'Projekt starten',
        secondaryButton: 'Showreel ansehen'
      },
      automation: {
        heading: 'Automate. Optimize. Scale.',
        description: 'Individuelle KI-Lösungen für Effizienz, Wachstum und digitale Transformation.',
        primaryButton: 'Strategiegespräch vereinbaren',
        secondaryButton: 'Use Case entdecken'
      }
    },
    services: {
      title: 'Unsere Services',
      description: {
        creative: 'Wir kombinieren kreative Expertise mit fortschrittlicher Technologie, um einzigartige und zukunftsweisende Lösungen zu schaffen.',
        automation: 'Wir bieten umfassende AI-Lösungen für Unternehmen, die ihre Prozesse optimieren und ihr volles Potenzial ausschöpfen möchten.'
      },
      studio: {
        title: 'Creative Studio',
        description: 'Wir gestalten, was du im Kopf hast – visuell & funktional.',
        extendedDescription: 'Wenn Ästhetik auf Funktionalität trifft, entsteht mehr als Sichtbarkeit: Ihre Marke wird zum Gesprächsthema.',
        features: ['Branding', 'Design', 'Social Media & Content', 'Web & App Development'],
        cta: 'Kreativprojekt starten'
      },
      automation: {
        title: 'Automation',
        description: 'Wir automatisieren Geschäftsprozesse und steigern Ihre Effizienz durch intelligente technologische Lösungen.',
        creativeDescription: 'Revolutionieren Sie Ihre Arbeitsabläufe mit unseren fortschrittlichen AI-Automatisierungslösungen.',
        features: {
          creative: ['Robotische Prozessautomatisierung', 'Intelligente Chatbots', 'Prädiktive Analysen', 'Datengetriebene Entscheidungen'],
          automation: ['Workflow-Optimierung', 'CRM-Integration', 'Dokumentenmanagement', 'Reporting & Analytics']
        },
        cta: 'Automatisierung planen'
      },
      academy: {
        title: 'Academy',
        description: 'Wir bilden Ihre Mitarbeiter weiter und befähigen sie, das volle Potenzial moderner Technologien zu nutzen.',
        creativeDescription: 'Bringen Sie Ihre Teams auf die nächste Stufe mit unseren zukunftsorientierten AI-Schulungsprogrammen.',
        features: {
          creative: ['KI-Prompt-Engineering', 'Zukunftsorientierte Tech-Skills', 'Immersive VR-Trainings', 'Personalisierte Lernpfade'],
          automation: ['Digitale Transformation', 'Datenanalyse', 'Technisches Know-how', 'Change Management']
        },
        cta: 'Workshop buchen'
      }
    },
    automation: {
      title: 'Automatisierung neu gedacht',
      description: 'Wir analysieren, optimieren und automatisieren Ihre Geschäftsprozesse mit KI – von der CRM-Automation bis zur Dokumentenverwaltung.',
      services: 'Unsere Leistungen',
      features: [
        'CRM & Sales-Automation',
        'Dokumenten- und E-Mail-Verarbeitung',
        'Interne Prozess-Workflows',
        'Reporting & Business Intelligence'
      ],
      benefits: 'Ihre Vorteile',
      benefitsList: [
        'Höhere Effizienz durch maßgeschneiderte Lösungen',
        'Kostenersparnis durch automatisierte Prozesse',
        'Schnellere Entscheidungsfindung dank Datenanalyse',
        'Reduzierung manueller Fehler'
      ],
      cta: 'Kostenlose Automatisierungsanalyse buchen'
    },
    academy: {
      title: 'KI-Kompetenz im Unternehmen aufbauen',
      description: 'Wir schulen Ihre Teams, damit sie moderne Technologien souverän einsetzen können – strategisch und praxisnah.',
      services: 'Unsere Leistungen',
      features: [
        'Individuelle KI-Workshops',
        'Prompt Engineering Trainings',
        'Branchenbezogene Schulungspfade',
        'Mitarbeiterschulungen (remote & vor Ort)'
      ],
      benefits: 'Die Vorteile',
      benefitsList: [
        'Nachhaltige Kompetenzsteigerung im Team',
        'Praxisorientierte Übungen und Anwendungsfälle',
        'Individuelle Abstimmung auf Ihre Branche',
        'Messbare Produktivitätssteigerung'
      ],
      cta: 'Jetzt Schulung planen'
    },
    about: {
      title: 'Über uns',
      description: 'Erfahren Sie mehr über unser Unternehmen und unsere Werte.',
      mission: 'Unsere Mission',
      missionText: 'Wir haben uns zum Ziel gesetzt, Unternehmen durch innovative KI-Lösungen zu transformieren und sie auf ihrem Weg in die digitale Zukunft zu begleiten.',
      approach: 'Unser Ansatz',
      approachText: 'Als spezialisiertes Team aus Technologen und Branchenexperten entwickeln wir maßgeschneiderte Lösungen, die auf die spezifischen Bedürfnisse unserer Kunden zugeschnitten sind.'
    },
    contact: {
      creative: {
        title: 'Starten Sie Ihr kreatives Projekt',
        description: 'Bereit, Ihre Vision mit KI-Technologie zum Leben zu erwecken? Wir freuen uns darauf, von Ihnen zu hören.',
        submitButton: 'Projekt starten',
        benefitsTitle: 'Warum mit unserem Creative Studio arbeiten?',
        benefits: [
          'KI-gestützte kreative Prozesse',
          'Einzigartige, disruptive Designs',
          'Schnellere Iteration und Entwicklung',
          'Zukunftsorientierte digitale Erlebnisse',
          'Schnelle Umsetzung & persönliche Betreuung'
        ]
      },
      automation: {
        title: 'Kontaktieren Sie uns',
        description: 'Haben Sie Fragen oder möchten Sie eine Beratung buchen? Füllen Sie das Formular aus und wir melden uns bei Ihnen.',
        submitButton: 'Nachricht senden',
        calendlyButton: 'Jetzt Termin vereinbaren',
        whatsappHint: 'Oder schreiben Sie uns direkt per WhatsApp',
        benefitsTitle: 'Ihre Vorteile im Überblick',
        benefits: [
          'KI-gestützte Beratung & Umsetzung',
          'Höhere Effizienz und Einsparungen',
          'Benutzerfreundliche Implementierung',
          'Langfristige Betreuung und Support'
        ]
      },
      formLabels: {
        name: 'Name',
        email: 'E-Mail',
        message: 'Nachricht'
      },
      quickContact: {
        title: 'Schneller Kontakt:',
        email: 'info@aiventures.de',
        phone: '+49 123 4567890'
      }
    },
    footer: {
      description: 'Wir revolutionieren Unternehmen durch AI-Lösungen, die wirklich funktionieren.',
      services: 'Services',
      contact: 'Kontakt',
      legal: 'Rechtliches',
      copyright: '© 2025 AIventures. Alle Rechte vorbehalten.'
    },
    language: {
      de: 'Deutsch',
      en: 'Englisch',
      fr: 'Französisch'
    }
  },
  en: {
    header: {
      automation: 'Automation',
      academy: 'Academy',
      about: 'About us',
      contact: 'Contact',
      services: 'Services',
      projects: 'Projects',
      creativeModeButton: 'Request project',
      automationModeButton: 'Book a strategy call'
    },
    hero: {
      creative: {
        heading: 'Design. Create. Disrupt.',
        description: 'Unleash the power of AI in your creative process. We craft digital experiences that captivate.',
        primaryButton: 'Request project',
        secondaryButton: 'See creative work'
      },
      automation: {
        heading: 'Automate. Optimize. Scale.',
        description: 'Custom AI solutions for efficiency, growth and digital transformation.',
        primaryButton: 'Book a strategy call',
        secondaryButton: 'Explore use cases'
      }
    },
    services: {
      title: 'Our Services',
      description: {
        creative: 'We combine creative expertise with advanced technology to create unique and forward-thinking solutions.',
        automation: 'We offer comprehensive AI solutions for companies looking to optimize their processes and reach their full potential.'
      },
      studio: {
        title: 'Creative Studio',
        description: 'We design what you have in mind - visually & functionally.',
        extendedDescription: 'When aesthetics meet functionality, more than visibility emerges: your brand becomes a conversation topic.',
        features: ['Branding', 'Design', 'Social Media & Content', 'Web & App Dev'],
        cta: 'Start creative project'
      },
      automation: {
        title: 'Automation',
        description: 'Process automation, CRM, Document mgmt., Reporting & analytics',
        creativeDescription: 'Revolutionize your workflows with our advanced AI automation solutions.',
        features: {
          creative: ['Robotic Process Automation', 'Intelligent Chatbots', 'Predictive Analytics', 'Data-driven Decisions'],
          automation: ['Workflow Optimization', 'CRM Integration', 'Document Management', 'Reporting & Analytics']
        },
        cta: 'Plan automation'
      },
      academy: {
        title: 'Academy',
        description: 'We train your employees and enable them to harness the full potential of modern technologies.',
        creativeDescription: 'Take your teams to the next level with our future-oriented AI training programs.',
        features: {
          creative: ['AI Prompt Engineering', 'Tech-skills', 'VR Training', 'Custom Learning Paths'],
          automation: ['Digital Transformation', 'Data Analysis', 'Technical Know-how', 'Change Management']
        },
        cta: 'Book workshop'
      }
    },
    automation: {
      title: 'Automation Reimagined',
      description: 'We analyze, optimize and automate your business processes with AI - from CRM automation to document management.',
      services: 'Our Services',
      features: [
        'CRM & Sales Automation',
        'Document & Email Processing',
        'Internal Process Workflows',
        'Reporting & Business Intelligence'
      ],
      benefits: 'Your Benefits',
      benefitsList: [
        'Higher efficiency through customized solutions',
        'Cost savings through automated processes',
        'Faster decision making thanks to data analysis',
        'Reduction of manual errors'
      ],
      cta: 'Book free automation analysis'
    },
    academy: {
      title: 'Building AI Competence in Your Company',
      description: 'We train your teams to confidently use modern technologies - strategically and practically.',
      services: 'Our Services',
      features: [
        'Custom AI Workshops',
        'Prompt Engineering Training',
        'Industry-specific Learning Paths',
        'Employee Training (remote & on-site)'
      ],
      benefits: 'The Benefits',
      benefitsList: [
        'Sustainable increase in team competence',
        'Practice-oriented exercises and use cases',
        'Individual adaptation to your industry',
        'Measurable productivity increase'
      ],
      cta: 'Plan training now'
    },
    about: {
      title: 'About Us',
      description: 'Learn more about our company and our values.',
      mission: 'Our Mission',
      missionText: 'We aim to transform companies through innovative AI solutions and accompany them on their journey into the digital future.',
      approach: 'Our Approach',
      approachText: 'As a specialized team of technologists and industry experts, we develop customized solutions tailored to the specific needs of our customers.'
    },
    contact: {
      creative: {
        title: 'Start Your Creative Project',
        description: "Got a question or want to book a call? Drop us a message – we'll get back to you.",
        submitButton: 'Request Project',
        benefitsTitle: 'Why work with our Creative Studio?',
        benefits: [
          'AI-powered creative processes',
          'Unique, disruptive designs',
          'Faster iteration and development',
          'Forward-thinking digital experiences',
          'Quick implementation & personal support'
        ]
      },
      automation: {
        title: 'Contact Us',
        description: "Got a question or want to book a call? Drop us a message – we'll get back to you.",
        submitButton: 'Send Message',
        calendlyButton: 'Book appointment now',
        whatsappHint: 'Or message us directly via WhatsApp',
        benefitsTitle: 'Your Benefits at a Glance',
        benefits: [
          'AI-powered consulting & implementation',
          'Higher efficiency and savings',
          'User-friendly implementation',
          'Long-term support and maintenance'
        ]
      },
      formLabels: {
        name: 'Name',
        email: 'Email',
        message: 'Message'
      },
      quickContact: {
        title: 'Quick Contact:',
        email: 'info@aiventures.com',
        phone: '+49 123 4567890'
      }
    },
    footer: {
      description: 'We revolutionize businesses through AI solutions that actually work.',
      services: 'Services',
      contact: 'Contact',
      legal: 'Legal',
      copyright: '© 2025 AIventures. All rights reserved.'
    },
    language: {
      de: 'German',
      en: 'English',
      fr: 'French'
    }
  },
  fr: {
    header: {
      automation: 'Automatisation',
      academy: 'Académie',
      about: 'À propos',
      contact: 'Contact',
      services: 'Services',
      projects: 'Projets',
      creativeModeButton: 'Demander un projet',
      automationModeButton: 'Réserver un appel stratégique'
    },
    hero: {
      creative: {
        heading: 'Designer. Créer. Bousculer.',
        description: "Libérez la puissance de l'IA dans votre processus créatif. Nous créons des expériences digitales qui captivent.",
        primaryButton: 'Demander un projet',
        secondaryButton: 'Voir notre travail créatif'
      },
      automation: {
        heading: 'Automatiser. Optimiser. Développer.',
        description: "Solutions IA personnalisées pour l'efficacité, la croissance et la transformation digitale.",
        primaryButton: 'Réserver un appel stratégique',
        secondaryButton: "Découvrir des cas d'usage"
      }
    },
    services: {
      title: 'Nos Services',
      description: {
        creative: 'Nous combinons expertise créative et technologie avancée pour créer des solutions uniques et innovantes.',
        automation: 'Nous proposons des solutions IA complètes pour les entreprises qui souhaitent optimiser leurs processus et atteindre leur plein potentiel.'
      },
      studio: {
        title: 'Creative Studio',
        description: 'Nous concevons ce que vous avez en tête - visuellement et fonctionnellement.',
        extendedDescription: "Quand l'esthétique rencontre la fonctionnalité, plus que de la visibilité émerge : votre marque devient un sujet de conversation.",
        features: ['Branding', 'Design', 'Médias sociaux & contenu', 'Dév. web & app'],
        cta: 'Démarrer un projet créatif'
      },
      automation: {
        title: 'Automation',
        description: 'Automatisation, CRM, Gestion de documents, Analytics',
        creativeDescription: "Révolutionnez vos flux de travail avec nos solutions d'automatisation IA avancées.",
        features: {
          creative: ['Automatisation robotique des processus', 'Chatbots intelligents', 'Analyses prédictives', 'Décisions basées sur les données'],
          automation: ['Optimisation des flux de travail', 'Intégration CRM', 'Gestion des documents', 'Reporting et analytique']
        },
        cta: "Planifier l'automatisation"
      },
      academy: {
        title: 'Academy',
        description: "Nous formons vos employés et leur permettons d'exploiter pleinement le potentiel des technologies modernes.",
        creativeDescription: "Amenez vos équipes au niveau supérieur avec nos programmes de formation IA orientés vers l'avenir.",
        features: {
          creative: ['Prompt IA', 'Compétences tech', 'Formations VR', 'Parcours personnalisés'],
          automation: ['Transformation digitale', 'Analyse de données', 'Savoir-faire technique', 'Gestion du changement']
        },
        cta: 'Réserver un atelier'
      }
    },
    automation: {
      title: "L'automatisation repensée",
      description: "Nous analysons, optimisons et automatisons vos processus d'entreprise avec l'IA - de l'automatisation CRM à la gestion de documents.",
      services: 'Nos Services',
      features: [
        'Automatisation CRM & Ventes',
        'Traitement des documents et e-mails',
        'Flux de travail des processus internes',
        "Reporting et business intelligence"
      ],
      benefits: 'Vos avantages',
      benefitsList: [
        'Efficacité accrue grâce à des solutions personnalisées',
        'Économies de coûts grâce à des processus automatisés',
        "Prise de décision plus rapide grâce à l'analyse des données",
        'Réduction des erreurs manuelles'
      ],
      cta: "Réserver une analyse d'automatisation gratuite"
    },
    academy: {
      title: "Développer la compétence IA dans votre entreprise",
      description: "Nous formons vos équipes à utiliser les technologies modernes avec confiance - de manière stratégique et pratique.",
      services: 'Nos Services',
      features: [
        'Ateliers IA personnalisés',
        'Formation au Prompt Engineering',
        "Parcours d'apprentissage spécifiques à l'industrie",
        'Formation des employés (à distance et sur site)'
      ],
      benefits: 'Les avantages',
      benefitsList: [
        "Augmentation durable des compétences de l'équipe",
        "Exercices pratiques et cas d'utilisation",
        'Adaptation individuelle à votre industrie',
        'Augmentation mesurable de la productivité'
      ],
      cta: 'Planifier une formation maintenant'
    },
    about: {
      title: 'À propos de nous',
      description: 'En savoir plus sur notre entreprise et nos valeurs.',
      mission: 'Notre mission',
      missionText: 'Nous visons à transformer les entreprises grâce à des solutions IA innovantes et à les accompagner dans leur voyage vers le futur numérique.',
      approach: 'Notre approche',
      approachText: "En tant qu'équipe spécialisée de technologues et d'experts de l'industrie, nous développons des solutions personnalisées adaptées aux besoins spécifiques de nos clients."
    },
    contact: {
      creative: {
        title: 'Démarrer Votre Projet Créatif',
        description: "Une question ou envie d'un rendez-vous ? Écrivez-nous, on vous répond rapidement.",
        submitButton: 'Demander un projet',
        benefitsTitle: 'Pourquoi travailler avec notre Creative Studio ?',
        benefits: [
          "Processus créatifs alimentés par l'IA",
          'Designs uniques et disruptifs',
          'Itération et développement plus rapides',
          'Expériences numériques avant-gardistes',
          'Mise en œuvre rapide et soutien personnalisé'
        ]
      },
      automation: {
        title: 'Contactez-nous',
        description: "Une question ou envie d'un rendez-vous ? Écrivez-nous, on vous répond rapidement.",
        submitButton: 'Envoyer le message',
        calendlyButton: 'Prendre rendez-vous maintenant',
        whatsappHint: 'Ou écrivez-nous directement via WhatsApp',
        benefitsTitle: "Vos avantages en un coup d'œil",
        benefits: [
          "Consultation et mise en œuvre basées sur l'IA",
          'Efficacité accrue et économies',
          'Implémentation conviviale',
          'Support et maintenance à long terme'
        ]
      },
      formLabels: {
        name: 'Nom',
        email: 'E-mail',
        message: 'Message'
      },
      quickContact: {
        title: 'Contact rapide:',
        email: 'info@aiventures.fr',
        phone: '+49 123 4567890'
      }
    },
    footer: {
      description: 'Nous révolutionnons les entreprises grâce à des solutions IA qui fonctionnent réellement.',
      services: 'Services',
      contact: 'Contact',
      legal: 'Mentions légales',
      copyright: '© 2025 AIventures. Tous droits réservés.'
    },
    language: {
      de: 'Allemand',
      en: 'Anglais',
      fr: 'Français'
    }
  }
};
