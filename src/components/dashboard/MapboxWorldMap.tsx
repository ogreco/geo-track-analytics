
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MapboxWorldMapProps {
  visitorData?: Array<{
    country: string;
    count: number;
    lat: number;
    lng: number;
  }>;
  className?: string;
}

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGVtby1hY2NvdW50IiwiYSI6ImNsbnh3aHljbDAwenQ2am85eHVpdjBsdTkifQ.dlLwyXHUwwPEgCemeXY41A'; // Nota: Este es un token público de demostración

export default function MapboxWorldMap({ visitorData = [], className = "" }: MapboxWorldMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [tokenInput, setTokenInput] = useState<string>(MAPBOX_TOKEN);
  const [mapInitialized, setMapInitialized] = useState<boolean>(false);

  const initializeMap = () => {
    if (!mapContainer.current || !tokenInput) return;
    
    try {
      // Initialize map
      mapboxgl.accessToken = tokenInput;
      
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
            
            // Add the marker to the map
            new mapboxgl.Marker({ element: markerEl })
              .setLngLat([visitor.lng, visitor.lat])
              .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(
                  `<strong>${visitor.country}</strong><br>${visitor.count} visitantes`
                )
              )
              .addTo(map.current!);
          });
        }
      });

      setMapInitialized(true);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  // Initialize map when component mounts
  useEffect(() => {
    initializeMap();
    
    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [tokenInput]);

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-md font-medium">Distribución Geográfica</CardTitle>
      </CardHeader>
      <CardContent>
        {!mapInitialized && (
          <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
            <p className="text-yellow-800 text-sm">
              Este es un token de mapbox de demostración con limitaciones. Para una experiencia completa, usa tu propio token.
            </p>
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
