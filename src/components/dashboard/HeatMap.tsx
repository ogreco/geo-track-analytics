
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface HeatMapProps {
  title: string;
  data: Array<{
    x: number;
    y: number;
    value: number;
  }>;
  width?: number;
  height?: number;
  className?: string;
}

export default function HeatMap({
  title,
  data,
  width = 800,
  height = 400,
  className = "",
}: HeatMapProps) {
  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-md font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] relative bg-white rounded-md border border-border">
          <div className="absolute inset-0 p-4">
            <div className="w-full h-full relative">
              {data.map((point, i) => (
                <div
                  key={i}
                  className="absolute rounded-full opacity-70"
                  style={{
                    left: `${(point.x / width) * 100}%`,
                    top: `${(point.y / height) * 100}%`,
                    width: `${Math.max(point.value * 2, 10)}px`,
                    height: `${Math.max(point.value * 2, 10)}px`,
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: `rgba(14, 165, 233, ${Math.min(point.value / 100, 0.85)})`,
                  }}
                />
              ))}
              
              {/* Screenshot placeholder */}
              <div className="absolute inset-0 flex items-center justify-center border border-dashed border-gray-300 rounded-md bg-gray-50">
                <p className="text-muted-foreground text-sm">Mapa de calor de interacciones</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
