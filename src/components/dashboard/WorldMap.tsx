
import { useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WorldMapProps {
  visitorData?: Array<{
    country: string;
    count: number;
    lat: number;
    lng: number;
  }>;
  className?: string;
}

export default function WorldMap({ visitorData = [], className = "" }: WorldMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  // This would be replaced with actual Mapbox integration
  useEffect(() => {
    if (mapRef.current) {
      // Placeholder for map implementation
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = mapRef.current.clientWidth;
      canvas.height = mapRef.current.clientHeight;
      
      if (ctx) {
        // Draw a simple map placeholder
        ctx.fillStyle = '#D3E4FD';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw some simple continent outlines
        ctx.fillStyle = '#F1F1F1';
        ctx.beginPath();
        ctx.ellipse(canvas.width / 2, canvas.height / 2, canvas.width / 3, canvas.height / 3, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw visitor points
        visitorData.forEach(visitor => {
          // Convert lat/lng to x/y coordinates (simplified for demo)
          const x = (visitor.lng + 180) * (canvas.width / 360);
          const y = (90 - visitor.lat) * (canvas.height / 180);
          
          ctx.fillStyle = 'rgba(14, 165, 233, 0.7)';
          ctx.beginPath();
          ctx.arc(x, y, Math.log(visitor.count + 1) * 3, 0, Math.PI * 2);
          ctx.fill();
        });
        
        mapRef.current.appendChild(canvas);
      }
    }
    
    return () => {
      if (mapRef.current && mapRef.current.firstChild) {
        mapRef.current.removeChild(mapRef.current.firstChild);
      }
    };
  }, [visitorData]);

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-md font-medium">Distribución Geográfica</CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          ref={mapRef} 
          className="h-[400px] bg-analytics-softBlue/30 rounded-md border border-border relative"
        >
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            <p>Mapa interactivo con datos de localización</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
