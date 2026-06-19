'use client'
import { createContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (token && userData) {
      setUser(JSON.parse(userData));
      if (pathname === '/') {
        router.push('/dashboard');
      }
    } else {
      if (pathname !== '/') {
        router.push('/');
      }
    }
  }, [pathname, router]);

  const login = (userData, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    router.push('/dashboard');
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {(!user && pathname !== '/') ? null : children}
    </AuthContext.Provider>
  );
};
