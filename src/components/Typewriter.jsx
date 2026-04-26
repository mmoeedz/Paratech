import { useEffect, useState } from 'react'

export default function Typewriter({
  phrases = [
    'We Build Stunning Websites',
    'We Rank You #1 on Google',
    'We Grow Your Business Online',
  ],
}) {
  const [text, setText] = useState('')

  useEffect(() => {
    let pi = 0, ci = 0, deleting = false, timer
    const tick = () => {
      const cur = phrases[pi]
      if (!deleting) {
        ci++
        setText(cur.slice(0, ci))
        if (ci === cur.length) { deleting = true; timer = setTimeout(tick, 1800); return }
        timer = setTimeout(tick, 70)
      } else {
        ci--
        setText(cur.slice(0, ci))
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; timer = setTimeout(tick, 250); return }
        timer = setTimeout(tick, 35)
      }
    }
    tick()
    return () => clearTimeout(timer)
  }, [phrases])

  return (
    <span className="gradient typed-wrap">
      <span>{text}</span><span className="typed-cursor"></span>
    </span>
  )
}
