/* eslint-disable @next/next/next-script-for-ga */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  renderGTMSnippet() {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PM2HWVC');
        `,
        }}
      />
    );
  }

  renderGTMnoScriptSnippet() {
    return (
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PM2HWVC"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
    );
  }

  renderNoIndexSite() {
    return <meta name="robots" content="noindex, nofollow" />;
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="icon" href="/images/favicon.svg" type="image/svg" sizes="16x16" />
          {process.env.NEXT_PUBLIC_SITE_URL == "https://artchive.id/" && this.renderGTMSnippet()}
          {process.env.NEXT_PUBLIC_SITE_URL != "https://artchive.id/" && this.renderNoIndexSite()}
        </Head>
        <body>
          {process.env.NEXT_PUBLIC_SITE_URL == "https://artchive.id/" &&
            this.renderGTMnoScriptSnippet()}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
