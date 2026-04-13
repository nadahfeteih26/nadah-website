import ScrollReveal from '../ui/ScrollReveal';
import OrganicCard from '../ui/OrganicCard';
import { industryData } from '../../data/techData';

export default function Industry() {
  return (
    <div className="mb-16 md:mb-24">
      <ScrollReveal>
        <p className="text-secondary-dark font-medium text-sm tracking-widest uppercase mb-2">
          Industry
        </p>
        <h3 className="font-heading text-2xl md:text-3xl text-on-surface mb-3 italic">
          Engineering
        </h3>
        <p className="text-on-surface-muted leading-relaxed max-w-2xl mb-8">
          Building products at scale with a focus on privacy, safety, and meaningful connections at companies shaping how billions of people interact.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">
        {industryData.roles.map((item, i) => (
          <ScrollReveal key={item.company} delay={i * 0.1}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <OrganicCard className="h-full group-hover:-translate-y-1 transition-transform duration-300">
                <p className="text-secondary-dark font-medium text-xs tracking-widest uppercase mb-1">
                  {item.company}
                </p>
                <h4 className="font-heading text-xl text-on-surface italic mb-3">
                  {item.role}
                </h4>
                <p className="text-on-surface-muted text-sm leading-relaxed">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-primary group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </OrganicCard>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
