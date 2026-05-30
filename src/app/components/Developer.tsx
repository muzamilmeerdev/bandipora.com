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

          <img
  src="/developer.jpg"
  alt="Muzamil Ahmad Mir"
  className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-emerald-400 shadow-2xl mb-6"
/>

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
                        {/* Skills */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-white text-center mb-6">
                Skills & Technologies
              </h4>

              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-emerald-500/20 border border-emerald-400/20 rounded-full text-emerald-300 hover:bg-emerald-500/30 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 rounded-2xl p-6 text-center border border-white/10"
              >
                <h3 className="text-4xl font-bold text-white mb-2">
                  20+
                </h3>

                <p className="text-white/70">
                  Projects Completed
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 rounded-2xl p-6 text-center border border-white/10"
              >
                <h3 className="text-4xl font-bold text-white mb-2">
                  3+
                </h3>

                <p className="text-white/70">
                  Years Experience
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 rounded-2xl p-6 text-center border border-white/10"
              >
                <h3 className="text-4xl font-bold text-white mb-2">
                  100%
                </h3>

                <p className="text-white/70">
                  Client Satisfaction
                </p>
              </motion.div>

            </div>

            {/* Contact Links */}
            <div className="grid sm:grid-cols-2 gap-6">
              {developerLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={
                    link.label !== 'Phone'
                      ? '_blank'
                      : undefined
                  }
                  rel={
                    link.label !== 'Phone'
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                  }}
                  className="bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl p-6 transition-all shadow-lg group"
                >
                  <div className="flex items-center space-x-4">

                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} p-3 shadow-lg`}
                    >
                      <link.icon className="text-white w-full h-full" />
                    </div>

                    <div className="flex-1 text-left">
                      <p className="text-white/70 text-sm mb-1">
                        {link.label}
                      </p>

                      <p className="text-white font-semibold break-all">
                        {link.value}
                      </p>
                    </div>

                  </div>
                </motion.a>
              ))}
            </div>

            {/* Copy Phone */}
            <div className="flex justify-center mt-8">
              <button
                onClick={copyPhone}
                className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all"
              >
                {copied ? (
                  <>
                    <CheckCircle size={18} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Copy Phone Number
                  </>
                )}
              </button>
            </div>

            {/* CV Download */}
            <div className="text-center mt-8">
              <a
                href="/Muzamil-CV.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-full text-white font-semibold shadow-lg transition-all"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>

            {/* Footer Note */}
            <div className="mt-12 text-center">
              <p className="text-white/60 text-lg">
                Thank you for exploring Bandipora with us!
              </p>
            </div>

          </div>
        </motion.div>

        {/* Copyright */}
        <div className="text-center mt-12 text-white/50">
          <p>
            © 2026 Bandipora Explorer.
            All rights reserved.
          </p>
        </div>

      </div>
    </section>
  );
}
