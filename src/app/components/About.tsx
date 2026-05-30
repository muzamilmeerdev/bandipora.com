import { motion } from 'motion/react';
import {
  MapPin,
  Heart,
  Mountain,
  Users,
  Trees,
  Waves
} from 'lucide-react';

export function About() {
  const features = [
    {
      icon: MapPin,
      title: 'Location',
      description:
        'Northern district of Jammu & Kashmir surrounded by majestic mountains.',
    },
    {
      icon: Heart,
      title: 'Natural Beauty',
      description:
        'Pristine lakes, lush valleys, forests and breathtaking landscapes.',
    },
    {
      icon: Mountain,
      title: 'Adventure',
      description:
        'Gateway to Gurez Valley and many unexplored destinations.',
    },
    {
      icon: Waves,
      title: 'Wular Lake',
      description:
        "Home to Asia's largest freshwater lake.",
    },
    {
      icon: Trees,
      title: 'Eco Tourism',
      description:
        'Beautiful forests, wildlife and eco-friendly tourism opportunities.',
    },
    {
      icon: Users,
      title: 'Culture',
      description:
        'Rich Kashmiri traditions, hospitality and heritage.',
    },
  ];

  const stats = [
    {
      value: '520+',
      label: 'Villages',
    },
    {
      value: '300K+',
      label: 'Population',
    },
    {
      value: '50+',
      label: 'Tourist Spots',
    },
    {
      value: '1',
      label: 'Wular Lake',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900 to-emerald-900/40"></div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('/bandipora-bg.jpg.png')",
        }}
      ></div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-emerald-400/20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/20 text-emerald-300 mb-6">
            Discover Paradise
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Bandipora
          </h2>

          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>

          <p className="max-w-3xl mx-auto text-white/70 text-lg">
            Explore one of the most beautiful districts of Kashmir,
            blessed with lakes, mountains, forests and unforgettable landscapes.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                            <h3 className="text-3xl font-bold text-white mb-6">
                The Crown Jewel of North Kashmir
              </h3>

              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Bandipora is a beautiful district located in the northern part
                of Jammu and Kashmir. It is known for its breathtaking natural
                beauty, snow-capped mountains, crystal-clear lakes and lush
                green valleys.
              </p>

              <p className="text-white/90 text-lg leading-relaxed mb-6">
                The district is home to the world-famous Wular Lake, one of
                Asia's largest freshwater lakes, and serves as the gateway to
                the spectacular Gurez Valley.
              </p>

              <p className="text-white/90 text-lg leading-relaxed">
                With its rich culture, warm hospitality and peaceful
                environment, Bandipora offers visitors a truly unforgettable
                experience of Kashmir's natural wonders.
              </p>

              {/* Explore Button */}
              <a
                href="#tourist-places"
                className="inline-block mt-8 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-full text-white font-semibold transition-all shadow-lg hover:scale-105"
              >
                Explore Tourist Places
              </a>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 text-center"
                >
                  <h3 className="text-3xl font-bold text-emerald-300 mb-2">
                    {stat.value}
                  </h3>

                  <p className="text-white/70">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Right Side Features */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="grid gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-start space-x-4">

                  <div className="bg-emerald-500/20 p-4 rounded-xl">
                    <feature.icon
                      className="text-emerald-300"
                      size={28}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
          }}
          className="mt-20"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Paradise Awaits You
            </h3>

            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Discover hidden valleys, majestic mountains, pristine lakes
              and the unmatched beauty of Bandipora — the gateway to
              Kashmir's most breathtaking destinations.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
              
