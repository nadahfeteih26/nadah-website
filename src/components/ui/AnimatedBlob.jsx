export default function AnimatedBlob({ variant = 'vine', color, size, className = '', flip = false }) {
  // Simplified to just a subtle circle for the new design system
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{ width: size || 200, height: size || 200 }}
      aria-hidden="true"
    >
      <div className="w-full h-full rounded-full bg-primary/[0.03]" />
    </div>
  );
}
