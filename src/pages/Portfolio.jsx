import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const projects = [
  { thumb: 'Nexora SaaS', cls: 'pt-1', cat: 'websites', tag: 'Website', title: 'Nexora SaaS Platform', desc: 'Modern marketing site with custom animations and CMS integration.' },
  { thumb: 'Lumière Store', cls: 'pt-2', cat: 'ecommerce', tag: 'E-Commerce', title: 'Lumière Beauty Store', desc: 'Shopify Plus build with conversion-optimized PDP and checkout flow.' },
  { thumb: 'RankRise', cls: 'pt-3', cat: 'seo', tag: 'SEO', title: 'RankRise Local SEO', desc: 'Grew organic traffic 412% in 6 months for a local services company.' },
  { thumb: 'Vertex Studio', cls: 'pt-4', cat: 'websites', tag: 'Website', title: 'Vertex Creative Studio', desc: 'Award-style portfolio site with WebGL hero and smooth scroll.' },
  { thumb: 'Pulse Apparel', cls: 'pt-5', cat: 'ecommerce', tag: 'E-Commerce', title: 'Pulse Apparel', desc: 'Headless commerce build using Next.js and Shopify Storefront API.' },
  { thumb: 'FinPilot', cls: 'pt-6', cat: 'seo', tag: 'SEO', title: 'FinPilot Content SEO', desc: 'Full content strategy that 5x\u2019d inbound demo requests in one quarter.' },
]

const filters = [
  ['all', 'All'],
  ['websites', 'Websites'],
  ['seo', 'SEO'],
  ['ecommerce', 'E-Commerce'],
]

export default function Portfolio() {
  const [active, setActive] = useState('all')

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Recent"
        gradTitle="Projects"
        description="A glimpse of the brands we've helped scale — from sleek startup sites to enterprise-grade e-commerce platforms."
        current="Portfolio"
      />

      <section>
        <div className="container">
          <div className="filter-tabs reveal">
            {filters.map(([key, label]) => (
              <button
                key={key}
                className={`filter-tab${active === key ? ' active' : ''}`}
                onClick={() => setActive(key)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {projects.map((p, i) => {
              const hidden = active !== 'all' && p.cat !== active
              return (
                <article
                  key={i}
                  className={`portfolio-item reveal${i % 3 ? ` delay-${i % 3}` : ''}${hidden ? ' hide' : ''}`}
                  data-cursor="hover"
                >
                  <div className={`portfolio-thumb ${p.cls}`}>{p.thumb}</div>
                  <div className="portfolio-overlay">
                    <span className="portfolio-tag">{p.tag}</span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <Link to="/contact" className="btn-mini">View Project <i className="fas fa-arrow-right"></i></Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container reveal">
          <h2>Want to be <span className="grad">Next?</span></h2>
          <p>Let&rsquo;s build something great together. Tell us about your project and we&rsquo;ll send back a tailored plan.</p>
          <Link to="/contact" className="btn btn-primary" data-cursor="hover">Start Your Project <i className="fas fa-arrow-right"></i></Link>
        </div>
      </section>
    </>
  )
}
