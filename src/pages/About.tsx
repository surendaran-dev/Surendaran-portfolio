import { profile, education, training, experience, languages, softSkills } from '@/data/content'
import Reveal from '@/components/Reveal'

export default function About() {
  return (
    <div className="container-px py-20">
      <Reveal>
        <span className="eyebrow">About</span>
        <h1 className="section-heading mt-3">The Person Behind the Code</h1>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="max-w-2xl text-slate-muted mt-6 leading-relaxed">{profile.objective}</p>
      </Reveal>

      {/* Education + Training */}
      <div className="grid md:grid-cols-2 gap-6 mt-16">
        <Reveal>
          <div className="card-surface p-7">
            <span className="eyebrow">Education</span>
            {education.map((e) => (
              <div key={e.degree} className="mt-5">
                <h3 className="font-display font-bold">{e.degree}</h3>
                <p className="text-sm text-cipher font-mono mt-1">{e.org}</p>
                <p className="text-xs text-slate-muted mt-1">{e.period}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card-surface p-7">
            <span className="eyebrow">Training</span>
            {training.map((t) => (
              <div key={t.title} className="mt-5">
                <h3 className="font-display font-bold">{t.title}</h3>
                <p className="text-sm text-cipher font-mono mt-1">{t.org}</p>
                <p className="text-xs text-slate-muted mt-1">{t.period} · {t.status}</p>
                <p className="text-sm text-slate-muted mt-3 leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Experience timeline */}
      <Reveal className="mt-16">
        <span className="eyebrow">Experience Timeline</span>
        <div className="mt-8 border-l-2 border-cipher/30 pl-8 flex flex-col gap-10">
          {experience.map((e) => (
            <div key={e.title} className="relative">
              <span className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-cipher" />
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="font-display font-bold">{e.title}</h3>
                <span className="font-mono text-xs text-signal">{e.period}</span>
              </div>
              <ul className="mt-3 flex flex-col gap-1.5">
                {e.points.map((p) => (
                  <li key={p} className="text-sm text-slate-muted flex gap-2"><span className="text-signal">▸</span>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Languages + soft skills */}
      <div className="grid md:grid-cols-2 gap-6 mt-16">
        <Reveal>
          <div className="card-surface p-7">
            <span className="eyebrow">Languages</span>
            <div className="flex flex-col gap-3 mt-5">
              {languages.map((l) => (
                <div key={l.name} className="flex justify-between text-sm">
                  <span>{l.name}</span><span className="text-cipher font-mono text-xs">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card-surface p-7">
            <span className="eyebrow">Soft Skills</span>
            <div className="flex flex-wrap gap-2 mt-5">
              {softSkills.map((s) => (
                <span key={s} className="font-mono text-[0.7rem] px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5">{s}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
