
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BarChart from "@/components/dashboard/BarChart";
import HeatMap from "@/components/dashboard/HeatMap";
import { interactionData, heatmapData, pagesVisited } from "@/data/mockData";
import { MousePointerClick, Eye, Clock } from "lucide-react";

export default function Interactions() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Interacciones</h1>
        <p className="text-muted-foreground mt-1">
          Análisis detallado de interacciones de usuarios con el sitio
        </p>
      </div>

      <Tabs defaultValue="summary" className="space-y-4">
        <TabsList>
          <TabsTrigger value="summary">Resumen</TabsTrigger>
          <TabsTrigger value="heatmap">Mapa de Calor</TabsTrigger>
          <TabsTrigger value="elements">Elementos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="summary" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Clics Totales</p>
                    <h3 className="text-2xl font-bold">8,472</h3>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-analytics-softBlue flex items-center justify-center">
                    <MousePointerClick className="h-6 w-6 text-analytics-blue" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Vistas de Página</p>
                    <h3 className="text-2xl font-bold">12,896</h3>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-analytics-softPurple flex items-center justify-center">
                    <Eye className="h-6 w-6 text-analytics-darkBlue" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Tiempo Promedio</p>
                    <h3 className="text-2xl font-bold">3m 42s</h3>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-analytics-softGreen flex items-center justify-center">
                    <Clock className="h-6 w-6 text-analytics-darkBlue" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <BarChart
              title="Páginas más visitadas"
              data={pagesVisited}
              dataKey="visits"
              categoryKey="page"
              color="#33C3F0"
            />
            <BarChart
              title="Interacciones con elementos"
              data={interactionData}
              dataKey="clicks"
              categoryKey="element"
              color="#E5DEFF"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="heatmap" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Mapa de calor de interacciones</h3>
              <HeatMap
                title="Interacciones en la página de inicio"
                data={heatmapData}
                height={400}
                width={800}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Análisis de mapa de calor</h3>
              <div className="prose max-w-none dark:prose-invert text-sm">
                <p>
                  El mapa de calor muestra las áreas de mayor interacción en la página. Las zonas en rojo representan 
                  las áreas con mayor número de clics o interacciones, mientras que las zonas en amarillo y verde 
                  representan niveles de interacción moderados y bajos respectivamente.
                </p>
                <h4 className="text-base font-medium mt-4">Puntos clave de interacción:</h4>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                  <li>Menú de navegación principal (especialmente "Catálogo" y "Contacto")</li>
                  <li>Botones CTA en el hero section</li>
                  <li>Carrusel de productos destacados</li>
                  <li>Formulario de suscripción al newsletter</li>
                  <li>Enlaces de redes sociales en el footer</li>
                </ul>
                <h4 className="text-base font-medium mt-4">Áreas con oportunidades de mejora:</h4>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                  <li>Sección de testimonios (baja interacción)</li>
                  <li>Banner secundario de promociones</li>
                  <li>Enlaces de políticas y términos</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="elements" className="space-y-4">
          <BarChart
            title="Interacciones con elementos"
            data={interactionData}
            dataKey="clicks"
            categoryKey="element"
            color="#E5DEFF"
          />
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Detalle de interacciones por elemento</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium">Botón 'Comprar'</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    340 clics | Tasa de conversión: 8.5% | Tiempo medio antes del clic: 45s
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Menú de navegación</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    285 clics | Páginas más accedidas: Catálogo, Contacto, Blog
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Carrusel de imágenes</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    230 clics | 45% de usuarios interactúan con todas las imágenes
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Formulario de contacto</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    180 clics | Tasa de completado: 62% | Campos más completados: Email, Nombre
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Botón 'Suscribirse'</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    145 clics | Tasa de conversión: 32% | Principalmente desde página de inicio y blog
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Enlaces de redes sociales</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    120 clics | Red más clickeada: Instagram (45%), seguida por LinkedIn (30%)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
