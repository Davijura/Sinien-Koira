'use client'
import AboutPage from '../components/AboutPage'
import NewNavbar from '../components/NewNavbar'
import NavbarAbove from '../components/NavbarAbove'

export const metadata = {
  title: 'O nás - Sinien Koira',
  description: 'Lesnictví a prodej palivového dřeva',
  keywords: 'dřevo, pila, traktor, objednávka, dřevopráce, lesnictví, les,a vlečka, palivové, tvrdé, měkké'
}

export default function About (): JSX.Element {
  return (
    <div>

      <div className='hidden sm:block'>
        <NavbarAbove />
      </div>

      <NewNavbar />

      <AboutPage />

    </div>

  )
}
