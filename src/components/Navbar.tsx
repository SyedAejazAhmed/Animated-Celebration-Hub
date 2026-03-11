
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { currentUser, isAdmin } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  if (isAdmin) {
    navItems.push({ name: 'Event Manager', path: '/event-manager' });
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/5cbf6975-e860-464e-9736-ca8236b388f6.png" 
                alt="SM Creations Logo" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold gradient-text hidden sm:block">
                SM Creations
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-electric-blue ${
                      location.pathname === item.path
                        ? 'text-electric-blue neon-text'
                        : 'text-white hover:text-electric-blue'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              {currentUser ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="border-electric-purple text-electric-purple hover:bg-electric-purple hover:text-white"
                  >
                    Logout
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Link to="/login">
                    <Button className="bg-gradient-to-r from-electric-purple to-electric-blue hover:from-electric-blue hover:to-electric-purple">
                      Admin Login
                    </Button>
                  </Link>
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-electric-blue transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-electric-blue bg-white/10'
                      : 'text-white hover:text-electric-blue hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {currentUser ? (
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:text-electric-blue hover:bg-white/5"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-electric-blue hover:bg-white/5"
                >
                  Admin Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
