// Libs
import Head from "next/head";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";

// Context
import GlobalContext from "dashboard/contexts";

// Client Data Fetching
import { SWRConfig } from "swr";
import { fetcher } from "dashboard/utils/swr";

// Layout
import AppLayout from "dashboard/components/layout";
import ThemesLayout from "themes/components/layout";

// Styles
import "antd/dist/antd.less";
import "dashboard/styles/dashboard.scss";
import "themes/styles/theme.scss";
import "react-quill/dist/quill.snow.css";

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
              <title>Indonesia Online Gallery Platform</title>
              <meta
                name="description"
                content="Welcome to your trusted online gallery, here you can buy artwork, sell artwork, archiving artwork. The first Indonesian Online Gallery Platform"
              />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta
                name="keywords"
                content="artchiveid,artchive.id,artchive,art,online gallery, gallery platform, online gallery platform, indonesia gallery, indonesia gallery platform"
              />
            </Head>

            <>
              {router.pathname.startsWith("/dashboard") &&
                router.pathname != "/dashboard/login" && (
                  <>
                    {content && (
                      <AppLayout>
                        <Component {...pageProps} />
                      </AppLayout>
                    )}
                  </>
                )}

              {router.pathname.startsWith("/profile") && (
                <>
                  {content && (
                    <ThemesLayout>
                      <Component {...pageProps} />
                    </ThemesLayout>
                  )}
                </>
              )}

              {router.pathname === "/api-doc" && <Component {...pageProps} />}

              {((!router.pathname.startsWith("/dashboard") &&
                !router.pathname.startsWith("/profile") &&
                router.pathname !== "/api-doc") ||
                router.pathname === "/dashboard/login") && (
                <ThemesLayout>
                  <Component {...pageProps} />
                </ThemesLayout>
              )}
            </>
          </GlobalContext>
        </SessionProvider>
      </SWRConfig>
    </>
  );
}

export default MyApp;
