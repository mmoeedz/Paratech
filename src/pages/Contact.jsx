import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [sending, setSending] = useState(false)

  const update = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: '' }))
  }

  const validate = () => {
    const er = {}
    if (form.name.trim().length < 2) er.name = 'Please enter your name.'
    if (!isEmail(form.email.trim())) er.email = 'Please enter a valid email.'
    if (form.phone && !/^[\d\s+()\-]{7,}$/.test(form.phone.trim())) er.phone = 'Please enter a valid phone number.'
    if (!form.service) er.service = 'Please select a service.'
    if (form.message.trim().length < 10) er.message = 'Please tell us a bit more (min 10 chars).'
    setErrors(er)
    return Object.keys(er).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSending(true)
    setTimeout(() => {
      setSuccess(true)
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
      setSending(false)
      setTimeout(() => setSuccess(false), 6000)
    }, 900)
  }

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Build Something"
        gradTitle="Great Together"
        description="Tell us about your project. We'll get back within one business day with a tailored plan and quote."
        current="Contact"
      />

      <section>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <h3>Talk to a strategist.</h3>
              <p>Free 30-minute consultation — no pressure, no fluff. Just clear answers and an honest assessment of what&rsquo;s possible.</p>

              <div className="contact-list">
                <div className="contact-item">
                  <span className="contact-icon"><i className="fas fa-envelope"></i></span>
                  <div><div className="label">Email</div><div className="val">example@example.com</div></div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon"><i className="fas fa-phone"></i></span>
                  <div><div className="label">Phone</div><div className="val">+1 (111) 222-3333</div></div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon"><i className="fas fa-map-marker-alt"></i></span>
                  <div><div className="label">Location</div><div className="val">USA</div></div>
                </div>
              </div>

              <div className="socials" aria-label="Social links">
                <a className="social-link" href="#" aria-label="Facebook" data-cursor="hover"><i className="fab fa-facebook-f"></i></a>
                <a className="social-link" href="#" aria-label="Instagram" data-cursor="hover"><i className="fab fa-instagram"></i></a>
                <a className="social-link" href="#" aria-label="LinkedIn" data-cursor="hover"><i className="fab fa-linkedin-in"></i></a>
                <a className="social-link" href="#" aria-label="Twitter" data-cursor="hover"><i className="fab fa-x-twitter"></i></a>
              </div>
            </div>

            <form className="contact-form reveal delay-2" noValidate onSubmit={onSubmit}>
              <div className={`form-success${success ? ' show' : ''}`}>
                <i className="fas fa-check-circle"></i> Thanks! We&rsquo;ll be in touch within one business day.
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" value={form.name} onChange={update('name')}
                    className={`form-control${errors.name ? ' error' : ''}`}
                    placeholder="Your full name" autoComplete="name" />
                  <span className="err-msg">{errors.name || ''}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" value={form.email} onChange={update('email')}
                    className={`form-control${errors.email ? ' error' : ''}`}
                    placeholder="you@company.com" autoComplete="email" />
                  <span className="err-msg">{errors.email || ''}</span>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" type="tel" value={form.phone} onChange={update('phone')}
                    className={`form-control${errors.phone ? ' error' : ''}`}
                    placeholder="Your Phone Number" autoComplete="tel" />
                  <span className="err-msg">{errors.phone || ''}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Needed</label>
                  <select id="service" value={form.service} onChange={update('service')}
                    className={`form-control${errors.service ? ' error' : ''}`}>
                    <option value="">Select a service...</option>
                    <option value="web">Web Design &amp; Development</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="ecom">E-Commerce</option>
                    <option value="email">Email Marketing</option>
                    <option value="ppc">Google Ads / PPC</option>
                    <option value="other">Something else</option>
                  </select>
                  <span className="err-msg">{errors.service || ''}</span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" value={form.message} onChange={update('message')}
                  className={`form-control${errors.message ? ' error' : ''}`}
                  placeholder="Tell us a bit about your project, goals, and timeline..." />
                <span className="err-msg">{errors.message || ''}</span>
              </div>

              <button type="submit" className="btn btn-primary submit-btn" data-cursor="hover" disabled={sending}>
                <span className="btn-label">{sending ? 'Sending...' : 'Send Message'}</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
