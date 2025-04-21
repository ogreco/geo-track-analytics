
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BarChart from "@/components/dashboard/BarChart";
import StatCard from "@/components/dashboard/StatCard";
import { ispData } from "@/data/mockData";
import { Server, Globe, Building, Activity } from "lucide-react";

export default function Providers() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Proveedores</h1>
        <p className="text-muted-foreground mt-1">
          Análisis de proveedores de servicios de internet (ISP) de los visitantes
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          title="ISPs Diferentes"
          value={ispData.length}
          icon={<Server size={20} />}
          description="Proveedores únicos"
        />
        <StatCard
          title="Conexiones Empresariales"
          value="20%"
          icon={<Building size={20} />}
          change="+4.5%"
          changeType="increase"
          description="vs. trimestre anterior"
        />
        <StatCard
          title="Conexiones por Región"
          value="28"
          icon={<Globe size={20} />}
          description="Países diferentes"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="ispDetails">Detalles ISP</TabsTrigger>
          <TabsTrigger value="business">Conexiones Empresariales</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <BarChart
                title="Principales Proveedores de Internet"
                data={ispData}
                dataKey="users"
                categoryKey="name"
                color="#0FA0CE"
              />
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-4">Velocidad de Conexión Estimada</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Fibra óptica</span>
                      <span className="text-sm text-muted-foreground">55%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-analytics-blue h-full rounded-full" style={{ width: '55%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">ADSL/Cable</span>
                      <span className="text-sm text-muted-foreground">30%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-analytics-lightBlue h-full rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Móvil 4G/5G</span>
                      <span className="text-sm text-muted-foreground">12%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-analytics-softPurple h-full rounded-full" style={{ width: '12%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Otros</span>
                      <span className="text-sm text-muted-foreground">3%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-analytics-softGreen h-full rounded-full" style={{ width: '3%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-4">Distribución por Región</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Europa</h4>
                    <p className="text-sm text-muted-foreground">Principales: Movistar, Vodafone, Orange, Deutsche Telekom</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Norteamérica</h4>
                    <p className="text-sm text-muted-foreground">Principales: AT&T, Comcast, Verizon</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Latinoamérica</h4>
                    <p className="text-sm text-muted-foreground">Principales: Claro, Telmex</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Asia</h4>
                    <p className="text-sm text-muted-foreground">Principales: China Telecom, Reliance Jio</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="ispDetails" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Comparativa de ISPs Principales</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-border">
                  <thead>
                    <tr>
                      <th className="py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">ISP</th>
                      <th className="py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">% Usuarios</th>
                      <th className="py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Velocidad Media</th>
                      <th className="py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Tiempo en Sitio</th>
                      <th className="py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Tasa Conversión</th>
                    </tr>
                  </thead>
                  <tbody className="bg-background divide-y divide-border">
                    <tr>
                      <td className="py-2 whitespace-nowrap">Movistar</td>
                      <td className="py-2 whitespace-nowrap">18%</td>
                      <td className="py-2 whitespace-nowrap">250 Mbps</td>
                      <td className="py-2 whitespace-nowrap">4m 35s</td>
                      <td className="py-2 whitespace-nowrap">7.2%</td>
                    </tr>
                    <tr>
                      <td className="py-2 whitespace-nowrap">AT&T</td>
                      <td className="py-2 whitespace-nowrap">15%</td>
                      <td className="py-2 whitespace-nowrap">175 Mbps</td>
                      <td className="py-2 whitespace-nowrap">3m 45s</td>
                      <td className="py-2 whitespace-nowrap">6.8%</td>
                    </tr>
                    <tr>
                      <td className="py-2 whitespace-nowrap">Vodafone</td>
                      <td className="py-2 whitespace-nowrap">12%</td>
                      <td className="py-2 whitespace-nowrap">300 Mbps</td>
                      <td className="py-2 whitespace-nowrap">5m 10s</td>
                      <td className="py-2 whitespace-nowrap">8.1%</td>
                    </tr>
                    <tr>
                      <td className="py-2 whitespace-nowrap">Claro</td>
                      <td className="py-2 whitespace-nowrap">10%</td>
                      <td className="py-2 whitespace-nowrap">150 Mbps</td>
                      <td className="py-2 whitespace-nowrap">4m 50s</td>
                      <td className="py-2 whitespace-nowrap">7.5%</td>
                    </tr>
                    <tr>
                      <td className="py-2 whitespace-nowrap">Comcast</td>
                      <td className="py-2 whitespace-nowrap">8%</td>
                      <td className="py-2 whitespace-nowrap">200 Mbps</td>
                      <td className="py-2 whitespace-nowrap">3m 35s</td>
                      <td className="py-2 whitespace-nowrap">6.2%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="p-3 rounded-full bg-analytics-softBlue">
                  <Activity className="h-6 w-6 text-analytics-darkBlue" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Rendimiento ISP</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Los visitantes que acceden desde proveedores con mayor velocidad (>200 Mbps) muestran un tiempo de permanencia 
                    18% mayor y una tasa de conversión 3.5% superior a los que acceden desde conexiones más lentas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="business" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Sectores Empresariales</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Tecnología</span>
                  <span className="text-sm text-muted-foreground">35%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="bg-analytics-darkBlue h-full rounded-full" style={{ width: '35%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Servicios Financieros</span>
                  <span className="text-sm text-muted-foreground">22%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="bg-analytics-blue h-full rounded-full" style={{ width: '22%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Comercio</span>
                  <span className="text-sm text-muted-foreground">18%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="bg-analytics-lightBlue h-full rounded-full" style={{ width: '18%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Manufactura</span>
                  <span className="text-sm text-muted-foreground">12%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="bg-analytics-softBlue h-full rounded-full" style={{ width: '12%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Educación</span>
                  <span className="text-sm text-muted-foreground">8%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="bg-analytics-softPurple h-full rounded-full" style={{ width: '8%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Otros</span>
                  <span className="text-sm text-muted-foreground">5%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="bg-analytics-softGreen h-full rounded-full" style={{ width: '5%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Comportamiento de Visitantes Empresariales</h3>
              <div className="prose max-w-none dark:prose-invert text-sm">
                <p>
                  Los visitantes que acceden desde redes empresariales muestran patrones distintivos de navegación 
                  y comportamiento que los diferencian de los usuarios domésticos.
                </p>
                <h4 className="text-base font-medium mt-4">Características clave:</h4>
                <ul className="mt-2 space-y-1">
                  <li>Permanecen un 32% más de tiempo que los usuarios domésticos.</li>
                  <li>Visitan un 28% más de páginas por sesión.</li>
                  <li>Tienen una tasa de conversión 35% superior al promedio.</li>
                  <li>Tienden a acceder más a páginas de información detallada de producto/servicio.</li>
                  <li>Un 65% accede durante horario laboral (9:00-18:00).</li>
                </ul>
                <h4 className="text-base font-medium mt-4">Recomendaciones:</h4>
                <ul className="mt-2 space-y-1">
                  <li>Optimizar el contenido técnico y de case studies para este segmento.</li>
                  <li>Considerar estrategias de remarketing específicas para leads B2B.</li>
                  <li>Ampliar la información detallada para productos/servicios relevantes.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
