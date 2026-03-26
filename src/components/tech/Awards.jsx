import ScrollReveal from '../ui/ScrollReveal';
import OrganicCard from '../ui/OrganicCard';
import { awardsData } from '../../data/techData';

export default function Awards() {
  return (
    <div className="mb-16 md:mb-24">
      <ScrollReveal>
        <p className="text-secondary-dark font-medium text-sm tracking-widest uppercase mb-2">Awards & Conferences</p>
        <h3 className="font-heading text-2xl md:text-3xl text-on-surface mb-8 italic">Shaping the Conversation</h3>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-6">
        {awardsData.items.map((item, i) => (
          <ScrollReveal key={item.event} delay={i * 0.1}>
            <OrganicCard className="h-full">
              <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-secondary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 0 1-3.77 1.522m-3.77-1.522a6.003 6.003 0 0 0 3.77 1.522" />
                </svg>
              </div>
              <p className="text-tertiary text-sm font-medium mb-1">{item.title}</p>
              <h4 className="font-heading text-lg text-on-surface mb-3 italic">{item.event}</h4>
              <p className="text-on-surface-muted text-sm leading-relaxed">{item.description}</p>
            </OrganicCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
