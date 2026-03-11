import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleBackground from '@/components/ParticleBackground';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import SectionTransition from '@/components/SectionTransition';

const Home = () => {
  const services = [
    {
      title: 'Wedding Planning',
      description: 'Creating magical moments for your special day',
      icon: '💍',
    },
    {
      title: 'Corporate Events',
      description: 'Professional gatherings that inspire success',
      icon: '🏢',
    },
    {
      title: 'Birthday Parties',
      description: 'Celebrations as unique as you are',
      icon: '🎂',
    },
    {
      title: 'Custom Events',
      description: 'Bringing your creative vision to life',
      icon: '✨',
    }
  ];

  const recentEvents = [
    {
      title: 'Modern Wedding 2025',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
      type: 'Wedding',
      date: 'June 2025'
    },
    {
      title: 'Tech Summit 2025',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
      type: 'Corporate',
      date: 'July 2025'
    },
    {
      title: 'Summer Festival',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d',
      type: 'Event',
      date: 'August 2025'
    }
  ];

  return (
    <div className="min-h-screen relative">
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

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: [0, 0.71, 0.2, 1.01]
                }
              }}
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sm-blue via-sm-purple to-sm-pink">
                SM Creations
              </span>
              <br />
              <motion.span 
                className="text-4xl md:text-6xl"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  background: "linear-gradient(to right, #00B4DB, #FF1B6B)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Incredible Innovations
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-sm-blue to-sm-pink hover:from-sm-pink hover:to-sm-blue text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <SectionTransition>
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-sm-blue to-sm-pink"
            >
              Our Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </SectionTransition>

        {/* Recent Events Section */}
        <SectionTransition className="bg-black/30 backdrop-blur-md">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-sm-blue to-sm-pink"
            >
              Recent Events
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-sm-blue">{event.type}</span>
                        <span className="text-sm text-gray-300">{event.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionTransition>

        {/* CTA Section */}
        <SectionTransition>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-black/30 backdrop-blur-md p-12 rounded-2xl border border-white/10"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sm-blue to-sm-pink">
                Ready to Create Something Amazing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's turn your vision into reality
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-sm-blue to-sm-pink hover:from-sm-pink hover:to-sm-blue text-white px-12 py-6 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Project
                </Button>
              </Link>
            </motion.div>
          </div>
        </SectionTransition>
      </div>
    </div>
  );
};

export default Home;
