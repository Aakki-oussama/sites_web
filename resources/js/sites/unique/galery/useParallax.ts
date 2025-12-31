import { useRef } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';
import { ANIMATION_CONFIG } from '@/sites/shares/animations';

export function useParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Utiliser useScroll sans target pour éviter l'erreur de position
  // On utilise le scroll global au lieu du scroll relatif au conteneur
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const springY = useSpring(y, ANIMATION_CONFIG.spring.gentle);

  return { containerRef, springY };
}

