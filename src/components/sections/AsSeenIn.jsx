import ScrollReveal from '../ui/ScrollReveal';

const media = [
  {
    name: 'REI Co-op',
    url: 'https://www.rei.com/blog/podcasts/wild-ideas-worth-living',
    logo: '/logos/rei-coop-500_4fb8b.jpg',
    large: true,
  },
  {
    name: 'Outside',
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
    name: 'Tech Policy Press',
    url: 'https://www.techpolicy.press/author/nadah-feteih/',
    logo: '/logos/Tech-Policy-Press.png',
  },
  {
    name: 'Integrity Institute',
    url: 'https://integrityinstitute.org/podcast/workplace-ethics-and-activism-with-nadah-feteih',
    logo: '/logos/IntegrityInstitute_Logo_Stacked_WhiteBG.jpg',
    large: true,
  },
  {
    name: 'AMC Foundation',
    url: 'https://amuslimcf.org/5-fast-minutes-with-nadah-feteih-of-muslim-women-in-tech/',
    logo: '/logos/AMCF_Full.png',
  },
];

function LogoItem({ item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 mx-8 md:mx-12 group"
      aria-label={item.name}
    >
      {item.logo ? (
        <img
          src={item.logo}
          alt={item.name}
          className={`${item.large ? 'h-20 md:h-24' : 'h-10 md:h-12'} w-auto object-contain transition-transform duration-300 group-hover:scale-110`}
          style={{ mixBlendMode: 'multiply' }}
        />
      ) : (
        <span className="font-heading text-xl md:text-2xl text-on-surface whitespace-nowrap italic transition-transform duration-300 inline-block group-hover:scale-110">
          {item.name}
        </span>
      )}
    </a>
  );
}

export default function AsSeenIn() {
  return (
    <section className="py-16 md:py-20 bg-surface-dim overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <p className="text-center text-on-surface-muted/60 text-sm font-medium tracking-widest uppercase mb-10">
            Featured In
          </p>
        </ScrollReveal>
      </div>

      {/* Infinite scroll marquee */}
      <div className="relative">
        {/* Fade edges — use solid color on both ends to hide white logo backgrounds at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--color-surface-dim) 0%, var(--color-surface-dim) 30%, transparent 100%)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, var(--color-surface-dim) 0%, var(--color-surface-dim) 30%, transparent 100%)' }} />

        <div className="flex items-center overflow-hidden [&:hover_.marquee-track]:pause">
          <div
            className="marquee-track flex items-center animate-marquee bg-surface-dim"
            style={{ animationDuration: '40s' }}
          >
            {media.map((item) => (
              <LogoItem key={item.name} item={item} />
            ))}
            {/* Duplicate for seamless loop */}
            {media.map((item) => (
              <LogoItem key={`dup-${item.name}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
