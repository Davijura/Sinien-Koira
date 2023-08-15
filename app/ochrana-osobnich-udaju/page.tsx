'use client'
import NewNavbar from '../components/NewNavbar'
import NavbarAbove from '../components/NavbarAbove'
import PrivacyPage from '../components/PrivacyPage'
import Footer from '../components/Footer'

export default function OurServices (): JSX.Element {
  return (
        <div>

            <div className='hidden sm:block'>
                <NavbarAbove />
            </div>

            <NewNavbar />

            <PrivacyPage />

            <Footer/>

        </div>

  )
}
