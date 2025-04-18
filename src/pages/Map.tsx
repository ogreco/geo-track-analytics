
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Filter, Download } from "lucide-react";
import MapboxWorldMap from "@/components/dashboard/MapboxWorldMap";
import BarChart from "@/components/dashboard/BarChart";
import { geoData } from "@/data/mockData";

export default function MapPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Mapa Geográfico</h1>
        <p className="text-muted-foreground mt-1">
          Visualización geográfica de visitantes basada en datos de IP
        </p>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <Label htmlFor="search">Buscar</Label>
              <div className="flex mt-1">
                <Input id="search" placeholder="País, región, ciudad..." />
                <Button variant="outline" size="icon" className="ml-2">
                  <Search size={16} />
                </Button>
              </div>
            </div>
            
            <div>
              <Label htmlFor="period">Periodo</Label>
              <Select defaultValue="month">
                <SelectTrigger id="period" className="mt-1">
                  <SelectValue placeholder="Seleccionar periodo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Última semana</SelectItem>
                  <SelectItem value="month">Último mes</SelectItem>
                  <SelectItem value="quarter">Último trimestre</SelectItem>
                  <SelectItem value="year">Último año</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="granularity">Nivel de detalle</Label>
              <Select defaultValue="country">
                <SelectTrigger id="granularity" className="mt-1">
                  <SelectValue placeholder="Seleccionar nivel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="country">País</SelectItem>
                  <SelectItem value="region">Región</SelectItem>
                  <SelectItem value="city">Ciudad</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Filter size={16} />
              <span>Filtros</span>
            </Button>
            
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Download size={16} />
              <span>Exportar</span>
            </Button>
          </div>
          
          <MapboxWorldMap visitorData={geoData} className="mb-6" />
          
          <BarChart
            title="Top Países por Visitas"
            data={geoData}
            dataKey="count"
            categoryKey="country"
          />
        </CardContent>
      </Card>
    </div>
  );
}
