import { projects } from '@/data/content'
import ProjectCard from '@/components/ProjectCard'
import Reveal from '@/components/Reveal'

export default function Projects() {
  return (
    <div className="container-px py-20">
      <Reveal>
        <span className="eyebrow">Work</span>
        <h1 className="section-heading mt-3">Projects</h1>
        <p className="text-slate-muted mt-4 max-w-xl">Built independently, end to end — no templates, no shortcuts.</p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6 mt-14">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
