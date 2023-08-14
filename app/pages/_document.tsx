import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render (): any {
    return (
      <Html lang="cs">
        <Head>
          <meta name="theme-color" content="#243b55" />
          {/* Další meta tagy a styly můžete přidat zde */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
