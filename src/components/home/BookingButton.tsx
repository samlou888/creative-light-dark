
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import CalendlyEmbed from '@/components/calendly/CalendlyEmbed';
import { useLanguage } from '@/contexts/LanguageContext';

interface BookingButtonProps {
  className?: string;
}

const BookingButton = ({ className = "" }: BookingButtonProps) => {
  const { language } = useLanguage();
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          size="lg"
          className={`gap-2 ${className}`}
        >
          <Calendar className="w-5 h-5" />
          {language === 'en' ? "Book Appointment" 
            : language === 'fr' ? "Prendre Rendez-vous"
            : "Termin buchen"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <CalendlyEmbed />
      </DialogContent>
    </Dialog>
  );
};

export default BookingButton;
