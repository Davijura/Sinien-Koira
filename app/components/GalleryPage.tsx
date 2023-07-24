import React from 'react';
import GalleryImages from './GalleryImages';
import { motion } from 'framer-motion';

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};

const images: GalleryImage[] = [
  { id: '1', src: '/woodG.jpg', alt: 'Dřevo na vlečce' },
  { id: '2', src: '/forest.jpg', alt: 'Práce v lese' },
  { id: '3', src: '/smallTree.jpg', alt: 'Lesní školka' },
  { id: '4', src: '/void.jpg', alt: 'Práce v lese' },
  { id: '5', src: '/fire.jpg', alt: 'Pálení dřeva' },
  { id: '6', src: '/mediumTree.jpg', alt: 'Popis obrázku 1' },
  { id: '7', src: '/fence.jpg', alt: 'Popis obrázku 1' },
  { id: '8', src: '/smallTrees.jpg', alt: 'Popis obrázku 1' },
  { id: '9', src: '/tree.jpg', alt: 'Popis obrázku 1' },
  { id: '10', src: '/root.jpg', alt: 'Popis obrázku 1' },
  { id: '11', src: '/tractor.jpg', alt: 'Popis obrázku 1' },
  { id: '12', src: '/woodBlock.jpg', alt: 'Popis obrázku 1' },
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