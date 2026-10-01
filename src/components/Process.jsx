import React from 'react';
import { PROCESS_STEPS } from '../data/processData';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { CheckCircle2, MapPin } from 'lucide-react';

export default function Process() {
  return (
    <section
      id="process"
      style={{
        padding: '80px 0',
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(7, 9, 13, 0.8) 0%, rgba(13, 18, 26, 0.7) 50%, rgba(7, 9, 13, 0.8) 100%)',
        borderTop: '1px solid rgba(148, 163, 184, 0.1)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.1)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span>പ്രവർത്തന രീതി</span>
          </div>

          <h2 className="section-title">
            എങ്ങനെയാണ് <span className="text-gradient">ജോലി ചെയ്യുന്നത്?</span>
          </h2>

          <p className="section-subtitle">
            നിങ്ങൾ ലൊക്കേഷനും ഫോട്ടോയും അയച്ചു തന്നാൽ മതി, ബാക്കി കാര്യങ്ങൾ ഞങ്ങൾ കൃത്യമായി ചെയ്തു തീർക്കും.
          </p>
        </div>

        {/* Process Steps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {PROCESS_STEPS.map((item) => (
            <div
              key={item.step}
              className="industrial-card"
              style={{
                padding: '1.75rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '2.2rem',
                      fontWeight: 800,
                      color: 'rgba(56, 189, 248, 0.4)',
                      lineHeight: 1
                    }}
                  >
                    {item.step}
                  </span>

                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#38BDF8',
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      padding: '2px 8px',
                      borderRadius: '4px'
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#F8FAFC',
                    marginBottom: '0.5rem',
                    lineHeight: 1.3
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.85rem',
                    color: '#94A3B8',
                    lineHeight: 1.6
                  }}
                >
                  {item.description}
                </p>
              </div>

              <div
                style={{
                  marginTop: '1.25rem',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid rgba(148, 163, 184, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#64748B',
                  fontSize: '0.75rem'
                }}
              >
                <CheckCircle2 size={13} color="#38BDF8" />
                <span>സുരക്ഷിതമായ സർവീസ്</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <a
            href={BUSINESS_CONFIG.getLocationShareLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ padding: '0.95rem 2rem', fontSize: '1.05rem' }}
          >
            <MapPin size={18} />
            <span>ഇപ്പോൾ തന്നെ വാട്സാപ്പിൽ ലൊക്കേഷൻ അയക്കൂ</span>
          </a>
        </div>
      </div>
    </section>
  );
}
