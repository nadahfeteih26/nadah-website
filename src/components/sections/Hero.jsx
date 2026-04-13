import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const rotatingWords = ['tech', 'communities', 'ventures', 'movements'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/NadahVideo.mov" type="video/quicktime" />
        <source src="/NadahVideo.mov" type="video/mp4" />
      </video>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 sm:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.15] mb-0">
            Hi, I'm Nadah
            <br />
            and I build
          </h1>
          <div className="mb-8 mt-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[wordIndex]}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="inline-block font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic text-secondary"
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <a
            href="#connect"
            className="inline-block px-8 py-3.5 bg-white/10 backdrop-blur-md text-white font-medium rounded-md hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-dim to-transparent" />
    </section>
  );
}
