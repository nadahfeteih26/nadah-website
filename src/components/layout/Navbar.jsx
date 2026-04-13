import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Tech', href: '#tech' },
  { label: 'Travel', href: '#travel' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-surface-variant/60 backdrop-blur-[20px] shadow-[0_4px_32px_rgba(27,28,21,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-3 items-center h-16 md:h-20">
        <a
          href="#hero"
          className={`font-heading text-xl md:text-2xl transition-colors ${
            scrolled ? 'text-primary hover:text-primary/70' : 'text-white hover:text-white/80'
          }`}
        >
          Nadah Feteih
        </a>

        {/* Desktop nav — centered */}
        <div className="hidden md:flex items-center justify-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-lg font-medium transition-colors ${
                scrolled ? 'text-primary hover:text-primary/70' : 'text-white hover:text-white/70'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side — CTA */}
        <div className="hidden md:flex justify-end">
          <a
            href="#connect"
            className="px-6 py-2.5 bg-primary text-on-primary text-sm font-medium rounded-md hover:bg-primary-container transition-colors"
          >
            Let's Connect
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-on-surface origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-on-surface"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-on-surface origin-center"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface-variant/80 backdrop-blur-[20px] overflow-hidden"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-on-surface-muted hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#connect"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-6 py-3 bg-primary text-on-primary text-center font-medium rounded-md hover:bg-primary-container transition-colors"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
