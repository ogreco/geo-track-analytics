# GeoTrack Analytics Dashboard

## Descripción
Panel de analíticas avanzado para visualización de datos basados en IP de visitantes. Esta aplicación permite visualizar y analizar datos geográficos, patrones de visitas, y comportamiento de usuarios en un sitio web.

## Características

### Visualización Geográfica
- Mapa interactivo global que muestra la distribución de visitantes
- Filtros por país, región y ciudad
- Análisis de densidad geográfica de visitantes

### Análisis de Conexiones
- Distribución por tipo de conexión (ISP, Corporativa, VPS, Móvil)
- Identificación de proveedores de internet populares
- Segmentación especial para conexiones corporativas (potenciales leads B2B)

### Frecuencia de Visita
- Visualización de tendencias temporales
- Análisis de retorno de visitantes
- Duración media de sesiones

### Interacción con Contenido
- Mapas de calor de interacción
- Análisis de elementos más clickeados
- Métricas de engagement por página

## Tecnologías utilizadas

- React con Vite
- TypeScript
- Tailwind CSS
- shadcn-ui para componentes de UI
- Recharts para visualización de datos
- Mapbox para mapas interactivos

## Desarrollo local

Para ejecutar este proyecto localmente:

```sh
# Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>

# Navegar al directorio del proyecto
cd geo-track-analytics

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

## Configuración de Mapbox

Este proyecto utiliza Mapbox para la visualización de mapas. Por defecto, usa un token de demostración con limitaciones. Para una experiencia completa, consigue tu propio token gratuito en [Mapbox](https://mapbox.com) y reemplázalo en el componente MapboxWorldMap.
