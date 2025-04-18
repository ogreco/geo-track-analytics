
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  Map, 
  Globe, 
  Activity, 
  Server, 
  Layers, 
  MousePointerClick,
  Network
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type NavItemProps = {
  to: string;
  icon: React.ElementType;
  title: string;
  isCollapsed: boolean;
};

const NavItem = ({ to, icon: Icon, title, isCollapsed }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-2 px-3 py-2 mb-1",
          isActive && "bg-analytics-softBlue/30 text-analytics-darkBlue font-medium",
          isCollapsed ? "justify-center px-2" : ""
        )}
      >
        <Icon size={20} />
        {!isCollapsed && <span>{title}</span>}
      </Button>
    </Link>
  );
};

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "h-screen sticky top-0 overflow-y-auto flex flex-col border-r border-border transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <div className="font-semibold text-lg text-analytics-darkBlue">
            GeoTrack Analytics
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>

      <div className="flex-1 p-2">
        <NavItem to="/" icon={Home} title="Dashboard" isCollapsed={collapsed} />
        <NavItem to="/map" icon={Map} title="Mapa Geográfico" isCollapsed={collapsed} />
        <NavItem to="/connections" icon={Network} title="Conexiones" isCollapsed={collapsed} />
        <NavItem to="/visitors" icon={Globe} title="Visitantes" isCollapsed={collapsed} />
        <NavItem to="/activity" icon={Activity} title="Actividad" isCollapsed={collapsed} />
        <NavItem to="/interactions" icon={MousePointerClick} title="Interacciones" isCollapsed={collapsed} />
        <NavItem to="/providers" icon={Server} title="Proveedores" isCollapsed={collapsed} />
        <NavItem to="/reports" icon={Layers} title="Reportes" isCollapsed={collapsed} />
      </div>
      
      <div className="p-4 border-t border-border">
        {!collapsed && (
          <div className="text-xs text-muted-foreground">
            © 2025 GeoTrack Analytics
          </div>
        )}
      </div>
    </div>
  );
}
