'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ShoppingCart, Package, Users, Settings, Wine } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: Home },
    { name: 'Punto de Venta', path: '/pos', icon: ShoppingCart },
    { name: 'Inventario', path: '/inventario', icon: Package },
    { name: 'Clientes', path: '/clientes', icon: Users },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">
          <Wine size={24} color="#000" />
        </div>
        <h2>Bodega Elite</h2>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            return (
              <li key={item.path}>
                <Link href={item.path} className={`nav-link ${isActive ? 'active' : ''}`}>
                  <Icon size={20} />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="nav-link">
          <Settings size={20} />
          <span>Configuración</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
