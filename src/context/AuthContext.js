'use client'
import { createContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getCookie, setCookie, eraseCookie } from '@/utils/cookies';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = getCookie('token');
    const userData = getCookie('user');

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
    setCookie('token', token, 1); // Expira en 1 día
    setCookie('user', JSON.stringify(userData), 1);
    setUser(userData);
    router.push('/dashboard');
  };

  const logout = () => {
    eraseCookie('token');
    eraseCookie('user');
    setUser(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {(!user && pathname !== '/') ? null : children}
    </AuthContext.Provider>
  );
};
