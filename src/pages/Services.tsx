
import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Wedding Planning',
      icon: '💍',
      description: 'From intimate ceremonies to grand celebrations, we create magical wedding experiences that reflect your unique love story.',
      features: [
        'Complete venue coordination',
        'Vendor management',
        'Custom decoration design',
        'Timeline coordination',
        'Photography & videography',
        'Catering coordination'
      ],
      price: 'Starting from $2,500',
      gradient: 'from-pink-500 via-rose-500 to-red-500'
    },
    {
      title: 'Corporate Events',
      icon: '🏢',
      description: 'Professional events that inspire, engage, and leave lasting impressions on your team and clients.',
      features: [
        'Conference organization',
        'Team building events',
        'Product launches',
        'Annual galas',
        'Networking events',
        'Executive retreats'
      ],
      price: 'Starting from $1,800',
      gradient: 'from-blue-500 via-indigo-500 to-purple-500'
    },
    {
      title: 'Birthday Parties',
      icon: '🎂',
      description: 'Celebrate life\'s special moments with personalized parties that create unforgettable memories.',
      features: [
        'Theme development',
        'Custom decorations',
        'Entertainment booking',
        'Cake & catering',
        'Party favors',
        'Photography services'
      ],
      price: 'Starting from $800',
      gradient: 'from-yellow-500 via-orange-500 to-red-500'
    },
    {
      title: 'Custom Celebrations',
      icon: '✨',
      description: 'Unique events tailored to your vision, whether it\'s an anniversary, graduation, or any special milestone.',
      features: [
        'Concept development',
        'Venue selection',
        'Custom theming',
        'Entertainment coordination',
        'Special effects',
        'Memory capturing'
      ],
      price: 'Custom pricing',
      gradient: 'from-purple-500 via-pink-500 to-indigo-500'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We start with understanding your vision, preferences, and budget to create the perfect event plan.',
      icon: '💬'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Our team develops a comprehensive plan with timelines, vendor coordination, and design concepts.',
      icon: '📋'
    },
    {
      step: '03',
      title: 'Execution',
      description: 'We handle every detail on the day of your event, ensuring everything runs smoothly and perfectly.',
      icon: '🎯'
    },
    {
      step: '04',
      title: 'Celebration',
      description: 'You enjoy your special moment while we take care of everything behind the scenes.',
      icon: '🎉'
    }
  ];

  return (
    <div className="min-h-screen pt-16 relative">
    {/* Animated Background Gradient */}
      <motion.div
        className="fixed inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, #00B4DB 0%, #000 70%)",
            "radial-gradient(circle at 100% 100%, #FF1B6B 0%, #000 70%)",
            "radial-gradient(circle at 0% 0%, #00B4DB 0%, #000 70%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Comprehensive event management solutions for every occasion
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass-card border-white/20 h-full hover:border-white/40 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        className="text-4xl"
                      >
                        {service.icon}
                      </motion.div>
                      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${service.gradient} text-white text-sm font-bold`}>
                        {service.price}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center text-sm text-gray-300"
                        >
                          <span className="text-electric-green mr-2">✓</span>
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                    
                    <Link to="/contact">
                      <Button className="w-full bg-gradient-to-r from-electric-purple to-electric-blue hover:from-electric-blue hover:to-electric-purple">
                        Get Quote
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From initial consultation to final celebration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-electric-purple to-electric-blue flex items-center justify-center text-3xl"
                >
                  {step.icon}
                </motion.div>
                
                <div className="text-4xl font-bold text-electric-blue mb-2 group-hover:text-electric-purple transition-colors">
                  {step.step}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-300 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center glass-card p-12 rounded-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your vision and create something extraordinary together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-electric-purple to-electric-blue hover:from-electric-blue hover:to-electric-purple px-8 py-4 text-lg font-semibold rounded-full"
              >
                Start Planning 
              </Button>
            </Link>
            <Link to="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-8 py-4 text-lg font-semibold rounded-full"
              >
                View Our Work 
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
