import ScrollReveal from '../ui/ScrollReveal';
import SectionHeading from '../ui/SectionHeading';

const organizations = [
  { name: "Ma'wa", description: 'Outdoor community for Muslim women', color: 'from-primary to-primary-container' },
  { name: 'MWIT', description: 'Muslim Women in Tech', color: 'from-primary-container to-tertiary' },
  { name: 'CSforeach', description: 'CS education for all', color: 'from-secondary-dark to-primary' },
  { name: 'SFMRC', description: 'Community advocacy', color: 'from-tertiary to-primary' },
];

export default function Organizations() {
  return (
    <section id="organizations" className="py-22 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          title="Organizations"
          subtitle="Founding and leading initiatives at the intersection of technology, community, and impact"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {organizations.map((org, i) => (
            <ScrollReveal key={org.name} delay={i * 0.1}>
              <div className="group bg-surface-dim rounded-xl p-6 md:p-8 hover:bg-surface-container hover:-translate-y-1 transition-all duration-300 text-center shadow-[0_4px_32px_rgba(27,28,21,0.04)]">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${org.color} mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-on-primary font-heading text-xl md:text-2xl italic">{org.name.charAt(0)}</span>
                </div>
                <h3 className="font-heading text-lg md:text-xl text-on-surface mb-1 italic">{org.name}</h3>
                <p className="text-on-surface-muted text-sm">{org.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
