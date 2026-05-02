import { useTheme } from '../contexts/ThemeContext.jsx'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      data-cursor="hover"
    >
      <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
    </button>
  )
}