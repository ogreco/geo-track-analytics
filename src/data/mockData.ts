
// Datos simulados para el dashboard
export const geoData = [
  { country: "España", count: 580, lat: 40.4168, lng: -3.7038 },
  { country: "Estados Unidos", count: 420, lat: 37.0902, lng: -95.7129 },
  { country: "México", count: 350, lat: 23.6345, lng: -102.5528 },
  { country: "Argentina", count: 280, lat: -38.4161, lng: -63.6167 },
  { country: "Brasil", count: 240, lat: -14.2350, lng: -51.9253 },
  { country: "Colombia", count: 180, lat: 4.5709, lng: -74.2973 },
  { country: "Chile", count: 150, lat: -35.6751, lng: -71.5430 },
  { country: "Perú", count: 120, lat: -9.1900, lng: -75.0152 },
  { country: "Francia", count: 110, lat: 46.2276, lng: 2.2137 },
  { country: "Reino Unido", count: 95, lat: 55.3781, lng: -3.4360 },
];

export const connectionTypes = [
  { name: "ISP Doméstico", value: 65 },
  { name: "Red Corporativa", value: 20 },
  { name: "Hosting/VPS", value: 8 },
  { name: "Móvil", value: 5 },
  { name: "Otros", value: 2 },
];

export const ispData = [
  { name: "Movistar", users: 420 },
  { name: "Vodafone", users: 350 },
  { name: "Orange", users: 280 },
  { name: "AT&T", users: 230 },
  { name: "Comcast", users: 190 },
  { name: "Claro", users: 170 },
  { name: "Telmex", users: 150 },
  { name: "Verizon", users: 130 },
  { name: "Deutsche Telekom", users: 110 },
  { name: "BT", users: 90 },
];

export const visitsPerDay = [
  { date: "01/04", visits: 120 },
  { date: "02/04", visits: 145 },
  { date: "03/04", visits: 132 },
  { date: "04/04", visits: 165 },
  { date: "05/04", visits: 182 },
  { date: "06/04", visits: 168 },
  { date: "07/04", visits: 149 },
  { date: "08/04", visits: 187 },
  { date: "09/04", visits: 203 },
  { date: "10/04", visits: 215 },
  { date: "11/04", visits: 201 },
  { date: "12/04", visits: 187 },
  { date: "13/04", visits: 176 },
  { date: "14/04", visits: 189 },
];

export const pagesVisited = [
  { page: "Inicio", visits: 1250 },
  { page: "Catálogo", visits: 870 },
  { page: "Contacto", visits: 430 },
  { page: "Blog", visits: 380 },
  { page: "Sobre nosotros", visits: 320 },
  { page: "FAQ", visits: 290 },
  { page: "Política de privacidad", visits: 120 },
];

export const interactionData = [
  { element: "Botón 'Comprar'", clicks: 340 },
  { element: "Menú de navegación", clicks: 285 },
  { element: "Carrusel de imágenes", clicks: 230 },
  { element: "Formulario de contacto", clicks: 180 },
  { element: "Botón 'Suscribirse'", clicks: 145 },
  { element: "Enlaces de redes sociales", clicks: 120 },
];

export const heatmapData = Array.from({ length: 20 }, () => ({
  x: Math.random() * 800,
  y: Math.random() * 400,
  value: Math.random() * 100,
}));

export const visitorInfo = {
  totalVisitors: "2,458",
  newVisitors: "876",
  returningVisitors: "1,582",
  averageSessionTime: "3m 42s",
  bounceRate: "32.5%",
  conversionRate: "4.8%"
};
