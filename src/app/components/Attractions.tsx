import { motion } from 'motion/react';
import { Waves, Mountain, TreePine, Flower } from 'lucide-react';

export function Attractions() {
  const attractions = [
    {
      name: 'Wular Lake',
      description: 'One of Asia\'s largest freshwater lakes, perfect for boating and bird watching. A serene paradise for nature lovers.',
      image: 'https://images.unsplash.com/photo-1631551437792-ae5a0fb41c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxha2UlMjByZWZsZWN0aW9ufGVufDF8fHx8MTc3NjE5NTkyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Waves,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Gurez Valley',
      description: 'A hidden gem with stunning mountain views, traditional villages, and pristine natural beauty. Gateway to adventure.',
      image: 'https://images.unsplash.com/photo-1707557220564-0a0405c4d00a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdXJleiUyMFZhbGxleSUyMEthc2htaXJ8ZW58MXx8fHwxNzc2Mjg2NDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Mountain,
      color: 'from-emerald-500 to-green-500',
    },
    {
      name: 'Nishat Park',
      description: 'Beautiful garden with colorful flowers, walking paths, and peaceful surroundings. Perfect for family picnics.',
      image: 'https://images.unsplash.com/photo-1643449415972-87d4cfe882a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwbWVhZG93JTIwZmxvd2Vyc3xlbnwxfHx8fDE3NzYyODY0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Flower,
      color: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Chandaji Forest Park',
      description: 'Dense forest area ideal for nature walks and wildlife spotting. Experience the raw beauty of Kashmir forests.',
      image: 'https://images.unsplash.com/photo-1637504344961-8312bba86074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwZm9yZXN0JTIwbmF0dXJlfGVufDF8fHx8MTc3NjI4NjQwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: TreePine,
      color: 'from-green-600 to-emerald-600',
    },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-blue-900/60"></div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
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
            Top Attractions
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Explore the most beautiful destinations in Bandipora
          </p>
        </motion.div>

        {/* Attractions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {attractions.map((attraction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative h-96 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-block w-16 h-16 rounded-2xl bg-gradient-to-br ${attraction.color} p-4 mb-4 shadow-lg`}
                  >
                    <attraction.icon className="text-white" size={32} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {attraction.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 text-lg leading-relaxed">
                    {attraction.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/0 to-emerald-600/0 group-hover:from-emerald-600/20 group-hover:to-blue-600/10 transition-all duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
