import Link from 'next/link'
import { divisions } from '../lib/services'

export default function ServiceCards() {
  return (
    <section className="sec sec-light" id="services">
      <div className="eyebrow">What we deliver</div>
      <h2 className="h2 h2-dark">Seven services. One local partner.</h2>
      <div className="card-grid">
        {divisions.map(d => (
          <Link href={`/services#${d.id}`} className="svc-card" key={d.id}>
            <div className="svc-card-num">{d.num}</div>
            <h3>{d.title}</h3>
            <p>{d.short}</p>
            <span className="svc-card-link">Learn more &rarr;</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
