import { TrendingUp, Users, Package, DollarSign } from 'lucide-react';
import './Dashboard.css';

export default function Dashboard() {
  const stats = [
    { title: 'Ventas de Hoy', value: '$1,250.00', icon: DollarSign, trend: '+12%' },
    { title: 'Clientes Nuevos', value: '24', icon: Users, trend: '+5%' },
    { title: 'Productos Vendidos', value: '145', icon: Package, trend: '-2%' },
    { title: 'Ganancia Neta', value: '$450.00', icon: TrendingUp, trend: '+8%' },
  ];

  return (
    <div>
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p className="text-muted">Resumen general de tu licorera</p>
      </header>

      <div className="dashboard-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-panel stat-card">
            <div className="stat-icon-wrapper">
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-muted stat-title">{stat.title}</p>
              <h2 className="stat-value">{stat.value}</h2>
              <span 
                className="stat-trend" 
                style={{ color: stat.trend.startsWith('+') ? 'var(--success)' : 'var(--danger)' }}
              >
                {stat.trend} respecto a ayer
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-panel dashboard-chart">
        <p className="text-muted">Gráfico de ventas aquí (Próximamente)</p>
      </div>
    </div>
  );
}
