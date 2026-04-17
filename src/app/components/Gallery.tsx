import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
const images = [
  {
    url: 'https://www.kashmirnewsobserver.com/userfiles/image/s_637414659666750788_d51283b3-8a5e-42ad-a28d-fb185343eb72.jpg',
    category: 'Hospital',
  },
  {
    url: 'https://images.unsplash.com/photo-1668829297425-a3732c217ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW1hbGF5YW4lMjBtb3VudGFpbiUyMHBlYWtzfGVufDF8fHx8MTc3NjI4NjQwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mountains',
  },
  {
    url: 'https://images.unsplash.com/photo-1631551437792-ae5a0fb41c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxha2UlMjByZWZsZWN0aW9ufGVufDF8fHx8MTc3NjE5NTkyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Lakes',
  },
  {
    url: 'https://images.unsplash.com/photo-1761387829550-d4b6af443008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwdmlsbGFnZSUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3NjI4NjQwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Villages',
  },
  {
    url: 'https://images.unsplash.com/photo-1623482564246-0601b9aa1af1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwdmFsbGV5JTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3NjI4NjQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Nature',
  },
  {
    url: 'https://images.unsplash.com/photo-1637504344961-8312bba86074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwZm9yZXN0JTIwbmF0dXJlfGVufDF8fHx8MTc3NjI4NjQwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Nature',
  },
  {
    url: 'https://images.unsplash.com/photo-1712998000742-f1a3ad98fa71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwaG91c2Vib2F0cyUyMHdhdGVyfGVufDF8fHx8MTc3NjI4NjQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Lakes',
  },
  {
    url: 'https://images.unsplash.com/photo-1643449415972-87d4cfe882a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwbWVhZG93JTIwZmxvd2Vyc3xlbnwxfHx8fDE3NzYyODY0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Nature',
  },
  {
    url: 'https://images.unsplash.com/photo-1707557220564-0a0405c4d00a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdXJleiUyMFZhbGxleSUyMEthc2htaXJ8ZW58MXx8fHwxNzc2Mjg2NDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mountains',
  },
];

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-slate-900/60"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Photo Gallery
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-white/80">
            Capture the essence of Bandipora's natural beauty
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative h-72 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl">
                <img
                  src={image.url}
                  alt={`Bandipora ${image.category}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Tag */}
                <div className="absolute bottom-4 left-4 bg-emerald-500/90 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold">{image.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="text-white" size={24} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronLeft className="text-white" size={32} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronRight className="text-white" size={32} />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage].url}
                alt="Full size"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="text-center mt-4">
                <span className="text-white text-lg bg-emerald-500/80 px-6 py-2 rounded-full">
                  {images[selectedImage].category}
                </span>
              </div>
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">
              {selectedImage + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
