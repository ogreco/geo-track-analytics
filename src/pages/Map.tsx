import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import LeafletWorldMap from "@/components/dashboard/LeafletWorldMap";
import UserStatsTable from "@/components/dashboard/UserStatsTable";
import { userStatsData } from "@/data/mockData";

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
  { country: "Colombia", region: "Bogotá", city: "Bogotá", count: 110, lat: 4.7110, lng: -74.0721 },
  { country: "Colombia", region: "Antioquia", city: "Medellín", count: 70, lat: 6.2476, lng: -75.5709 },
  { country: "Chile", region: "Santiago", city: "Santiago", count: 90, lat: -33.4489, lng: -70.6693 },
  { country: "Perú", region: "Lima", city: "Lima", count: 120, lat: -12.0464, lng: -77.0428 },
  { country: "Francia", region: "Île-de-France", city: "París", count: 110, lat: 48.8566, lng: 2.3522 },
  { country: "Reino Unido", region: "Gran Londres", city: "Londres", count: 95, lat: 51.5074, lng: -0.1278 },
];

const groupDataByGranularity = (data: any[], granularity: string, search: string = "") => {
  const searchLower = search.toLowerCase();
  
  const filteredData = search 
    ? data.filter(item => 
        item.country.toLowerCase().includes(searchLower) || 
        item.region.toLowerCase().includes(searchLower) || 
        item.city.toLowerCase().includes(searchLower))
    : data;
    
  if (granularity === 'country') {
    const countries = filteredData.reduce((acc, item) => {
      if (!acc[item.country]) {
        acc[item.country] = { country: item.country, count: 0, lat: item.lat, lng: item.lng };
      }
      acc[item.country].count += item.count;
      return acc;
    }, {});
    return Object.values(countries);
  } else if (granularity === 'region') {
    const regions = filteredData.reduce((acc, item) => {
      const key = `${item.country}-${item.region}`;
      if (!acc[key]) {
        acc[key] = { 
          country: item.country, 
          region: item.region, 
          count: 0, 
          lat: item.lat, 
          lng: item.lng 
        };
      }
      acc[key].count += item.count;
      return acc;
    }, {});
    return Object.values(regions);
  } else {
    return filteredData;
  }
};

export default function MapPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [granularity, setGranularity] = useState("country");
  
  const filteredData = groupDataByGranularity(extendedGeoData, granularity, searchTerm);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Mapa Geográfico</h1>
        <p className="text-muted-foreground mt-1">
          Visualización geográfica de visitantes y estadísticas de uso
        </p>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <Label htmlFor="search">Buscar</Label>
              <div className="flex mt-1">
                <Input 
                  id="search" 
                  placeholder="País, región, ciudad..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button type="submit" variant="outline" size="icon" className="ml-2">
                  <Search size={16} />
                </Button>
              </div>
            </div>
            
            <div>
              <Label htmlFor="granularity">Nivel de detalle</Label>
              <Select 
                value={granularity} 
                onValueChange={setGranularity}
              >
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
          </form>
          
          <div className="space-y-6">
            <LeafletWorldMap visitorData={filteredData} />
            <UserStatsTable data={userStatsData} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
