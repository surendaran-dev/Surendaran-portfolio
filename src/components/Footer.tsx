import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { profile } from '@/data/content'

export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 mt-32">
      <div className="container-px py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-slate-muted">
          © {new Date().getFullYear()} {profile.name}. Built with React & Django.
        </p>
        <div className="flex items-center gap-5 text-lg">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-signal transition-colors"><FiGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-signal transition-colors"><FiLinkedin /></a>
          <a href={profile.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-signal transition-colors"><FiTwitter /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-signal transition-colors"><FiMail /></a>
        </div>
      </div>
    </footer>
  )
}
