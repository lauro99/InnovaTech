// Genera un archivo robots.txt dinámico
const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

# Ubicación del sitemap
Sitemap: https://innovatech.vercel.app/sitemap.xml`;
};

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/plain');
  res.write(generateRobotsTxt());
  res.end();

  return {
    props: {},
  };
}

export default function Robots() {
  return null;
}
