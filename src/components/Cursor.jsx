import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(max-width: 900px)').matches) return
    const cursor = cursorRef.current
    const dot = dotRef.current
    if (!cursor || !dot) return

    let mx = window.innerWidth / 2, my = window.innerHeight / 2
    let cx = mx, cy = my
    let raf

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`
    }
    const tick = () => {
      cx += (mx - cx) * 0.18
      cy += (my - cy) * 0.18
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)

    const hoverSel = 'a, button, [data-cursor="hover"], .filter-tab, .dot, .portfolio-item, .service-card, .tech-item, .stat-card'
    const onOver = (e) => { if (e.target.closest(hoverSel)) cursor.classList.add('hover') }
    const onOut = (e) => { if (e.target.closest(hoverSel)) cursor.classList.remove('hover') }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-dot" ref={dotRef}></div>
    </>
  )
}
