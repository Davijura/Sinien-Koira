'use client'
import NewNavbar from '../components/NewNavbar'
import OrderPage from '../components/OrderPage'
import NavbarAbove from '../components/NavbarAbove'
import Footer from '../components/Footer'

export default function ObjednavkaDreva (): JSX.Element {
  return (
    <div>

      <div className='hidden sm:block'>
        <NavbarAbove />
      </div>

      <NewNavbar />

      <OrderPage />

      <Footer />

    </div>

  )
}
