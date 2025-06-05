import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Script from "next/script";

function handleRouteChange(url) {
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    
    if (window.location.hash) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }
    
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
