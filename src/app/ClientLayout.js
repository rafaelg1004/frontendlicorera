'use client'
import Sidebar from '@/components/Sidebar';
import { AuthProvider } from '@/context/AuthContext';
import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isLogin = pathname === '/login';

  return (
    <AuthProvider>
      <div className="app-layout">
        {!isLogin && <Sidebar />}
        <main className="main-content" style={{ padding: isLogin ? 0 : '2rem' }}>
          {children}
        </main>
      </div>
    </AuthProvider>
  );
}
