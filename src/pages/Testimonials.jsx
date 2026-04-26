import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const slides = [
  { stars: 5, quote: 'Paratech rebuilt our site from scratch and within 90 days organic traffic doubled. Their SEO team is world-class — and they actually explain what they\u2019re doing.', initials: 'SK', name: 'Sarah Kowalski', role: 'Founder, Brightline Health' },
  { stars: 5, quote: 'Easily the most professional agency we\u2019ve worked with. Communication is fast, deliverables are pixel-perfect, and they push back when something isn\u2019t right for the brand.', initials: 'MR', name: 'Marcus Reed', role: 'CMO, Northwind Logistics' },
  { stars: 5, quote: 'Our Shopify store revenue jumped 38% in the first quarter after Paratech overhauled our PDPs and ad funnels. ROI was clear from week one.', initials: 'JL', name: 'Jenna Liu', role: 'Owner, Aurelia & Co.' },
  { stars: 5, quote: 'They redesigned our site and ran a tight Google Ads program in parallel. Cost per lead dropped 47%. They\u2019re the real deal — not your typical agency.', initials: 'DT', name: 'David Thompson', role: 'CEO, Coastline Realty' },
  { stars: 5, quote: 'Beautiful design, blazing fast site, and a team that genuinely cares about results. We\u2019ve already referred three other founders to Paratech.', initials: 'AP', name: 'Aisha Patel', role: 'Founder, Verdant Studio' },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const sliderRef = useRef(null)
  const timerRef = useRef(null)

  const start = () => {
    stop()
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length)
    }, 5500)
  }
  const stop = () => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }

  useEffect(() => {
    start()
    return stop
  }, [])

  // Touch swipe
  useEffect(() => {
    const el = sliderRef.current
    if (!el) return
    let sx = 0, dx = 0
    const onStart = (e) => { sx = e.touches[0].clientX; dx = 0; stop() }
    const onMove = (e) => { dx = e.touches[0].clientX - sx }
    const onEnd = () => {
      if (Math.abs(dx) > 50) {
        setIdx((i) => (i + (dx < 0 ? 1 : -1) + slides.length) % slides.length)
      }
      start()
    }
    el.addEventListener('touchstart', onStart, { passive: true })
    el.addEventListener('touchmove', onMove, { passive: true })
    el.addEventListener('touchend', onEnd)
    return () => {
      el.removeEventListener('touchstart', onStart)
      el.removeEventListener('touchmove', onMove)
      el.removeEventListener('touchend', onEnd)
    }
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What Our"
        gradTitle="Clients Say"
        description="Don't take our word for it — here's what business owners across the US say about working with Paratech."
        current="Testimonials"
      />

      <section className="testimonials">
        <div className="container">
          <div
            className="slider reveal"
            ref={sliderRef}
            onMouseEnter={stop}
            onMouseLeave={start}
          >
            <div className="slider-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
              {slides.map((s, i) => (
                <div className="slide" key={i}>
                  <div className="testimonial-card">
                    <div className="stars">{'★'.repeat(s.stars)}</div>
                    <p className="testimonial-quote">&ldquo;{s.quote}&rdquo;</p>
                    <div className="testimonial-author">
                      <div className="avatar">{s.initials}</div>
                      <div className="author-info">
                        <div className="name">{s.name}</div>
                        <div className="role">{s.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="slider-dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`dot${i === idx ? ' active' : ''}`}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => { setIdx(i); start() }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container reveal">
          <h2>Join the <span className="grad">Happy Clients</span></h2>
          <p>Ready to write your own success story? Let&rsquo;s talk.</p>
          <Link to="/contact" className="btn btn-primary" data-cursor="hover">Get in Touch <i className="fas fa-arrow-right"></i></Link>
        </div>
      </section>
    </>
  )
}
