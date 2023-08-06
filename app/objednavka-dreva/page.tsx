'use client'
import NewNavbar from '../components/NewNavbar'
import OrderPage from '../components/OrderPage'
import NavbarAbove from '../components/NavbarAbove'
import Head from 'next/head'

export default function ObjednavkaDreva (): JSX.Element {
  return (

    <div>
      <Head>
        <title>Sinien Koira - Objednávka dřeva</title>
      </Head>

      <div className='hidden sm:block'>
        <NavbarAbove />
      </div>

      <NewNavbar />

      <OrderPage />

    </div>

  )
}
