import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sinien Koira',
  description: 'Dřevopráce'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): any {
  return (
    <html lang="en">

      <body className={inter.className}>

        {children}

        <Footer />

      </body>

    </html>
  )
}
