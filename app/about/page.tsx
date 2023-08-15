'use client'
import AboutPage from '../components/AboutPage'
import NewNavbar from '../components/NewNavbar'
import NavbarAbove from '../components/NavbarAbove'
import FooterNew from '../components/FooterNew'

export default function About (): JSX.Element {
  return (
    <div>

      <div className='hidden sm:block'>
        <NavbarAbove />
      </div>

      <NewNavbar />

      <AboutPage />

      <FooterNew />

    </div>

  )
}
