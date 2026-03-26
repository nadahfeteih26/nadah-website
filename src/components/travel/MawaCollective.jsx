import ScrollReveal from '../ui/ScrollReveal';
import OrganicCard from '../ui/OrganicCard';
import { mawaData } from '../../data/travelData';

export default function MawaCollective() {
  return (
    <div className="mb-16 md:mb-24 relative">
      <ScrollReveal>
        <OrganicCard featured className="relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-gradient-to-br from-primary via-primary-container to-secondary-dark flex items-center justify-center flex-shrink-0">
              <span className="font-heading text-3xl md:text-4xl text-on-primary/80 italic">M</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-secondary-dark font-medium text-sm tracking-widest uppercase mb-1">
                {mawaData.role}
              </p>
              <h3 className="font-heading text-2xl md:text-3xl text-on-surface mb-3 italic">
                {mawaData.title}
              </h3>
              <p className="text-on-surface-muted leading-relaxed max-w-2xl">{mawaData.description}</p>
            </div>
          </div>
        </OrganicCard>
      </ScrollReveal>
    </div>
  );
}
