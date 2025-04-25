
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import L from 'leaflet';

// Fix for default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

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
  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-md font-medium">Distribución Geográfica</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] rounded-md overflow-hidden border border-border">
          <MapContainer
            center={[20, 0]}
            zoom={2}
            style={{ height: '100%', width: '100%' }}
            className="z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {visitorData.map((visitor, index) => (
              <Marker
                key={`${visitor.lat}-${visitor.lng}-${index}`}
                position={[visitor.lat, visitor.lng]}
              >
                <Popup>
                  <div className="p-1">
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
              </Marker>
            ))}
          </MapContainer>
        </div>
      </CardContent>
    </Card>
  );
}
