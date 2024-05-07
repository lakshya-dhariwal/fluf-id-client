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

      return <>{page}</>;
    });

  return (
    <>
      <div className="">
        <Toaster />
        <Component {...pageProps} />{" "}
      </div>{" "}
    </>
  );
}
