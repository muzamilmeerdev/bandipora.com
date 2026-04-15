import { motion } from 'motion/react';
import { MapPin, Heart, Mountain } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: MapPin,
      title: 'Location',
      description: 'Northern district of Jammu & Kashmir',
    },
    {
      icon: Heart,
      title: 'Natural Beauty',
      description: 'Pristine lakes, valleys, and mountains',
    },
    {
      icon: Mountain,
      title: 'Adventure',
      description: 'Gateway to unexplored destinations',
    },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-emerald-900/40"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Bandipora
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Bandipora is a beautiful district located in the northern part of Jammu and Kashmir.
                It is known for its stunning natural scenery, including mountains, lakes, and green valleys.
              </p>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                The district is home to the famous Wular Lake, one of Asia's largest freshwater lakes,
                and serves as the gateway to the breathtaking Gurez Valley.
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                With its rich culture, friendly people, and peaceful environment, Bandipora offers
                visitors a unique experience of Kashmir's natural beauty and traditional heritage.
              </p>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500/20 p-3 rounded-xl">
                    <feature.icon className="text-emerald-300" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/80">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
