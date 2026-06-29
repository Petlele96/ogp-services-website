'use client'

import { useState } from 'react'

const records = [
  {
    client: 'Royal Bafokeng Administration',
    type: 'Civil Infrastructure — Facilities Services',
    scope: 'Grass cutting and vegetation management across Royal Bafokeng Administration managed facilities and grounds in the Rustenburg area.',
  },
  {
    client: 'Sibanye Stillwater',
    type: 'Mining Support Services',
    scope: 'Grass cutting and vegetation management at Sibanye Stillwater\'s PGM mining operations in Rustenburg. Work performed within active mine zones under full safety compliance.',
  },
  {
    client: 'RBA — Tshukudu High School',
    type: 'School Infrastructure — Civil Construction',
    scope: 'Boundary wall construction at Tshukudu High School, contracted through Royal Bafokeng Administration. Full civil scope including foundation excavation, reinforcement, brickwork, and concrete pump operations.',
  },
]

function TrackCard({ record }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#111',
        padding: '36px',
        borderTop: `3px solid ${hovered ? '#E8650A' : 'transparent'}`,
        transition: 'border-color 0.25s',
      }}
    >
      <div style={{
        fontFamily: 'Oswald, sans-serif', fontSize: '18px',
        fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px',
        color: '#fff', marginBottom: '5px',
      }}>{record.client}</div>
      <div style={{
        fontSize: '12px', color: '#888', marginBottom: '18px',
        fontFamily: 'Source Sans 3, sans-serif',
      }}>{record.type}</div>
      <div style={{
        fontFamily: 'Oswald, sans-serif', fontSize: '10px',
        fontWeight: 400, letterSpacing: '2.5px', textTransform: 'uppercase',
        color: '#E8650A', marginBottom: '8px',
      }}>Scope of Work</div>
      <p style={{
        fontSize: '14px', fontWeight: 300,
        color: 'rgba(255,255,255,0.48)',
        lineHeight: 1.65, marginBottom: '20px',
        fontFamily: 'Source Sans 3, sans-serif',
      }}>{record.scope}</p>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        fontFamily: 'Oswald, sans-serif', fontSize: '10px',
        fontWeight: 400, letterSpacing: '1.5px', textTransform: 'uppercase',
        color: '#22C55E', border: '1px solid rgba(34,197,94,0.22)', padding: '4px 10px',
      }}>✓ Completed</div>
    </div>
  )
}

export default function TrackRecord() {
  return (
    <section id="track" className="track-section" style={{ background: '#0A0A0A', padding: '96px 52px' }}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '14px',
        fontFamily: 'Oswald, sans-serif', fontSize: '11px',
        fontWeight: 400, letterSpacing: '3px', textTransform: 'uppercase',
        color: '#E8650A', marginBottom: '16px',
      }}>
        <span style={{ width: '28px', height: '1px', background: '#E8650A', display: 'block' }} />
        Track Record
      </div>
      <h2 style={{
        fontFamily: 'Oswald, sans-serif',
        fontSize: 'clamp(34px, 4.2vw, 58px)',
        fontWeight: 700, lineHeight: 0.97,
        textTransform: 'uppercase', letterSpacing: '-0.5px',
        color: '#fff', marginBottom: '16px',
      }}>Work We Have Done.</h2>
      <p style={{
        fontSize: '16px', fontWeight: 300,
        color: 'rgba(255,255,255,0.58)', maxWidth: '560px',
        lineHeight: 1.75, marginBottom: '56px',
        fontFamily: 'Source Sans 3, sans-serif',
      }}>
        Three completed contracts with two of Rustenburg&apos;s most respected organisations. Real scope. Real delivery. Built on the ground — not on paper.
      </p>

      {/* Cards */}
      <div className="track-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px', background: 'rgba(255,255,255,0.08)',
      }}>
        {records.map(r => <TrackCard key={r.client} record={r} />)}
      </div>
    </section>
  )
}
