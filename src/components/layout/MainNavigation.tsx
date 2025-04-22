
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

const MainNavigation = () => {
  const { mode } = useTheme();
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.includes(path);
  };

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <div className="hidden md:flex items-center gap-10 justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">
              <motion.div 
                className={cn(
                  navigationMenuTriggerStyle(),
                  isActive('/') ? 'bg-primary/10 text-primary' : ''
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                Home
              </motion.div>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/automation-services">
              <motion.div 
                className={cn(
                  navigationMenuTriggerStyle(),
                  isActive('automation') ? 'bg-primary/10 text-primary' : ''
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
              >
                Automation
              </motion.div>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/creative-studio">
              <motion.div 
                className={cn(
                  navigationMenuTriggerStyle(),
                  isActive('creative') ? 'bg-primary/10 text-primary dark:text-[#00FF66]' : ''
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                Creative Studio
              </motion.div>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/academy">
              <motion.div 
                className={cn(
                  navigationMenuTriggerStyle(),
                  isActive('academy') ? 'bg-primary/10 text-primary' : ''
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                Academy
              </motion.div>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MainNavigation;
