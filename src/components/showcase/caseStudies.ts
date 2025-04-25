
import { Layout, FileText, Workflow, PenTool, Video, Smartphone } from 'lucide-react';

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
      { icon: <Layout className="w-5 h-5" />, label: 'Automation' },
      { icon: <Workflow className="w-5 h-5" />, label: 'Workflow' },
      { icon: <FileText className="w-5 h-5" />, label: 'Dokumentation' }
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
      { icon: <Layout className="w-5 h-5" />, label: 'Automation' },
      { icon: <Smartphone className="w-5 h-5" />, label: 'App' },
      { icon: <PenTool className="w-5 h-5" />, label: 'Design' }
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
      { icon: <Layout className="w-5 h-5" />, label: 'Automation' },
      { icon: <FileText className="w-5 h-5" />, label: 'Dokumente' },
      { icon: <Video className="w-5 h-5" />, label: 'Tutorials' }
    ]
  }
];
