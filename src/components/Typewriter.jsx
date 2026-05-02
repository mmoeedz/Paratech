import { useEffect, useState } from 'react'

export default function Typewriter({
  phrases = [
    'We Generate Leads, Not Just Websites',
  ],
}) {
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const fullText = phrases[0]
    let charIndex = 0
    let timeoutId

    const animate = () => {
      if (charIndex < fullText.length) {
        setText(fullText.substring(0, charIndex + 1))
        charIndex++
        timeoutId = window.setTimeout(animate, 70)
      } else {
        setShowCursor(false)
      }
    }

    timeoutId = window.setTimeout(animate, 200)
    return () => window.clearTimeout(timeoutId)
  }, [phrases])

  return (
    <span className="gradient typed-wrap">
      <span>{text}</span>
      {showCursor && <span className="typed-cursor"></span>}
    </span>
  )
}
