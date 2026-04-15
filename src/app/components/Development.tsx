import { motion } from 'motion/react';
import { Leaf, Fish, Building2, TrendingUp } from 'lucide-react';

export function Development() {
  const developmentAreas = [
    {
      icon: Leaf,
      title: 'Eco-Tourism',
      description: 'Promoting sustainable tourism while preserving natural beauty. Development of eco-friendly resorts and homestays for visitors.',
      stats: 'Growing sector',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Fish,
      title: 'Fisheries',
      description: 'Wular Lake supports a thriving fishing industry. Modern fishing techniques and conservation efforts ensure sustainable yields.',
      stats: 'Major industry',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Building2,
      title: 'Infrastructure',
      description: 'Improved road connectivity, better healthcare facilities, and modern educational institutions are transforming the district.',
      stats: 'Rapid progress',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: TrendingUp,
      title: 'Economic Growth',
      description: 'Focus on agriculture, handicrafts, and tourism is boosting local economy. Youth empowerment programs create new opportunities.',
      stats: 'Positive trend',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-emerald-900/60"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{
              background: `linear-gradient(45deg, ${
                i === 0 ? '#10b981' : i === 1 ? '#3b82f6' : '#8b5cf6'
              }, transparent)`,
              left: `${i * 40}%`,
              top: `${i * 30}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
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
            Development & Progress
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Building a sustainable future while preserving our natural heritage
          </p>
        </motion.div>

        {/* Development Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {developmentAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-xl h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} p-4 mb-6 shadow-lg`}
                >
                  <area.icon className="text-white w-full h-full" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {area.title}
                </h3>

                {/* Stats Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${area.color} text-white`}>
                    {area.stats}
                  </span>
                </div>

                {/* Description */}
                <p className="text-white/80 leading-relaxed flex-grow">
                  {area.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Recent Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2"
              >
                100+
              </motion.div>
              <p className="text-white/80">Tourist Facilities</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2"
              >
                50km+
              </motion.div>
              <p className="text-white/80">New Roads Built</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
              >
                1000+
              </motion.div>
              <p className="text-white/80">Jobs Created</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
