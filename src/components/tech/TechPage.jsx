import SectionHeading from '../ui/SectionHeading';
import TechVineDivider from '../ui/TechVineDivider';
import Industry from './Industry';
import Ethics from './Ethics';
import Awards from './Awards';


export default function TechPage() {
  return (
    <section id="tech" className="py-16 md:py-22 bg-surface-dim">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          title="Technology & Ethics"
          subtitle="Building technology at scale with a focus on trust, safety, and ethical design, with experience at Meta, Harvard, and key industry convenings"
        />
        <Industry />
        <TechVineDivider />
        <Ethics />
        <TechVineDivider />
        <Awards />
      </div>
    </section>
  );
}
