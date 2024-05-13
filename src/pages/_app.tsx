import LandingLayout from "@app/components/layouts/landing.layouts";
import "@app/styles/globals.css";
import type { AppLayoutProps } from "next/app";
import { ReactNode, useEffect, useState } from "react";
import "cal-sans";
import { Toaster } from "react-hot-toast";
import SaasLayout from "@app/components/layouts/saas.layout";
import { init } from "@app/utils/fhevm";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  ...appProps
}: AppLayoutProps) {
  const getLayout =
    Component.getLayout ||
    ((page: ReactNode) => {
      //if saas add saas layout by default
      console.log(appProps.router.pathname);
      if (appProps.router.pathname.startsWith("/board")) {
        console.log("saas layout");
        return <SaasLayout>{page}</SaasLayout>;
      } else {
        return <LandingLayout>{page}</LandingLayout>;
      }
    });
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setIsInitialized(true);
      })
      .catch(() => setIsInitialized(false));
  }, []);

  if (!isInitialized) return null;

  return (
    <div className={""}>
      <Toaster />
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}

export default MyApp;
