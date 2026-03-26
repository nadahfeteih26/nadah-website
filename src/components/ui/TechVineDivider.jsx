export default function TechVineDivider({ className = '' }) {
  return (
    <div className={`w-full flex justify-center py-8 ${className}`}>
      <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-outline/30 to-transparent" />
    </div>
  );
}
