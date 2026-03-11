
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    'Wedding Planning',
    'Corporate Events',
    'Birthday Parties',
    'Custom Celebrations'
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Gallery', path: '/gallery' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'YouTube', icon: '🎥', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black/90 to-background border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-1"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">SM Creations</h3>
            <p className="text-gray-300 mb-4">
              Creating unforgettable experiences through innovative event management and stunning celebrations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-electric-purple to-electric-blue flex items-center justify-center text-white text-lg hover:shadow-lg hover:shadow-electric-purple/50 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-electric-blue transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 Smcreations2k18@gmail.com</p>
              <p>📞 +91 7947419979</p>
              <p>📍 No:28, 29, Mck Nagar, Phase 3</p>
              <p className="text-sm">Maduravoyal, Chennai - 600095</p>
              <p className="text-sm">(Near Maduravoyal Bypass Mgr University)</p>
              <p className="text-sm mt-2">🕒 24/7 Service (Closed Sundays)</p>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="text-white font-medium mb-2">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-electric-purple to-electric-blue rounded-r-lg text-white font-medium hover:shadow-lg transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 SM Creations. All rights reserved. Creating magical moments, one event at a time.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
