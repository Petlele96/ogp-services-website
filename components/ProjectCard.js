import { IMG } from '../lib/projects'

export default function ProjectCard({ project }) {
  const { client, title, service, year, status, line, photos } = project
  const ongoing = status === 'Ongoing'

  return (
    <article className="proj-card">
      {photos.length > 0 && (
        <div className={`proj-photos${photos.length > 2 ? ' three' : photos.length > 1 ? ' two' : ''}`}>
          {photos.map(p => (
            <img key={p.id || p.src} src={p.src || `${IMG}/${p.id}.jpg`} alt={p.alt} loading="lazy" />
          ))}
        </div>
      )}
      <div className="proj-body">
        <div className="proj-meta">
          <span className={`pill ${ongoing ? 'pill-orange' : 'pill-green'}`}>{status}</span>
          <span>
            {service}
            {year ? ` · ${year}` : ''}
          </span>
        </div>
        <h3>{title}</h3>
        {client && <div className="proj-client">{client}</div>}
        <p>{line}</p>
      </div>
    </article>
  )
}
