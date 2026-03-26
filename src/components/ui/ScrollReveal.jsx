import { motion } from 'framer-motion';

export default function ScrollReveal({ children, direction = 'up', delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: direction === 'up' ? 20 : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
