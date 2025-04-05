
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';

const WHATSAPP_URL = 'https://wa.me/41782143613';

const WhatsAppButton: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="fixed right-6 z-50" style={{ bottom: isMobile ? '24px' : '32px' }}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-300 shadow-lg ${
                isMobile ? 'w-16 h-16' : 'w-auto h-14 px-5'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`${isMobile ? 'w-9 h-9' : 'w-7 h-7 mr-2'} flex items-center justify-center`}>
                <img 
                  src="/lovable-uploads/2e548e9c-b027-4f5d-b3cc-db66ee567225.png" 
                  alt="WhatsApp" 
                  className="w-full h-full object-contain"
                />
              </div>
              {!isMobile && <span className="font-medium">WhatsApp</span>}
            </motion.a>
          </TooltipTrigger>
          {isMobile && (
            <TooltipContent side="top">
              <p>Schreib uns via WhatsApp</p>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default WhatsAppButton;
