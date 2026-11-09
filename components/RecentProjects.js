import Link from 'next/link'
import ProjectCard from './ProjectCard'
import { recentProjects } from '../lib/projects'

export default function RecentProjects() {
  return (
    <section className="sec sec-black" id="recent-projects">
      <div className="eyebrow">Recent projects</div>
      <h2 className="h2">Work we have done.</h2>
      <div className="proj-grid">
        {recentProjects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
      <Link href="/projects" className="btn btn-ghost" style={{ marginTop: 32 }}>
        See all projects
      </Link>
    </section>
  )
}
