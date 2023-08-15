'use client'
import NewNavbar from '../components/NewNavbar'
import GalleryPage from '../components/GalleryPage'
import NavbarAbove from '../components/NavbarAbove'
import Footer from '../components/Footer'

export default function Gallery (): JSX.Element {
  return (
    <div>

      <div className='hidden sm:block'>
        <NavbarAbove />
      </div>

      <NewNavbar />

      <GalleryPage />

      <Footer />

    </div>

  )
}
