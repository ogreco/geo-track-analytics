
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Dashboard from "@/pages/Dashboard";
import Map from "@/pages/Map";
import Connections from "@/pages/Connections";
import Interactions from "@/pages/Interactions";
import Visitors from "@/pages/Visitors";
import Activity from "@/pages/Activity";
import Providers from "@/pages/Providers";
import Reports from "@/pages/Reports";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/map" element={<DashboardLayout><Map /></DashboardLayout>} />
          <Route path="/connections" element={<DashboardLayout><Connections /></DashboardLayout>} />
          <Route path="/interactions" element={<DashboardLayout><Interactions /></DashboardLayout>} />
          <Route path="/visitors" element={<DashboardLayout><Visitors /></DashboardLayout>} />
          <Route path="/activity" element={<DashboardLayout><Activity /></DashboardLayout>} />
          <Route path="/providers" element={<DashboardLayout><Providers /></DashboardLayout>} />
          <Route path="/reports" element={<DashboardLayout><Reports /></DashboardLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
