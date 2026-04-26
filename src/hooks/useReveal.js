import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Re-runs after every route change so newly mounted .reveal elements get observed.
export default function useReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    // Slight delay so DOM is settled
    const id = requestAnimationFrame(() => {
      const els = document.querySelectorAll('.reveal:not(.in)')
      if (!els.length) return
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            io.unobserve(en.target)
          }
        })
      }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' })
      els.forEach((el) => io.observe(el))
    })
    return () => cancelAnimationFrame(id)
  }, [pathname])
}
