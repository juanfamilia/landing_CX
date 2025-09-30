# Siete CX Landing Page - Migración a Vite

## 🎉 Migración Completada Exitosamente

El proyecto ha sido migrado de Create React App + CRACO a **Vite** para mejorar la compatibilidad con Vercel y el rendimiento de desarrollo.

## 🚀 Scripts Disponibles

```bash
# Desarrollo
yarn dev          # Inicia servidor de desarrollo
yarn start        # Alias para yarn dev

# Build
yarn build        # Crea build de producción
yarn preview      # Preview del build de producción

# Testing  
yarn test         # Ejecuta tests con Vitest
```

## 📦 Cambios Principales

### ✅ **Completados:**
- ✅ Migración de CRACO a Vite
- ✅ Configuración de `vite.config.js` optimizada
- ✅ Actualización de `package.json` scripts
- ✅ Migración de `index.html` al root
- ✅ Conversión de archivos `.js` a `.jsx` 
- ✅ Configuración de Vercel con `vercel.json`
- ✅ Optimización de chunks para mejor carga
- ✅ Variables de entorno actualizadas a `VITE_`

### 🎯 **Beneficios:**
- **Desarrollo más rápido:** Hot reload instantáneo
- **Build optimizado:** Chunks separados por vendor/router/ui
- **Compatible con Vercel:** Sin problemas de deployment
- **Bundle más pequeño:** Tree-shaking mejorado
- **Sin dependencias legacy:** Eliminado CRACO y react-scripts

## 🌐 Deployment a Vercel

### Configuración Automática:
El proyecto incluye `vercel.json` configurado automáticamente:

```json
{
  "buildCommand": "yarn build",
  "outputDirectory": "build", 
  "devCommand": "yarn dev",
  "framework": "vite"
}
```

### Variables de Entorno:
- Desarrollo: `.env` (ya configurado)
- Producción: Configurar en Vercel Dashboard
  ```
  VITE_BACKEND_URL=https://tu-backend-url.com
  ```

## 🔧 Estructura de Archivos

```
frontend/
├── index.html              # Movido desde public/
├── vite.config.js         # Configuración de Vite
├── vercel.json            # Configuración de Vercel
├── src/
│   ├── index.jsx          # Punto de entrada (era .js)
│   ├── App.jsx            # Componente principal (era .js)
│   ├── components/        # Componentes React
│   └── styles/           # Estilos CSS
└── build/                # Output de producción
```

## ⚡ Comandos Rápidos

```bash
# Desarrollo local
yarn dev

# Build para producción  
yarn build

# Preview build local
yarn preview

# Deploy a Vercel (desde CLI)
vercel --prod
```

## 🎨 Funcionalidades Mantenidas

- ✅ Landing page completo de Siete CX
- ✅ Modal de demo funcional
- ✅ Navegación responsive
- ✅ Framer Motion animaciones
- ✅ Shadcn UI components  
- ✅ Tailwind CSS styling
- ✅ Colores azules optimizados

## 🐛 Troubleshooting

### Si hay errores de import:
- Verificar que las extensiones `.jsx` estén correctas
- Confirmar rutas relativas en imports

### Si falla el deploy en Vercel:
- Verificar que `vercel.json` esté en el root del frontend
- Confirmar variables de entorno en Vercel Dashboard

### Performance:
- El build está optimizado con chunks separados
- Sourcemaps deshabilitados en producción para menor tamaño

## 📊 Bundle Analysis

- **Vendor chunk:** React, React-DOM (~12KB gzip)
- **Router chunk:** React Router (~32KB gzip)  
- **UI chunk:** Framer Motion, Lucide React (~937KB gzip)
- **Main chunk:** Componentes de la app (~264KB gzip)

**Total optimizado para carga rápida y cacheo eficiente.**