
import { Layout, FileText, Workflow, PenTool, Video, Smartphone } from 'lucide-react';

// Export the icon names as strings instead of JSX elements
export const automationCases = [
  {
    id: 1,
    company: 'Cloudnest',
    image: '/photo-1488590528505-98d2b5aba04b.jpeg',
    title: 'Cloud-Infrastructure Automatisierung',
    problem: 'Manuelle Server-Verwaltung kostete 20+ Stunden pro Woche',
    solution: 'Implementierung einer vollautomatischen DevOps-Pipeline',
    result: '85% Zeitersparnis bei der Server-Administration',
    icons: [
      { icon: 'Layout', label: 'Automation' },
      { icon: 'Workflow', label: 'Workflow' },
      { icon: 'FileText', label: 'Dokumentation' }
    ]
  },
  {
    id: 2,
    company: 'Studio Verde',
    image: '/photo-1486312338219-ce68d2c6f44d.jpeg',
    title: 'E-Commerce Prozessoptimierung',
    problem: 'Unübersichtliche Bestellabwicklung mit vielen manuellen Schritten',
    solution: 'Aufbau einer automatisierten Order-Processing-Pipeline',
    result: 'Bestellabwicklung 3x schneller, 0 Fehler seit Launch',
    icons: [
      { icon: 'Layout', label: 'Automation' },
      { icon: 'Smartphone', label: 'App' },
      { icon: 'PenTool', label: 'Design' }
    ]
  },
  {
    id: 3,
    company: 'Legalshift',
    image: '/photo-1581091226825-a6a2a5aee158.jpeg',
    title: 'Legal Document Automation',
    problem: 'Dokumente wurden manuell erstellt, hoher Zeitaufwand',
    solution: 'KI-gestützte Automatisierung der Vertragserstellung',
    result: 'Erstellungszeit pro Dokument von 2h auf 10min reduziert',
    icons: [
      { icon: 'Layout', label: 'Automation' },
      { icon: 'FileText', label: 'Dokumente' },
      { icon: 'Video', label: 'Tutorials' }
    ]
  }
];
