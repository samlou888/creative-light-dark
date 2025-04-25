
import { ThemeMode } from '../types/theme';

export const getPageClass = (mode: ThemeMode): string => {
  switch (mode) {
    case 'creative':
      return 'bg-black text-white';
    case 'academy':
      return 'bg-background text-foreground academy-theme';
    case 'automation':
    default:
      return 'bg-background text-foreground';
  }
};

export const shouldRenderComponent = (
  mode: ThemeMode,
  visibleOn: ThemeMode[] = ['automation', 'creative', 'academy']
): boolean => {
  return visibleOn.includes(mode);
};
