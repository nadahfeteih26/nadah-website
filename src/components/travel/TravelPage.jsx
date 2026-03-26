import SectionHeading from '../ui/SectionHeading';
import TechVineDivider from '../ui/TechVineDivider';
import MawaCollective from './MawaCollective';
import Athletics from './Athletics';
import TravelAwards from './Awards';
import TravelPodcasts from './Podcasts';
import TravelArticles from './Articles';

export default function TravelPage() {
  return (
    <section className="py-16 md:py-22 bg-surface-dim">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          title="Travel & Adventure"
          subtitle="Building community outdoors, conquering summits, and redefining who belongs in the mountains"
        />
        <MawaCollective />
        <TechVineDivider />
        <Athletics />
        <TechVineDivider />
        <TravelAwards />
        <TechVineDivider />
        <TravelPodcasts />
        <TechVineDivider />
        <TravelArticles />
      </div>
    </section>
  );
}
