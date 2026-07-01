export const profile = {
  name: 'Surendaran Soundarrajan',
  role: 'Python Full Stack Developer',
  goal: 'Software Engineer',
  location: 'Salem, Tamil Nadu, India',
  relocate: 'Chennai · Coimbatore · Bengaluru',
  email: 'surendaran.developer@gmail.com',
  phone: '+91 63811 12401',
  github: 'https://github.com/surendaran-dev',
  linkedin: 'www.linkedin.com/in/surendaran-dev',
  twitter: 'https://x.com/surendaran06',
  resumeUrl: '/resume.pdf',
  photo: '/surendaran.jpg',
  tagline: 'I build secure, production-grade web applications — from encrypted desktop systems to full-stack platforms.',
  objective:
    'Motivated BCA graduate with hands-on Python Full Stack development training, seeking an entry-level software engineer role where I can apply Python, Django, and modern frontend technologies to build impactful digital products. I thrive on solving problems, writing clean code, and continuously learning.',
}

export const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    org: 'AVS College of Arts & Science, Salem',
    period: '2023 – 2026',
  },
]

export const training = [
  {
    title: 'Python Full Stack Development',
    org: 'Livewire Institute, Salem',
    period: '2025 – 2026',
    status: 'In Progress',
    detail:
      'Comprehensive training in Python, Django, REST APIs, HTML5, CSS3, Bootstrap, JavaScript, MySQL, Git & GitHub.',
  },
]

export const experience = [
  {
    title: 'Data Analysis — Virtual Internship',
    period: '2024',
    points: [
      'Performed data cleaning, exploratory analysis, and visualization using Python, Excel, SQL, and Google Sheets.',
      'Delivered a final project on a retail dataset, transforming raw data into an actionable dashboard report.',
    ],
  },
  {
    title: 'AI & Machine Learning — Virtual Internship',
    period: '2024',
    points: [
      'Explored supervised learning, model training, and evaluation metrics using scikit-learn and NumPy.',
      'Built and tested predictive models on real-world datasets.',
    ],
  },
  {
    title: 'Cybersecurity Fundamentals — Virtual Internship',
    period: '2024',
    points: [
      'Studied network security, threat analysis, and file encryption techniques.',
      'Applied concepts in a practical File Security System project using Python.',
    ],
  },
]

export type SkillGroup = { category: string; items: { name: string; level: number }[] }

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML / CSS', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 65 },
      { name: 'Tailwind CSS', level: 75 },
      { name: 'Bootstrap', level: 85 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Python', level: 88 },
      { name: 'Django', level: 70 },
      { name: 'REST APIs', level: 68 },
      { name: 'Node.js (basic)', level: 40 },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MySQL', level: 75 },
      { name: 'PostgreSQL', level: 55 },
      { name: 'SQLite', level: 80 },
    ],
  },
  {
    category: 'Tools & Cloud',
    items: [
      { name: 'Git & GitHub', level: 82 },
      { name: 'VS Code', level: 90 },
      { name: 'Linux', level: 60 },
      { name: 'Docker (basic)', level: 35 },
    ],
  },
]

export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  features: string[]
  stack: string[]
  github: string
  demo?: string
  status: 'Completed' | 'In Progress'
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'talkeasy',
    title: 'TalkEasy',
    tagline: 'Encrypted Desktop Chat Application',
    description:
      'A fully self-built desktop messaging application written entirely in Python — real-time messaging, unread badges, read receipts, and typing indicators, with AES-256 end-to-end encryption and QR-code contact sharing.',
    features: [
      'AES-256 end-to-end message encryption',
      'QR-code based contact addition',
      'Image sharing with in-app preview',
      'Real-time typing indicators & read receipts',
      'Five-tab interface: Chat, Contacts, QR, Settings, Profile',
    ],
    stack: ['Python', 'Tkinter', 'cryptography (AES-256)', 'qrcode', 'Pillow', 'pygame', 'MySQL'],
    github: 'https://github.com/surendaran-dev',
    status: 'Completed',
    difficulty: 'Advanced',
    featured: true,
  },
  {
    slug: 'portfolio-platform',
    title: 'Developer Portfolio Platform',
    tagline: 'React + Django full-stack personal site',
    description:
      'This very site — a React 19 + TypeScript frontend with a Django REST Framework backend, built to demonstrate full-stack architecture, JWT auth, and clean API design.',
    features: [
      'Django REST API for projects, blog, and contact form',
      'JWT-authenticated admin dashboard',
      'PostgreSQL data layer',
      'CI/CD-ready deployment configuration',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Django REST Framework', 'PostgreSQL'],
    github: 'https://github.com/surendaran-dev',
    status: 'In Progress',
    difficulty: 'Advanced',
  },
]

export const certifications: { title: string; provider: string; date: string; link?: string }[] = [
  {
    title: 'Python Full Stack Development (in progress)',
    provider: 'Livewire Institute',
    date: '2025 – 2026',
  },
]

export const languages = [
  { name: 'Tamil', level: 'Native' },
  { name: 'English', level: 'Proficient' },
]

export const softSkills = [
  'Problem Solving',
  'Communication',
  'Adaptability',
  'Team Collaboration',
  'Time Management',
  'Continuous Learning',
]
