
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart as RePieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface PieChartProps {
  title: string;
  data: any[];
  dataKey: string;
  nameKey: string;
  colors?: string[];
  className?: string;
}

export default function PieChart({
  title,
  data,
  dataKey,
  nameKey,
  colors = ["#1EAEDB", "#33C3F0", "#0FA0CE", "#D3E4FD", "#E5DEFF"],
  className = "",
}: PieChartProps) {
  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-md font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RePieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey={dataKey}
                nameKey={nameKey}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '6px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Legend />
            </RePieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
