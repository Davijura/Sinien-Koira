'use client'
import NewNavbar from '../components/NewNavbar'
import ContactPage from '../components/ContactPage'
import NavbarAbove from '../components/NavbarAbove'
import Footer from '../components/Footer'

export default function Contact (): JSX.Element {
  return (
        <div>

            <div className='hidden sm:block'>
                <NavbarAbove />
            </div>

            <NewNavbar />

            <ContactPage />

            <Footer />

        </div>

  )
}
