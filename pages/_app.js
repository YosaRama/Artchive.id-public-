// Libs
import Head from "next/head";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";

// Context
import GlobalContext from "app/contexts";

// Client Data Fetching
import { SWRConfig } from "swr";
import { fetcher } from "app/utils/swr";

// Layout
import DashboardLayout from "app/components/layout";
import PageLayout from "themes/components/layout";

// Styles
import "antd/dist/antd.less";
import "app/styles/dashboard.scss";
import "themes/styles/theme.scss";

function MyApp({ Component, pageProps: { session, ...pageProps }, router }) {
  // Handle useLayoutEffect
  const [content, setContent] = useState(false);
  useEffect(() => {
    setContent(true);
  }, []);

  return (
    <>
      <SWRConfig value={{ refreshInterval: 0, fetcher }}>
        <SessionProvider session={session}>
          <GlobalContext>
            <Head>
              <title>Artchive</title>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {content && (
              <>
                {router.pathname.startsWith("/dashboard") ? (
                  <DashboardLayout>
                    <Component {...pageProps} />
                  </DashboardLayout>
                ) : (
                  <PageLayout>
                    <Component {...pageProps} />
                  </PageLayout>
                )}
              </>
            )}
          </GlobalContext>
        </SessionProvider>
      </SWRConfig>
    </>
  );
}

export default MyApp;
