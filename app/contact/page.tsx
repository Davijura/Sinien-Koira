'use client'
import NewNavbar from '../components/NewNavbar'
import ContactPage from '../components/ContactPage'
import NavbarAbove from '../components/NavbarAbove'

export const metadata = {
  title: 'Kontakt - Sinien Koira',
  description: 'Lesnictví a prodej palivového dřeva',
  keywords: 'dřevo, pila, traktor, objednávka, dřevopráce, lesnictví, les,a vlečka, palivové, tvrdé, měkké'
}

export default function Contact (): JSX.Element {
  return (
        <div>

            <div className='hidden sm:block'>
                <NavbarAbove />
            </div>

            <NewNavbar />

            <ContactPage />

        </div>

  )
}
