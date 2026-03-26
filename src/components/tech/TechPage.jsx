import SectionHeading from '../ui/SectionHeading';
import TechVineDivider from '../ui/TechVineDivider';
import Industry from './Industry';
import Ethics from './Ethics';
import Awards from './Awards';
import Speaking from './Speaking';
import Podcasts from './Podcasts';
import Writing from './Writing';

export default function TechPage() {
  return (
    <section className="py-16 md:py-22 bg-surface-dim">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          title="Tech & Impact"
          subtitle="Engineering products at scale, researching ethics in technology, and advocating for a more equitable digital future"
        />
        <Industry />
        <TechVineDivider />
        <Ethics />
        <TechVineDivider />
        <Awards />
        <TechVineDivider />
        <Speaking />
        <TechVineDivider />
        <Podcasts />
        <TechVineDivider />
        <Writing />
      </div>
    </section>
  );
}
