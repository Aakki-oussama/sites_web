import { useRef } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';

export function useParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return { containerRef, springY };
}

