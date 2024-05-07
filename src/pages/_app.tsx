import LandingLayout from "@app/components/layouts/landing.layouts";
import "@app/styles/globals.css";
import type { AppLayoutProps } from "next/app";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppLayoutProps) {
  const getLayout =
    Component.getLayout ||
    ((page: ReactNode) => {
      // if (["/disclaimer"].includes(appProps.router.pathname)) {
      //   return <>{page}</>;
      // }
      //todo add if saas add saas layout by default

      return <LandingLayout>{page}</LandingLayout>;
    });

  return (
    <>
      <div className="">
        <Toaster />
        {getLayout(<Component {...pageProps} />)}
      </div>{" "}
    </>
  );
}
