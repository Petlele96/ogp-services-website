import Link from 'next/link'
import CtaBand from '../../components/CtaBand'
import { divisions, IMG } from '../../lib/services'

export const metadata = {
  title: 'Services',
  description:
    'Civil construction, mining support services, industrial cleaning, vegetation control and waste management in Rustenburg and the North West.',
}

export default function ServicesPage() {
  return (
    <main>
      <header className="page-head">
        <div className="eyebrow">What we do</div>
        <h1>Our Services</h1>
        <p>
          Five service divisions for mines, community sites and public grounds in Rustenburg and the
          North West.
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
                <h3>{g.label}</h3>
                <ul>
                  {g.items.map(item => (
                    <li key={item}>{item}</li>
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
