import { FiGithub, FiExternalLink } from 'react-icons/fi'
import type { Project } from '@/data/content'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group card-surface p-7 flex flex-col gap-5 hover:border-cipher/50 transition-colors duration-300">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-bold">{project.title}</h3>
          <p className="text-cipher font-mono text-xs mt-1">{project.tagline}</p>
        </div>
        <span className={`shrink-0 font-mono text-[0.65rem] uppercase tracking-wider px-2.5 py-1 rounded-full border
          ${project.status === 'Completed'
            ? 'border-cipher/40 text-cipher'
            : 'border-signal/40 text-signal'}`}>
          {project.status}
        </span>
      </div>

      <p className="text-sm text-slate-muted leading-relaxed">{project.description}</p>

      <ul className="flex flex-col gap-1.5">
        {project.features.slice(0, 3).map((f) => (
          <li key={f} className="text-xs text-slate-muted flex gap-2">
            <span className="text-signal mt-0.5">▸</span>{f}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span key={t} className="font-mono text-[0.65rem] px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 text-slate-muted">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-1 font-mono text-xs">
        <a href={project.github} target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-black/10 dark:border-white/15 hover:border-signal hover:text-signal transition-colors">
          <FiGithub /> Code
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-signal text-ink font-semibold hover:bg-signal-dim transition-colors">
            <FiExternalLink /> Live Demo
          </a>
        )}
      </div>
    </div>
  )
}
