
export type Language = 'de' | 'en' | 'fr';

export const translations = {
  de: {
    header: {
      services: 'Services',
      projects: 'Projekte',
      contact: 'Kontakt',
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
        description: 'Transformieren Sie Ihr Unternehmen mit maßgeschneiderten AI-Lösungen. Wir helfen Ihnen, effizienter zu arbeiten und besser zu skalieren.',
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
        features: ['Branding', 'Design', 'Social Media & Content', 'Web & App Development']
      },
      automation: {
        title: 'Automation',
        description: 'Wir automatisieren Geschäftsprozesse und steigern Ihre Effizienz durch intelligente technologische Lösungen.',
        creativeDescription: 'Revolutionieren Sie Ihre Arbeitsabläufe mit unseren fortschrittlichen AI-Automatisierungslösungen.',
        features: {
          creative: ['Robotische Prozessautomatisierung', 'Intelligente Chatbots', 'Prädiktive Analysen', 'Datengetriebene Entscheidungen'],
          automation: ['Workflow-Optimierung', 'CRM-Integration', 'Dokumentenmanagement', 'Reporting & Analytics']
        }
      },
      academy: {
        title: 'Academy',
        description: 'Wir bilden Ihre Mitarbeiter weiter und befähigen sie, das volle Potenzial moderner Technologien zu nutzen.',
        creativeDescription: 'Bringen Sie Ihre Teams auf die nächste Stufe mit unseren zukunftsorientierten AI-Schulungsprogrammen.',
        features: {
          creative: ['KI-Prompt-Engineering', 'Zukunftsorientierte Tech-Skills', 'Immersive VR-Trainings', 'Personalisierte Lernpfade'],
          automation: ['Digitale Transformation', 'Datenanalyse', 'Technisches Know-how', 'Change Management']
        }
      }
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
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
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
        description: 'Transform your company with tailor-made AI solutions. We help you work more efficiently and scale smarter.',
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
        features: ['Branding', 'Design', 'Social Media & Content', 'Web & App Dev']
      },
      automation: {
        title: 'Automation',
        description: 'Process automation, CRM, Document mgmt., Reporting & analytics',
        creativeDescription: 'Revolutionize your workflows with our advanced AI automation solutions.',
        features: {
          creative: ['Robotic Process Automation', 'Intelligent Chatbots', 'Predictive Analytics', 'Data-driven Decisions'],
          automation: ['Workflow Optimization', 'CRM Integration', 'Document Management', 'Reporting & Analytics']
        }
      },
      academy: {
        title: 'Academy',
        description: 'We train your employees and enable them to harness the full potential of modern technologies.',
        creativeDescription: 'Take your teams to the next level with our future-oriented AI training programs.',
        features: {
          creative: ['AI Prompt Engineering', 'Tech-skills', 'VR Training', 'Custom Learning Paths'],
          automation: ['Digital Transformation', 'Data Analysis', 'Technical Know-how', 'Change Management']
        }
      }
    },
    contact: {
      creative: {
        title: 'Start Your Creative Project',
        description: 'Got a question or want to book a call? Drop us a message – we'll get back to you.',
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
        description: 'Got a question or want to book a call? Drop us a message – we'll get back to you.',
        submitButton: 'Send Message',
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
      services: 'Services',
      projects: 'Projets',
      contact: 'Contact',
      creativeModeButton: 'Demander un projet',
      automationModeButton: 'Réserver un appel stratégique'
    },
    hero: {
      creative: {
        heading: 'Designer. Créer. Bousculer.',
        description: 'Libérez la puissance de l\'IA dans votre processus créatif. Nous créons des expériences digitales qui captivent.',
        primaryButton: 'Demander un projet',
        secondaryButton: 'Voir notre travail créatif'
      },
      automation: {
        heading: 'Automatiser. Optimiser. Développer.',
        description: 'Transformez votre entreprise avec des solutions IA sur mesure. Nous vous aidons à travailler plus efficacement et à mieux évoluer.',
        primaryButton: 'Réserver un appel stratégique',
        secondaryButton: 'Découvrir des cas d\'usage'
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
        extendedDescription: 'Quand l\'esthétique rencontre la fonctionnalité, plus que de la visibilité émerge : votre marque devient un sujet de conversation.',
        features: ['Branding', 'Design', 'Médias sociaux & contenu', 'Dév. web & app']
      },
      automation: {
        title: 'Automation',
        description: 'Automatisation, CRM, Gestion de documents, Analytics',
        creativeDescription: 'Révolutionnez vos flux de travail avec nos solutions d\'automatisation IA avancées.',
        features: {
          creative: ['Automatisation robotique des processus', 'Chatbots intelligents', 'Analyses prédictives', 'Décisions basées sur les données'],
          automation: ['Optimisation des flux de travail', 'Intégration CRM', 'Gestion des documents', 'Reporting et analytique']
        }
      },
      academy: {
        title: 'Academy',
        description: 'Nous formons vos employés et leur permettons d\'exploiter pleinement le potentiel des technologies modernes.',
        creativeDescription: 'Amenez vos équipes au niveau supérieur avec nos programmes de formation IA orientés vers l\'avenir.',
        features: {
          creative: ['Prompt IA', 'Compétences tech', 'Formations VR', 'Parcours personnalisés'],
          automation: ['Transformation digitale', 'Analyse de données', 'Savoir-faire technique', 'Gestion du changement']
        }
      }
    },
    contact: {
      creative: {
        title: 'Démarrer Votre Projet Créatif',
        description: 'Une question ou envie d\'un rendez-vous ? Écrivez-nous, on vous répond rapidement.',
        submitButton: 'Demander un projet',
        benefitsTitle: 'Pourquoi travailler avec notre Creative Studio ?',
        benefits: [
          'Processus créatifs alimentés par l\'IA',
          'Designs uniques et disruptifs',
          'Itération et développement plus rapides',
          'Expériences numériques avant-gardistes',
          'Mise en œuvre rapide et soutien personnalisé'
        ]
      },
      automation: {
        title: 'Contactez-nous',
        description: 'Une question ou envie d\'un rendez-vous ? Écrivez-nous, on vous répond rapidement.',
        submitButton: 'Envoyer le message',
        benefitsTitle: 'Vos avantages en un coup d\'œil',
        benefits: [
          'Consultation et mise en œuvre basées sur l\'IA',
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
