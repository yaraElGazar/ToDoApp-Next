import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  // Don't display navbar when 404
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <SessionProvider session={session}>
      <Navbar />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
