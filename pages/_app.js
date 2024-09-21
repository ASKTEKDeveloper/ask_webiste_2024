import JeenaHead from "@/src/layout/JeenaHead";
import Preloader from "@/src/layout/Preloader";
import "@/styles/globals.css";
import "@/styles/buttonStyle.css";
import "@/styles/layout.css";
import { Fragment, useEffect, useState } from "react";
import Head from "next/head"; // Import Head from Next.js
import { useRouter } from "next/router"; // Import useRouter from next/router

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // Get the router object

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    // Initialize Google Analytics on page load
    const handleRouteChange = (url) => {
      window.gtag("config", "G-Z2TZWNK0Y1", { page_path: url });
    };

    // Add listener for route changes
    router.events.on("routeChangeComplete", handleRouteChange);

    // Cleanup the listener on unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Fragment>
      <JeenaHead />
      <Head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z2TZWNK0Y1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z2TZWNK0Y1');
            `,
          }}
        />
      </Head>
      {/* {loading && <Preloader />} */}
      <Component {...pageProps} />
    </Fragment>
  );
}
