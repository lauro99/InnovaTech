const SITE_URL = 'https://innovatech.vercel.app';

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${SITE_URL}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>1.0</priority>
     </url>
   </urlset>
 `;
}

function SiteMap() {
  return null;
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/xml');
  const sitemap = generateSiteMap();
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
