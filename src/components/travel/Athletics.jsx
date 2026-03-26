import ScrollReveal from '../ui/ScrollReveal';
import OrganicCard from '../ui/OrganicCard';
import { athleticsData } from '../../data/travelData';

const categoryColors = {
  'Endurance Running': 'from-primary to-primary-container',
  'Major Expeditions': 'from-primary-container to-tertiary',
  'Peak Ascents': 'from-secondary-dark to-primary',
  'More Adventures': 'from-tertiary to-primary',
};

export default function Athletics() {
  return (
    <div className="mb-16 md:mb-24">
      <ScrollReveal>
        <p className="text-secondary-dark font-medium text-sm tracking-widest uppercase mb-2">Athletic Achievements</p>
        <h3 className="font-heading text-2xl md:text-3xl text-on-surface mb-3 italic">Summits & Miles</h3>
        <p className="text-on-surface-muted leading-relaxed max-w-2xl mb-8">{athleticsData.intro}</p>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 gap-6">
        {athleticsData.highlights.map((group, i) => (
          <ScrollReveal key={group.category} delay={i * 0.1}>
            <OrganicCard className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${categoryColors[group.category] || 'from-primary to-primary-container'} flex items-center justify-center`}>
                  <svg className="w-5 h-5 text-on-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15 9 8.25l4.5 4.5L21.75 4.5M21.75 4.5h-6m6 0v6" />
                  </svg>
                </div>
                <h4 className="font-heading text-lg text-on-surface italic">{group.category}</h4>
              </div>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-on-surface-muted text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-dark mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </OrganicCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
