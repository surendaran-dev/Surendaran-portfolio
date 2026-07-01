import { motion } from 'framer-motion'

export default function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between mb-2 font-mono text-xs">
        <span className="text-ink dark:text-bone">{name}</span>
        <span className="text-cipher">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-cipher to-signal"
        />
      </div>
    </div>
  )
}
