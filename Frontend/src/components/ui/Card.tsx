import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { 
        y: -5, 
        transition: { duration: 0.2 }
      } : {}}
      className={`
        bg-white dark:bg-gray-800 
        rounded-xl 
        shadow-lg dark:shadow-gray-900/30
        border border-gray-200 dark:border-gray-700
        backdrop-blur-sm
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};