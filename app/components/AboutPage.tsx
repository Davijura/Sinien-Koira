import { motion } from 'framer-motion'
import AboutInfo from './AboutInfo'
import AboutInfoSecond from './AboutInfoSecond'
import AboutInfoThird from './AboutInfoThird'

export default function AboutPage (): JSX.Element {
  return (
    <section className="bg-white items-center justify-center min-h-screen py-20 w-screen" id="about-section">

      <div className='mx-auto justify-center text-black items-center flex'>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl mb-16 mt-12 border-b-2 border-gray-200 pb-5 sm:text-6xl mx-auto text-left font-bold text-black w-full sm:w-[700px]">
            O nás
          </h1>
        </motion.div>
      </div>

      <div>

          <AboutInfo />

          <AboutInfoSecond />

          <AboutInfoThird />

      </div>

    </section>
  )
}
