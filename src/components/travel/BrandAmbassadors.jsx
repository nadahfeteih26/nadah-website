import ScrollReveal from '../ui/ScrollReveal';

const brands = [
  {
    name: 'AllTrails',
    logo: '/logos/alltrails.png',
    url: 'https://www.alltrails.com/',
  },
  {
    name: 'Black Diamond',
    logo: '/logos/blackdiamond.png',
    url: 'https://www.blackdiamondequipment.com/',
  },
  {
    name: 'Runna',
    logo: '/logos/runna.svg',
    url: 'https://web.runna.com/redeem?code=NADAH',
    invert: true,
  },
  {
    name: 'Strava',
    logo: '/logos/strava.svg',
    url: 'https://www.strava.com/athletes/95247193',
  },
];

export default function BrandAmbassadors() {
  return (
    <div className="mb-16 md:mb-24">
      <ScrollReveal className="mb-12 md:mb-16 text-center">
        <p className="text-secondary-dark font-medium text-sm tracking-widest uppercase mb-2">
          Brand Ambassador
        </p>
        <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-on-surface mb-4 italic">
          Partnered Brands
        </h3>
        <p className="text-lg md:text-xl text-on-surface-muted max-w-2xl mx-auto">
          Work with leading outdoor and fitness brands as a trusted brand ambassador and storyteller.
        </p>
        <div className="mt-4 h-0.5 w-16 rounded-full bg-secondary-dark mx-auto" />
      </ScrollReveal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {brands.map((brand, i) => (
          <ScrollReveal key={brand.name} delay={i * 0.1}>
            <a
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group bg-surface rounded-xl p-6 md:p-8 hover:bg-surface-container hover:-translate-y-1 transition-all duration-300 text-center shadow-[0_4px_32px_rgba(27,28,21,0.04)]"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl mx-auto mb-4 overflow-hidden bg-surface-dim flex items-center justify-center p-2">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain"
                  style={{
                    mixBlendMode: brand.invert ? undefined : 'multiply',
                    filter: brand.invert ? 'invert(1)' : undefined,
                  }}
                />
              </div>
              <h3 className="font-heading text-lg md:text-xl text-on-surface italic whitespace-nowrap">{brand.name}</h3>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
