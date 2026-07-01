import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '@/context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="grid place-items-center w-9 h-9 rounded-full border border-black/10 dark:border-white/15
                 text-ink dark:text-bone hover:border-signal hover:text-signal transition-colors"
    >
      {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  )
}
