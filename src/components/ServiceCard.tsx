import { motion } from 'framer-motion';
import React from 'react';

interface ServiceProps {
  service: {
    title: string;
    description: string;
    icon: string;
    color?: string;
  };
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <div className="relative group overflow-hidden rounded-2xl">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sm-blue/30 to-sm-pink/30 
                      opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative p-8 backdrop-blur-sm">
          {/* Static icon container - removed all rotation-related transforms */}
          <div className="w-16 h-16 mb-4 mx-auto flex items-center justify-center">
            <span className="text-4xl group-hover:text-white transition-colors duration-300">
              {service.icon}
            </span>
          </div>
          
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-sm-pink transition-colors duration-300">
            {service.title}
          </h3>
          
          <p className="text-gray-200 group-hover:text-white transition-colors duration-300">
            {service.description}
          </p>
          
          {/* Animated bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                        from-sm-blue to-sm-pink transform scale-x-0 group-hover:scale-x-100 
                        transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;