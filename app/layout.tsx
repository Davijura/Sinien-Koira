import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  description: 'Lesnictví a prodej palivového dřeva',
  keywords: 'dřevo, pila, traktor, objednávka, dřevopráce, lesnictví, les, vlečka, palivové, tvrdé, měkké, prodej, zelená, Sinien Koira, Čelechovice na Hané'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">

      <body className={inter.className}>

        {children}

        <Footer />

      </body>

    </html>
  )
}
