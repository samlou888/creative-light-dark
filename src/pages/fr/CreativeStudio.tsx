
import React, { useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  Palette, 
  Video, 
  Globe, 
  Sparkles, 
  ArrowRight, 
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CreativeStudioFr = () => {
  const { isCreativeMode } = useTheme();
  
  useEffect(() => {
    if (!isCreativeMode) {
      document.documentElement.classList.add('dark');
    }
    
    return () => {
      if (!isCreativeMode) {
        document.documentElement.classList.remove('dark');
      }
    };
  }, [isCreativeMode]);
  
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="bg-gradient-to-b from-black to-[#0c0225] min-h-screen">
        <Header />
        
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="outline" className="px-4 py-1 mb-6 border-purple-500 bg-purple-500/10 text-purple-400">
                  AI Creative Studio
                </Badge>
              </motion.div>
              <motion.h1 
                className="hero-heading mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Graphistes, développeurs web et créateurs de contenu.
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                La créativité portée par l'intelligence artificielle – pour des marques qui veulent se démarquer, performer et grandir.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-6 rounded-full text-lg neon-glow"
                >
                  Démarrer votre projet maintenant <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
          
          <div className="absolute top-1/3 -left-1/4 w-1/2 h-1/2 bg-purple-800/20 rounded-full blur-[120px] animate-pulse-glow"></div>
          <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[120px] animate-pulse-glow"></div>
        </section>
        
        <section className="py-20 relative">
          <div className="container mx-auto">
            <motion.div 
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="section-heading mb-4 text-white">Nos services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Nous combinons expertise créative et technologies avancées pour offrir des solutions uniques et tournées vers l'avenir.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={containerAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div variants={itemAnimation}>
                <Card className="neo-blur border border-purple-500/20 hover:border-purple-500/50 transition-all p-8 h-full">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg">
                      <Palette className="h-7 w-7 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Design & Conception</h3>
                  </div>
                  <p className="text-gray-300 mb-5">
                    Concepts créatifs et designs modernes pour votre présence digitale, grâce à des outils alimentés par l'IA.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                      <span>Logos & identité de marque</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                      <span>Conception UI/UX</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                      <span>Design graphique</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
                      <span>Matériel marketing</span>
                    </li>
                  </ul>
                </Card>
              </motion.div>
              
              <motion.div variants={itemAnimation}>
                <Card className="neo-blur border border-blue-500/20 hover:border-blue-500/50 transition-all p-8 h-full">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <Globe className="h-7 w-7 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Développement Web & App</h3>
                  </div>
                  <p className="text-gray-300 mb-5">
                    Création de sites web et d'applications modernes intégrant des fonctionnalités avancées d'IA.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                      <span>Sites web personnalisés</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                      <span>Applications web</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                      <span>E-commerce</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                      <span>Intégration d'IA</span>
                    </li>
                  </ul>
                </Card>
              </motion.div>
              
              <motion.div variants={itemAnimation}>
                <Card className="neo-blur border border-cyan-500/20 hover:border-cyan-500/50 transition-all p-8 h-full">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="p-3 bg-cyan-500/20 rounded-lg">
                      <Video className="h-7 w-7 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Création de contenu</h3>
                  </div>
                  <p className="text-gray-300 mb-5">
                    Production de textes, vidéos et autres contenus en ligne propulsés par l'IA.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                      <span>Contenu pour réseaux sociaux</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                      <span>Articles de blog</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                      <span>Vidéos marketing</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                      <span>E-mails et newsletters</span>
                    </li>
                  </ul>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        <section className="py-20 relative">
          <div className="container mx-auto max-w-4xl">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-10 inline-flex p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full backdrop-blur-md">
                <Sparkles className="h-10 w-10 text-gradient-to-r from-purple-400 to-blue-400" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400">
                "Un meeting ? En ligne, décontracté, concret."
              </h2>
              <p className="text-xl text-gray-300">
                Nous écoutons, posons les bonnes questions et vous montrons ce qui est possible.
              </p>
            </motion.div>
          </div>
        </section>
        
        <section className="py-20 relative">
          <div className="container mx-auto">
            <motion.div 
              className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-12 backdrop-blur-md border border-white/10 text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Prêt à démarrer votre projet ?</h2>
              <p className="text-xl text-gray-300 mb-10">
                Créons ensemble quelque chose d'extraordinaire.
              </p>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-6 rounded-full text-lg neon-glow"
              >
                Démarrer un projet <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CreativeStudioFr;
