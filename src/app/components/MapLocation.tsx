import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Navigation, X } from 'lucide-react';

export function MapLocation() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  const locations = [
    {
      name: 'Bandipora Town',
      description: 'District headquarters with markets, schools, and administrative offices',
      coordinates: { top: '50%', left: '50%' },
      details: 'Main commercial and administrative center of the district',
    },
    {
      name: 'Chattibandi',
      description: 'Scenic area known for its natural beauty and peaceful environment',
      coordinates: { top: '35%', left: '40%' },
      details: 'Popular among locals for its serene landscapes and traditional villages',
    },
    {
      name: 'Chanpal',
      description: 'Beautiful location near Wular Lake with stunning water views',
      coordinates: { top: '60%', left: '45%' },
      details: 'Gateway to Wular Lake with fishing and boating activities',
    },
    {
      name: 'Wular Lake',
      description: 'Asia\'s largest freshwater lake - a natural wonder',
      coordinates: { top: '65%', left: '60%' },
      details: 'Major tourist attraction and important wetland ecosystem',
    },
    {
      name: 'Gurez Valley',
      description: 'Breathtaking valley accessible via scenic mountain roads',
      coordinates: { top: '20%', left: '70%' },
      details: 'Remote paradise with stunning Himalayan views and traditional culture',
    },
    {
      name: 'Sumbal',
      description: 'Town known for its agricultural activities and local markets',
      coordinates: { top: '75%', left: '35%' },
      details: 'Important trading center with rich agricultural heritage',
    },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-emerald-900/40 to-blue-900/60"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Explore Locations
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-white/80">
            Click on the map markers to discover beautiful places in Bandipora
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
              {/* Map Container */}
              <div className="relative w-full h-[600px] bg-gradient-to-br from-emerald-900/30 to-blue-900/30 rounded-2xl overflow-hidden border-2 border-white/20">
                {/* Topographic Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="topo" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M10 10 Q 25 20, 40 10 T 70 10" stroke="#fff" strokeWidth="0.5" fill="none"/>
                        <path d="M10 30 Q 25 40, 40 30 T 70 30" stroke="#fff" strokeWidth="0.5" fill="none"/>
                        <path d="M10 50 Q 25 60, 40 50 T 70 50" stroke="#fff" strokeWidth="0.5" fill="none"/>
                        <path d="M10 70 Q 25 80, 40 70 T 70 70" stroke="#fff" strokeWidth="0.5" fill="none"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#topo)" />
                  </svg>
                </div>

                {/* Location Markers */}
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{
                      top: location.coordinates.top,
                      left: location.coordinates.left,
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedLocation(index)}
                  >
                    {/* Pin */}
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      animate={selectedLocation === index ? { scale: 1.3 } : { scale: 1 }}
                      className="relative"
                    >
                      <MapPin
                        className={`${
                          selectedLocation === index
                            ? 'text-emerald-400'
                            : 'text-red-500 group-hover:text-emerald-400'
                        } drop-shadow-lg transition-colors`}
                        size={32}
                        fill={selectedLocation === index ? '#34d399' : '#ef4444'}
                      />
                      {/* Pulse Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-emerald-400/30"
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>

                    {/* Label */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg">
                        <p className="text-slate-900 font-semibold text-sm">{location.name}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Compass */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3">
                  <Navigation className="text-white" size={24} />
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3">
                  <p className="text-white text-sm font-semibold mb-2">Legend</p>
                  <div className="flex items-center space-x-2">
                    <MapPin size={20} fill="#ef4444" className="text-red-500" />
                    <span className="text-white/80 text-xs">Locations</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <AnimatePresence mode="wait">
              {selectedLocation !== null ? (
                <motion.div
                  key={selectedLocation}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
                        <MapPin className="text-white" size={24} />
                      </div>
                      <h3 className="text-3xl font-bold text-white">
                        {locations[selectedLocation].name}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedLocation(null)}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <X className="text-white/70 hover:text-white" size={24} />
                    </button>
                  </div>

                  <p className="text-xl text-emerald-300 mb-6">
                    {locations[selectedLocation].description}
                  </p>

                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <p className="text-white/80 leading-relaxed">
                      {locations[selectedLocation].details}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 shadow-2xl text-center"
                >
                  <MapPin className="text-emerald-400 mx-auto mb-6" size={64} />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Select a Location
                  </h3>
                  <p className="text-white/70 text-lg">
                    Click on any marker on the map to learn more about that location
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick Links */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-xl">
              <h4 className="text-xl font-bold text-white mb-4">Quick Access</h4>
              <div className="grid grid-cols-2 gap-3">
                {locations.map((location, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedLocation(index)}
                    className={`p-3 rounded-xl text-sm font-semibold transition-all ${
                      selectedLocation === index
                        ? 'bg-emerald-500 text-white'
                        : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    {location.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
