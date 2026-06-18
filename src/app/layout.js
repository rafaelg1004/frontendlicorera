import './globals.css';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'Bodega Elite - POS',
  description: 'Sistema Punto de Venta Premium',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
