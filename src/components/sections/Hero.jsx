import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-surface"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 md:py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content — editorial left-aligned */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-secondary-dark font-medium text-sm md:text-base tracking-widest uppercase mb-6">
              Engineer &middot; Founder &middot; Mountaineer
            </p>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-on-surface leading-[1.05] mb-8">
              Building at the
              <br />
              <span className="text-primary-container italic">intersection</span> of
              <br />
              tech & adventure
            </h1>

            <p className="text-on-surface-muted text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Software engineer turned founder, summit seeker, and community builder.
              I help women break barriers — in boardrooms and on mountaintops.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="mailto:nadah@hey.com"
                className="px-8 py-3.5 bg-primary text-on-primary font-semibold rounded-md hover:bg-primary-container transition-all duration-300 text-center"
              >
                Let's Chat
              </a>
              <a
                href="#work"
                className="px-8 py-3.5 text-on-surface-muted font-medium rounded-md hover:text-primary transition-all duration-300 text-center"
              >
                Explore My Work &rarr;
              </a>
            </div>
          </motion.div>

          {/* Decorative monogram */}
          <motion.div
            className="flex-shrink-0 hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-surface-dim" />
              <div className="absolute inset-8 rounded-full bg-surface-container" />
              <div className="text-center relative">
                <span className="font-heading text-7xl md:text-8xl text-on-surface/15 italic">NF</span>
                <p className="text-on-surface-muted/40 text-xs mt-2 tracking-widest uppercase">Photo coming soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-on-surface/15 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-on-surface/20" />
        </div>
      </div>
    </section>
  );
}
