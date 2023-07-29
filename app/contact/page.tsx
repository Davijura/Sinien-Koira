'use client'
import NewNavbar from '../components/NewNavbar'
import ContactPage from '../components/ContactPage'
import NavbarAbove from '../components/NavbarAbove'

export default function Contact (): any {
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
