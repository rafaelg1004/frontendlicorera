# Licorera Frontend

Aplicación web para el sistema POS y de gestión de inventarios de una licorera/bodega. Construido con **Next.js**, **React**, e interfaces diseñadas con CSS puro (Vanilla CSS).

## 🚀 Tecnologías Principales

- **Next.js (App Router):** Framework de React para renderizado rápido, enrutamiento eficiente y optimización de SEO.
- **React:** Biblioteca para construir interfaces de usuario interactivas.
- **Vanilla CSS:** Estilos implementados desde cero, utilizando un diseño moderno (Glassmorphism, Dark Mode) sin depender de frameworks de CSS externos.
- **Axios:** Cliente HTTP para la comunicación con la API del Backend.
- **Lucide React:** Biblioteca de iconos ligeros y consistentes.

## 🎨 Diseño y UI/UX

El frontend está diseñado priorizando la **Excelencia Visual** y una experiencia premium:
- Interfaz en **Dark Mode** con contrastes precisos.
- Uso de **Glassmorphism** (fondos translúcidos y desenfoques) para paneles y modales.
- Micro-animaciones fluidas en hovers e interacciones.
- Diseño totalmente responsivo para adaptarse a diferentes resoluciones (Puntos de venta, tablets o escritorio).

## 📁 Estructura del Proyecto

El proyecto utiliza la estructura de directorios del App Router de Next.js:

- `/src/app`: Rutas de la aplicación (páginas y layouts).
  - `/login`: Pantalla de inicio de sesión de usuarios/empleados.
  - `layout.js` / `ClientLayout.js`: Estructura base de la aplicación.
- `/src/components`: Componentes reutilizables de la interfaz (botones, inputs, modales, etc.).
- `/src/hooks`: Custom Hooks para manejar la lógica y estado local.
- `/src/services`: Servicios de integración (Axios) para comunicarse con los endpoints del backend.
- `/public`: Archivos estáticos como imágenes y fuentes.

## 💻 Instalación Local

1. Ve al directorio `frontend`.
2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env.local` en la raíz de `frontend` para configurar las variables de entorno:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre [http://localhost:3001](http://localhost:3001) (o el puerto asignado) en tu navegador para ver la aplicación en funcionamiento.

## 📜 Scripts Disponibles

- `npm run dev`: Inicia el entorno de desarrollo con recarga en caliente.
- `npm run build`: Compila la aplicación para producción de forma optimizada.
- `npm start`: Inicia el servidor de producción (después de ejecutar `build`).
- `npm run lint`: Ejecuta ESLint para buscar y arreglar problemas en el código fuente.

## 🔗 Integración con Backend

El frontend se conecta con la API RESTful del backend para gestionar inventarios, procesar ventas y validar la autenticación (JWT). Las peticiones utilizan interceptores de Axios para inyectar automáticamente los tokens de seguridad y gestionar la expiración de la sesión de manera transparente para el usuario.
