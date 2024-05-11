import LandingLayout from "@app/components/layouts/landing.layouts";
import "@app/styles/globals.css";
import type { AppLayoutProps } from "next/app";
import { ReactNode } from "react";
import "cal-sans";
import { Toaster } from "react-hot-toast";
import SaasLayout from "@app/components/layouts/saas.layout";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  ...appProps
}: AppLayoutProps) {
  const getLayout =
    Component.getLayout ||
    ((page: ReactNode) => {
      //if saas add saas layout by default
      if (["/board"].includes(appProps.router.pathname)) {
        return <SaasLayout>{page}</SaasLayout>;
      }

      return <LandingLayout>{page}</LandingLayout>;
    });

  return (
    <div className={""}>
      <Toaster />
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}

export default MyApp;
