import { Globe, Users, Clock, PieChart as PieChartIcon, Activity, Server } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatCard from "@/components/dashboard/StatCard";
import BarChart from "@/components/dashboard/BarChart";
import PieChart from "@/components/dashboard/PieChart";
import LineChart from "@/components/dashboard/LineChart";
import { 
  geoData, 
  connectionTypes, 
  ispData, 
  visitsPerDay,
  pagesVisited,
  interactionData,
  visitorInfo
} from "@/data/mockData";
import LeafletWorldMap from "@/components/dashboard/LeafletWorldMap";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Análisis de visitantes y comportamiento basado en datos de IP
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
          value={geoData.length}
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
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="geography">Geografía</TabsTrigger>
          <TabsTrigger value="connections">Conexiones</TabsTrigger>
          <TabsTrigger value="activity">Actividad</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <LineChart
              title="Visitas por día"
              data={visitsPerDay}
              dataKey="visits"
              categoryKey="date"
            />
            <PieChart
              title="Tipos de Conexión"
              data={connectionTypes}
              dataKey="value"
              nameKey="name"
            />
          </div>
          <LeafletWorldMap visitorData={geoData} />
        </TabsContent>
        
        <TabsContent value="geography" className="space-y-4">
          <LeafletWorldMap visitorData={geoData} />
          <BarChart
            title="Top Países por Visitas"
            data={geoData}
            dataKey="count"
            categoryKey="country"
          />
        </TabsContent>
        
        <TabsContent value="connections" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <PieChart
              title="Tipos de Conexión"
              data={connectionTypes}
              dataKey="value"
              nameKey="name"
            />
            <BarChart
              title="Principales ISPs"
              data={ispData}
              dataKey="users"
              categoryKey="name"
              color="#0FA0CE"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard
              title="Conexiones Empresariales"
              value="20%"
              icon={<Server size={20} />}
              description="Potenciales leads B2B"
            />
            <StatCard
              title="ISPs Diferentes"
              value={ispData.length}
              icon={<Activity size={20} />}
            />
            <StatCard
              title="Conexiones Móviles"
              value="5%"
              icon={<PieChartIcon size={20} />}
              change="+2.3%"
              changeType="increase"
              description="vs. mes anterior"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="activity" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <LineChart
              title="Visitas por día"
              data={visitsPerDay}
              dataKey="visits"
              categoryKey="date"
            />
            <BarChart
              title="Páginas más visitadas"
              data={pagesVisited}
              dataKey="visits"
              categoryKey="page"
              color="#33C3F0"
            />
          </div>
          <BarChart
            title="Interacciones con elementos"
            data={interactionData}
            dataKey="clicks"
            categoryKey="element"
            color="#E5DEFF"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
