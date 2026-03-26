import ScrollReveal from '../ui/ScrollReveal';
import OrganicCard from '../ui/OrganicCard';
import { writingData } from '../../data/techData';

export default function Writing() {
  return (
    <div className="mb-8">
      <ScrollReveal>
        <p className="text-secondary-dark font-medium text-sm tracking-widest uppercase mb-2">
          Writing
        </p>
        <h3 className="font-heading text-2xl md:text-3xl text-on-surface mb-8 italic">
          Op-Eds & Analysis
        </h3>
      </ScrollReveal>

      {writingData.articles.map((article) => (
        <ScrollReveal key={article.title}>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <OrganicCard featured className="transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-tertiary flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-on-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                </div>
                <div>
                  <p className="text-tertiary text-sm font-medium mb-1">{article.publication}</p>
                  <h4 className="font-heading text-xl text-on-surface mb-3 group-hover:text-primary-container transition-colors italic">
                    {article.title}
                  </h4>
                  <p className="text-on-surface-muted leading-relaxed">{article.description}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-primary font-medium">
                    Read articles
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
  );
}
