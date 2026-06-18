import { TrendingUp, Users, Package, DollarSign } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { title: 'Ventas de Hoy', value: '$1,250.00', icon: DollarSign, trend: '+12%' },
    { title: 'Clientes Nuevos', value: '24', icon: Users, trend: '+5%' },
    { title: 'Productos Vendidos', value: '145', icon: Package, trend: '-2%' },
    { title: 'Ganancia Neta', value: '$450.00', icon: TrendingUp, trend: '+8%' },
  ];

  return (
    <div>
      <header style={{ marginBottom: '2rem' }}>
        <h1>Dashboard</h1>
        <p className="text-muted">Resumen general de tu licorera</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(245,158,11,0.1)', padding: '1rem', borderRadius: '12px', color: 'var(--primary)' }}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-muted" style={{ fontSize: '0.875rem' }}>{stat.title}</p>
              <h2 style={{ fontSize: '1.5rem', marginTop: '0.25rem' }}>{stat.value}</h2>
              <span style={{ fontSize: '0.875rem', color: stat.trend.startsWith('+') ? 'var(--success)' : 'var(--danger)' }}>
                {stat.trend} respecto a ayer
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-panel" style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p className="text-muted">Gráfico de ventas aquí (Próximamente)</p>
      </div>
    </div>
  );
}
