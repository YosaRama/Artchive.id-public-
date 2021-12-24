// Styles
import "antd/dist/antd.css";
import "app/styles/dashboard.scss";
import "themes/styles/theme.scss";

// Layout
import DashboardLayout from "app/components/layout";

// Libs
import Head from "next/head";
import { useEffect, useState } from "react";
import { Provider as SessionProvider } from "next-auth/client";

// Context
import GlobalContext from "app/contexts";

// Client Data Fetching
import { SWRConfig } from "swr";
import { fetcher } from "app/utils/swr";

function MyApp({ Component, pageProps: { session, ...pageProps }, router }) {
  // Handle useLayoutEffect
  const [content, setContent] = useState(false);
  useEffect(() => {
    setContent(true);
  }, []);

  return (
    <>
      <SWRConfig value={{ refreshInterval: 0, fetcher }}>
        <GlobalContext>
          <Head>
            <title>Artchive</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          {content && (
            <SessionProvider session={session}>
              {router.pathname.startsWith("/dashboard") ? (
                <DashboardLayout>
                  <Component {...pageProps} />
                </DashboardLayout>
              ) : (
                <Component {...pageProps} />
              )}
            </SessionProvider>
          )}
        </GlobalContext>
      </SWRConfig>
    </>
  );
}

export default MyApp;
