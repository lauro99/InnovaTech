import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout({ children, title, description, keywords, image }) {
  // Valores por defecto para SEO
  const defaultTitle = "InnovaTech - Soluciones Tecnológicas Innovadoras";
  const defaultDescription = "Ofrecemos servicios de última tecnología en desarrollo, robótica, energías renovables y más. Descubre cómo transformamos ideas en soluciones concretas.";
  const defaultKeywords = "innovatech, tecnología, robótica, desarrollo de software, energías renovables, automatización, certificaciones";
  const defaultImage = "/logo_blanco.png";
  const siteUrl = "https://innova-tech-beige.vercel.app/"; // Reemplaza con tu URL real

  return (
    <>
      <Head>
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="keywords" content={keywords || defaultKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title || defaultTitle} />
        <meta property="og:description" content={description || defaultDescription} />
        <meta property="og:image" content={`${siteUrl}${image || defaultImage}`} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content={title || defaultTitle} />
        <meta property="twitter:description" content={description || defaultDescription} />
        <meta property="twitter:image" content={`${siteUrl}${image || defaultImage}`} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />
      </Head>
      <div
        className={`${geistSans.className} ${geistMono.className} bg-white text-[#000052] min-h-screen flex flex-col`}
      >
        {children}
      </div>
    </>
  );
}
