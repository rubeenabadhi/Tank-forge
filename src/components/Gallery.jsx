import React, { useState } from 'react';
import { GALLERY_PROJECTS, GALLERY_CATEGORIES } from '../data/galleryData';
import { Eye, Info, X, ArrowRight } from 'lucide-react';

/**
 * TECHNICAL SCHEMATIC PLACEHOLDER SVGs
 * Premium, bespoke vector engineering schematics instead of generic stock photos
 */
function TechnicalSchematic({ type }) {
  switch (type) {
    case 'vertical-tank':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="320" height="220" fill="#0F172A" />
          {/* Blueprint Grid Lines */}
          <line x1="20" y1="20" x2="300" y2="20" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="20" y1="200" x2="300" y2="200" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="160" y1="10" x2="160" y2="210" stroke="#334155" strokeWidth="1" strokeDasharray="6 3" />
          {/* Tank Cylindrical Body */}
          <rect x="105" y="55" width="110" height="110" rx="4" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
          {/* Top Dished Head */}
          <path d="M105 55 C105 32, 215 32, 215 55 Z" fill="#334155" stroke="#94A3B8" strokeWidth="2" />
          {/* Bottom Dished Head */}
          <path d="M105 165 C105 188, 215 188, 215 165 Z" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
          {/* Weld Seam Bands */}
          <line x1="105" y1="90" x2="215" y2="90" stroke="#38BDF8" strokeWidth="2" strokeDasharray="5 2" />
          <line x1="105" y1="130" x2="215" y2="130" stroke="#38BDF8" strokeWidth="2" strokeDasharray="5 2" />
          {/* Manhole & Top Flange */}
          <rect x="145" y="24" width="30" height="10" rx="2" fill="#475569" stroke="#94A3B8" strokeWidth="1.5" />
          <line x1="188" y1="36" x2="188" y2="52" stroke="#64748B" strokeWidth="4" />
          {/* Drainage Outlet */}
          <line x1="215" y1="155" x2="235" y2="155" stroke="#38BDF8" strokeWidth="4" />
          <circle cx="238" cy="155" r="4" fill="#F59E0B" />
          {/* Legs */}
          <line x1="118" y1="178" x2="114" y2="202" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          <line x1="202" y1="178" x2="206" y2="202" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          {/* Technical Dimension Callouts */}
          <text x="235" y="105" fill="#38BDF8" fontSize="10" fontFamily="monospace">Ø DIA</text>
          <text x="235" y="120" fill="#94A3B8" fontSize="9" fontFamily="monospace">TIG SEAM</text>
          <text x="35" y="112" fill="#64748B" fontSize="10" fontFamily="monospace">SS304</text>
        </svg>
      );

    case 'horizontal-tank':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="320" height="220" fill="#0F172A" />
          <line x1="20" y1="110" x2="300" y2="110" stroke="#334155" strokeWidth="1" strokeDasharray="6 3" />
          {/* Horizontal Tank Body */}
          <rect x="60" y="65" width="200" height="90" rx="3" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
          {/* Left Dished End */}
          <path d="M60 65 C40 65, 40 155, 60 155 Z" fill="#334155" stroke="#94A3B8" strokeWidth="2" />
          {/* Right Dished End */}
          <path d="M260 65 C280 65, 280 155, 260 155 Z" fill="#334155" stroke="#94A3B8" strokeWidth="2" />
          {/* Circumferential Welds */}
          <line x1="110" y1="65" x2="110" y2="155" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 2" />
          <line x1="160" y1="65" x2="160" y2="155" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 2" />
          <line x1="210" y1="65" x2="210" y2="155" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 2" />
          {/* Saddle Mounts */}
          <path d="M85 155 L75 195 L115 195 L105 155 Z" fill="#334155" stroke="#94A3B8" strokeWidth="1.5" />
          <path d="M215 155 L205 195 L245 195 L235 155 Z" fill="#334155" stroke="#94A3B8" strokeWidth="1.5" />
          {/* Manway Top */}
          <rect x="145" y="48" width="30" height="17" rx="2" fill="#475569" stroke="#94A3B8" strokeWidth="1.5" />
          <text x="75" y="42" fill="#38BDF8" fontSize="10" fontFamily="monospace">HEAVY INDUSTRIAL SKID</text>
        </svg>
      );

    case 'weld-seam':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="320" height="220" fill="#0F172A" />
          {/* Stainless Steel Plates */}
          <rect x="25" y="30" width="125" height="160" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
          <rect x="170" y="30" width="125" height="160" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
          {/* Weld Root & Ripple Beads */}
          <rect x="150" y="30" width="20" height="160" fill="url(#weldHeatGrad)" />
          {[40, 55, 70, 85, 100, 115, 130, 145, 160, 175].map((y) => (
            <ellipse key={y} cx="160" cy={y} rx="9" ry="4.5" fill="#38BDF8" opacity="0.85" stroke="#FFFFFF" strokeWidth="0.8" />
          ))}
          {/* Heat Affected Zone lines */}
          <line x1="144" y1="30" x2="144" y2="190" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          <line x1="176" y1="30" x2="176" y2="190" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          <defs>
            <linearGradient id="weldHeatGrad" x1="150" y1="30" x2="170" y2="30" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="50%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>
          <text x="30" y="55" fill="#E2E8F0" fontSize="11" fontFamily="monospace">SS316L SHEET</text>
          <text x="185" y="55" fill="#E2E8F0" fontSize="11" fontFamily="monospace">ARGON PURGED</text>
          <text x="80" y="205" fill="#38BDF8" fontSize="10" fontFamily="monospace">100% PENETRATION TIG BEAD</text>
        </svg>
      );

    case 'structure-frame':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="320" height="220" fill="#0F172A" />
          {/* Elevated Steel Tower Beams */}
          <line x1="80" y1="40" x2="60" y2="195" stroke="#94A3B8" strokeWidth="4" />
          <line x1="240" y1="40" x2="260" y2="195" stroke="#94A3B8" strokeWidth="4" />
          {/* Horizontal Rungs */}
          <line x1="77" y1="70" x2="243" y2="70" stroke="#64748B" strokeWidth="3" />
          <line x1="72" y1="120" x2="248" y2="120" stroke="#64748B" strokeWidth="3" />
          <line x1="67" y1="165" x2="253" y2="165" stroke="#64748B" strokeWidth="3" />
          {/* Diagonal Cross Braces */}
          <line x1="77" y1="70" x2="248" y2="120" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 2" />
          <line x1="243" y1="70" x2="72" y2="120" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 2" />
          {/* Top Platform & Base Plates */}
          <rect x="65" y="32" width="190" height="10" rx="2" fill="#334155" stroke="#CBD5E1" strokeWidth="1.5" />
          <rect x="45" y="195" width="30" height="8" rx="2" fill="#475569" />
          <rect x="245" y="195" width="30" height="8" rx="2" fill="#475569" />
          <text x="95" y="24" fill="#38BDF8" fontSize="10" fontFamily="monospace">HEAVY TONNAGE TOWER</text>
        </svg>
      );

    case 'repair-patch':
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="320" height="220" fill="#0F172A" />
          {/* Existing Tank Wall */}
          <rect x="40" y="40" width="240" height="140" rx="4" fill="#1E293B" stroke="#475569" strokeWidth="2" />
          {/* Reinforced Cutout Insert Plate */}
          <rect x="95" y="70" width="130" height="80" rx="3" fill="#334155" stroke="#38BDF8" strokeWidth="2" />
          {/* Continuous Weld Fillet Seam */}
          <rect x="90" y="65" width="140" height="90" rx="6" fill="none" stroke="#38BDF8" strokeWidth="3" strokeDasharray="6 3" />
          {/* Collar fitting */}
          <circle cx="160" cy="110" r="18" fill="#1E293B" stroke="#CBD5E1" strokeWidth="2" />
          <circle cx="160" cy="110" r="8" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="105" y="60" fill="#38BDF8" fontSize="9" fontFamily="monospace">RE-WELDED REINFORCEMENT</text>
          <text x="50" y="195" fill="#64748B" fontSize="9" fontFamily="monospace">PRESSURE RE-TESTED PASS</text>
        </svg>
      );

    default: // rectangular-tank
      return (
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="320" height="220" fill="#0F172A" />
          {/* Rectangular Tank Outline */}
          <rect x="55" y="45" width="210" height="130" rx="3" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
          {/* Stiffening External Ribs */}
          <line x1="110" y1="45" x2="110" y2="175" stroke="#38BDF8" strokeWidth="3" />
          <line x1="165" y1="45" x2="165" y2="175" stroke="#38BDF8" strokeWidth="3" />
          <line x1="220" y1="45" x2="220" y2="175" stroke="#38BDF8" strokeWidth="3" />
          <line x1="55" y1="110" x2="265" y2="110" stroke="#64748B" strokeWidth="2" strokeDasharray="5 3" />
          {/* Top Access Hatch */}
          <rect x="135" y="32" width="50" height="13" rx="2" fill="#475569" stroke="#94A3B8" strokeWidth="1.5" />
          <text x="65" y="25" fill="#38BDF8" fontSize="10" fontFamily="monospace">COMPACT ZERO-BULGE TANK</text>
        </svg>
      );
  }
}

