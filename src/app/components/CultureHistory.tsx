import { motion } from 'motion/react';
import { Landmark, Users, BookOpen, Sparkles } from 'lucide-react';

export function CultureHistory() {
  const culturalItems = [
    {
      icon: Landmark,
      title: 'Silk Route Heritage',
      description: 'Bandipora was an important stop on the ancient Silk Route, connecting Kashmir with Central Asia. This historic trade route brought prosperity and cultural exchange to the region.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Kashmiri Culture',
      description: 'The district preserves rich Kashmiri traditions including folk music, traditional crafts, and warm hospitality. Local festivals celebrate the region\'s cultural diversity.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BookOpen,
      title: 'Traditional Crafts',
      description: 'Known for handwoven textiles, wood carving, and traditional Kashmiri handicrafts. Artisans pass down their skills through generations.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Sparkles,
      title: 'Cultural Festivals',
      description: 'Celebrations include traditional Kashmiri festivals, religious gatherings, and seasonal harvest festivals that bring communities together.',
      color: 'from-emerald-500 to-green-500',
    },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-emerald-900/40"></div>
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            Culture & History
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover the rich cultural heritage and historical significance of Bandipora
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative h-96 rounded-3xl overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipPq3j6C4zd95kL8YMdHRzeRU1SV2r3jbz3jnaLj=s1360-w1360-h1020-rw"
              alt="Kashmir Culture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-white mb-4"
              >
                A Legacy of Tradition
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/90"
              >
                Where ancient heritage meets vibrant culture
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Cultural Items Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {culturalItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-block w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} p-5 mb-6 shadow-lg`}
                >
                  <item.icon className="text-white w-full h-full" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-lg leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 rounded-bl-full blur-2xl -z-10`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
