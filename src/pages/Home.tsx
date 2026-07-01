import { Link } from 'react-router-dom'
import { FiDownload, FiMail, FiArrowRight } from 'react-icons/fi'
import { useDecryptText } from '@/hooks/useDecryptText'
import { profile, projects } from '@/data/content'
import Reveal from '@/components/Reveal'
import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  const name = useDecryptText(profile.name, 26)

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[88vh] flex items-center">
        <div className="absolute inset-0 bg-cipher-grid bg-grid-sm opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-signal/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-cipher/10 blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />

        <div className="container-px relative w-full py-16">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">

            {/* LEFT — text */}
            <div className="flex-1 min-w-0">
              <Reveal>
                <span className="eyebrow">{'// available for opportunities, 2026'}</span>
              </Reveal>

              <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight mt-6 leading-[1.05]">
                {name}
                <span className="animate-decrypt-blink text-signal">_</span>
              </h1>

              <Reveal delay={0.15}>
                <p className="font-mono text-cipher text-sm sm:text-base mt-5 tracking-wide">
                  {profile.role} → {profile.goal}
                </p>
              </Reveal>

              <Reveal delay={0.25}>
                <p className="max-w-xl text-slate-muted mt-6 text-base leading-relaxed">
                  {profile.tagline}
                </p>
              </Reveal>

              <Reveal delay={0.35}>
                <div className="flex flex-wrap gap-4 mt-10">
                  <a
                    href={profile.resumeUrl}
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-signal text-ink font-semibold text-sm hover:bg-signal-dim transition-colors"
                  >
                    <FiDownload /> Download Resume
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-black/15 dark:border-white/20 font-semibold text-sm hover:border-cipher hover:text-cipher transition-colors"
                  >
                    <FiMail /> Get In Touch
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* RIGHT — photo */}
            <Reveal delay={0.2} className="shrink-0">
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72">
                {/* glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-signal via-cipher to-signal/30 blur-xl opacity-30 animate-float-slow" />
                {/* border ring */}
                <div className="absolute inset-0 rounded-full border-2 border-cipher/30" />
                {/* photo */}
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="relative w-full h-full rounded-full object-cover object-top border-4 border-ink-card shadow-2xl"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement
                    el.style.display = 'none'
                  }}
                />
                {/* AES badge */}
                <div className="absolute -bottom-2 -right-2 bg-ink-card border border-cipher/30 rounded-full px-3 py-1.5 font-mono text-[0.6rem] text-cipher uppercase tracking-wider shadow-lg">
                  AES-256 ✦
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* FEATURED PROJECT TEASER */}
      <section className="container-px py-24">
        <Reveal>
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="eyebrow">Featured Build</span>
              <h2 className="section-heading mt-3">Selected Work</h2>
            </div>
            <Link
              to="/projects"
              className="font-mono text-xs uppercase tracking-wider inline-flex items-center gap-2 hover:text-signal transition-colors"
            >
              All Projects <FiArrowRight />
            </Link>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* QUICK STATS STRIP */}
      <section className="container-px pb-24">
        <Reveal>
          <div className="card-surface grid grid-cols-2 md:grid-cols-4 divide-x divide-black/5 dark:divide-white/10">
            {[
              ['2+', 'Years Building'],
              ['3', 'Internships'],
              ['1', 'Flagship Project'],
              ['100%', 'Self-Driven'],
            ].map(([num, label]) => (
              <div key={label} className="p-6 text-center">
                <div className="font-display text-3xl font-bold text-signal">{num}</div>
                <div className="font-mono text-[0.65rem] uppercase tracking-wider text-slate-muted mt-2">{label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  )
}
