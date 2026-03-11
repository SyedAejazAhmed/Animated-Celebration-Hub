import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ParticleBackground from '@/components/ParticleBackground';

const About = () => {
  // Keep your existing team members data
  const teamMembers = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face',
      bio: '10+ years of experience creating magical events that exceed expectations.'
    },
    {
      name: 'Michael Chen',
      role: 'Event Coordinator',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=face',
      bio: 'Detail-oriented professional ensuring every aspect of your event is perfect.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Specialist',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop&crop=face',
      bio: 'Creative visionary bringing your dream concepts to stunning reality.'
    }
  ];

  // Keep your existing values data
  const values = [
    {
      title: 'Creativity',
      description: 'Every event is a unique canvas for artistic expression',
      icon: '🎨'
    },
    {
      title: 'Excellence',
      description: 'We never compromise on quality and attention to detail',
      icon: '⭐'
    },
    {
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge event technologies',
      icon: '💡'
    },
    {
      title: 'Partnership',
      description: 'Building lasting relationships through trust and collaboration',
      icon: '🤝'
    }
  ];
  
  return (
    <div className="min-h-screen relative overflow-hidden pt-16 bg-gradient-to-b from-black via-black/95 to-black">
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
      
      {/* Hero Section - Enhanced with spring animations */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sm-blue via-sm-purple to-sm-pink bg-clip-text text-transparent"
          >
            About SM Creations
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
          >
            We are passionate storytellers who transform your vision into unforgettable experiences. 
            With creativity at our core and excellence in our execution, we bring magic to every celebration.
          </motion.p>
        </div>
      </section>

      {/* Story Section - Enhanced with parallax effect */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative z-10"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sm-blue to-sm-pink bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Founded in 2015, SM Creations began with a simple belief: every celebration deserves to be extraordinary. 
                What started as a small passion project has grown into a full-service event management company that has 
                created over 500 magical experiences.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                From intimate gatherings to grand galas, we specialize in understanding your unique vision and bringing 
                it to life with meticulous planning, creative design, and flawless execution.
              </p>
              <motion.div 
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Badge className="bg-gradient-to-r from-sm-blue to-sm-purple text-white">500+ Events</Badge>
                <Badge className="bg-gradient-to-r from-sm-purple to-sm-pink text-white">9 Years Experience</Badge>
                <Badge className="bg-gradient-to-r from-sm-pink to-sm-blue text-white">100% Satisfaction</Badge>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
                alt="SM Creations workspace"
                className="rounded-xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent rounded-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section - Enhanced with card animations */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sm-blue via-sm-purple to-sm-pink bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The creative minds behind every successful celebration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Card className="glass-card border-white/20 hover:border-white/40 transition-all duration-500 group bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-xl">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative inline-block mb-4"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover ring-2 ring-sm-blue/50 group-hover:ring-sm-pink/50 transition-all duration-500"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sm-blue/20 to-sm-pink/20 group-hover:opacity-0 transition-opacity" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sm-blue transition-colors">{member.name}</h3>
                    <p className="text-sm-purple font-medium mb-3 group-hover:text-sm-pink transition-colors">{member.role}</p>
                    <p className="text-gray-300 text-sm group-hover:text-white transition-colors">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Enhanced with hover effects */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sm-blue via-sm-purple to-sm-pink bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-card border-white/20 hover:border-white/40 transition-all duration-500 h-full bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-xl group">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl mb-4 group-hover:text-sm-blue transition-colors"
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sm-pink transition-colors">{value.title}</h3>
                    <p className="text-gray-300 flex-grow group-hover:text-white transition-colors">{value.description}</p>
                    <motion.div
                      className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-sm-blue to-sm-pink mt-4 transition-all duration-500"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;