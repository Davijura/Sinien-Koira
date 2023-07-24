import React from 'react';
import GalleryImages from './GalleryImages';
import { motion } from 'framer-motion';

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};

const images: GalleryImage[] = [
  { id: '1', src: '/tractor.jpg', alt: 'Popis obrázku 1' },
  { id: '2', src: '/wood.jpg', alt: 'Popis obrázku 1' },
  { id: '3', src: '/chainsaw.jpg', alt: 'Popis obrázku 1' },
  { id: '4', src: '/tree.jpg', alt: 'Popis obrázku 1' },
  { id: '5', src: '/les2.jpg', alt: 'Popis obrázku 1' },
  { id: '6', src: '/les3.jpg', alt: 'Popis obrázku 1' },
  { id: '7', src: '/tree.jpg', alt: 'Popis obrázku 1' },
  { id: '8', src: '/les2.jpg', alt: 'Popis obrázku 1' },
  { id: '9', src: '/les1.jpg', alt: 'Popis obrázku 1' },
  { id: '10', src: '/les1.jpg', alt: 'Popis obrázku 1' },
  { id: '11', src: '/les1.jpg', alt: 'Popis obrázku 1' },
  // přidej další obrázky podle potřeby
];

export default function GalleryPage() {
  return (
    <div className="bg-gray-100 items-center justify-center min-h-screen pb-40">
      <div className='mx-auto justify-center text-black items-center flex'>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl mb-16 mt-12 border-b-2 border-gray-200 pb-5  sm:text-6xl mx-auto text-center font-bold text-black w-full sm:w-[700px]">
            Galerie
          </h1>
        </motion.div>
      </div>

      <GalleryImages images={images} />
    </div>
  );
}