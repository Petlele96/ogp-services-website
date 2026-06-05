'use client'

const points = [
  {
    title: 'Host Community Contractor',
    desc: 'Locally based in Rustenburg with deep roots in the community surrounding the mining operations we serve. Our workforce is drawn from the same communities as our clients.',
  },
  {
    title: 'Social & Labour Plan Aligned',
    desc: 'Contracting OGP Services supports SLP local procurement obligations for mining houses operating in and around Rustenburg mining operations.',
  },
  {
    title: 'Consortium & JV Ready',
    desc: 'Structured for joint venture and ESD partnership submissions. We bring compliance, local credentials, and delivery capability to any consortium.',
  },
]

const credentials = [
  { l: 'Director', v: 'OG Petlele', ok: false },
  { l: 'Established', v: '2019', ok: false },
  { l: 'Head Office', v: 'Rustenburg, North West', ok: false },
  { l: 'Phone', v: '079 533 5440', ok: false },
  { l: 'Operating Area', v: 'North West Province & Beyond', ok: false },
  { l: 'CIDB', v: 'Registered ✓', ok: true },
  { l: 'B-BBEE', v: 'Compliant ✓', ok: true },
  { l: 'CSD', v: 'Registered ✓', ok: true },
  { l: 'SARS Tax', v: 'Cleared ✓', ok: true },
  { l: 'CIPC', v: 'Registered ✓', ok: true },
  { l: 'Reg Number', v: '2019/343931/07', ok: false },
  { l: 'Email', v: 'info@ogpservices.co.za', ok: false },
  { l: 'Website', v: 'www.ogpservices.co.za', ok: false },
]

export default function About() {
  return (
    <section id="about">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>

        {/* Left */}
        <div style={{
          background: '#0A0A0A', padding: '88px 64px 88px 52px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '14px',
            fontFamily: 'Oswald, sans-serif', fontSize: '11px',
            fontWeight: 400, letterSpacing: '3px', textTransform: 'uppercase',
            color: '#E8650A', marginBottom: '16px',
          }}>
            <span style={{ width: '28px', height: '1px', background: '#E8650A', display: 'block' }} />
            About OGP Services
          </div>

          <h2 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: 'clamp(34px, 4.2vw, 58px)',
            fontWeight: 700, lineHeight: 0.97,
            textTransform: 'uppercase', letterSpacing: '-0.5px',
            color: '#fff', marginBottom: '28px',
          }}>Who We Are.</h2>

          {[
            'OGP Services (Pty) Ltd is a CIDB-registered civil contractor and mining support company based in Rustenburg, North West Province. We are locally owned, community-rooted, and built to deliver on the ground — not just on paper.',
            'Founded in 2019 by OG Petlele, OGP Services has built its reputation through real project delivery for Royal Bafokeng Administration and Sibanye Stillwater. We bring full procurement compliance, a local workforce, and a deep understanding of the Rustenburg mining and municipal environment to every contract we take on.',
            'We operate as a primary contractor, a specialist subcontractor, or as part of a consortium — structured to meet the requirements of mines, government departments, and large construction companies operating in North West Province.',
          ].map((text, i) => (
            <p key={i} style={{
              fontSize: '16px', fontWeight: 300,
              color: 'rgba(255,255,255,0.52)',
              lineHeight: 1.85, marginBottom: '20px',
              fontFamily: 'Source Sans 3, sans-serif',
            }}
              dangerouslySetInnerHTML={{
                __html: text
                  .replace('CIDB-registered civil contractor and mining support company', '<strong style="color:#fff;font-weight:500">CIDB-registered civil contractor and mining support company</strong>')
                  .replace('OG Petlele', '<strong style="color:#fff;font-weight:500">OG Petlele</strong>')
                  .replace('primary contractor', '<strong style="color:#fff;font-weight:500">primary contractor</strong>')
              }}
            />
          ))}

          {/* Points */}
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '8px' }}>
            {points.map((p, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: '16px',
                padding: '20px 0',
                borderBottom: i < points.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}>
                <div style={{
                  width: '2px', height: '40px', background: '#E8650A',
                  flexShrink: 0, marginTop: '3px',
                }} />
                <div>
                  <div style={{
                    fontFamily: 'Oswald, sans-serif', fontSize: '15px',
                    fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px',
                    color: '#fff', marginBottom: '5px',
                  }}>{p.title}</div>
                  <div style={{
                    fontSize: '13px', fontWeight: 300,
                    color: 'rgba(255,255,255,0.38)', lineHeight: 1.6,
                    fontFamily: 'Source Sans 3, sans-serif',
                  }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ background: '#1A1A1A', padding: '88px 52px 88px 64px' }}>
          {/* Logo */}
          <img
            src="/logo.png"
            alt="OGP Services"
            style={{ height: '60px', width: 'auto', marginBottom: '28px', display: 'block', objectFit: 'contain' }}
          />

          <div style={{
            fontFamily: 'Oswald, sans-serif', fontSize: '10px',
            fontWeight: 400, letterSpacing: '2.5px', textTransform: 'uppercase',
            color: '#E8650A', marginBottom: '6px',
          }}>Company Registration</div>
          <div style={{
            fontFamily: 'Oswald, sans-serif', fontSize: '16px',
            fontWeight: 500, color: 'rgba(255,255,255,0.7)', marginBottom: '32px',
          }}>2019/343931/07</div>

          {/* Credential rows */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {credentials.map((c, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 0',
                borderBottom: i < credentials.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <span style={{
                  fontFamily: 'Oswald, sans-serif', fontSize: '10px',
                  fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase',
                  color: '#888',
                }}>{c.l}</span>
                <span style={{
                  fontSize: '13px', fontWeight: 400,
                  color: c.ok ? '#22C55E' : 'rgba(255,255,255,0.62)',
                  fontFamily: 'Source Sans 3, sans-serif',
                }}>{c.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px) {
          #about > div { grid-template-columns: 1fr !important; }
          #about > div > div { padding: 56px 20px !important; }
        }
      `}</style>
    </section>
  )
}
