import Link from 'next/link'
import CtaBand from '../../components/CtaBand'
import { divisions, IMG } from '../../lib/services'

export const metadata = {
  title: 'Services',
  description:
    'Mining support, mining operations and underground services, plant and earthmoving, civil construction, industrial cleaning, waste management and vegetation control in Rustenburg and the North West.',
}

export default function ServicesPage() {
  return (
    <main>
      <header className="page-head">
        <div className="eyebrow">What we do</div>
        <h1>Our Services</h1>
        <p>
          Seven service divisions for mines, community sites and public grounds in Rustenburg and the
          North West. Where specialist work needs a partner, we say so.
        </p>
        <nav className="anchor-strip" aria-label="Service divisions">
          {divisions.map(d => (
            <a key={d.id} href={`#${d.id}`}>
              {d.title}
            </a>
          ))}
        </nav>
      </header>

      {divisions.map((d, i) => (
        <section key={d.id} id={d.id} className={`svc-block${i % 2 ? ' alt' : ''}`}>
          <div className="svc-block-text">
            <div className="svc-block-num">{d.num}</div>
            <h2>{d.title}</h2>
            <div className="svc-tagline">{d.tagline}</div>
            <p>{d.intro}</p>
            {d.note && <div className="svc-note">{d.note}</div>}
            <Link href="/#contact" className="btn">
              Request a quote
            </Link>
          </div>
          <div className="svc-block-side">
            {d.photo && (
              <figure className="svc-photo">
                <img src={`${IMG}/${d.photo.id}.jpg`} alt={d.photo.alt} loading="lazy" />
                <figcaption>{d.photo.caption}</figcaption>
              </figure>
            )}
            {d.groups.map(g => (
              <div className="bullets" key={g.label}>
                <h3>
                  {g.label}
                  {g.partner && <span className="partner-tag">With partners</span>}
                </h3>
                <ul>
                  {g.items.map(item => (
                    <li key={item.t}>
                      <strong>{item.t}</strong>
                      <span>{item.d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}

      <CtaBand />
    </main>
  )
}
