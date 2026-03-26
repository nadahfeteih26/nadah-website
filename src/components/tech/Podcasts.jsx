import ScrollReveal from '../ui/ScrollReveal';
import OrganicCard from '../ui/OrganicCard';
import { podcastsData } from '../../data/techData';

export default function Podcasts() {
  return (
    <div className="mb-16 md:mb-24">
      <ScrollReveal>
        <p className="text-secondary-dark font-medium text-sm tracking-widest uppercase mb-2">Podcasts</p>
        <h3 className="font-heading text-2xl md:text-3xl text-on-surface mb-8 italic">Listen In</h3>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 gap-6">
        {podcastsData.podcasts.map((podcast, i) => (
          <ScrollReveal key={podcast.title} delay={i * 0.1}>
            <a href={podcast.url} target="_blank" rel="noopener noreferrer" className="block group">
              <OrganicCard className="h-full transition-all duration-300">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-dark to-primary flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-on-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-tertiary text-xs font-medium mb-1">{podcast.show}</p>
                    <h4 className="font-heading text-lg text-on-surface mb-2 group-hover:text-primary-container transition-colors italic">{podcast.title}</h4>
                    <p className="text-on-surface-muted text-sm leading-relaxed">{podcast.description}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-primary text-sm font-medium">
                      Listen now
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </OrganicCard>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
