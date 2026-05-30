import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Phone,
  Instagram,
  Github,
  Linkedin,
  Heart,
  Download,
  Copy,
  CheckCircle
} from 'lucide-react';

export function Developer() {
  const [copied, setCopied] = useState(false);

  const copyPhone = () => {
    navigator.clipboard.writeText('+91 9103594759');
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const skills = [
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'MongoDB',
    'Express',
    'Tailwind CSS',
    'Firebase',
    'Supabase',
    'Framer Motion',
  ];

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

      {/* Floating Symbols */}
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

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="inline-block mb-6"
          >
            <Code2
              className="text-emerald-400"
              size={64}
            />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Developer
          </h2>

          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
        >

          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 blur-3xl opacity-20"></div>

          <div className="relative z-10">

            {/* Profile */}
            <div className="text-center mb-12">

              <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center text-white text-6xl font-bold shadow-2xl mb-6">
                M
              </div>

              <h3 className="text-4xl font-bold text-white mb-3">
                Muzamil Ahmad Mir
              </h3>

              <p className="text-xl text-emerald-300 mb-4">
                Full Stack Developer
              </p>

              {/* Available Badge */}
              <div className="inline-flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full border border-green-400/20">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>

                <span className="text-green-300">
                  Available For Freelance Work
                </span>
              </div>

              <div className="flex items-center justify-center space-x-2 text-white/70 mt-6">
                <Heart
                  className="text-red-400"
                  size={20}
                  fill="currentColor"
                />

                <span>
                  Crafted with passion
                </span>
              </div>
            </div>
