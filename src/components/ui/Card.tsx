import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => { 
  return (
    <motion.div
      className={`bg-gradient-to-b from-gray-800/70 via-gray-800/50 to-gray-900/70 rounded-2xl p-6 border border-white/20 shadow-xl ${className}`}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};