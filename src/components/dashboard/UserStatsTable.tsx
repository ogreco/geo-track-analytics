
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface UserStats {
  country: string;
  activeUsers: number;
  newUsers: number;
  interactionSessions: number;
  interactionPercentage: number;
  sessionsPerUser: number;
  avgTimePerUser: string;
}

interface UserStatsTableProps {
  data: UserStats[];
  className?: string;
}

export default function UserStatsTable({ data, className }: UserStatsTableProps) {
  return (
    <div className={cn("w-full overflow-auto", className)}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">País</TableHead>
            <TableHead className="text-right">Usuarios activos</TableHead>
            <TableHead className="text-right">Usuarios nuevos</TableHead>
            <TableHead className="text-right">Sesiones con interacción</TableHead>
            <TableHead className="text-right">% de interacciones</TableHead>
            <TableHead className="text-right">Sesiones por usuario</TableHead>
            <TableHead className="text-right">Tiempo medio por usuario</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={`${row.country}-${index}`}>
              <TableCell className="font-medium">{row.country}</TableCell>
              <TableCell className="text-right">{row.activeUsers}</TableCell>
              <TableCell className="text-right">{row.newUsers}</TableCell>
              <TableCell className="text-right">{row.interactionSessions}</TableCell>
              <TableCell className="text-right">{row.interactionPercentage}%</TableCell>
              <TableCell className="text-right">{row.sessionsPerUser.toFixed(2)}</TableCell>
              <TableCell className="text-right">{row.avgTimePerUser}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
