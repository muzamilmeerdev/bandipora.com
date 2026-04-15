import { motion } from 'motion/react';
import { MapPin, GraduationCap, Cloud, Navigation } from 'lucide-react';

export function Info() {
  const infoCards = [
    {
      icon: MapPin,
      title: 'Location',
      description: 'Northern district of Jammu & Kashmir, India',
      details: 'Bordered by Baramulla and Ganderbal districts',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: GraduationCap,
      title: 'Literacy Rate',
      description: 'Growing educational standards',
      details: 'Multiple schools and higher education institutions',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Cloud,
      title: 'Climate',
      description: 'Moderate climate with four distinct seasons',
      details: 'Pleasant summers, cold winters with snowfall',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Navigation,
      title: 'Gurez Road',
      description: 'Scenic route to Gurez Valley',
      details: 'Open seasonally, offers breathtaking mountain views',
      color: 'from-emerald-500 to-green-500',
    },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-purple-900/40 to-blue-900/60"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.1) 2px, transparent 2px)',
          backgroundSize: '100px 100px',
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Essential Information
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-white/80">
            Everything you need to know about Bandipora
          </p>
        </motion.div>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl h-full">
                {/* Gradient Background */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${card.color} opacity-10 rounded-bl-full blur-3xl`}></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${card.color} p-4 mb-6 shadow-lg`}
                >
                  <card.icon className="text-white w-full h-full" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-white/90 text-lg mb-2">
                  {card.description}
                </p>
                <p className="text-white/70">
                  {card.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6">
                Quick Facts
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white/90">
                      <span className="font-semibold">District:</span> Established in 2007
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white/90">
                      <span className="font-semibold">Headquarters:</span> Bandipora Town
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white/90">
                      <span className="font-semibold">Main Languages:</span> Kashmiri, Urdu, Hindi
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white/90">
                      <span className="font-semibold">Best Time to Visit:</span> April to October
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6">
                Travel Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white/90">
                      <span className="font-semibold">Nearest Airport:</span> Srinagar International Airport (60 km)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white/90">
                      <span className="font-semibold">Road Connectivity:</span> Well connected to Srinagar and major towns
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white/90">
                      <span className="font-semibold">Local Transport:</span> Taxis, buses, and shared vehicles available
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white/90">
                      <span className="font-semibold">Accommodation:</span> Hotels, guesthouses, and homestays
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
