import React, { Suspense, lazy } from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Phone, MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';

const TankViewer3D = lazy(() => import('./TankViewer3D'));

function TankLoadingPlaceholder() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '420px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(15, 23, 42, 0.4)',
        borderRadius: '16px',
        border: '1px solid rgba(148, 163, 184, 0.15)',
        gap: '1rem'
      }}
    >
      <div
        style={{
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          border: '3px solid rgba(56, 189, 248, 0.2)',
          borderTopColor: '#38BDF8',
          animation: 'spin 1s linear infinite'
        }}
      />
      <span style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600 }}>
        Animation loading..
      </span>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="industrial-grid"
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '90px',
        paddingBottom: '50px',
        overflow: 'hidden'
      }}
    >
      {/* Background Soft Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.18) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '2.5rem',
            position: 'relative',
            zIndex: 1
          }}
          className="hero-grid"
        >
          {/* Left Column: Direct Problem-Solver Pitch */}
          <div style={{ maxWidth: '620px' }}>
            {/* Urgent Problem-Solving Badge */}
            <div
              className="section-badge status-beacon"
              style={{
                display: 'inline-flex',
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                color: '#f87171'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#ef4444',
                  boxShadow: '0 0 8px #ef4444'
                }}
              />
              <span>വാട്ടർ ടാങ്ക് പൊട്ടിയാൽ മാറ്റി വാങ്ങേണ്ടതില്ല!</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.1rem, 4.4vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#F8FAFC',
                marginBottom: '1rem',
                letterSpacing: '0.01em'
              }}
            >
              വാട്ടർ ടാങ്ക് പൊട്ടിയോ?{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #38BDF8 0%, #E2E8F0 60%, #94A3B8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'block'
                }}
              >
                1000 ലിറ്റർ മുതൽ ഏത് ടാങ്കും ഒട്ടിച്ചു കൊടുക്കും!
              </span>
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                color: '#CBD5E1',
                lineHeight: 1.65,
                marginBottom: '1.75rem'
              }}
            >
              വാട്ടർ ടാങ്കിലെ ഏത് വലിയ വിള്ളലുകളും പൊട്ടലുകളും ലീക്കുകളും ശക്തമായി വെൽഡ് ചെയ്ത് വാട്ടർപ്രൂഫാക്കി നൽകുന്നു. ടാങ്കിന്റെ ഫോട്ടോയും ലൊക്കേഷനും അയക്കൂ, നേരിട്ടെത്തി ശരിയാക്കാം.
            </p>

            {/* Direct Contact Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem'
              }}
            >
              {/* Call Button */}
              <a
                href={BUSINESS_CONFIG.getPhoneLink()}
                className="btn-primary btn-shimmer"
                style={{
                  padding: '0.95rem 1.8rem',
                  fontSize: '1.1rem',
                  letterSpacing: '0.02em',
                  background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)'
                }}
              >
                <Phone size={20} />
                <span>വിളിക്കൂ: {BUSINESS_CONFIG.displayPhone}</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href={BUSINESS_CONFIG.getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{
                  padding: '0.95rem 1.8rem',
                  fontSize: '1.05rem',
                  letterSpacing: '0.02em'
                }}
              >
                <MessageSquare size={20} />
                <span>Send WhatsApp</span>
              </a>

              {/* Direct Location Share Button */}
              <a
                href={BUSINESS_CONFIG.getLocationShareLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{
                  padding: '0.95rem 1.5rem',
                  fontSize: '0.95rem',
                  border: '1px solid rgba(56, 189, 248, 0.4)',
                  color: '#38BDF8'
                }}
              >
                <MapPin size={18} color="#38BDF8" />
                <span>Send location</span>
              </a>
            </div>

            {/* 3 Core Trust Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '0.75rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(148, 163, 184, 0.15)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="#38BDF8" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', color: '#CBD5E1', fontWeight: 600 }}>
                  1000L മുതൽ ഏത് സൈസും
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="#38BDF8" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', color: '#CBD5E1', fontWeight: 600 }}>
                  നേരിട്ടെത്തി ഒട്ടിച്ചു നൽകുന്നു
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="#38BDF8" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', color: '#CBD5E1', fontWeight: 600 }}>
                  100% ലീക്ക് പ്രൂഫ് വെൽഡിംഗ്
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Crack Repair & Sealing Animation */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '420px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                width: '100%',
                height: '460px',
                position: 'relative',
                background: 'rgba(15, 23, 42, 0.5)',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.7)'
              }}
            >
              <Suspense fallback={<TankLoadingPlaceholder />}>
                <TankViewer3D />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
