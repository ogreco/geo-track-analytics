
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface MapboxWorldMapProps {
  visitorData?: Array<{
    country: string;
    count: number;
    lat: number;
    lng: number;
    region?: string;
    city?: string;
  }>;
  className?: string;
}

// Default token (for demo purposes only)
const DEFAULT_TOKEN = 'pk.eyJ1IjoiZGVtby1hY2NvdW50IiwiYSI6ImNsbnh3aHljbDAwenQ2am85eHVpdjBsdTkifQ.dlLwyXHUwwPEgCemeXY41A';

export default function MapboxWorldMap({ visitorData = [], className = "" }: MapboxWorldMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [tokenInput, setTokenInput] = useState<string>(localStorage.getItem('mapbox_token') || DEFAULT_TOKEN);
  const [token, setToken] = useState<string>(localStorage.getItem('mapbox_token') || DEFAULT_TOKEN);
  const [mapInitialized, setMapInitialized] = useState<boolean>(false);
  const [showTokenInput, setShowTokenInput] = useState<boolean>(false);
  const { toast } = useToast();
  
  const saveToken = () => {
    localStorage.setItem('mapbox_token', tokenInput);
    setToken(tokenInput);
    setShowTokenInput(false);
    toast({
      title: "Token guardado",
      description: "El token de Mapbox ha sido guardado correctamente.",
    });
    
    // Reinitialize map with new token
    if (map.current) {
      map.current.remove();
      map.current = null;
    }
    setMapInitialized(false);
    initializeMap();
  };

  const initializeMap = () => {
    if (!mapContainer.current) return;
    
    try {
      // Initialize map
      mapboxgl.accessToken = token;
      
      if (map.current) return;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        projection: 'globe',
        zoom: 1.5,
        center: [0, 20],
        pitch: 45,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'bottom-right'
      );

      // Add atmosphere and fog effects
      map.current.on('style.load', () => {
        if (!map.current) return;
        
        map.current.setFog({
          color: 'rgb(255, 255, 255)',
          'high-color': 'rgb(200, 200, 225)',
          'horizon-blend': 0.2,
        });

        // Add visitor data points
        if (visitorData && visitorData.length > 0) {
          visitorData.forEach((visitor) => {
            // Create a DOM element for the marker
            const markerEl = document.createElement('div');
            markerEl.className = 'visitor-marker';
            markerEl.style.width = `${Math.max(8, Math.min(visitor.count / 20, 24))}px`;
            markerEl.style.height = `${Math.max(8, Math.min(visitor.count / 20, 24))}px`;
            markerEl.style.borderRadius = '50%';
            markerEl.style.backgroundColor = 'rgba(14, 165, 233, 0.7)';
            markerEl.style.border = '2px solid rgba(255, 255, 255, 0.7)';
            
            // Prepare popup content with region and city if available
            let popupContent = `<strong>${visitor.country}</strong><br>${visitor.count} visitantes`;
            if (visitor.region) {
              popupContent += `<br>Región: ${visitor.region}`;
            }
            if (visitor.city) {
              popupContent += `<br>Ciudad: ${visitor.city}`;
            }
            
            // Add the marker to the map
            new mapboxgl.Marker({ element: markerEl })
              .setLngLat([visitor.lng, visitor.lat])
              .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(popupContent)
              )
              .addTo(map.current!);
          });
        }
        
        setMapInitialized(true);
      });
      
      // Catch and handle map errors
      map.current.on('error', (e) => {
        console.error('Mapbox error:', e);
        if (e.error && e.error.status === 401) {
          toast({
            title: "Error del mapa",
            description: "Token de Mapbox inválido. Por favor, introduce un token válido.",
            variant: "destructive"
          });
          setShowTokenInput(true);
        }
      });
    } catch (error) {
      console.error('Error initializing map:', error);
      setShowTokenInput(true);
    }
  };

  // Initialize map when component mounts or token changes
  useEffect(() => {
    initializeMap();
    
    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [token, visitorData]);

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-md font-medium">Distribución Geográfica</CardTitle>
      </CardHeader>
      <CardContent>
        {(showTokenInput || !mapInitialized) && (
          <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
            <p className="text-yellow-800 text-sm mb-2">
              {!mapInitialized 
                ? "Es necesario un token válido de Mapbox. Para obtener uno, regístrate en mapbox.com."
                : "El token de Mapbox actual parece ser inválido. Por favor, introduce uno nuevo:"}
            </p>
            <div className="flex gap-2">
              <Input 
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
                placeholder="Introduce tu token de Mapbox"
                className="flex-1"
              />
              <Button onClick={saveToken} size="sm">Guardar</Button>
            </div>
          </div>
        )}
        
        <div className="relative">
          <div 
            ref={mapContainer} 
            className={cn(
              "h-[400px] rounded-md overflow-hidden border border-border", 
              !mapInitialized && "bg-analytics-softBlue/30"
            )}
          >
            {!mapInitialized && (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <p>Cargando mapa...</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
