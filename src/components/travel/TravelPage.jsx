import { lazy, Suspense } from 'react';
import SectionHeading from '../ui/SectionHeading';
import TechVineDivider from '../ui/TechVineDivider';
import MawaCollective from './MawaCollective';
import TravelAwards from './Awards';
import BrandAmbassadors from './BrandAmbassadors';

const ExpeditionGlobe = lazy(() => import('./ExpeditionGlobe'));

export default function TravelPage() {
  return (
    <section id="travel" className="py-16 md:py-22 bg-surface-dim">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          title="Travel & Adventure"
          subtitle="Building community outdoors, conquering summits, and redefining who belongs in the mountains"
        />
        <MawaCollective />
        <TechVineDivider />
        <Suspense fallback={<div className="h-96 flex items-center justify-center text-on-surface-muted">Loading globe...</div>}>
          <ExpeditionGlobe />
        </Suspense>
        <TechVineDivider />
        <BrandAmbassadors />
        <TechVineDivider />
        <TravelAwards />
      </div>
    </section>
  );
}
