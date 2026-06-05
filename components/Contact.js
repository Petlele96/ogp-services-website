'use client'

import { useState } from 'react'

const contactItems = [
  { icon: '📍', label: 'Head Office', val: 'Rustenburg, North West, South Africa' },
  { icon: '👤', label: 'Director', val: 'OG Petlele' },
  { icon: '📞', label: 'Phone / WhatsApp', val: '079 533 5440' },
  { icon: '📧', label: 'General Enquiries', val: 'info@ogpservices.co.za' },
  { icon: '📧', label: 'Director', val: 'gratitude@ogpservices.co.za' },
  { icon: '🌐', label: 'Website', val: 'www.ogpservices.co.za' },
]

const enquiryTypes = [
  'Request for Quotation',
  'Grass Cutting Contract',
  'Fencing & Boundary Walls',
  'Plumbing & Sanitation',
  'Roads & Stormwater',
  'Building Maintenance',
  'Mining Site Services',
  'Subcontracting Opportunity',
  'General Enquiry',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 0 }}>

        {/* Left */}
        <div style={{
          background: '#111', padding: '88px 52px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '14px',
            fontFamily: 'Oswald, sans-serif', fontSize: '11px',
            fontWeight: 400, letterSpacing: '3px', textTransform: 'uppercase',
            color: '#E8650A', marginBottom: '16px',
          }}>
            <span style={{ width: '28px', height: '1px', background: '#E8650A', display: 'block' }} />
            Get In Touch
          </div>

          <h2 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: 'clamp(34px, 4.2vw, 58px)',
            fontWeight: 700, lineHeight: 0.97,
            textTransform: 'uppercase', letterSpacing: '-0.5px',
            color: '#fff', marginBottom: '20px',
          }}>Let&apos;s Talk.</h2>

          <p style={{
            fontSize: '16px', fontWeight: 300,
            color: 'rgba(255,255,255,0.58)',
            lineHeight: 1.75, marginBottom: '36px',
            fontFamily: 'Source Sans 3, sans-serif',
          }}>
            Whether you have a project to price, a subcontracting opportunity, or simply want to know more about OGP Services — we respond to every serious enquiry within 24 hours.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {contactItems.map((c, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: '16px',
                padding: '18px 0',
                borderBottom: i < contactItems.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}>
                <div style={{
                  width: '36px', height: '36px', flexShrink: 0,
                  border: '1px solid rgba(232,101,10,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px',
                }}>{c.icon}</div>
                <div>
                  <div style={{
                    fontFamily: 'Oswald, sans-serif', fontSize: '9px',
                    fontWeight: 400, letterSpacing: '2.5px', textTransform: 'uppercase',
                    color: '#E8650A', marginBottom: '4px',
                  }}>{c.label}</div>
                  <div style={{
                    fontSize: '14px', color: 'rgba(255,255,255,0.68)',
                    fontFamily: 'Source Sans 3, sans-serif',
                  }}>{c.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div style={{ background: '#F5F5F3', padding: '80px 52px' }}>
          <div style={{
            fontFamily: 'Oswald, sans-serif', fontSize: '30px',
            fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px',
            color: '#111', marginBottom: '6px',
          }}>Send an Enquiry</div>
          <p style={{
            fontSize: '14px', fontWeight: 300, color: '#666',
            marginBottom: '32px', fontFamily: 'Source Sans 3, sans-serif',
          }}>All enquiries are treated with confidentiality. We respond within 24 hours.</p>

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              {[
                { label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                { label: 'Company', type: 'text', placeholder: 'Company / Organisation' },
              ].map(f => (
                <div key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
                  <label style={{
                    fontFamily: 'Oswald, sans-serif', fontSize: '9px',
                    fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', color: '#888',
                  }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} style={{
                    background: '#fff', border: '1px solid #CCC', color: '#111',
                    padding: '12px 14px', fontSize: '14px', width: '100%', outline: 'none',
                    fontFamily: 'Source Sans 3, sans-serif', transition: 'border-color 0.2s',
                  }}
                    onFocus={e => e.target.style.borderColor = '#E8650A'}
                    onBlur={e => e.target.style.borderColor = '#CCC'}
                  />
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              {[
                { label: 'Email Address', type: 'email', placeholder: 'you@company.com' },
                { label: 'Phone Number', type: 'tel', placeholder: '079 533 5440' },
              ].map(f => (
                <div key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
                  <label style={{
                    fontFamily: 'Oswald, sans-serif', fontSize: '9px',
                    fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', color: '#888',
                  }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} style={{
                    background: '#fff', border: '1px solid #CCC', color: '#111',
                    padding: '12px 14px', fontSize: '14px', width: '100%', outline: 'none',
                    fontFamily: 'Source Sans 3, sans-serif', transition: 'border-color 0.2s',
                  }}
                    onFocus={e => e.target.style.borderColor = '#E8650A'}
                    onBlur={e => e.target.style.borderColor = '#CCC'}
                  />
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
              <label style={{
                fontFamily: 'Oswald, sans-serif', fontSize: '9px',
                fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', color: '#888',
              }}>Enquiry Type</label>
              <select style={{
                background: '#fff', border: '1px solid #CCC', color: '#111',
                padding: '12px 14px', fontSize: '14px', width: '100%', outline: 'none',
                fontFamily: 'Source Sans 3, sans-serif', transition: 'border-color 0.2s',
              }}
                onFocus={e => e.target.style.borderColor = '#E8650A'}
                onBlur={e => e.target.style.borderColor = '#CCC'}
              >
                <option value="">Select...</option>
                {enquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '24px' }}>
              <label style={{
                fontFamily: 'Oswald, sans-serif', fontSize: '9px',
                fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', color: '#888',
              }}>Project Brief</label>
              <textarea placeholder="Describe the project — scope, location, timeline, and tender reference if applicable..." style={{
                background: '#fff', border: '1px solid #CCC', color: '#111',
                padding: '12px 14px', fontSize: '14px', width: '100%', outline: 'none',
                fontFamily: 'Source Sans 3, sans-serif', height: '100px', resize: 'vertical',
                transition: 'border-color 0.2s',
              }}
                onFocus={e => e.target.style.borderColor = '#E8650A'}
                onBlur={e => e.target.style.borderColor = '#CCC'}
              />
            </div>

            <button type="submit" style={{
              fontFamily: 'Oswald, sans-serif', fontSize: '12px',
              fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
              background: submitted ? '#22C55E' : '#111', color: '#fff',
              border: 'none', padding: '16px 40px', cursor: 'pointer',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => { if (!submitted) e.target.style.background = '#E8650A' }}
              onMouseLeave={e => { if (!submitted) e.target.style.background = '#111' }}
            >{submitted ? '✓ Enquiry Submitted!' : 'Submit Enquiry'}</button>
          </form>
        </div>
      </div>

      <style>{`
        @media(max-width:900px) {
          #contact > div { grid-template-columns: 1fr !important; }
          #contact > div > div { padding: 56px 20px !important; }
          #contact form > div:first-child,
          #contact form > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
