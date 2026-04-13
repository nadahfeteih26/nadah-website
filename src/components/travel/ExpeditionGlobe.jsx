import { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import Globe from 'react-globe.gl';
import ScrollReveal from '../ui/ScrollReveal';

const CATEGORIES = ['all', 'summits', 'treks', 'races'];

const expeditions = [
  // Summits
  { name: 'Mt. Kilimanjaro', lat: -3.0674, lng: 37.3556, category: 'summits', elevation: "19,341'", country: 'Tanzania' },
  { name: 'Kala Pattar', lat: 27.9959, lng: 86.8294, category: 'summits', elevation: "18,519'", country: 'Nepal' },
  { name: 'Volcán Cayambe', lat: 0.0292, lng: -77.9864, category: 'summits', elevation: "18,996'", country: 'Ecuador' },
  { name: 'Mt. Whitney', lat: 36.5785, lng: -118.2923, category: 'summits', elevation: "14,505'", country: 'California' },
  { name: 'Mt. Rainier', lat: 46.8523, lng: -121.7603, category: 'summits', elevation: "14,411'", country: 'Washington' },
  { name: 'Glacier Peak', lat: 48.1117, lng: -121.1139, category: 'summits', elevation: "10,541'", country: 'Washington' },
  { name: 'Mt. Kosciuszko', lat: -36.4564, lng: 148.2634, category: 'summits', elevation: "7,310'", country: 'Australia' },
  { name: 'Mt. Adams', lat: 46.2024, lng: -121.4909, category: 'summits', elevation: "12,281'", country: 'Washington' },
  { name: 'Mount Saint Helens', lat: 46.1914, lng: -122.1956, category: 'summits', elevation: "8,363'", country: 'Washington' },

  // Treks
  { name: 'Everest Base Camp', lat: 28.0025, lng: 86.8528, category: 'treks', distance: '80 miles', country: 'Nepal' },
  { name: 'Salkantay Trek', lat: -13.36, lng: -72.54, category: 'treks', distance: '48 miles', country: 'Peru' },
  { name: 'Tour du Mont Blanc', lat: 45.8326, lng: 6.8652, category: 'treks', distance: '110 miles', country: 'France / Italy / Switzerland' },

  // Races
  { name: 'San Francisco Marathon', lat: 37.7749, lng: -122.4194, category: 'races', terrain: 'Hilly', distance: '26.2 mi', country: 'California' },
  { name: 'California International Marathon', lat: 38.5816, lng: -121.4944, category: 'races', terrain: 'Flat', distance: '26.2 mi', country: 'Sacramento, CA' },
  { name: 'New York City Marathon', lat: 40.7128, lng: -74.006, category: 'races', terrain: 'Hilly', distance: '26.2 mi', country: 'New York' },
  { name: 'Sinai Peaks', lat: 28.5561, lng: 33.9478, category: 'races', distance: '18 miles', country: 'Egypt' },
];

const categoryColors = {
  summits: '#c44d2a',
  treks: '#1b4332',
  races: '#5a682f',
};

const categoryIcons = {
  summits: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M12 2L2 22h20L12 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  treks: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M3 17l4-4 4 4 4-8 6 8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  races: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" strokeLinecap="round" />
    </svg>
  ),
};

const categoryLabels = {
  all: 'All',
  summits: 'Summits',
  treks: 'Treks',
  races: 'Races',
};

const US_VIEW = { lat: 39.5, lng: -98.35, altitude: 1.8 };
const WORLD_VIEW = { lat: 20, lng: 30, altitude: 2.5 };

