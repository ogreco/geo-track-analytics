
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart as ReLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LineChartProps {
  title: string;
  data: any[];
  dataKey: string;
  categoryKey: string;
  color?: string;
  className?: string;
}

export default function LineChart({
  title,
  data,
  dataKey,
  categoryKey,
  color = "#1EAEDB",
  className = "",
}: LineChartProps) {
  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-md font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <ReLineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey={categoryKey} tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '6px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey={dataKey} 
                stroke={color} 
                strokeWidth={2} 
                dot={{ stroke: color, strokeWidth: 2, fill: 'white', r: 4 }}
                activeDot={{ r: 6 }} 
              />
            </ReLineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
