import ScrollReveal from './ScrollReveal';

export default function SectionHeading({ title, subtitle, align = 'center', light = false }) {
  return (
    <ScrollReveal className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl mb-4 italic ${
          light ? 'text-on-primary' : 'text-on-surface'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${
          light ? 'text-on-primary/60' : 'text-on-surface-muted'
        }`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-0.5 w-16 rounded-full bg-secondary-dark ${
        align === 'center' ? 'mx-auto' : ''
      }`} />
    </ScrollReveal>
  );
}
