import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AboutInfo from './AboutInfo'
import AboutInfoSecond from './AboutInfoSecond'
import AboutInfoThird from './AboutInfoThird'

export default function AboutPage (): JSX.Element {
  const [animated1, setAnimated1] = useState(false)
  const [animated2, setAnimated2] = useState(false)
  const [animated3, setAnimated3] = useState(false)

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.1
  })

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.1
  })

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.1
  })

  useEffect(() => {
    if (inView1) setAnimated1(true)
  }, [inView1])

  useEffect(() => {
    if (inView2) setAnimated2(true)
  }, [inView2])

  useEffect(() => {
    if (inView3) setAnimated3(true)
  }, [inView3])

  return (
        <section className="bg-white items-center justify-center min-h-screen py-20" id="about-section">

                <div className='mx-auto justify-center text-black items-center flex'>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                        <h1 className="text-5xl mb-16 mt-12 border-b-2 border-gray-200 pb-5  sm:text-6xl mx-auto text-left font-bold text-black w-full sm:w-[700px]">
                            O nás
                        </h1>
                    </motion.div>
                </div>

                <motion.div ref={ref1} initial={{ opacity: 0, x: -200 }} animate={{ opacity: animated1 ? 1 : 0, x: animated1 ? 0 : -200 }} transition={{ duration: 1 }}>
                    <AboutInfo />
                </motion.div>

                <motion.div ref={ref2} initial={{ opacity: 0, x: 200 }} animate={{ opacity: animated2 ? 1 : 0, x: animated2 ? 0 : 200 }} transition={{ duration: 1 }}>
                    <AboutInfoSecond />
                </motion.div>

                <motion.div ref={ref3} initial={{ opacity: 0, x: -200 }} animate={{ opacity: animated3 ? 1 : 0, x: animated3 ? 0 : -200 }} transition={{ duration: 1 }}>
                    <AboutInfoThird />
                </motion.div>

        </section>
  )
}
