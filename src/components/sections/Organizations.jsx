import ScrollReveal from '../ui/ScrollReveal';
import SectionHeading from '../ui/SectionHeading';

const organizations = [
  {
    name: "Ma'wa Collective",
    role: 'Founder & CEO',
    logo: "/organizations/Ma'wa Logo@2x.png",
    url: 'https://www.mawacollective.com/',
  },
  {
    name: 'MWIT',
    role: 'Founder & Executive Director',
    logo: '/organizations/mwit-stacked.png',
    url: 'https://www.facebook.com/groups/muslimwomenintech',
  },
  {
    name: 'CS Foreach',
    role: 'Founder & President',
    logo: '/organizations/cs foreach logo.avif',
    url: 'https://www.csforeach.org/',
  },
  {
    name: 'SF Muslim Running Club',
    role: 'Founder',
    logo: '/organizations/412190662_646574420766226_4319150459575021626_n.jpg',
    url: 'https://www.instagram.com/sf.mrc/?hl=en',
  },
];

export default function Organizations() {
  return (
    <section id="organizations" className="py-22 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          title="Organizations"
          subtitle="Building and scaling initiatives where technology, community, and impact meet"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {organizations.map((org, i) => (
            <ScrollReveal key={org.name} delay={i * 0.1}>
              <a
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group bg-surface-dim rounded-xl p-6 md:p-8 hover:bg-surface-container hover:-translate-y-1 transition-all duration-300 text-center shadow-[0_4px_32px_rgba(27,28,21,0.04)]"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl mx-auto mb-4 overflow-hidden bg-surface-dim flex items-center justify-center">
                  <img
                    src={org.logo}
                    alt={org.name}
                    className="w-full h-full object-contain"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>
                <h3 className="font-heading text-lg md:text-xl text-on-surface mb-1 italic">{org.name}</h3>
                <p className="text-on-surface-muted text-sm">{org.role}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
