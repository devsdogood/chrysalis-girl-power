import Document, { Html, Head, Main, NextScript } from "next/document";

class PageDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <link href="https://fonts.googleapis.com/css?family=Assistant:400,700&display=optional" rel="stylesheet"></link>
            <link rel="icon" href="/favicon.ico" type="image/png"></link>
            <link rel="shortcut icon" href="/favicon.ico" type="image/png"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default PageDocument;
