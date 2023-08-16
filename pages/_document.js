/* eslint-disable @next/next/next-script-for-ga */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  //? ============== Google Tag Manager ============= ?//
  renderGTMSnippet() {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T99SD58');
        `,
        }}
      />
    );
  }
  renderGTMnoScriptSnippet() {
    return (
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T99SD58"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
    );
  }
  // * ====================================== * //

  //? ============== Share Property ============= ?//
  renderOGMeta() {
    const currentURL = this.props.dangerousAsPath;
    return (
      <>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={process.env.NEXT_PUBLIC_SITE_NAME} />
        <meta
          property="og:description"
          content="The First Indonesian Online Gallery Platform, Your trusted online gallery"
        />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL + currentURL} />
        <meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_NAME} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/images/logo-black.jpg`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </>
    );
  }
  // * ====================================== * //

  //? ============== Facebook Pixel ============= ?//
  renderFacebookVerification() {
    return <meta name="facebook-domain-verification" content="p8pb3avq9xkv6d9xmj3293gducst2l" />;
  }

  //? ============== Development Settings ============= ?//
  renderNoIndexSite() {
    return <meta name="robots" content="noindex, nofollow" />;
  }
  // * ====================================== * //

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta name="theme-color" content="#fff" />
          <link rel="icon" href="/images/favicon.svg" type="image/svg" sizes="16x16" />
          {process.env.NEXT_PUBLIC_SITE_URL == "https://www.artchive.id/" && this.renderOGMeta()}
          {process.env.NEXT_PUBLIC_SITE_URL == "https://www.artchive.id/" &&
            this.renderGTMSnippet()}
          {process.env.NEXT_PUBLIC_SITE_URL == "https://www.artchive.id/" &&
            this.renderFacebookVerification()}
          {process.env.NEXT_PUBLIC_SITE_URL != "https://www.artchive.id/" &&
            this.renderNoIndexSite()}
        </Head>
        <body>
          {process.env.NEXT_PUBLIC_SITE_URL == "https://www.artchive.id/" &&
            this.renderGTMnoScriptSnippet()}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
