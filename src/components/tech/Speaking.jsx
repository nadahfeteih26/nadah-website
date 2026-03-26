import ScrollReveal from '../ui/ScrollReveal';
import OrganicCard from '../ui/OrganicCard';
import { speakingData } from '../../data/techData';

export default function Speaking() {
  return (
    <div className="mb-16 md:mb-24">
      <ScrollReveal>
        <p className="text-secondary-dark font-medium text-sm tracking-widest uppercase mb-2">Speaking & Conferences</p>
        <h3 className="font-heading text-2xl md:text-3xl text-on-surface mb-8 italic">On Stage & In Session</h3>
      </ScrollReveal>
      <div className="space-y-6">
        {speakingData.engagements.map((e, i) => (
          <ScrollReveal key={e.venue + i} delay={i * 0.1}>
            <OrganicCard className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-on-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading text-lg text-on-surface mb-1 italic">{e.title}</h4>
                <p className="text-secondary-dark text-sm font-medium mb-2">{e.venue}</p>
                <p className="text-on-surface-muted text-sm leading-relaxed">{e.description}</p>
              </div>
            </OrganicCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
