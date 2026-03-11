
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useEvents } from '@/contexts/EventsContext';
import ParticleBackground from '@/components/ParticleBackground';

const Gallery = () => {
  const { events } = useEvents();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Events', icon: '✨' },
    { value: 'wedding', label: 'Weddings', icon: '💍' },
    { value: 'corporate', label: 'Corporate', icon: '🏢' },
    { value: 'birthday', label: 'Birthdays', icon: '🎂' },
    { value: 'custom', label: 'Custom Events', icon: '🎉' }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'wedding': return 'bg-pink-500';
      case 'corporate': return 'bg-blue-500';
      case 'birthday': return 'bg-yellow-500';
      case 'custom': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4 relative">
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
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Event Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of unforgettable celebrations and magical moments
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              variant={selectedCategory === category.value ? "default" : "outline"}
              className={`${
                selectedCategory === category.value
                  ? 'bg-gradient-to-r from-electric-purple to-electric-blue text-white'
                  : 'border-white/20 text-white hover:bg-white/10'
              } rounded-full px-6 py-2 transition-all duration-300`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="glass-card border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer group overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <Badge 
                        className={`absolute top-4 right-4 ${getCategoryColor(event.category)} text-white`}
                      >
                        {event.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {event.description}
                      </p>
                      <p className="text-electric-blue font-medium text-sm">
                        {event.date}
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="glass-card border-white/20 max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold gradient-text">
                      {event.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="flex items-center gap-4">
                      <Badge className={`${getCategoryColor(event.category)} text-white`}>
                        {event.category}
                      </Badge>
                      <span className="text-electric-blue font-medium">
                        {event.date}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-400">
              No events found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
