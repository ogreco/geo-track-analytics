
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PieChart from "@/components/dashboard/PieChart";
import BarChart from "@/components/dashboard/BarChart";
import StatCard from "@/components/dashboard/StatCard";
import { connectionTypes, ispData } from "@/data/mockData";
import { Network, ServerCog, Building, Smartphone, Globe, Clock, Activity } from "lucide-react";

export default function Connections() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Conexiones</h1>
        <p className="text-muted-foreground mt-1">
          Análisis de tipos de conexión y proveedores de internet
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Conexiones ISP"
          value="65%"
          icon={<Network size={20} />}
          change="-2.3%"
          changeType="decrease"
          description="vs. trimestre anterior"
        />
        <StatCard
          title="Conexiones Corporativas"
          value="20%"
          icon={<Building size={20} />}
          change="+4.5%"
          changeType="increase"
          description="vs. trimestre anterior"
        />
        <StatCard
          title="Conexiones Hosting/VPS"
          value="8%"
          icon={<ServerCog size={20} />}
          change="-0.5%"
          changeType="decrease"
          description="vs. trimestre anterior"
        />
        <StatCard
          title="Conexiones Móviles"
          value="5%"
          icon={<Smartphone size={20} />}
          change="+2.1%"
          changeType="increase"
          description="vs. trimestre anterior"
        />
      </div>

      <Tabs defaultValue="type" className="space-y-4">
        <TabsList>
          <TabsTrigger value="type">Tipo de Conexión</TabsTrigger>
          <TabsTrigger value="isp">Proveedores (ISP)</TabsTrigger>
          <TabsTrigger value="business">Conexiones Empresariales</TabsTrigger>
        </TabsList>
        
        <TabsContent value="type" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PieChart
                  title="Distribución por Tipo de Conexión"
                  data={connectionTypes}
                  dataKey="value"
                  nameKey="name"
                />
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Análisis de Tipos de Conexión</h3>
                  <div className="prose max-w-none dark:prose-invert text-sm text-muted-foreground">
                    <p>
                      La mayoría de las visitas provienen de conexiones ISP domésticas (65%), lo que indica que la mayoría de los 
                      usuarios acceden desde sus hogares.
                    </p>
                    <p className="mt-2">
                      Un 20% de las conexiones provienen de redes corporativas, lo que representa una oportunidad 
                      significativa para leads B2B. Este segmento ha mostrado un crecimiento del 4.5% respecto al trimestre anterior.
                    </p>
                    <p className="mt-2">
                      Las conexiones desde servidores o hosting representan un 8%, que podrían ser rastreadores o 
                      bots, mientras que un 5% proviene de conexiones móviles, mostrando un crecimiento constante.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="isp" className="space-y-4">
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
                <h3 className="text-lg font-medium mb-4">Proveedores por Región</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Europa</h4>
                    <p className="text-sm text-muted-foreground">Principales: Movistar, Vodafone, Orange, Deutsche Telekom, BT</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Norteamérica</h4>
                    <p className="text-sm text-muted-foreground">Principales: AT&T, Comcast, Verizon</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Latinoamérica</h4>
                    <p className="text-sm text-muted-foreground">Principales: Claro, Telmex</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
          </div>
        </TabsContent>
        
        <TabsContent value="business" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-analytics-softBlue">
                  <Building size={24} className="text-analytics-darkBlue" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Conexiones Empresariales</h3>
                  <p className="text-sm text-muted-foreground">
                    Análisis detallado de las conexiones identificadas como empresariales (20% del total)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                <h3 className="text-lg font-medium mb-4">Comportamiento</h3>
                <div className="space-y-6 text-sm">
                  <div>
                    <span className="font-medium block mb-1">Tiempo medio de sesión</span>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-analytics-blue" />
                      <span>5m 47s (32% más que usuarios domésticos)</span>
                    </div>
                  </div>
                  
                  <div>
                    <span className="font-medium block mb-1">Páginas vistas por sesión</span>
                    <div className="flex items-center">
                      <Globe size={16} className="mr-2 text-analytics-blue" />
                      <span>4.8 (28% más que usuarios domésticos)</span>
                    </div>
                  </div>
                  
                  <div>
                    <span className="font-medium block mb-1">Tasa de conversión</span>
                    <div className="flex items-center">
                      <Activity size={16} className="mr-2 text-analytics-blue" />
                      <span>6.5% (35% más que promedio)</span>
                    </div>
                  </div>
                  
                  <div>
                    <span className="font-medium block mb-1">Porcentaje de retorno</span>
                    <div className="flex items-center">
                      <ServerCog size={16} className="mr-2 text-analytics-blue" />
                      <span>42% (18% más que usuarios domésticos)</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <p className="text-muted-foreground">
                      Los usuarios de conexiones empresariales muestran un mayor nivel de 
                      compromiso y tasas de conversión más altas, lo que los convierte en 
                      un segmento valioso para estrategias B2B.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
