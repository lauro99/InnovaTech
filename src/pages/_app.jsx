import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Script from "next/script";

// Función para manejar eventos de cambio de ruta (útil para analíticas)
function handleRouteChange(url) {
  // Aquí puedes implementar análisis de tráfico web
  // Por ejemplo, con Google Analytics:
  // window.gtag('config', 'UA-XXXXXXXX-X', { page_path: url });
}

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Configurar listeners para analíticas cuando cambia la ruta
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Puedes añadir scripts globales aquí, como Google Analytics */}
      {/* 
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
      */}
      <Component {...pageProps} />
    </>
  );
}
