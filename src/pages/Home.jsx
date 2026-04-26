import { Link } from 'react-router-dom'
import Particles from '../components/Particles.jsx'
import Typewriter from '../components/Typewriter.jsx'
import Counter from '../components/Counter.jsx'

const services = [
  ['fas fa-code', 'Web Design & Development', 'Custom, lightning-fast, fully responsive websites built with modern technologies and conversion in mind.'],
  ['fas fa-search', 'SEO Optimization', 'Rank higher, get found, and grow organically with data-driven SEO strategies tailored to your niche.'],
  ['fas fa-bullhorn', 'Social Media Marketing', 'Engage audiences, build communities, and convert followers into loyal customers across every platform.'],
  ['fas fa-shopping-cart', 'E-Commerce Solutions', 'Powerful, scalable online stores on Shopify, WooCommerce, and custom platforms that maximize conversions.'],
  ['fas fa-envelope-open-text', 'Email Marketing', 'Targeted, automated campaigns and funnels that nurture leads and drive predictable revenue.'],
  ['fas fa-chart-line', 'Google Ads / PPC', 'Paid search and social campaigns engineered for maximum ROI, with full transparency and reporting.'],
]

export default function Home() {
  return (
    <>
      <section className="hero" id="home">
        <Particles />
        <div className="hero-grid-overlay" aria-hidden="true"></div>

        <div className="floating-badges" aria-hidden="true">
          <div className="badge b1"><i className="fas fa-users"></i> 200+ Clients</div>
          <div className="badge b2"><i className="fas fa-rocket"></i> 500+ Projects</div>
          <div className="badge b3"><i className="fas fa-star"></i> 5★ Rated</div>
          <div className="badge b4"><i className="fas fa-award"></i> Award Winning</div>
        </div>

        <div className="container">
          <div className="hero-content">
            <span className="eyebrow reveal">★ Premium Digital Agency</span>
            <h1 className="reveal delay-1">
              <Typewriter />
              <br />
              for Modern Brands
            </h1>
            <p className="hero-sub reveal delay-2">
              Premium Web Development &amp; SEO Agency — Trusted by 200+ Businesses to design, build, and grow high-performance digital experiences.
            </p>
            <div className="hero-cta reveal delay-3">
              <Link to="/contact" className="btn btn-primary" data-cursor="hover">Start Your Project <i className="fas fa-arrow-right"></i></Link>
              <Link to="/portfolio" className="btn btn-outline" data-cursor="hover"><i className="fas fa-play"></i> View Our Work</Link>
            </div>
          </div>
        </div>

        <a href="#stats" className="scroll-indicator" aria-label="Scroll down">
          <div className="mouse" aria-hidden="true"></div>
          <span>Scroll</span>
        </a>
      </section>

      <section className="stats" id="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card reveal"><Counter target={200} suffix="+" /><div className="stat-label">Happy Clients</div></div>
            <div className="stat-card reveal delay-1"><Counter target={500} suffix="+" /><div className="stat-label">Projects Delivered</div></div>
            <div className="stat-card reveal delay-2"><Counter target={5} suffix="+" /><div className="stat-label">Years Experience</div></div>
            <div className="stat-card reveal delay-3"><Counter target={98} suffix="%" /><div className="stat-label">Client Satisfaction</div></div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Our Services</span>
            <h2>What We <span className="grad">Do Best</span></h2>
            <p>Full-stack digital solutions engineered to elevate your brand, drive measurable growth, and outperform the competition.</p>
          </div>

          <div className="services-grid">
            {services.map(([icon, title, desc], i) => (
              <article key={i} className={`service-card reveal${i % 3 ? ` delay-${i % 3}` : ''}`} data-cursor="hover">
                <div className="service-icon"><i className={icon}></i></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link to="/services" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }} className="reveal">
            <Link to="/services" className="btn btn-primary" data-cursor="hover">View All Services <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container reveal">
          <span className="eyebrow">Let&rsquo;s Talk</span>
          <h2>Ready to <span className="grad">Grow Online?</span></h2>
          <p>Get a free 30-minute consultation. We&rsquo;ll review your goals, audit your current presence, and outline a tailored growth plan.</p>
          <Link to="/contact" className="btn btn-primary" data-cursor="hover">Start Your Project <i className="fas fa-arrow-right"></i></Link>
        </div>
      </section>
    </>
  )
}
