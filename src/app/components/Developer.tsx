import { motion } from 'motion/react';
import { Code2, Phone, Instagram, Github, Linkedin, Heart } from 'lucide-react';

export function Developer() {
  const developerLinks = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9103594759',
      href: 'tel:+919103594759',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@muzamilmeerdev',
      href: 'https://instagram.com/muzamilmeerdev',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'muzamilmeerdev',
      href: 'https://github.com/muzamilmeerdev',
      color: 'from-gray-700 to-gray-900',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Muzamil Ahmad Mir',
      href: 'https://linkedin.com/in/muzamil-ahmad-mir',
      color: 'from-blue-600 to-blue-800',
    },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/60 to-blue-900/60"></div>
      
      {/* Decorative Code Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Code Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['</', '/>', '{}', '()'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 text-6xl font-mono"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="inline-block mb-6"
          >
            <Code2 className="text-emerald-400" size={64} />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Developer
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
        </motion.div>

        {/* Developer Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          {/* Developer Info */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="inline-block mb-6"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
                M
              </div>
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-3"
            >
              Muzamil Ahmad Mir
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-emerald-300 mb-6"
            >
              Full Stack Developer
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center space-x-2 text-white/70"
            >
              <Heart className="text-red-400" size={20} fill="currentColor" />
              <span>Crafted with passion</span>
            </motion.div>
          </div>

          {/* Contact Links */}
          <div className="grid sm:grid-cols-2 gap-6">
            {developerLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.label !== 'Phone' ? '_blank' : undefined}
                rel={link.label !== 'Phone' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl p-6 transition-all shadow-lg group"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} p-3 shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <link.icon className="text-white w-full h-full" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-white/70 text-sm mb-1">{link.label}</p>
                    <p className="text-white font-semibold break-all">{link.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-white/60">
              Thank you for exploring Bandipora with us!
            </p>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 text-white/50"
        >
          <p>© 2026 Bandipora Explorer. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
