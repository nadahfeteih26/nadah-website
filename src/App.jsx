import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import AsSeenIn from './components/sections/AsSeenIn';
import Organizations from './components/sections/Organizations';
import TechPage from './components/tech/TechPage';
import TravelPage from './components/travel/TravelPage';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-surface font-body text-on-surface">
      <Navbar />
      <main>
        <Hero />
        <AsSeenIn />
        <Organizations />
        <TechPage />
        <TravelPage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
