
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ParticleBackground from '@/components/ParticleBackground';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Success!",
        description: "Welcome back, admin!",
      });
      navigate('/event-manager');
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
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
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="glass-card border-white/20">
          <CardHeader className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <CardTitle className="text-3xl font-bold gradient-text mb-2">
                Admin Login
              </CardTitle>
              <p className="text-gray-300">
                Access the Event Management Dashboard
              </p>
            </motion.div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@eventmanager.com"
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-electric-blue"
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Label htmlFor="password" className="text-white">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-electric-blue"
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-electric-purple to-electric-blue hover:from-electric-blue hover:to-electric-purple text-white py-3 font-semibold rounded-lg transition-all duration-300"
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </Button>
              </motion.div>
            </form>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10"
            >
              <p className="text-sm text-gray-300 text-center">
                <strong>Demo Credentials:</strong><br />
                Email: admin@eventmanager.com<br />
                Password: admin123
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
