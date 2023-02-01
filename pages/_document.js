import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="author" content="B.Y" />
          <meta name="description" content="Play with NextJS CSR/SSR/SSG Query" />
          <meta name="keywords" content="NextJS,CSR,SSR,SSG,React,Query,Pagitation" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

}
