import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const ImageBubble: React.FC = () => {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    const handleOpen = (src: string) => {
        setSelectedImg(src);
    }

    const handleClose = () => {
        setSelectedImg(null);
    }

    return (
        <div className='flex justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
                {["/tractor.jpg", "/wood.jpg", "/chainsaw.jpg", "/tractor.jpg"].map((src: string, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        onClick={() => handleOpen(src)}
                    >
                        <Image
                            className="mask mask-squircle cursor-pointer"
                            src={src}
                            width={200}
                            height={150}
                            alt="Picture of the author"
                        />
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-5000'
                        onClick={handleClose}
                    >
                        <motion.img
                            initial={{ y: "-100vh" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100vh" }}
                            src={selectedImg}
                            className='max-w-9/10 max-h-9/10 md:max-w-md md:max-h-md m-4 rounded-xl'
                            alt="Enlarged pic"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ImageBubble;