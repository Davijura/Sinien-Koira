import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  // title: 'Sinien Koira',
  description: 'Lesnictví a prodej palivového dřeva',
  keywords: 'dřevo, pila, traktor, objednávka, dřevopráce, lesnictví, les,a vlečka, palivové, tvrdé, měkké'
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
