import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type GalleryImage = {
  id: string;
  src: string;
  alt: string;

};

type GalleryImagesProps = {
  images: GalleryImage[];
};

const GalleryImages: React.FC<GalleryImagesProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const handleOpen = (src: string) => {
    setSelectedImg(src);
  };

  const handleClose = () => {
    setSelectedImg(null);
  };

  return (
    <div className="grid grid-cols-1 pb-10 min-h-screen w-max mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
      {images.map((image) => (
        <motion.div
          key={image.id}
          className="relative overflow-hidden shadow-lg rounded-lg cursor-pointer hover:shadow-2xl transition duration-500 w-[450px] h-[325px]"
          onMouseEnter={() => setActiveImage(image.id)}
          onMouseLeave={() => setActiveImage(null)}
          onClick={() => handleOpen(image.src)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top'
            }}
          >
          </div>

          <div
            className={`absolute bottom-0 left-0 bg-gray-200 bg-opacity-70 w-full transform transition-all duration-500 overflow-hidden p-2 ${activeImage === image.id ? 'translate-y-0' : 'translate-y-full'
              }`}
          >
            <p className="text-black text-sm md:text-md font-medium">
              {image.alt}
            </p>
          </div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50"
            onClick={handleClose}
          >
            <motion.img
              initial={{ y: '-100vh' }}
              animate={{ y: 0 }}
              exit={{ y: '100vh' }}
              src={selectedImg}
              className="max-w-9/10 max-h-9/10 md:max-w-md md:max-h-md m-4 rounded-xl"
              alt="Enlarged pic"
            />

            <motion.div
              className="absolute top-4 right-4 cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>


            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryImages;







