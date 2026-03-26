import ScrollReveal from '../ui/ScrollReveal';
import OrganicCard from '../ui/OrganicCard';
import { travelArticlesData } from '../../data/travelData';

export default function TravelArticles() {
  return (
    <div className="mb-8">
      <ScrollReveal>
        <p className="text-secondary-dark font-medium text-sm tracking-widest uppercase mb-2">
          Featured In
        </p>
        <h3 className="font-heading text-2xl md:text-3xl text-on-surface mb-8 italic">
          Press & Articles
        </h3>
      </ScrollReveal>

      {travelArticlesData.articles.map((article) => (
        <ScrollReveal key={article.title}>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <OrganicCard featured className="transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-container to-secondary-dark flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-on-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-tertiary text-sm font-medium mb-1">{article.publication}</p>
                  <h4 className="font-heading text-xl text-on-surface mb-3 group-hover:text-primary-container transition-colors italic">
                    {article.title}
                  </h4>
                  <p className="text-on-surface-muted leading-relaxed">{article.description}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-primary font-medium">
                    Read article
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
