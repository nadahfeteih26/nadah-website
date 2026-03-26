import ScrollReveal from '../ui/ScrollReveal';
import OrganicCard from '../ui/OrganicCard';
import { industryData } from '../../data/techData';

export default function Industry() {
  return (
    <div className="mb-16 md:mb-24">
      <ScrollReveal>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="flex-1">
            <p className="text-secondary-dark font-medium text-sm tracking-widest uppercase mb-2">
              Industry
            </p>
            <h3 className="font-heading text-2xl md:text-3xl text-on-surface mb-2 italic">
              {industryData.role}
            </h3>
            <p className="text-lg text-primary-container font-medium mb-4">{industryData.company}</p>
            <p className="text-on-surface-muted leading-relaxed">{industryData.description}</p>
          </div>

          <div className="flex-1 w-full">
            <OrganicCard className="overflow-hidden p-0 md:p-0">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={industryData.videoUrl}
                  title={industryData.videoTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full rounded-xl"
                  loading="lazy"
                />
              </div>
            </OrganicCard>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
