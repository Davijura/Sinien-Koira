import { motion } from 'framer-motion'
import ContactInfo from './ContactInfo'
import ContactMap from './ContactMap'

export default function ContactPage (): JSX.Element {
  return (

        <div className="bg-white items-center justify-center min-h-screen pb-40">
            <div className='container mx-auto '>

                <div className='mx-auto justify-center text-black items-center flex'>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                    <h1 className="text-5xl mb-8 mt-12 border-b-2 border-gray-200 pb-5 sm:text-6xl mx-auto text-center font-bold text-black w-full sm:w-[700px]">
                           Kontakt
                    </h1>
                    </motion.div>
                </div>
                <h2 className='text-xl text-black mx-auto text-center font-bold mb-10 w-64 sm:w-max'>Pro nezávaznou cenovou kalkulaci nás neváhejte kontaktovat.</h2>
                <div>
                    <ContactInfo />
                </div>

                <div>
                    <ContactMap />
                </div>

            </div>
        </div>

  )
}