export default function ExpeditionGlobe() {
  const globeRef = useRef();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 500 });
  const containerRef = useRef();

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      setDimensions({ width, height: Math.min(width * 0.85, 550) });
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!globeRef.current) return;
    const controls = globeRef.current.controls();
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;
  }, []);

  const filteredExpeditions = useMemo(() => {
    if (activeCategory === 'all') return expeditions;
    return expeditions.filter((e) => e.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = useCallback((cat) => {
    setActiveCategory(cat);
    setSelectedPoint(null);
    if (!globeRef.current) return;
    if (cat === 'races') {
      globeRef.current.pointOfView(US_VIEW, 1000);
    } else {
      globeRef.current.pointOfView(WORLD_VIEW, 1000);
    }
  }, []);

  const handleListClick = useCallback((exp) => {
    setSelectedPoint(exp.name);
    if (!globeRef.current) return;
    globeRef.current.pointOfView({ lat: exp.lat, lng: exp.lng, altitude: 1.5 }, 1000);
  }, []);

  // Group filtered expeditions by category for the list
  const groupedExpeditions = useMemo(() => {
    const groups = {};
    filteredExpeditions.forEach((exp) => {
      if (!groups[exp.category]) groups[exp.category] = [];
      groups[exp.category].push(exp);
    });
    return groups;
  }, [filteredExpeditions]);

  return (
    <div className="mb-16 md:mb-24">
      <ScrollReveal>
        <p className="text-secondary-dark font-medium text-sm tracking-widest uppercase mb-2">
          Expeditions & Races
        </p>
        <h3 className="font-heading text-2xl md:text-3xl text-on-surface mb-3 italic">
          Around the World
        </h3>
        <p className="text-on-surface-muted leading-relaxed max-w-2xl mb-8">
          From Nepal to Ecuador — chasing peaks, pushing my limits, and completing iconic races and treks along the way.
        </p>
      </ScrollReveal>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container text-on-surface-muted hover:bg-surface-high'
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Globe + List layout */}
      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        {/* Globe */}
        <div ref={containerRef} className="relative rounded-2xl overflow-hidden bg-surface-high/50">
          <Globe
            ref={globeRef}
            width={dimensions.width}
            height={dimensions.height}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundColor="rgba(0,0,0,0)"
            atmosphereColor="#8aad8a"
            atmosphereAltitude={0.2}
            pointsData={filteredExpeditions}
            pointLat="lat"
            pointLng="lng"
            pointAltitude={(d) => (d.name === selectedPoint ? 0.12 : 0.04)}
            pointRadius={(d) => (d.name === selectedPoint ? 0.7 : 0.4)}
            pointColor={(d) => categoryColors[d.category] || '#012d1d'}
            pointLabel={(d) => `
              <div style="
                background: rgba(1,45,29,0.92);
                backdrop-filter: blur(12px);
                color: #fbfaee;
                padding: 12px 16px;
                border-radius: 10px;
                font-family: 'Manrope', sans-serif;
                font-size: 13px;
                line-height: 1.5;
                min-width: 180px;
                box-shadow: 0 8px 32px rgba(0,0,0,0.2);
              ">
                <div style="font-family: 'Newsreader', serif; font-size: 16px; font-style: italic; margin-bottom: 4px;">${d.name}</div>
                <div style="opacity: 0.7; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">${d.country}</div>
                <div style="display: flex; justify-content: space-between; gap: 16px;">
                  ${d.elevation ? `<div>
                    <div style="opacity: 0.6; font-size: 10px; text-transform: uppercase;">Elevation</div>
                    <div style="font-weight: 600;">${d.elevation}</div>
                  </div>` : ''}
                  ${d.distance ? `<div>
                    <div style="opacity: 0.6; font-size: 10px; text-transform: uppercase;">Distance</div>
                    <div style="font-weight: 600;">${d.distance}</div>
                  </div>` : ''}
                  ${d.terrain ? `<div>
                    <div style="opacity: 0.6; font-size: 10px; text-transform: uppercase;">Terrain</div>
                    <div style="font-weight: 600;">${d.terrain}</div>
                  </div>` : ''}
                </div>
              </div>
            `}
          />

          {/* Legend */}
          <div className="absolute bottom-4 right-4 bg-surface/80 backdrop-blur-md rounded-xl px-4 py-3 text-xs space-y-1.5">
            {Object.entries(categoryLabels)
              .filter(([k]) => k !== 'all')
              .map(([key, label]) => (
                <div key={key} className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: categoryColors[key] }}
                  />
                  <span className="text-on-surface-muted">{label}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Expedition list */}
        <div className="bg-surface rounded-2xl p-5 max-h-[550px] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
          {Object.entries(groupedExpeditions).map(([category, items]) => (
            <div key={category} className="mb-5 last:mb-0">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: categoryColors[category] }}
                />
                <h4 className="text-xs font-semibold tracking-widest uppercase text-on-surface-muted">
                  {categoryLabels[category]}
                </h4>
              </div>
              <div className="space-y-1">
                {items.map((exp) => (
                  <button
                    key={exp.name}
                    onClick={() => handleListClick(exp)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                      selectedPoint === exp.name
                        ? 'bg-primary/10 ring-1 ring-primary/20'
                        : 'hover:bg-surface-dim'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className={`font-heading text-sm italic ${
                          selectedPoint === exp.name ? 'text-primary' : 'text-on-surface'
                        }`}>
                          {exp.name}
                        </p>
                        <p className="text-xs text-on-surface-muted mt-0.5">{exp.country}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        {exp.elevation && <p className="text-xs font-medium text-on-surface">{exp.elevation}</p>}
                        {exp.distance && <p className="text-[10px] text-on-surface-muted">{exp.distance}</p>}
                        {exp.terrain && <p className="text-[10px] text-on-surface-muted">{exp.terrain}</p>}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
