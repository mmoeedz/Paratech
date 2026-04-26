import { useEffect, useState } from 'react'

export default function Loader() {
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 600)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className={`loader${hidden ? ' hidden' : ''}`} aria-hidden="true">
      <div style={{ textAlign: 'center' }}>
        <div className="loader-logo">
          Paratech<span style={{ color: 'var(--highlight)' }}>.</span>
        </div>
        <div className="loader-bar"></div>
      </div>
    </div>
  )
}
