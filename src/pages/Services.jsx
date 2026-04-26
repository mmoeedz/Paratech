import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const services = [
  ['fas fa-code', 'Web Design & Development', 'Custom, lightning-fast, fully responsive websites built with modern technologies and conversion in mind.'],
  ['fas fa-search', 'SEO Optimization', 'Rank higher, get found, and grow organically with data-driven SEO strategies tailored to your niche.'],
  ['fas fa-bullhorn', 'Social Media Marketing', 'Engage audiences, build communities, and convert followers into loyal customers across every platform.'],
  ['fas fa-shopping-cart', 'E-Commerce Solutions', 'Powerful, scalable online stores on Shopify, WooCommerce, and custom platforms that maximize conversions.'],
  ['fas fa-envelope-open-text', 'Email Marketing', 'Targeted, automated campaigns and funnels that nurture leads and drive predictable revenue.'],
  ['fas fa-chart-line', 'Google Ads / PPC', 'Paid search and social campaigns engineered for maximum ROI, with full transparency and reporting.'],
  ['fab fa-wordpress', 'WordPress Development', 'Custom themes, plugins, headless setups, and lightning-fast WordPress builds for any niche.'],
  ['fab fa-shopify', 'Shopify Development', 'High-converting Shopify stores — theme customization, app integration, and Plus migrations.'],
  ['fas fa-mobile-alt', 'App Development', 'Native and cross-platform mobile apps for iOS and Android — built fast, built right.'],
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Solutions That"
        gradTitle="Drive Results"
        description="From pixel-perfect websites to data-driven SEO and high-ROI ad campaigns — everything you need to grow online, under one roof."
        current="Services"
      />

      <section>
        <div className="container">
          <div className="services-grid">
            {services.map(([icon, title, desc], i) => (
              <article key={i} className={`service-card reveal${i % 3 ? ` delay-${i % 3}` : ''}`} data-cursor="hover">
                <div className="service-icon"><i className={icon}></i></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link to="/contact" className="service-link">Get a Quote <i className="fas fa-arrow-right"></i></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container reveal">
          <h2>Need a <span className="grad">Custom Solution?</span></h2>
          <p>Don&rsquo;t see exactly what you need? Talk to a strategist — we tailor packages to your goals and budget.</p>
          <Link to="/contact" className="btn btn-primary" data-cursor="hover">Let&rsquo;s Talk <i className="fas fa-arrow-right"></i></Link>
        </div>
      </section>
    </>
  )
}
