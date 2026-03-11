import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ParticleBackground from '@/components/ParticleBackground';
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from 'lucide-react';
import SectionTransition from '@/components/SectionTransition';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    // Reset after showing success
    setTimeout(() => setSubmitSuccess(false), 3000);
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      eventType: value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      info: '+91 7947419979',
      detail: '24/7 except Sundays',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      info: 'Smcreations2k18@gmail.com',
      detail: 'We reply within 24 hours',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office',
      info: 'No:28, 29, Mck Nagar, Phase 3',
      detail: 'Maduravoyal, Chennai - 600095 (Near Maduravoyal Bypass Mgr University)',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      info: '24/7 Service Available',
      detail: 'Closed on Sundays',
      gradient: 'from-teal-500 to-emerald-500'
    }
  ];

  return (
    <div id="contact" className="min-h-screen relative overflow-hidden pt-16 bg-gradient-to-b from-black via-black/95 to-black">
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
      
      <SectionTransition>
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sm-blue via-sm-purple to-sm-pink"
          >
            Let's Create Magic Together
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Ready to turn your dream event into reality? Get in touch with us and let's start planning 
            your unforgettable celebration.
          </motion.p>
        </div>
      </SectionTransition>

      <SectionTransition>
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    >
                        <Card className="glass-card border-white/20">
                            <CardHeader>
                            <CardTitle className="text-2xl font-bold gradient-text">
                                Tell Us About Your Event
                            </CardTitle>
                            </CardHeader>
                        <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                  Your Name
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  required
                                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue transition-colors"
                                  placeholder="John Doe"
                                />
                              </div>
                              <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue transition-colors"
                                  placeholder="john@example.com"
                                />
                              </div>
                            </div>
        
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                  Phone Number
                                </label>
                                <input
                                  type="tel"
                                  id="phone"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue transition-colors"
                                  placeholder="+91 7947419979"
                                />
                              </div>
                              <div>
                                <label htmlFor="eventType" className="block text-sm font-medium text-gray-300 mb-2">
                                  Event Type
                                </label>
                                <Select onValueChange={handleSelectChange} value={formData.eventType}>
                                  <SelectTrigger className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors">
                                    <SelectValue placeholder="Select Event Type" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-white/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl z-50">
                                    <SelectItem value="wedding" className="text-gray-800 hover:bg-gray-100">Wedding</SelectItem>
                                    <SelectItem value="corporate" className="text-gray-800 hover:bg-gray-100">Corporate Event</SelectItem>
                                    <SelectItem value="birthday" className="text-gray-800 hover:bg-gray-100">Birthday Party</SelectItem>
                                    <SelectItem value="anniversary" className="text-gray-800 hover:bg-gray-100">Anniversary</SelectItem>
                                    <SelectItem value="other" className="text-gray-800 hover:bg-gray-100">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
        
                            <div>
                              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                Tell Us About Your Vision
                              </label>
                              <Textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue transition-colors resize-none"
                                placeholder="Describe your dream event, guest count, budget range, and any special requirements..."
                              />
                            </div>
        
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-electric-purple to-electric-blue hover:from-electric-blue hover:to-electric-purple text-white py-3 text-lg font-semibold rounded-lg shadow-xl hover:shadow-electric-purple/50 transition-all duration-300"
                              >
                                Send Message
                              </Button>
                            </motion.div>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sm-blue to-sm-pink mb-4">
                  Get In Touch
                </h2>
                <p className="text-gray-300 text-lg">
                  We'd love to hear about your upcoming event. Reach out to us through any of the channels below, 
                  and we'll get back to you promptly.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="glass-card border-white/20 hover:border-white/40 transition-all duration-300 bg-black/40 backdrop-blur-xl">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`bg-gradient-to-r ${item.gradient} p-3 rounded-lg`}>
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                            <p className="text-sm-blue font-medium">{item.info}</p>
                            <p className="text-gray-400 text-sm">{item.detail}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Quick Response Promise */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass-card border-sm-blue/30 bg-gradient-to-r from-sm-blue/10 to-sm-pink/10 backdrop-blur-xl">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 360, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="text-4xl mb-4"
                    >
                      ⚡
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">Quick Response Guarantee</h3>
                    <p className="text-gray-300">
                      We typically respond to all inquiries within 2-4 hours during business hours. 
                      For urgent requests, please call us directly.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </SectionTransition>
    </div>
  );
};

export default Contact;