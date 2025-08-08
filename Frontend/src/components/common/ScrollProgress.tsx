import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export const ScrollProgress: React.FC = () => {
  const { scrollProgress, scrollDirection } = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        height: scrollDirection === 'down' ? '4px' : '6px',
        transformOrigin: '0%',
      }}
      initial={{ scaleX: 0 }}
      animate={{
        scaleX: scrollProgress / 100,
        background:
          scrollDirection === 'down'
            ? 'linear-gradient(to right, #2563eb, #9333ea)' // blue to purple
            : 'linear-gradient(to right, #9333ea, #2563eb)', // reversed
      }}
      transition={{ duration: 0.2 }}
    />
  );
};
