const SITE_URL = 'https://innovatech.vercel.app'; // Reemplaza con tu URL real

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Página principal -->
     <url>
       <loc>${SITE_URL}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>1.0</priority>
     </url>
     <!-- Agrega aquí más páginas a medida que crezca tu sitio -->
   </urlset>
 `;
}

function SiteMap() {
  // Este componente no renderiza nada
  return null;
}

export async function getServerSideProps({ res }) {
  // Configurar las cabeceras para XML
  res.setHeader('Content-Type', 'text/xml');
  // Genera el XML
  const sitemap = generateSiteMap();
  // Envía el XML al navegador
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
