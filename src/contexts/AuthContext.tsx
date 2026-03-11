
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import { User, onAuthStateChanged } from 'firebase/auth';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  loading: true,
  isAdmin: false
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Simple admin check - in production, this should be more secure
  const isAdmin = currentUser?.email === 'admin@eventmanager.com';

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    isAdmin
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
