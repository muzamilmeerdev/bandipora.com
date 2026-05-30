import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const images = [
    {
      url: 'https://www.kashmirnewsobserver.com/userfiles/image/s_637414659666750788_d51283b3-8a5e-42ad-a28d-fb185343eb72.jpg',
      title: 'District Hospital',
      category: 'Hospital',
      location: 'Bandipora',
      description: 'District Hospital Bandipora',
    },
    {
      url: 'https://cdn.s3waas.gov.in/s3918317b57931b6b7a7d29490fe5ec9f9/uploads/2018/08/2018080932-1024x738.jpg',
      title: 'Darul Uloom Rehimiyyah',
      category: 'Education',
      location: 'Bandipora',
      description: 'Famous Islamic educational institution',
    },
    {
      url: 'https://cdn.s3waas.gov.in/s3918317b57931b6b7a7d29490fe5ec9f9/uploads/2021/09/2021092385-1024x471.jpg',
      title: 'Athwattoo',
      category: 'Tourist',
      location: 'Bandipora',
      description: 'Popular tourist destination',
    },
    {
      url: 'https://cdn.s3waas.gov.in/s3918317b57931b6b7a7d29490fe5ec9f9/uploads/2018/12/17582606197491-1024x683.jpg',
      title: 'I Love Wullar',
      category: 'Tourist',
      location: 'Wullar Lake',
      description: 'Iconic tourist spot',
    },
    {
      url: 'https://cdn.s3waas.gov.in/s3918317b57931b6b7a7d29490fe5ec9f9/uploads/2018/12/17591320279062-1024x461.jpg',
      title: 'Wullar Lake',
      category: 'Tourist',
      location: 'Bandipora',
      description: "One of Asia's largest freshwater lakes",
    },
    {
      url: 'https://cdn.s3waas.gov.in/s3918317b57931b6b7a7d29490fe5ec9f9/uploads/2018/08/2018080958.jpg',
      title: 'Nishat Park',
      category: 'Tourist',
      location: 'Bandipora',
      description: 'Beautiful public park',
    },
    {
      url: 'https://cdn.s3waas.gov.in/s3918317b57931b6b7a7d29490fe5ec9f9/uploads/2018/12/17582602451471-1024x683.jpg',
      title: 'I Love Bandipora',
      category: 'Tourist',
      location: 'Bandipora',
      description: 'Popular landmark',
    },
    {
      url: 'https://res.cloudinary.com/dxjkbpmgm/image/upload/v1778399711/660499523_1355580619924039_1816428020600405197_n_g1pqjp.jpg',
      title: 'High School Chanpal',
      category: 'Education',
      location: 'Chanpal',
      description: 'Government High School',
    },
    {
      url: 'https://res.cloudinary.com/dxjkbpmgm/image/upload/v1779859311/2cd9ecc24cf9e12ecd2e8055145c281d_tzmy3i.jpg',
      title: 'Higher Secondary School Aragam',
      category: 'Education',
      location: 'Aragam',
      description: 'Higher Secondary School',
    },
  ];

  const categories = [
    'All',
    ...new Set(images.map((img) => img.category)),
  ];

  const filteredImages = images.filter((image) => {
    const matchesSearch =
      image.title.toLowerCase().includes(search.toLowerCase()) ||
      image.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === 'All' ||
      image.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + filteredImages.length) %
          filteredImages.length
      );
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage + 1) % filteredImages.length
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedImage(null);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () =>
      window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-slate-900/60"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Photo Gallery
          </h2>

          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>

          <p className="text-xl text-white/80">
            Capture the essence of Bandipora's beauty
          </p>
        </motion.div>

        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search places..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 backdrop-blur"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative h-72 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={image.url}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-white font-bold text-lg">
                    {image.title}
                  </h3>

                  <p className="text-white/80 text-sm">
                    {image.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-3 bg-white/10 rounded-full"
            >
              <X className="text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 p-3 bg-white/10 rounded-full"
            >
              <ChevronLeft className="text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 p-3 bg-white/10 rounded-full"
            >
              <ChevronRight className="text-white" />
            </button>

            <div
              className="max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImage].url}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              <div className="text-center mt-6">
                <h3 className="text-3xl font-bold text-white">
                  {filteredImages[selectedImage].title}
                </h3>

                <p className="text-emerald-400 mt-2">
                  {filteredImages[selectedImage].location}
                </p>

                <p className="text-white/80 mt-2">
                  {filteredImages[selectedImage].description}
                </p>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    filteredImages[selectedImage].location
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-full text-white"
                >
                  View on Google Maps
                </a>
              </div>

              <div className="text-center mt-4 text-white/70">
                {selectedImage + 1} / {filteredImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
