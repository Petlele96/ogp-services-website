'use client'

import { useState } from 'react'

const services = [
  {
    num: '01',
    title: 'Grass Cutting & Vegetation Management',
    desc: 'Mine shaft grass cutting, bush clearing, and vegetation management for mining operations, municipal road reserves, and government facility grounds. Delivered at active Sibanye Stillwater mine sites and RBA-managed facilities in Rustenburg.',
    tags: ['Mine Shafts', 'Road Reserves', 'Government Facilities', 'Recurring Contracts'],
  },
  {
    num: '02',
    title: 'Fencing & Boundary Walls',
    desc: 'Supply and installation of palisade fencing, security panels, and concrete boundary walls for mine perimeters, schools, and government facilities. Delivered school boundary wall construction at Tshukudu High School for Royal Bafokeng Administration.',
    tags: ['Palisade Fencing', 'Boundary Walls', 'School Infrastructure', 'Mine Perimeters'],
  },
  {
    num: '03',
    title: 'Plumbing & Sanitation',
    desc: 'Geyser supply and installation, sewer reticulation, ablution facility construction, and plumbing maintenance for schools, clinics, municipal housing, and mine facilities across Rustenburg.',
    tags: ['Geyser Installation', 'Sewer Reticulation', 'Ablution Facilities', 'Municipal'],
  },
  {
    num: '04',
    title: 'Roads & Stormwater',
    desc: 'Construction and rehabilitation of access roads, internal mine roads, and stormwater drainage systems. Serving municipal ward-level road contracts and mine infrastructure requirements across North West Province.',
    tags: ['Access Roads', 'Stormwater Drainage', 'Rehabilitation', 'Municipal'],
  },
  {
    num: '05',
    title: 'Water Tankers & Site Logistics',
    desc: 'Water tanker supply, mobile ablution hire, and site logistics for mine sites, large construction projects, and remote operations. Reliable infrastructure support wherever the work demands it.',
    tags: ['Water Tankers', 'Mobile Ablutions', 'Site Support', 'Remote Operations'],
  },
  {
    num: '06',
    title: 'Building Maintenance & Repairs',
    desc: 'Waterproofing, roofing repairs, window replacement, painting, and general building maintenance for municipal facilities, schools, clinics, and government properties on as-and-when panel contracts.',
    tags: ['Waterproofing', 'Roofing', 'Window Repairs', 'Panel Contracts'],
  },
]

const miningService = {
  num: '07',
  title: 'Mining Site Services & Underground Support',
  desc: 'OGP Services provides a comprehensive package of mining site support for PGM and chrome mining operations in Rustenburg. Our scope covers conveyor belt maintenance and cleaning, roadway cleaning and maintenance, civil and construction support within mine boundaries, site maintenance management, local workforce recruitment and HR coordination, and community and stakeholder liaison. We operate as a primary contractor or as part of a mining consortium.',
  tags: ['Conveyor Belt Maintenance', 'Roadway Cleaning', 'Civil Support', 'Site Maintenance', 'Workforce Management', 'Stakeholder Liaison'],
}

function ServiceCard({ service, span }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#111111' : '#FFFFFF',
        padding: '40px 32px',
        position: 'relative', overflow: 'hidden',
        transition: 'background 0.3s',
        gridColumn: span ? 'span 3' : 'span 1',
        cursor: 'default',
      }}
    >
      {/* Top border on hover */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
        background: 'linear-gradient(90deg, #1A56DB, #E8650A)',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.3s',
      }} />

      <div style={{
        fontFamily: 'Oswald, sans-serif', fontSize: '60px',
        fontWeight: 700, lineHeight: 1, marginBottom: '18px',
        letterSpacing: '-2px',
        color: hovered ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.05)',
        transition: 'color 0.3s',
      }}>{service.num}</div>

      <div style={{
        fontFamily: 'Oswald, sans-serif', fontSize: '19px',
        fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px',
        color: hovered ? '#fff' : '#111',
        marginBottom: '14px', transition: 'color 0.3s',
      }}>{service.title}</div>

      <p style={{
        fontSize: '14px', fontWeight: 300,
        color: hovered ? 'rgba(255,255,255,0.48)' : '#666',
        lineHeight: 1.7, marginBottom: '18px',
        transition: 'color 0.3s',
        fontFamily: 'Source Sans 3, sans-serif',
      }}>{service.desc}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
        {service.tags.map(t => (
          <span key={t} style={{
            fontFamily: 'Oswald, sans-serif', fontSize: '9px',
            fontWeight: 400, letterSpacing: '1.5px', textTransform: 'uppercase',
            color: '#E8650A', border: '1px solid rgba(232,101,10,0.3)',
            padding: '3px 8px',
          }}>{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="services-section" style={{ padding: '96px 52px', background: '#F5F5F3' }}>
      {/* Header */}
      <div className="services-header" style={{
        display: 'flex', alignItems: 'flex-end',
        justifyContent: 'space-between', gap: '40px',
        marginBottom: '56px', flexWrap: 'wrap',
      }}>
        <div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '14px',
            fontFamily: 'Oswald, sans-serif', fontSize: '11px',
            fontWeight: 400, letterSpacing: '3px', textTransform: 'uppercase',
            color: '#E8650A', marginBottom: '16px',
          }}>
            <span style={{ width: '28px', height: '1px', background: '#E8650A', display: 'block' }} />
            What We Deliver
          </div>
          <h2 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: 'clamp(34px, 4.2vw, 58px)',
            fontWeight: 700, lineHeight: 0.97,
            textTransform: 'uppercase', letterSpacing: '-0.5px',
            color: '#111', margin: 0,
          }}>Civil Contractor &amp;<br />Mining Support.</h2>
        </div>
        <p style={{
          fontSize: '16px', fontWeight: 300, color: '#555',
          lineHeight: 1.75, maxWidth: '400px',
          fontFamily: 'Source Sans 3, sans-serif',
        }}>
          Seven service capabilities covering civil construction, mining support, and facilities maintenance — every one backed by real project experience in Rustenburg.
        </p>
      </div>

      {/* Grid */}
      <div className="services-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px', background: '#DDDDDD',
      }}>
        {services.map(s => <ServiceCard key={s.num} service={s} />)}
        <ServiceCard service={miningService} span />
      </div>
    </section>
  )
}
