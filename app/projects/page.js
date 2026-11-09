import CtaBand from '../../components/CtaBand'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../lib/projects'

export const metadata = {
  title: 'Projects',
  description:
    'Completed and current OGP Services projects for Sibanye-Stillwater, Royal Bafokeng Administration and other clients in Rustenburg.',
}

export default function ProjectsPage() {
  return (
    <main>
      <header className="page-head">
        <div className="eyebrow">Track record</div>
        <h1>Our Projects</h1>
        <p>Real jobs for real clients in Rustenburg. This is the work we have on record.</p>
      </header>

      <section className="sec sec-black">
        <div className="proj-grid">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
