# Blog de Desarrollo Web - React Application

## 📋 Descripción del Proyecto

Aplicación web de blog de desarrollo construida con React que permite visualizar, buscar y filtrar posts técnicos sobre programación web. La aplicación implementa un sistema de gestión de contenido con funcionalidades de búsqueda en tiempo real, filtrado por categorías y visualización detallada de artículos mediante modales.

## 🛠️ Stack Tecnológico

- **React**: ^19.2.0 - Biblioteca de JavaScript para construcción de interfaces de usuario
- **React DOM**: ^19.2.0 - Renderizado de componentes React en el DOM
- **React Scripts**: 5.0.1 - Herramientas de configuración y build de Create React App
- **Testing Library**: Suite de herramientas para testing de componentes React
  - `@testing-library/react`: ^16.3.0
  - `@testing-library/jest-dom`: ^6.9.1
  - `@testing-library/user-event`: ^13.5.0
- **Web Vitals**: ^2.1.4 - Métricas de rendimiento web

## 📦 Requisitos Previos

- **Node.js**: Versión 14.0.0 o superior
- **npm**: Versión 6.0.0 o superior (incluido con Node.js)
- Navegador web moderno (Chrome, Firefox, Safari, Edge)

## 🚀 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/L3onet/proyecto-blog-react
cd proyecto-blog-react
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
proyecto-blog-react/
├── public/                 # Archivos estáticos públicos
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── Avatar/         # Componente de avatar de usuario
│   │   ├── Badge/          # Componente de etiqueta/badge
│   │   ├── Button/         # Botón reutilizable con variantes
│   │   ├── Card/           # Tarjeta genérica
│   │   ├── CategoryFilter/ # Filtro de categorías
│   │   ├── Footer/         # Pie de página
│   │   ├── Header/         # Encabezado de la aplicación
│   │   ├── Modal/          # Modal para contenido detallado
│   │   ├── PostCard/       # Tarjeta de post individual
│   │   ├── PostGrid/       # Grid de posts
│   │   ├── SearchBar/      # Barra de búsqueda
│   │   ├── Tabs/           # Componente de pestañas
│   │   ├── UserCard/       # Tarjeta de usuario
│   │   └── UserList/       # Lista de usuarios
│   ├── data/               # Datos estáticos
│   │   ├── data.js         # Datos generales
│   │   └── posts.js        # Datos de posts y categorías
│   ├── styles/             # Estilos globales
│   │   └── global.css
│   ├── utils/              # Utilidades y helpers
│   │   └── helpers.js
│   ├── App.js              # Componente principal
│   ├── App.css             # Estilos del componente App
│   ├── App.test.js         # Tests del componente App
│   ├── index.js            # Punto de entrada de la aplicación
│   ├── index.css           # Estilos globales base
│   ├── reportWebVitals.js  # Métricas de rendimiento
│   └── setupTests.js       # Configuración de tests
├── package.json            # Dependencias y scripts
└── README.md              # Documentación del proyecto
```

## 🏗️ Arquitectura y Componentes

### Componente Principal: `App.js`

El componente `App` gestiona el estado global de la aplicación y coordina la interacción entre componentes:

- **Estados gestionados**:
  - `busqueda`: Cadena de búsqueda del usuario
  - `categoriaActiva`: Categoría seleccionada para filtrado
  - `postSeleccionado`: Post actualmente seleccionado para visualización detallada
  - `modalAbierto`: Estado de apertura/cierre del modal

- **Lógica de filtrado**: Implementa filtrado combinado por búsqueda de texto y categoría
- **Gestión de eventos**: Maneja la interacción del usuario con posts y modales

### Componentes Principales

#### `Header`
- **Props**: `titulo`, `subtitulo`
- **Función**: Encabezado principal de la aplicación con título y subtítulo

#### `SearchBar`
- **Props**: `busqueda`, `onBuscar`
- **Función**: Input de búsqueda con icono que permite filtrar posts por texto

#### `CategoryFilter`
- **Props**: `categorias`, `categoriaActiva`, `onCambiarCategoria`
- **Función**: Botones de filtrado por categoría con estado activo visual

#### `PostGrid`
- **Props**: `posts`, `onLeerMas`
- **Función**: Renderiza una cuadrícula de `PostCard` componentes
- **Estado vacío**: Muestra mensaje cuando no hay posts que coincidan con los filtros

#### `PostCard`
- **Props**: `post`, `onLeerMas`
- **Función**: Tarjeta individual que muestra resumen del post con imagen, título, autor y fecha

#### `Modal`
- **Props**: `isOpen`, `onClose`, `titulo`, `footer`, `children`
- **Función**: Modal reutilizable para mostrar contenido detallado del post seleccionado

#### `Button`
- **Props**: `texto`, `tipo`, `icono`, `onClick`
- **Función**: Botón reutilizable con variantes (primary, secondary) y soporte para iconos

#### `Footer`
- **Props**: `anio`, `nombreEmpresa`, `enlaces`
- **Función**: Pie de página con información de la empresa y enlaces de navegación

## 🔧 Funcionalidades Principales

### 1. Búsqueda en Tiempo Real
- Filtrado instantáneo de posts por título o resumen
- Búsqueda case-insensitive (no distingue mayúsculas/minúsculas)
- Actualización automática de resultados al escribir

### 2. Filtrado por Categorías
- Filtrado por categorías predefinidas (Tutorial, JavaScript, CSS, React)
- Opción "Todas" para mostrar todos los posts
- Estado visual activo en el botón de categoría seleccionada

### 3. Visualización de Posts
- Grid responsive con tarjetas de posts
- Vista previa con imagen, título, autor, fecha y resumen
- Modal detallado con contenido completo del post

### 4. Gestión de Estado
- Estado local gestionado con React Hooks (`useState`)
- Filtrado combinado de búsqueda y categoría
- Gestión de modal con estado independiente

## 📊 Estructura de Datos

### Post Object
```javascript
{
  id: Number,              // Identificador único
  titulo: String,          // Título del post
  autor: String,           // Nombre del autor
  fecha: String,           // Fecha en formato YYYY-MM-DD
  categoria: String,       // Categoría del post
  imagen: String,          // URL de la imagen
  resumen: String,         // Resumen corto del post
  contenido: String,       // Contenido completo del post
  likes: Number,           // Número de likes
  comentarios: Number      // Número de comentarios
}
```

### Categorías
Array de strings: `["Todas", "Tutorial", "JavaScript", "CSS", "React"]`

## 🧪 Scripts Disponibles

### `npm start`
Inicia el servidor de desarrollo en modo watch.
- **Puerto**: 3000 (por defecto)
- **Hot Reload**: Habilitado
- **Linter**: Errores visibles en consola
- **URL**: http://localhost:3000

### `npm test`
Ejecuta la suite de tests en modo interactivo watch.
- **Framework**: Jest + React Testing Library
- **Modo**: Watch mode (re-ejecuta tests al cambiar archivos)
- **Coverage**: Disponible con flag `--coverage`

### `npm run build`
Genera una build optimizada para producción.
- **Output**: Carpeta `build/`
- **Optimizaciones**: Minificación, code splitting, tree shaking
- **Hashes**: Nombres de archivos con hashes para cache busting
- **Listo para**: Deployment en servidores estáticos (Netlify, Vercel, GitHub Pages)

### `npm run eject`
**⚠️ Operación irreversible**

Expone la configuración de webpack, Babel y ESLint.
- **Uso**: Solo si necesitas control total sobre la configuración
- **Advertencia**: No se puede revertir esta operación

## 🧩 Desarrollo

### Agregar Nuevos Posts

Editar `src/data/posts.js` y agregar objetos al array `posts`:

```javascript
{
  id: 4,
  titulo: "Nuevo Post",
  autor: "Nombre Autor",
  fecha: "2024-02-01",
  categoria: "React",
  imagen: "URL_IMAGEN",
  resumen: "Resumen del post",
  contenido: "Contenido completo...",
  likes: 0,
  comentarios: 0
}
```

### Agregar Nuevas Categorías

Editar `src/data/posts.js` y agregar al array `categorias`:

```javascript
export const categorias = ["Todas", "Tutorial", "JavaScript", "CSS", "React", "NuevaCategoria"];
```

### Estilos

- Cada componente tiene su archivo CSS asociado
- Estilos globales en `src/index.css` y `src/styles/global.css`
- Estilos específicos del App en `src/App.css`

## 🧪 Testing

### Configuración
- Framework: Jest + React Testing Library
- Archivo de configuración: `src/setupTests.js`
- Tests ubicados junto a componentes: `*.test.js`

### Ejecutar Tests
```bash
npm test
```

### Ejecutar Tests con Coverage
```bash
npm test -- --coverage
```

## 🚀 Build y Deployment

### Build de Producción

```bash
npm run build
```

Esto crea una carpeta `build/` optimizada con:
- JavaScript minificado y optimizado
- CSS minificado y optimizado
- Assets optimizados (imágenes, fuentes)
- HTML con referencias correctas a assets

### Deployment

#### Netlify
1. Conectar repositorio a Netlify
2. Build command: `npm run build`
3. Publish directory: `build`

#### Vercel
1. Conectar repositorio a Vercel
2. Framework preset: Create React App
3. Build command y output detectados automáticamente

#### GitHub Pages
1. Instalar `gh-pages`: `npm install --save-dev gh-pages`
2. Agregar script en `package.json`:
```json
"homepage": "https://l3onet.github.io/proyecto-blog-react",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Ejecutar: `npm run deploy`

