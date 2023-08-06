'use client'
import NewNavbar from '../components/NewNavbar'
import GalleryPage from '../components/GalleryPage'
import NavbarAbove from '../components/NavbarAbove'

export const metadata = {
  title: 'Galerie - Sinien Koira',
  description: 'Lesnictví a prodej palivového dřeva',
  keywords: 'dřevo, pila, traktor, objednávka, dřevopráce, lesnictví, les,a vlečka, palivové, tvrdé, měkké'
}

export default function Gallery (): JSX.Element {
  return (
    <div>

      <div className='hidden sm:block'>
        <NavbarAbove />
      </div>

      <NewNavbar />

      <GalleryPage />

    </div>

  )
}
