import { useEffect, useRef } from 'react'

export default function Particles() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w, h, particles = []
    const count = window.innerWidth < 768 ? 40 : 90

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * window.devicePixelRatio
      h = canvas.height = canvas.offsetHeight * window.devicePixelRatio
    }
    resize()
    window.addEventListener('resize', resize)

    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.6 + 0.4,
      o: Math.random() * 0.6 + 0.2,
    }))

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x, dy = p.y - q.y
          const d2 = dx * dx + dy * dy
          const max = 130 * window.devicePixelRatio
          if (d2 < max * max) {
            const a = 1 - Math.sqrt(d2) / max
            ctx.strokeStyle = `rgba(34, 197, 94, ${a * 0.18})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        ctx.fillStyle = `rgba(34, 197, 94, ${p.o})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * window.devicePixelRatio, 0, Math.PI * 2)
        ctx.fill()
      }
      if (!prefersReduced) raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])
  return <canvas id="particles" ref={ref} aria-hidden="true"></canvas>
}
