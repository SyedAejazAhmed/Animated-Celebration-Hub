import { motion } from 'framer-motion';
import React from 'react';

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({ 
  children, 
  className,
  delay = 0 
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
        delay
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={`py-20 px-4 relative ${className || ''}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionTransition;