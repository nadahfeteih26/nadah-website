import ScrollReveal from '../ui/ScrollReveal';
import OrganicCard from '../ui/OrganicCard';
import { mawaData } from '../../data/travelData';

export default function MawaCollective() {
  return (
    <div className="mb-16 md:mb-24 relative">
      <ScrollReveal>
        <a
          href={mawaData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <OrganicCard featured className="relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img
                  src="/organizations/Ma'wa Logo@2x.png"
                  alt="Ma'wa Collective"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-secondary-dark font-medium text-sm tracking-widest uppercase mb-1">
                  {mawaData.role}
                </p>
                <h3 className="font-heading text-2xl md:text-3xl text-on-surface mb-3 italic">
                  {mawaData.title}
                </h3>
                <p className="text-on-surface-muted leading-relaxed max-w-2xl">{mawaData.description}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-primary group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </OrganicCard>
        </a>
      </ScrollReveal>
    </div>
  );
}
