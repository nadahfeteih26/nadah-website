import ScrollReveal from '../ui/ScrollReveal';

const media = [
  {
    name: 'REI Co-op',
    url: 'https://www.rei.com/blog/podcasts/wild-ideas-worth-living',
    logo: (
      <svg viewBox="0 0 120 40" className="h-8 md:h-10 w-auto">
        <text x="0" y="30" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 28, letterSpacing: -1 }} fill="currentColor">REI</text>
        <text x="58" y="30" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: 14 }} fill="currentColor" opacity="0.7">co-op</text>
      </svg>
    ),
  },
  {
    name: 'Backpacker',
    url: 'https://www.backpacker.com/stories/people/mawa-collective-is-getting-muslim-women-outside-together/',
    logo: (
      <svg viewBox="0 0 180 40" className="h-8 md:h-10 w-auto">
        <text x="0" y="30" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 24, letterSpacing: 3 }} fill="currentColor">BACKPACKER</text>
      </svg>
    ),
  },
  {
    name: 'Condé Nast Traveller',
    url: 'https://www.cntravellerme.com/story/these-halal-trips-are-designed-for-solo-muslim-women',
    logo: (
      <svg viewBox="0 0 240 44" className="h-8 md:h-10 w-auto">
        <text x="0" y="18" style={{ fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: 14, fontStyle: 'italic' }} fill="currentColor" opacity="0.8">Condé Nast</text>
        <text x="0" y="38" style={{ fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: 26, letterSpacing: 4 }} fill="currentColor">TRAVELLER</text>
      </svg>
    ),
  },
  {
    name: 'Vogue Arabia',
    url: 'https://www.voguearabia.com/article/ramadan-rituals-healthy-habits',
    logo: (
      <svg viewBox="0 0 200 44" className="h-8 md:h-10 w-auto">
        <text x="0" y="28" style={{ fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: 30, letterSpacing: 6 }} fill="currentColor">VOGUE</text>
        <text x="142" y="28" style={{ fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: 14, fontStyle: 'italic' }} fill="currentColor" opacity="0.7">Arabia</text>
      </svg>
    ),
  },
  {
    name: 'The Ansari Podcast',
    url: 'https://www.youtube.com/watch?v=XNsYvPkGhWA',
    logo: (
      <svg viewBox="0 0 200 44" className="h-8 md:h-10 w-auto">
        <text x="0" y="18" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 300, fontSize: 13, letterSpacing: 1 }} fill="currentColor" opacity="0.7">THE</text>
        <text x="0" y="38" style={{ fontFamily: "'Newsreader', serif", fontWeight: 600, fontSize: 24 }} fill="currentColor">Ansari Podcast</text>
      </svg>
    ),
  },
  {
    name: 'Sweet July',
    url: 'https://stories.sweetjuly.com/editorial/with-mawa-collective-muslim-women-find-comfort-and-community-outdoors/',
    logo: (
      <svg viewBox="0 0 160 44" className="h-8 md:h-10 w-auto">
        <text x="0" y="30" style={{ fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: 28, fontStyle: 'italic' }} fill="currentColor">Sweet July</text>
      </svg>
    ),
  },
  {
    name: 'Tech Policy Press',
    url: 'https://www.techpolicy.press/author/nadah-feteih/',
    logo: (
      <svg viewBox="0 0 210 44" className="h-8 md:h-10 w-auto">
        <text x="0" y="18" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16 }} fill="currentColor">TECH POLICY</text>
        <text x="0" y="38" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: 20, letterSpacing: 3 }} fill="currentColor">PRESS</text>
      </svg>
    ),
  },
  {
    name: 'Integrity Institute',
    url: 'https://integrityinstitute.org/podcast/workplace-ethics-and-activism-with-nadah-feteih',
    logo: (
      <svg viewBox="0 0 220 44" className="h-8 md:h-10 w-auto">
        <text x="0" y="18" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 300, fontSize: 14, letterSpacing: 2 }} fill="currentColor">INTEGRITY</text>
        <text x="0" y="38" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 20 }} fill="currentColor">Institute</text>
      </svg>
    ),
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

          <div className="flex gap-10 md:gap-14 items-center justify-start overflow-x-auto pb-4 scrollbar-hide px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {media.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 text-on-surface-muted/25 hover:text-primary transition-colors duration-300"
                aria-label={item.name}
              >
                {item.logo}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
