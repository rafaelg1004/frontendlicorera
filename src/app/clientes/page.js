export const metadata = {
  title: 'Clientes | Bodega Elite',
  description: 'Gestión de clientes y mayoristas',
};

export default function ClientesPage() {
  return (
    <div>
      <header style={{ marginBottom: '2rem' }}>
        <h1>Clientes</h1>
        <p className="text-muted">Administración de clientes y tipos de precios</p>
      </header>
      <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
        <p className="text-muted">Módulo de Clientes en desarrollo (Próximamente)</p>
      </div>
    </div>
  );
}
