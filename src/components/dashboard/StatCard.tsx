
import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: ReactNode;
  change?: string;
  changeType?: "increase" | "decrease" | "neutral";
  className?: string;
}

export default function StatCard({
  title,
  value,
  description,
  icon,
  change,
  changeType = "neutral",
  className,
}: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(description || change) && (
          <div className="flex items-center text-xs mt-1">
            {change && (
              <span
                className={cn(
                  "mr-1 font-medium",
                  changeType === "increase" && "text-emerald-500",
                  changeType === "decrease" && "text-rose-500"
                )}
              >
                {change}
              </span>
            )}
            {description && (
              <span className="text-muted-foreground">{description}</span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
