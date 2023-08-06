'use client'
import NewNavbar from '../components/NewNavbar'
import NavbarAbove from '../components/NavbarAbove'
import PrivacyPage from '../components/PrivacyPage'

export const metadata = {
  title: 'Ochrana osobních údajů - Sinien Koira',
  description: 'Lesnictví a prodej palivového dřeva',
  keywords: 'dřevo, pila, traktor, objednávka, dřevopráce, lesnictví, les,a vlečka, palivové, tvrdé, měkké'
}

export default function OurServices (): JSX.Element {
  return (
        <div>

            <div className='hidden sm:block'>
                <NavbarAbove />
            </div>

            <NewNavbar />

            <PrivacyPage />

        </div>

  )
}
