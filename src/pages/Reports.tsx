
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { geoData, visitsPerDay, connectionTypes, interactionData } from "@/data/mockData";
import { Layers, Download, FileText, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  const handleDownload = (reportType: string) => {
    setSelectedReport(reportType);
    // In a real app, this would trigger an actual download
    setTimeout(() => {
      setSelectedReport(null);
      toast({
        title: "Reporte Generado",
        description: `El reporte ${reportType} ha sido generado correctamente.`,
      });
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reportes</h1>
        <p className="text-muted-foreground mt-1">
          Genere e interactúe con reportes detallados de analíticas
        </p>
      </div>

      <Tabs defaultValue="available" className="space-y-4">
        <TabsList>
          <TabsTrigger value="available">Reportes Disponibles</TabsTrigger>
          <TabsTrigger value="scheduled">Reportes Programados</TabsTrigger>
          <TabsTrigger value="custom">Reportes Personalizados</TabsTrigger>
        </TabsList>
        
        <TabsContent value="available" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-analytics-softBlue">
                      <Layers size={20} className="text-analytics-darkBlue" />
                    </div>
                    <h3 className="text-lg font-medium">Reporte Geográfico</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    Distribución de visitantes por país, región y ciudad con datos detallados de cada segmento geográfico.
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <FileText size={14} />
                      <span>PDF, Excel, CSV</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>Actualizado hoy</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => handleDownload('geografico')} 
                    className="w-full"
                    disabled={selectedReport === 'geografico'}
                  >
                    {selectedReport === 'geografico' ? (
                      "Generando..."
                    ) : (
                      <>
                        <Download size={16} className="mr-2" />
                        Descargar Reporte
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-analytics-softPurple">
                      <Layers size={20} className="text-analytics-darkBlue" />
                    </div>
                    <h3 className="text-lg font-medium">Reporte de Conexiones</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    Análisis completo de tipos de conexión, proveedores y comportamiento según el tipo de red.
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <FileText size={14} />
                      <span>PDF, Excel</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>Actualizado ayer</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => handleDownload('conexiones')}
                    className="w-full"
                    disabled={selectedReport === 'conexiones'}
                  >
                    {selectedReport === 'conexiones' ? (
                      "Generando..."
                    ) : (
                      <>
                        <Download size={16} className="mr-2" />
                        Descargar Reporte
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-analytics-softGreen">
                      <Layers size={20} className="text-analytics-darkBlue" />
                    </div>
                    <h3 className="text-lg font-medium">Reporte de Actividad</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    Análisis detallado del comportamiento de usuario, incluyendo páginas visitadas, tiempo de permanencia e interacciones.
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <FileText size={14} />
                      <span>PDF, Excel, CSV</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>Actualizado hoy</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => handleDownload('actividad')}
                    className="w-full"
                    disabled={selectedReport === 'actividad'}
                  >
                    {selectedReport === 'actividad' ? (
                      "Generando..."
                    ) : (
                      <>
                        <Download size={16} className="mr-2" />
                        Descargar Reporte
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="scheduled" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Reportes Programados</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b">
                  <div>
                    <h4 className="font-medium">Reporte Semanal de Visitantes</h4>
                    <p className="text-sm text-muted-foreground">Cada lunes a las 08:00</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Editar</Button>
                    <Button variant="outline" size="sm">Cancelar</Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pb-4 border-b">
                  <div>
                    <h4 className="font-medium">Reporte Mensual Completo</h4>
                    <p className="text-sm text-muted-foreground">El primer día de cada mes</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Editar</Button>
                    <Button variant="outline" size="sm">Cancelar</Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pb-4">
                  <div>
                    <h4 className="font-medium">Alerta de Conexiones Empresariales</h4>
                    <p className="text-sm text-muted-foreground">Diario, si hay nuevas conexiones B2B</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Editar</Button>
                    <Button variant="outline" size="sm">Cancelar</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-medium">Programar Nuevo Reporte</h3>
                <Button>Crear Reporte</Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Cree reportes automatizados para recibir información periódica sobre el rendimiento de su sitio 
                y el comportamiento de sus visitantes.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="custom" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-6">Generador de Reportes Personalizados</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Seleccione métricas</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="visitors" className="mr-2" />
                        <label htmlFor="visitors" className="text-sm">Visitantes</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="geo" className="mr-2" />
                        <label htmlFor="geo" className="text-sm">Geolocalización</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="connections" className="mr-2" />
                        <label htmlFor="connections" className="text-sm">Conexiones</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="activity" className="mr-2" />
                        <label htmlFor="activity" className="text-sm">Actividad</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="interactions" className="mr-2" />
                        <label htmlFor="interactions" className="text-sm">Interacciones</label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Periodo de tiempo</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" id="week" name="period" className="mr-2" />
                        <label htmlFor="week" className="text-sm">Última semana</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="month" name="period" className="mr-2" />
                        <label htmlFor="month" className="text-sm">Último mes</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="quarter" name="period" className="mr-2" />
                        <label htmlFor="quarter" className="text-sm">Último trimestre</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="year" name="period" className="mr-2" />
                        <label htmlFor="year" className="text-sm">Último año</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="custom" name="period" className="mr-2" />
                        <label htmlFor="custom" className="text-sm">Personalizado</label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Formato de salida</h4>
                  <div className="flex gap-4">
                    <div className="flex items-center">
                      <input type="checkbox" id="pdf" className="mr-2" />
                      <label htmlFor="pdf" className="text-sm">PDF</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="excel" className="mr-2" />
                      <label htmlFor="excel" className="text-sm">Excel</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="csv" className="mr-2" />
                      <label htmlFor="csv" className="text-sm">CSV</label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={() => handleDownload('personalizado')}>
                    {selectedReport === 'personalizado' ? "Generando..." : "Generar Reporte"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
