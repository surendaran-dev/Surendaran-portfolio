import { skills } from '@/data/content'
import SkillBar from '@/components/SkillBar'
import Reveal from '@/components/Reveal'

export default function Skills() {
  return (
    <div className="container-px py-20">
      <Reveal>
        <span className="eyebrow">Capabilities</span>
        <h1 className="section-heading mt-3">Skills & Tech Stack</h1>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6 mt-14">
        {skills.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 0.08}>
            <div className="card-surface p-8">
              <h2 className="font-display font-bold text-lg mb-7">{group.category}</h2>
              <div className="flex flex-col gap-6">
                {group.items.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
