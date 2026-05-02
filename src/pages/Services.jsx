import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import seoImage from '../../SEO optimization.png'
import localSeoImage from '../../Local SEO.png'
import webDesignImage from '../../Web Design.png'
import socialImage from '../../Social Media Marketing.png'
import ecommerceImage from '../../E-com Solution.png'
import googleAdsImage from '../../Google Ads.png'
import wordpressImage from '../../Wordpress.png'
import shopifyImage from '../../Shopify.png'
import appImage from '../../App Dev.png'
import emailImage from '../../Email Marketing.png'

const services = [
  ['fas fa-code', 'Web Design & Development', webDesignImage, 'Custom, lightning-fast, fully responsive websites built with modern technologies and conversion in mind.'],
  ['fas fa-search', 'SEO Optimization', seoImage, 'Rank higher, get found, and grow organically with data-driven SEO strategies tailored to your niche.'],
  ['fas fa-map', 'Google Map Optimization', localSeoImage, 'Improve your presence in Google Maps with accurate listings, reviews, categories, and location signals.'],
  ['fas fa-bullhorn', 'Social Media Marketing', socialImage, 'Engage audiences, build communities, and convert followers into loyal customers across every platform.'],
  ['fas fa-shopping-cart', 'E-Commerce Solutions', ecommerceImage, 'Powerful, scalable online stores on Shopify, WooCommerce, and custom platforms that maximize conversions.'],
  ['fas fa-chart-line', 'Google Ads / PPC', googleAdsImage, 'Paid search and social campaigns engineered for maximum ROI, with full transparency and reporting.'],
  ['fab fa-wordpress', 'WordPress Development', wordpressImage, 'Custom themes, plugins, headless setups, and lightning-fast WordPress builds for any niche.'],
  ['fab fa-shopify', 'Shopify Development', shopifyImage, 'High-converting Shopify stores with theme customization, app integration, and conversion planning.'],
  ['fas fa-envelope-open-text', 'Email Marketing', emailImage, 'Targeted campaigns and funnels that nurture leads, recover sales, and grow repeat business.'],
  ['fas fa-mobile-alt', 'App Development', appImage, 'Native and cross-platform app experiences built around usability, performance, and growth.'],
]

const slugify = text => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')

const slugMap = {
  'local-seo': 'seo-optimization',
  'seo-for-small-business': 'seo-optimization',
  'local-business-citation': 'seo-optimization',
  'technical-seo': 'seo-optimization',
  'landing-page-optimization': 'web-design-development',
  'pay-per-click-advertising': 'google-ads-ppc',
  'google-ads': 'google-ads-ppc',
  'social-media-management': 'social-media-marketing',
  'crm-development': 'web-design-development',
  'virtual-assistant': 'social-media-marketing'
}

export default function Services() {
  const location = useLocation()

  useEffect(() => {
    document.body.setAttribute('data-page', 'services')
    return () => document.body.removeAttribute('data-page')
  }, [])

  useEffect(() => {
    if (location.hash) {
      const hashSlug = location.hash.replace('#', '')
      const targetSlug = slugMap[hashSlug] || hashSlug
      
      const element = document.getElementById(targetSlug)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
          element.classList.add('highlight-card')
          setTimeout(() => element.classList.remove('highlight-card'), 2000)
        }, 300)
      }
    }
  }, [location.hash])

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Solutions That"
        gradTitle="Drive Results"
        description="From pixel-perfect websites to data-driven SEO and high-ROI ad campaigns, everything you need to grow online under one roof."
        current="Services"
      />

      <section>
        <div className="container">
          <div className="services-grid">
            {services.map(([icon, title, image, desc], i) => {
              const cardId = slugify(title);
              return (
                <article id={cardId} key={title} className={`service-card reveal${i % 3 ? ` delay-${i % 3}` : ''}`} data-cursor="hover">
                  <img className="service-card-image" src={image} alt={`${title} service`} />
                  <div className="service-icon"><i className={icon}></i></div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <Link to="/contact" className="service-link">Get a Quote <i className="fas fa-arrow-right"></i></Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container reveal">
          <h2>Need a <span className="grad">Custom Solution?</span></h2>
          <p>Don't see exactly what you need? Talk to a strategist. We tailor packages to your goals and budget.</p>
          <Link to="/contact" className="btn btn-primary" data-cursor="hover">Let's Talk <i className="fas fa-arrow-right"></i></Link>
        </div>
      </section>
    </>
  )
}
