import { useEffect, useRef, useState } from 'react'

export default function Counter({ target, suffix = '', duration = 1800 }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const step = (t) => {
            const p = Math.min((t - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setVal(Math.floor(eased * target))
            if (p < 1) requestAnimationFrame(step)
            else setVal(target)
          }
          requestAnimationFrame(step)
          io.unobserve(el)
        }
      })
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])

  return <div className="stat-num" ref={ref}>{val}{suffix}</div>
}
