import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'

export default function ContactInfo (): JSX.Element {
  return (
        <div className='flex flex-col sm:flex-row justify-between mx-auto items-start sm:items-center w-full sm:w-[550px] text-black px-4 sm:px-0'>

            <div className='mb-4 sm:mb-0'>
                <h2 className="font-bold flex items-center">
                    <HiOutlinePhone className="mr-2" color='green' size={24} />
                    Telefon:
                </h2>
                <p className='text-green-600 font-bold'><a href="tel:720062090">+420 720 062 090</a></p>
                <h2 className="font-bold mt-4 flex items-center">
                    <HiOutlineMail className="mr-2" color='green' size={24} />
                    Email:
                </h2>
                <p className='text-green-600 font-bold'><a href="mailto:sinienkoira@gmail.com">sinienkoira@gmail.com</a></p>
            </div>

            <div>
                <h2 className="font-bold">Fakturační adresa:</h2>
                <p>Jaurisova 515/4</p>
                <p>140 00 Praha 4</p>
                <p>IČ: 11980389</p>
                <p>DIČ: CZ11980389</p>
            </div>

            <div className='relative bottom-3 pt-5 sm:pt-0'>
                <h2 className="font-bold">Prodejna dřeva:</h2>
                <p>Pod Kosířem 333</p>
                <p>798 16 Čelechovice </p>
                <p>IČ: 11980389</p>
            </div>

        </div>
  )
}
