
import React, { useMemo } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { LatLngExpression } from 'leaflet';

interface LeafletWorldMapProps {
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

export default function LeafletWorldMap({ visitorData = [], className = "" }: LeafletWorldMapProps) {
  const maxVisits = useMemo(() => {
    return Math.max(...visitorData.map(data => data.count));
  }, [visitorData]);

  const getColor = (count: number) => {
    const intensity = (count / maxVisits);
    if (intensity > 0.75) return "#7E69AB"; // Dark Purple
    if (intensity > 0.5) return "#9b87f5";  // Primary Purple
    if (intensity > 0.25) return "#D6BCFA"; // Light Purple
    return "#E9D5FF";                       // Very Light Purple
  };

  const getRadius = (count: number) => {
    const baseRadius = 8;
    const scale = (count / maxVisits) * 2;
    return baseRadius + (baseRadius * scale);
  };

  return (
    <Card className={cn(className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-md font-medium">Distribución Geográfica</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] rounded-md overflow-hidden border border-border">
          <MapContainer
            center={[20, 0] as LatLngExpression}
            zoom={2}
            style={{ height: '100%', width: '100%' }}
            className="z-0"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            {visitorData.map((visitor, index) => (
              <CircleMarker
                key={`${visitor.lat}-${visitor.lng}-${index}`}
                center={[visitor.lat, visitor.lng] as LatLngExpression}
                radius={getRadius(visitor.count)}
                fillColor={getColor(visitor.count)}
                color={getColor(visitor.count)}
                weight={1}
                opacity={0.8}
                fillOpacity={0.6}
              >
                <Popup>
                  <div className="p-2">
                    <strong>{visitor.country}</strong>
                    <br />
                    {visitor.count} visitantes
                    {visitor.region && (
                      <>
                        <br />
                        Región: {visitor.region}
                      </>
                    )}
                    {visitor.city && (
                      <>
                        <br />
                        Ciudad: {visitor.city}
                      </>
                    )}
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>
      </CardContent>
    </Card>
  );
}
