
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BarChart from "@/components/dashboard/BarChart";
import StatCard from "@/components/dashboard/StatCard";
import MapboxWorldMap from "@/components/dashboard/MapboxWorldMap";
import { visitorInfo } from "@/data/mockData";
import { Users, Globe, Clock, Activity } from "lucide-react";

// Extended geo data with regions and cities
const extendedGeoData = [
  { country: "España", region: "Cataluña", city: "Barcelona", count: 320, lat: 41.3851, lng: 2.1734 },
  { country: "España", region: "Madrid", city: "Madrid", count: 260, lat: 40.4168, lng: -3.7038 },
  { country: "Estados Unidos", region: "California", city: "San Francisco", count: 210, lat: 37.7749, lng: -122.4194 },
  { country: "Estados Unidos", region: "Nueva York", city: "Nueva York", count: 210, lat: 40.7128, lng: -74.0060 },
  { country: "México", region: "Ciudad de México", city: "CDMX", count: 180, lat: 19.4326, lng: -99.1332 },
  { country: "México", region: "Jalisco", city: "Guadalajara", count: 170, lat: 20.6597, lng: -103.3496 },
  { country: "Argentina", region: "Buenos Aires", city: "Buenos Aires", count: 160, lat: -34.6037, lng: -58.3816 },
  { country: "Argentina", region: "Córdoba", city: "Córdoba", count: 120, lat: -31.4201, lng: -64.1888 },
  { country: "Brasil", region: "São Paulo", city: "São Paulo", count: 140, lat: -23.5505, lng: -46.6333 },
  { country: "Brasil", region: "Rio de Janeiro", city: "Rio de Janeiro", count: 100, lat: -22.9068, lng: -43.1729 },
];

// Group data by country
const countryData = extendedGeoData.reduce((acc, item) => {
  if (!acc[item.country]) {
    acc[item.country] = { country: item.country, count: 0, lat: item.lat, lng: item.lng };
  }
  acc[item.country].count += item.count;
  return acc;
}, {});

export default function Visitors() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Visitantes</h1>
        <p className="text-muted-foreground mt-1">
          Análisis detallado de visitantes basado en datos de geolocalización
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Visitantes Totales"
          value={visitorInfo.totalVisitors}
          icon={<Users size={20} />}
          description="Último mes"
          change="+12.5%"
          changeType="increase"
        />
        <StatCard
          title="Países"
          value={Object.keys(countryData).length}
          icon={<Globe size={20} />}
          description="Distintos países"
        />
        <StatCard
          title="Tiempo Promedio"
          value={visitorInfo.averageSessionTime}
          icon={<Clock size={20} />}
          description="Por sesión"
          change="+1.2%"
          changeType="increase"
        />
        <StatCard
          title="Tasa de Retorno"
          value="42%"
          icon={<Activity size={20} />}
          description="Visitas recurrentes"
          change="+3.8%"
          changeType="increase"
        />
      </div>

      <Tabs defaultValue="map" className="space-y-4">
        <TabsList>
          <TabsTrigger value="map">Mapa de Visitantes</TabsTrigger>
          <TabsTrigger value="countries">Países</TabsTrigger>
          <TabsTrigger value="trends">Tendencias</TabsTrigger>
        </TabsList>
        
        <TabsContent value="map" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Distribución global de visitantes</h3>
              <MapboxWorldMap visitorData={extendedGeoData} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="countries" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <BarChart
                title="Top Países por Visitas"
                data={Object.values(countryData)}
                dataKey="count"
                categoryKey="country"
              />
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-4">Detalles por Región</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Europa</h4>
                    <p className="text-sm text-muted-foreground">32% de las visitas totales</p>
                  </div>
                  <div>
                    <h4 className="font-medium">América del Norte</h4>
                    <p className="text-sm text-muted-foreground">28% de las visitas totales</p>
                  </div>
                  <div>
                    <h4 className="font-medium">América Latina</h4>
                    <p className="text-sm text-muted-foreground">22% de las visitas totales</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Asia</h4>
                    <p className="text-sm text-muted-foreground">12% de las visitas totales</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Otros</h4>
                    <p className="text-sm text-muted-foreground">6% de las visitas totales</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-4">Comportamiento por País</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">España</h4>
                    <p className="text-sm text-muted-foreground">
                      Tiempo medio: 4m 12s | Páginas por sesión: 3.6
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Estados Unidos</h4>
                    <p className="text-sm text-muted-foreground">
                      Tiempo medio: 3m 45s | Páginas por sesión: 3.2
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">México</h4>
                    <p className="text-sm text-muted-foreground">
                      Tiempo medio: 5m 20s | Páginas por sesión: 4.1
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Argentina</h4>
                    <p className="text-sm text-muted-foreground">
                      Tiempo medio: 4m 58s | Páginas por sesión: 3.8
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Colombia</h4>
                    <p className="text-sm text-muted-foreground">
                      Tiempo medio: 4m 30s | Páginas por sesión: 3.5
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Insights de Visitantes</h3>
              <div className="prose max-w-none dark:prose-invert">
                <p>
                  El análisis de visitantes muestra un crecimiento constante en la diversidad geográfica
                  de nuestra audiencia, con un aumento notable en visitantes desde América Latina.
                </p>
                <h4 className="text-base font-medium mt-4">Principales hallazgos:</h4>
                <ul className="mt-2 space-y-1">
                  <li>Los visitantes de México muestran el mayor tiempo promedio en el sitio (5m 20s).</li>
                  <li>La tasa de retorno global ha aumentado un 3.8% en comparación con el período anterior.</li>
                  <li>El dispositivo móvil representa un 42% de las visitas totales, un incremento del 5.2%.</li>
                  <li>Las horas pico de visitas son entre las 12:00 y las 14:00 (UTC-3).</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
