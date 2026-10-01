import React from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { CheckCircle, Phone, MessageSquare } from 'lucide-react';

export default function About() {
  const points = [
    {
      title: "1000 ലിറ്റർ മുതൽ ഏത് കപ്പാസിറ്റിയും",
      desc: "1000L, 2000L, 5000L വീടുകളിലെയും ഫാക്ടറികളിലെയും ഏത് വാട്ടർ ടാങ്കുകളും റിപ്പയർ ചെയ്യുന്നു."
    },
    {
      title: "മാറ്റി വാങ്ങേണ്ടതില്ല, പണം ലാഭിക്കാം",
      desc: "പുതിയ ടാങ്ക് വാങ്ങി ഇൻസ്റ്റാൾ ചെയ്യുന്നതിന്റെ ചെറിയൊരു ചെലവിൽ തന്നെ പഴയ ടാങ്ക് ശക്തമായി ഒട്ടിച്ചു തരുന്നു."
    },
    {
      title: "സ്ഥലത്ത് നേരിട്ടെത്തുന്ന സൗകര്യം",
      desc: "ടാങ്ക് അഴിച്ചെടുത്തു കൊണ്ടുപോകേണ്ടതില്ല. നിങ്ങളുടെ ലൊക്കേഷൻ അയച്ചാൽ നേരിട്ടെത്തി ജോലി പൂർത്തിയാക്കുന്നു."
    },
    {
      title: "100% വാട്ടർപ്രൂഫ് വെൽഡിംഗ്",
      desc: "വെള്ളം പുറത്തേക്ക് പോകാത്ത രീതിയിൽ ശക്തമായ വെൽഡും തുടർന്ന് വെള്ളം നിറച്ചുള്ള പരിശോധനയും ഉറപ്പാക്കുന്നു."
    }
  ];

  return (
    <section
      id="about"
      style={{
        padding: '80px 0',
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(7, 9, 13, 0.7) 0%, rgba(15, 21, 30, 0.6) 50%, rgba(7, 9, 13, 0.7) 100%)',
        borderTop: '1px solid rgba(148, 163, 184, 0.1)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.1)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column */}
          <div>
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>വിശ്വാസ്യതയും സേവനവും</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                fontWeight: 800,
                color: '#F8FAFC',
                lineHeight: 1.2,
                marginBottom: '1.25rem'
              }}
            >
              വാട്ടർ ടാങ്ക് പൊട്ടിയാൽ വിഷമിക്കേണ്ട,{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #38BDF8 0%, #E2E8F0 60%, #94A3B8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                പെർഫെക്റ്റായി ഒട്ടിച്ചു തരാം!
              </span>
            </h2>

            <p
              style={{
                fontSize: '1rem',
                color: '#CBD5E1',
                lineHeight: 1.7,
                marginBottom: '1rem'
              }}
            >
              വാട്ടർ ടാങ്കുകൾ വെയിലടിച്ചോ പ്രഷർ കാരണോ തട്ടിമറിഞ്ഞോ പൊട്ടുകയോ വിള്ളലുകൾ വീഴുകയോ ചെയ്യുന്നത് സാധാരണമാണ്. ആയിരക്കണക്കിന് രൂപ മുടക്കി പുതിയ ടാങ്ക് വാങ്ങുന്നതിന് പകരം വളരെ ലളിതമായി ശക്തമായ വെൽഡിംഗിലൂടെ അത് പഴയതുപോലെ ഉപയോഗയോഗ്യമാക്കാം.
            </p>

            

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={BUSINESS_CONFIG.getPhoneLink()}
                className="btn-primary"
                style={{ padding: '0.85rem 1.6rem' }}
              >
                <Phone size={18} />
                <span>Call Us</span>
              </a>

              <a
                href={BUSINESS_CONFIG.getLocationShareLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: '0.85rem 1.6rem' }}
              >
                <MessageSquare size={18} />
                <span>Send location</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Key Points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {points.map((pt, idx) => (
              <div
                key={idx}
                className="industrial-card"
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start'
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                >
                  <CheckCircle size={18} color="#38BDF8" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F1F5F9', marginBottom: '0.3rem' }}>
                    {pt.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.5 }}>
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
