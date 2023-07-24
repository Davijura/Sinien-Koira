import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

export default function ServicePage() {
  return (

    <div className="bg-white items-center justify-center min-h-screen pb-40">
      <div className='container mx-auto'>
        <div className='mx-auto justify-center text-black items-center flex'>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <h1 className="text-5xl mb-16 mt-12 border-b-2 border-gray-200 pb-5  sm:text-6xl mx-auto text-center font-bold text-gray-700  w-full sm:w-[700px]">
              Naše služby
            </h1>
          </motion.div>

        </div>
        <ServiceCard />
      </div>
    </div>

  );
}