## 🌐 Compatibilidad de Navegadores

### Producción
- Navegadores con >0.2% de uso global
- Excluye navegadores obsoletos (IE, Opera Mini)

### Desarrollo
- Última versión de Chrome
- Última versión de Firefox
- Última versión de Safari

## 📝 Configuración de ESLint

El proyecto utiliza la configuración estándar de Create React App:

```json
{
  "extends": [
    "react-app",
    "react-app/jest"
  ]
}
```

## 🔍 Troubleshooting

### Problemas Comunes

1. **Puerto 3000 ocupado**:
   - Cambiar puerto: `PORT=3001 npm start` (Linux/Mac)
   - O configurar en `.env`: `PORT=3001`

2. **Errores de dependencias**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build falla al minificar**:
   - Verificar sintaxis de JavaScript
   - Revisar errores de ESLint
   - Consultar: [Troubleshooting Create React App](https://create-react-app.dev/docs/troubleshooting#npm-run-build-fails-to-minify)

## 📚 Recursos Adicionales

- [Documentación de React](https://reactjs.org/docs/getting-started.html)
- [Documentación de Create React App](https://create-react-app.dev/docs/getting-started)
- [React Testing Library](https://testing-library.com/react)
- [Web Vitals](https://web.dev/vitals/)

## 📄 Licencia

Este proyecto es privado y está bajo la propiedad de L3oNeT Dev.

---

**Desarrollado con ❤️ usando React**
