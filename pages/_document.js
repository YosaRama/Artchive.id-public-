import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta name="description" content="" />
          <link
            rel="icon"
            href="/images/favicon.svg"
            type="image/svg"
            sizes="16x16"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
