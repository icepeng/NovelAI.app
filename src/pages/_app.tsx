import { GetServerSideProps } from "next";
import type { AppProps } from "next/app";
import { DragDropContext, resetServerContext } from "react-beautiful-dnd";
import "~/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      //@ts-ignore
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Toaster />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
