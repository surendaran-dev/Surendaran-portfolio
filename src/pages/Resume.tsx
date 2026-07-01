import { FiDownload } from 'react-icons/fi'
import { profile } from '@/data/content'
import Reveal from '@/components/Reveal'

export default function Resume() {
  return (
    <div className="container-px py-20">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">CV</span>
            <h1 className="section-heading mt-3">Resume</h1>
          </div>
          <a href={profile.resumeUrl} download
             className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-signal text-ink font-semibold text-sm hover:bg-signal-dim transition-colors">
            <FiDownload /> Download PDF
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <div className="card-surface overflow-hidden h-[80vh]">
          <iframe
            src={profile.resumeUrl}
            title="Resume preview"
            className="w-full h-full"
          />
        </div>
      </Reveal>

      <p className="font-mono text-xs text-slate-muted mt-4">
        {/* Place your resume PDF at /public/resume.pdf */}
        Note: add your PDF file at <code>public/resume.pdf</code> for the preview and download to work.
      </p>
    </div>
  )
}
