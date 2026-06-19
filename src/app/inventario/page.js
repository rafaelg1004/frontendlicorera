export const metadata = {
  title: 'Inventario | Bodega Elite',
  description: 'Control de stock e inventario',
};

export default function InventarioPage() {
  return (
    <div>
      <header style={{ marginBottom: '2rem' }}>
        <h1>Inventario</h1>
        <p className="text-muted">Control de stock de licores y alertas de mínimo</p>
      </header>
      <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
        <p className="text-muted">Módulo de Inventario en desarrollo (Próximamente)</p>
      </div>
    </div>
  );
}
