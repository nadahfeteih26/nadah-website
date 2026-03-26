import { motion } from 'framer-motion';

export default function PageToggle({ activePage, onToggle }) {
  return (
    <div id="work" className="py-8 md:py-12 flex justify-center scroll-mt-20">
      <div className="relative bg-surface-container rounded-full p-1.5 flex gap-1 shadow-[0_2px_16px_rgba(27,28,21,0.06)]">
        {['tech', 'travel'].map((page) => (
          <button
            key={page}
            onClick={() => onToggle(page)}
            className="relative z-10 px-8 md:px-12 py-3 md:py-3.5 rounded-full text-sm md:text-base font-medium transition-colors duration-300 capitalize"
            style={{
              color: activePage === page ? '#FFFFFF' : '#44453d',
            }}
          >
            {page === 'tech' ? 'Tech & Impact' : 'Travel & Adventure'}
          </button>
        ))}

        {/* Sliding background */}
        <motion.div
          className="absolute top-1.5 bottom-1.5 rounded-full shadow-md"
          style={{
            background: 'linear-gradient(135deg, #012d1d, #1b4332)',
            left: activePage === 'tech' ? '6px' : '50%',
            right: activePage === 'travel' ? '6px' : '50%',
          }}
          layout
          transition={{
            type: 'spring',
            stiffness: 350,
            damping: 30,
          }}
        />
      </div>
    </div>
  );
}
