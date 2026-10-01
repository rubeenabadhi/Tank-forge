import React from 'react';
import { Shield, Sparkles, Ruler, Flame } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: "ശക്തവും ദീർഘകാല ഈടുമുള്ള വെൽഡ്",
      englishTitle: "Strong & Durable Sealing",
      tag: "ഈട് & ബലം",
      desc: "ഒരു തവണ വെൽഡ് ചെയ്താൽ പിന്നീട് അതേ ഭാഗത്ത് നിന്ന് വെള്ളം കിനിയാത്ത രീതിയിൽ മികച്ച ബലത്തിൽ ഒപ്പിച്ചു നൽകുന്നു.",
      icon: Shield,
      highlights: ["ഉയർന്ന ഹീറ്റ് വെൽഡിംഗ്", "പൂർണ്ണ സീലിംഗ്", "വർഷങ്ങളോളം ഈട്"]
    },
    {
      title: "ഗുണനിലവാരമുള്ള മെറ്റീരിയൽസ്",
      englishTitle: "Quality Welding Rods & Materials",
      tag: "ക്വാളിറ്റി",
      desc: "ടാങ്കിന്റെ സ്വഭാവത്തിനനുസരിച്ചുള്ള പ്രത്യേക വെൽഡിംഗ് റോഡുകളും ഹീറ്റ് റെസിസ്റ്റന്റ് പോളിമറുകളും മാത്രം ഉപയോഗിക്കുന്നു.",
      icon: Sparkles,
      highlights: ["പ്രത്യേക പ്ലാസ്റ്റിക് വെൽഡ് ഫില്ലറുകൾ", "സ്റ്റെയിൻലെസ്സ് സ്റ്റീൽ റോഡുകൾ", "സുരക്ഷിത സാമഗ്രികൾ"]
    },
    {
      title: "1000 ലിറ്റർ മുതൽ ഏത് അളവിലും",
      englishTitle: "From 500 Litres Onwards",
      tag: "ഏത് സൈസും",
      desc: "ചെറിയ 1000 ലിറ്റർ വീട്ടു ടാങ്കുകൾ മുതൽ വലിയ 5000+ ലിറ്റർ ഇൻഡസ്ട്രിയൽ ടാങ്കുകൾ വരെ അനായാസം ഒപ്പിച്ചു നൽകുന്നു.",
      icon: Ruler,
      highlights: ["1000L, 2000L,4000 ടാങ്കുകൾ", "കസ്റ്റം അളവുകൾ", "എല്ലാ ഷേപ്പുകളും"]
    },
    {
      title: "വൃത്തിയുള്ള ലീക്ക്-പ്രൂഫ് ഫിനിഷിംഗ്",
      englishTitle: "Clean & Precise Finishing",
      tag: "ഫിനിഷിംഗ്",
      desc: "വെൽഡ് ചെയ്ത ശേഷം അനാവശ്യ പാടുകളോ മുഴകളോ ഇല്ലാതെ മിനുസപ്പെടുത്തി, വെള്ളം നിറച്ച് ലീക്ക് ഇല്ലെന്ന് ബോധ്യപ്പെടുത്തുന്നു.",
      icon: Flame,
      highlights: ["ലീക്ക് ഫ്രീ ടെസ്റ്റിംഗ്", "സ്മൂത്ത് സർഫസ്", "തത്സമയ പരിശോധന"]
    }
  ];

  return (
    <section
      id="why-us"
      className="industrial-grid"
      style={{
        padding: '80px 0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span>പ്രത്യേകതകൾ</span>
          </div>

          <h2 className="section-title">
            എന്തുകൊണ്ട് ഞങ്ങളെ <span className="text-gradient">തിരഞ്ഞെടുക്കണം?</span>
          </h2>

          <p className="section-subtitle">
            വിശ്വസ്തമായ സേവനം, കുറഞ്ഞ ചെലവ്, നേരിട്ടെത്തിയുള്ള കൃത്യമായ പണി.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="industrial-card"
                style={{
                  padding: '1.75rem 1.5rem',
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
                      marginBottom: '1.25rem'
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: 'rgba(56, 189, 248, 0.15)',
                        border: '1px solid rgba(56, 189, 248, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={22} color="#38BDF8" />
                    </div>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: '#38BDF8',
                        background: 'rgba(30, 41, 59, 0.7)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        border: '1px solid rgba(148, 163, 184, 0.15)'
                      }}
                    >
                      {pt.tag}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: '#F8FAFC',
                      marginBottom: '0.3rem',
                      lineHeight: 1.3
                    }}
                  >
                    {pt.title}
                  </h3>

                  <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, marginBottom: '0.85rem' }}>
                    {pt.englishTitle}
                  </div>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#94A3B8',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem'
                    }}
                  >
                    {pt.desc}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(148, 163, 184, 0.12)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem'
                  }}
                >
                  {pt.highlights.map((hl, hIdx) => (
                    <div
                      key={hIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.8rem',
                        color: '#CBD5E1'
                      }}
                    >
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#38BDF8' }} />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
