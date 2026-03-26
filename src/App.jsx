import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import AsSeenIn from './components/sections/AsSeenIn';
import Organizations from './components/sections/Organizations';
import PageToggle from './components/sections/PageToggle';
import TechPage from './components/tech/TechPage';
import TravelPage from './components/travel/TravelPage';

export default function App() {
  const [activePage, setActivePage] = useState('tech');

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface">
      <Navbar />
      <main>
        <Hero />
        <AsSeenIn />
        <Organizations />
        <PageToggle activePage={activePage} onToggle={setActivePage} />
        <AnimatePresence mode="wait">
          {activePage === 'tech' ? (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } }}
            >
              <TechPage />
            </motion.div>
          ) : (
            <motion.div
              key="travel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } }}
            >
              <TravelPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
