
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LineChart from "@/components/dashboard/LineChart";
import BarChart from "@/components/dashboard/BarChart";
import StatCard from "@/components/dashboard/StatCard";
import { visitsPerDay, pagesVisited } from "@/data/mockData";
import { Activity as ActivityIcon, Clock, Eye, MousePointerClick } from "lucide-react";

export default function Activity() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Actividad</h1>
        <p className="text-muted-foreground mt-1">
          Análisis de la actividad de visitantes en el sitio
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          title="Páginas Vistas"
          value="12,896"
          icon={<Eye size={20} />}
          change="+8.2%"
          changeType="increase"
          description="vs. mes anterior"
        />
        <StatCard
          title="Tiempo Promedio"
          value="4m 12s"
          icon={<Clock size={20} />}
          change="+1.5%"
          changeType="increase"
          description="vs. mes anterior"
        />
        <StatCard
          title="Interacciones"
          value="8,472"
          icon={<MousePointerClick size={20} />}
          change="+15.3%"
          changeType="increase"
          description="vs. mes anterior"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="pages">Páginas</TabsTrigger>
          <TabsTrigger value="sessions">Sesiones</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <LineChart
                title="Visitas por día"
                data={visitsPerDay}
                dataKey="visits"
                categoryKey="date"
              />
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-4">Análisis de Actividad Diaria</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium">Horas Pico</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Las horas con mayor actividad son entre las 12:00 y 14:00, y entre las 18:00 y 20:00 (UTC-3).
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Días con Mayor Actividad</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Martes y miércoles presentan los picos de actividad semanales, con un 32% más de visitas que el fin de semana.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Comportamiento Estacional</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Se observa un incremento del 18% en la actividad durante la última semana de cada mes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <BarChart
                  title="Páginas más visitadas"
                  data={pagesVisited}
                  dataKey="visits"
                  categoryKey="page"
                  color="#33C3F0"
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <BarChart
                title="Páginas más visitadas"
                data={pagesVisited}
                dataKey="visits"
                categoryKey="page"
                color="#33C3F0"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Detalle por Página</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium">Página de Inicio</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Tiempo medio: 2m 15s | Tasa de rebote: 35% | Tasa de conversión: 8.5%
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Catálogo de Productos</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Tiempo medio: 4m 30s | Tasa de rebote: 25% | Tasa de conversión: 12.3%
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Blog</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Tiempo medio: 5m 45s | Tasa de rebote: 40% | Artículo más leído: "Guía de uso"
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Contacto</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Tiempo medio: 3m 10s | Tasa de envío de formularios: 65%
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Acerca de</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Tiempo medio: 2m 45s | Tasa de rebote: 45%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="sessions" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Análisis de Sesiones</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Duración < 1 minuto</span>
                      <span className="text-sm text-muted-foreground">28%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-analytics-blue h-full rounded-full" style={{ width: '28%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">1-3 minutos</span>
                      <span className="text-sm text-muted-foreground">35%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-analytics-lightBlue h-full rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">3-10 minutos</span>
                      <span className="text-sm text-muted-foreground">25%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-analytics-softPurple h-full rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">> 10 minutos</span>
                      <span className="text-sm text-muted-foreground">12%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-analytics-softGreen h-full rounded-full" style={{ width: '12%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium">Sesiones por Dispositivo</h4>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="h-3 w-3 rounded-full bg-analytics-blue"></div>
                      <span className="text-sm">Desktop: 58%</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-3 w-3 rounded-full bg-analytics-lightBlue"></div>
                      <span className="text-sm">Mobile: 38%</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-3 w-3 rounded-full bg-analytics-softPurple"></div>
                      <span className="text-sm">Tablet: 4%</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Fuentes de Tráfico</h4>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="h-3 w-3 rounded-full bg-analytics-blue"></div>
                      <span className="text-sm">Directo: 42%</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-3 w-3 rounded-full bg-analytics-lightBlue"></div>
                      <span className="text-sm">Búsqueda orgánica: 35%</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-3 w-3 rounded-full bg-analytics-softPurple"></div>
                      <span className="text-sm">Redes sociales: 15%</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-3 w-3 rounded-full bg-analytics-softGreen"></div>
                      <span className="text-sm">Referencias: 8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 flex gap-4 items-center">
              <div className="rounded-full p-3 bg-analytics-softBlue">
                <ActivityIcon className="h-6 w-6 text-analytics-blue" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Sesiones por Usuario</h3>
                <p className="text-sm text-muted-foreground">
                  Promedio: 1.8 sesiones por usuario | 42% de visitantes recurrentes
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
