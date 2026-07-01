import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiCheckCircle, FiAlertCircle, FiSend } from 'react-icons/fi'
import { profile } from '@/data/content'
import Reveal from '@/components/Reveal'

// ── EmailJS setup ──
// 1. dashboard.emailjs.com → Email Services → copy Service ID
// 2. Email Templates → use {{name}} {{email}} {{title}} {{message}} → copy Template ID
// 3. Account → copy Public Key
const SERVICE_ID = 'service_bqz1frg'
const TEMPLATE_ID = 'template_kwsrlt9'
const PUBLIC_KEY = 'qRuXpuffjXgbDIots'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const subject = String(data.get('subject') || '').trim()
    const message = String(data.get('message') || '').trim()

    if (!name) { setStatus('error'); setErrorMsg('Please enter your name.'); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setStatus('error'); setErrorMsg('Please enter a valid email.'); return }
    if (!message) { setStatus('error'); setErrorMsg('Please write a message.'); return }

    setStatus('loading')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name, email, title: subject || '(No subject)', message },
        { publicKey: PUBLIC_KEY },
      )
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg('Something went wrong. Please email me directly instead.')
      console.error(err)
    }
  }

  return (
    <div className="container-px py-20">
      <Reveal>
        <span className="eyebrow">Get In Touch</span>
        <h1 className="section-heading mt-3">Contact</h1>
        <p className="text-slate-muted mt-4 max-w-xl">Open to fresher roles, freelance projects, and collaborations.</p>
      </Reveal>

      <div className="grid md:grid-cols-[280px_1fr] gap-12 mt-14">
        {/* LEFT — info */}
        <Reveal>
          <div className="flex flex-col gap-7">
            <InfoRow icon={<FiPhone />} label="Phone"><a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></InfoRow>
            <InfoRow icon={<FiMail />} label="Email"><a href={`mailto:${profile.email}`} className="break-all">{profile.email}</a></InfoRow>
            <InfoRow icon={<FiMapPin />} label="Location">
              <p>{profile.location}</p>
              <p className="text-xs text-slate-muted mt-1">Open to relocate — {profile.relocate}</p>
            </InfoRow>
            <div>
              <span className="font-mono text-[0.7rem] uppercase tracking-wider text-signal">Availability</span>
              <p className="text-cipher text-sm mt-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cipher" /> Available from 2026
              </p>
            </div>
            <div className="flex gap-3 mt-2">
              <SocialIcon href={profile.linkedin} label="LinkedIn"><FiLinkedin /></SocialIcon>
              <SocialIcon href={profile.twitter} label="Twitter"><FiTwitter /></SocialIcon>
              <SocialIcon href={profile.github} label="GitHub"><FiGithub /></SocialIcon>
            </div>
          </div>
        </Reveal>

        {/* RIGHT — form */}
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} noValidate className="card-surface p-8 flex flex-col gap-5">
            <div>
              <p className="font-display font-bold text-lg">Send a Message</p>
              <p className="font-mono text-xs text-slate-muted mt-1">I'll reply within 24 hours.</p>
            </div>

            {status === 'success' && (
              <Banner kind="success" icon={<FiCheckCircle />}>Message sent! I'll get back to you within 24 hours.</Banner>
            )}
            {status === 'error' && (
              <Banner kind="error" icon={<FiAlertCircle />}>{errorMsg}</Banner>
            )}

            <Field label="Name" name="name" required placeholder="Your full name" />
            <Field label="Email" name="email" type="email" required placeholder="you@email.com" />
            <Field label="Subject" name="subject" placeholder="Job opportunity / Project / Other" />
            <div>
              <label className="font-mono text-[0.7rem] uppercase tracking-wider text-slate-muted">Message</label>
              <textarea
                name="message" required rows={5} placeholder="Tell me about the role or project…"
                className="w-full mt-2 px-4 py-3 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10
                           focus:border-cipher outline-none transition-colors resize-none text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-signal text-ink font-semibold text-sm
                         hover:bg-signal-dim transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending…' : <>Send Message <FiSend /></>}
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  )
}

function InfoRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="font-mono text-[0.7rem] uppercase tracking-wider text-signal flex items-center gap-2">{icon}{label}</span>
      <div className="text-sm mt-2 text-slate-muted">{children}</div>
    </div>
  )
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
       className="grid place-items-center w-10 h-10 rounded-full border border-black/10 dark:border-white/15 hover:border-signal hover:text-signal transition-colors">
      {children}
    </a>
  )
}

function Field({ label, name, type = 'text', required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder: string }) {
  return (
    <div>
      <label className="font-mono text-[0.7rem] uppercase tracking-wider text-slate-muted">
        {label} {required && <span className="text-signal">*</span>}
      </label>
      <input
        type={type} name={name} required={required} placeholder={placeholder}
        className="w-full mt-2 px-4 py-3 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10
                   focus:border-cipher outline-none transition-colors text-sm"
      />
    </div>
  )
}

function Banner({ kind, icon, children }: { kind: 'success' | 'error'; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium
      ${kind === 'success' ? 'bg-cipher/10 text-cipher border border-cipher/30' : 'bg-red-500/10 text-red-400 border border-red-500/30'}`}>
      {icon}{children}
    </div>
  )
}
