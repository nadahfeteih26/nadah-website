export default function OrganicCard({ children, className = '', hover = true, featured = false }) {
  return (
    <div
      className={`
        rounded-xl p-6 md:p-8 transition-all duration-300
        ${featured
          ? 'bg-surface-bright shadow-[0_4px_48px_rgba(27,28,21,0.06)]'
          : 'bg-surface-dim shadow-[0_2px_32px_rgba(27,28,21,0.04)]'
        }
        ${hover ? 'hover:shadow-[0_8px_64px_rgba(27,28,21,0.08)] hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
