import ScrollReveal from '../ui/ScrollReveal';

const media = [
  {
    name: 'REI Co-op',
    url: 'https://www.rei.com/blog/podcasts/wild-ideas-worth-living',
    logo: '/logos/rei-coop-500_4fb8b.jpg',
  },
  {
    name: 'Backpacker',
    url: 'https://www.backpacker.com/stories/people/mawa-collective-is-getting-muslim-women-outside-together/',
    logo: '/logos/images.png',
  },
  {
    name: 'Condé Nast Traveller',
    url: 'https://www.cntravellerme.com/story/these-halal-trips-are-designed-for-solo-muslim-women',
    logo: '/logos/conde-nast-traveler.svg',
  },
  {
    name: 'Vogue Arabia',
    url: 'https://www.voguearabia.com/article/ramadan-rituals-healthy-habits',
    logo: '/logos/Vogue-Arabia_Logo_White.webp',
  },
  {
    name: 'The Ansari Podcast',
    url: 'https://www.youtube.com/watch?v=XNsYvPkGhWA',
  },
  {
    name: 'Sweet July',
    url: 'https://stories.sweetjuly.com/editorial/with-mawa-collective-muslim-women-find-comfort-and-community-outdoors/',
  },
  {
    name: 'Tech Policy Press',
    url: 'https://www.techpolicy.press/author/nadah-feteih/',
    logo: '/logos/Tech-Policy-Press.png',
  },
  {
    name: 'Integrity Institute',
    url: 'https://integrityinstitute.org/podcast/workplace-ethics-and-activism-with-nadah-feteih',
  },
];

export default function AsSeenIn() {
  return (
    <section className="py-16 md:py-20 bg-surface-dim overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <p className="text-center text-on-surface-muted/60 text-sm font-medium tracking-widest uppercase mb-10">
            As Seen In
          </p>
        </ScrollReveal>

        {/* Horizontal scrolling media strip */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-surface-dim to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-surface-dim to-transparent z-10 pointer-events-none" />

          <div
            className="flex gap-10 md:gap-14 items-center justify-start overflow-x-auto pb-4 scrollbar-hide px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {media.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 opacity-40 hover:opacity-80 transition-opacity duration-300"
                aria-label={item.name}
              >
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-8 md:h-10 w-auto object-contain"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(13%) sepia(28%) saturate(1200%) hue-rotate(107deg) brightness(95%) contrast(99%)',
                    }}
                  />
                ) : (
                  <span className="font-heading text-xl md:text-2xl text-primary whitespace-nowrap italic">
                    {item.name}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