export default function Gallery({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All Projects"
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="gallery"
      className="industrial-grid"
      style={{
        padding: '100px 0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span>Fabrication Portfolio</span>
          </div>

          <h2 className="section-title">
            Completed Projects & <span className="text-gradient">Work Gallery</span>
          </h2>

          <p className="section-subtitle">
            A showcase of custom water tanks, pressure-tested weld seams, and heavy structural fabrications built to exact client specifications.
          </p>
        </div>

        {/* Easy Photo Replacement Notice for User */}
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto 2.5rem auto',
            background: 'rgba(15, 23, 42, 0.65)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '10px',
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backdropFilter: 'blur(8px)'
          }}
        >
          <Info size={20} color="#38BDF8" style={{ flexShrink: 0 }} />
          <div style={{ fontSize: '0.85rem', color: '#CBD5E1', lineHeight: 1.5 }}>
            <strong style={{ color: '#38BDF8' }}>Ready for Your Real Photos:</strong> Currently showing clean technical schematics. To display your husband’s actual work photos, simply drop them into <code style={{ color: '#E2E8F0', background: 'rgba(0,0,0,0.4)', padding: '2px 6px', borderRadius: '4px' }}>public/images/projects/</code> and edit <code style={{ color: '#E2E8F0', background: 'rgba(0,0,0,0.4)', padding: '2px 6px', borderRadius: '4px' }}>src/data/galleryData.js</code>.
          </div>
        </div>

        {/* Filter Categories */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '3rem'
          }}
        >
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                padding: '0.55rem 1.25rem',
                borderRadius: '8px',
                background: activeCategory === cat ? 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)' : 'rgba(30, 41, 59, 0.6)',
                color: activeCategory === cat ? '#FFFFFF' : '#94A3B8',
                border: activeCategory === cat ? '1px solid #38BDF8' : '1px solid rgba(148, 163, 184, 0.15)',
                transition: 'all 0.25s ease',
                boxShadow: activeCategory === cat ? '0 4px 15px rgba(2, 132, 199, 0.35)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="industrial-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                overflow: 'hidden'
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Media Container: Photo or Technical Schematic */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '220px',
                  background: '#0B0F19',
                  overflow: 'hidden'
                }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                  />
                ) : (
                  <TechnicalSchematic
                    type={project.placeholderType}
                  />
                )}

                {/* Overlay Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(11, 14, 20, 0.85)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(148, 163, 184, 0.25)',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: '#38BDF8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {project.category}
                </div>

                {/* Inspect Button Icon Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: 'rgba(2, 132, 199, 0.85)',
                    borderRadius: '50%',
                    width: '34px',
                    height: '34px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
                  }}
                  title="View Specs"
                >
                  <Eye size={17} />
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#F8FAFC',
                      marginBottom: '0.5rem',
                      lineHeight: 1.3
                    }}
                  >
                    {project.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.82rem',
                      color: '#38BDF8',
                      fontWeight: 600,
                      marginBottom: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <span>{project.capacity}</span>
                    <span>•</span>
                    <span style={{ color: '#94A3B8' }}>{project.material}</span>
                  </div>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#94A3B8',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem'
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Features Pills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(148, 163, 184, 0.1)'
                  }}
                >
                  {project.features.map((feat, fIdx) => (
                    <span
                      key={fIdx}
                      style={{
                        fontSize: '0.72rem',
                        background: 'rgba(30, 41, 59, 0.7)',
                        color: '#CBD5E1',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        border: '1px solid rgba(148, 163, 184, 0.15)'
                      }}
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Project Details Modal */}
      {selectedProject && (
        <div
          className="modal-backdrop"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(4, 7, 12, 0.85)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            zIndex: 110
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-content"
            style={{
              background: '#0F1522',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              borderRadius: '16px',
              maxWidth: '650px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(56, 189, 248, 0.2)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Media View */}
            <div style={{ position: 'relative', width: '100%', height: '240px', background: '#090D15' }}>
              {selectedProject.image ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <TechnicalSchematic
                  type={selectedProject.placeholderType}
                />
              )}

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  background: 'rgba(15, 23, 42, 0.8)',
                  color: '#FFFFFF',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(148, 163, 184, 0.3)',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '2rem' }}>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#38BDF8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.4rem'
                }}
              >
                {selectedProject.category}
              </div>

              <h3
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  color: '#F8FAFC',
                  marginBottom: '1rem'
                }}
              >
                {selectedProject.title}
              </h3>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                  background: 'rgba(30, 41, 59, 0.4)',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid rgba(148, 163, 184, 0.12)'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase' }}>Volume / Size</div>
                  <div style={{ fontSize: '0.9rem', color: '#38BDF8', fontWeight: 600 }}>{selectedProject.capacity}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase' }}>Material</div>
                  <div style={{ fontSize: '0.9rem', color: '#E2E8F0', fontWeight: 600 }}>{selectedProject.material}</div>
                </div>
              </div>

              <p style={{ fontSize: '0.95rem', color: '#94A3B8', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {selectedProject.description}
              </p>

              {/* Action */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenQuote(selectedProject);
                  }}
                  className="btn-primary"
                  style={{ flex: 1, minWidth: '200px' }}
                >
                  <span>Inquire About Similar Tank</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="btn-secondary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
