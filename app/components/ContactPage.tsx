import { motion } from 'framer-motion';
import ContactInfo from './ContactInfo';
import ContactMap from './ContactMap';

export default function ContactPage() {
    return (

        <div className="bg-white items-center justify-center min-h-screen pb-40">
            <div className='container mx-auto '>

                <div className='mx-auto justify-center text-black items-center flex'>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                        <h1 className="text-5xl  mt-12  mb-8  sm:text-5xl mx-auto text-center font-bold text-black w-full sm:w-[700px]">
                            Jan Mikulka
                        </h1>
                        <h2 className='text-xl mx-auto text-center font-bold mb-10'>Pro nezávaznou cenovou kalkulaci mě neváhejte kontaktovat.</h2>
                    </motion.div>
                </div>

                <div>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                        <ContactInfo />
                    </motion.div>
                </div>

                {/* <ContactMap /> */}

            </div>
        </div>

    );
}