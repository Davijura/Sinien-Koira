import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render (): any {
    return (
      <Html lang="cs"> {/* Definujte jazyk dokumentu */}
        <Head>
          {/* Přidejte zde všechny globální meta tagy, styly, skripty atd. */}

          {/* Příklad: viewport pro responzivní design */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />

          {/* Příklad: nastavení barvy pro status bar na mobilních zařízeních */}
          <meta name="theme-color" content="#43A047" />

          {/* Příklad: přidání externího fontu */}
          {/* <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" /> */}
        </Head>
        <body>
          {/* Zde můžete přidat globální styly pro tělo dokumentu nebo jiné atributy */}
          <Main /> {/* Toto je místo, kde se vykreslí hlavní obsah vaší aplikace */}
          <NextScript /> {/* Toto vloží potřebné skripty pro Next.js */}
        </body>
      </Html>
    )
  }
}

export default MyDocument
