import ScrollReveal from '../ui/ScrollReveal';
import OrganicCard from '../ui/OrganicCard';
import { travelAwardsData } from '../../data/travelData';

export default function TravelAwards() {
  return (
    <div className="mb-16 md:mb-24">
      <ScrollReveal>
        <p className="text-secondary-dark font-medium text-sm tracking-widest uppercase mb-2">Awards & Programs</p>
        <h3 className="font-heading text-2xl md:text-3xl text-on-surface mb-8 italic">Recognition & Community</h3>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-6">
        {travelAwardsData.awards.map((award, i) => (
          <ScrollReveal key={award.title} delay={i * 0.1}>
            <OrganicCard className="h-full">
              <div className="w-10 h-10 rounded-xl bg-secondary/40 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-secondary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              </div>
              <p className="text-tertiary text-xs font-medium mb-1">{award.organization}</p>
              <h4 className="font-heading text-lg text-on-surface mb-3 italic">{award.title}</h4>
              <p className="text-on-surface-muted text-sm leading-relaxed">{award.description}</p>
            </OrganicCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
