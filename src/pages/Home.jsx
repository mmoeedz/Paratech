import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Counter from '../components/Counter.jsx'
import seoImage from '../../SEO optimization.png'
import localSeoImage from '../../Local SEO.png'
import webDesignImage from '../../Web Design.png'

const skills = [
  {
    title: 'SEO',
    image: seoImage,
    desc: 'Improve rankings, site health, and organic visibility with focused search strategy.',
  },
  {
    title: 'Google Map Optimization',
    image: localSeoImage,
    desc: 'Improve your presence in Google Maps with accurate listings, reviews, categories, and location signals.',
  },
  {
    title: 'Web Design',
    image: webDesignImage,
    desc: 'Fast, polished, mobile-friendly websites designed to turn visitors into leads.',
  },
]

const faqs = [
  {
    question: 'What services does your digital marketing agency offer?',
    answer: 'Our digital marketing agency provides a wide range of services, including website design, web development, search engine optimization (SEO), social media marketing, video production, web copywriting, pay-per-click advertising, software development, and more.',
  },
  {
    question: 'How much does your digital marketing agency charge for its services?',
    answer: 'Our digital marketing agency’s pricing varies depending on the services we provide to our clients. We present a detailed quote as part of our customized package after a thorough discussion of the projects with the client.',
  },
  {
    question: 'Can you provide any examples of your previously successful projects?',
    answer: 'We have successfully completed numerous projects for a wide range of clients in various industries. You can look through our portfolio or contact us if you want to see any specific case studies.',
  },
  {
    question: 'How does your digital marketing agency approach a new project?',
    answer: 'Our team begins by thoroughly analyzing the client’s business and fully comprehending their goals and objectives. We then develop a customized strategy to achieve our clients’ objectives.',
  },
  {
    question: 'How do you ensure that the work you deliver meets the needs & expectations of your clients?',
    answer: 'We prioritize effective client communication and ensure that the work we deliver meets their expectations. We strive to meet the highest quality standards by utilizing a quality assurance process.',
  },
  {
    question: 'Do you stay up to date with the latest trends?',
    answer: 'Our digital marketing agency provides a wide range of services, including Website Design, Web Development, Search Engine Optimization (SEO), Social Media Marketing, Video Production, Web Copywriting, Pay-Per-Click Advertising, Software Development, and more.',
  },
]

export default function Home() {
  useEffect(() => {
    document.body.setAttribute('data-page', 'home')
    return () => document.body.removeAttribute('data-page')
  }, [])
  return (
    <>
      <section className="home-reference-hero" id="home">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <span className="home-kicker reveal">Digital Growth Partner</span>
            <h1 className="reveal delay-1">
              We Grow Businesses With Smart <span>Digital Solutions</span>
            </h1>
            <p className="reveal delay-2">
              From SEO to full-scale marketing and development, we deliver results that drive traffic, leads, and real growth.
            </p>
            <div className="home-hero-actions reveal delay-3">
              <Link to="/contact" className="btn btn-primary" data-cursor="hover">Get Started</Link>
              <Link to="/services" className="btn btn-outline" data-cursor="hover">
                Our Services <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>

          <div className="home-hero-visual reveal delay-2" aria-label="Website growth report">
            <div className="monitor-card">
              <div className="traffic-panel">
                <span>Website Traffic</span>
                <strong>+250%</strong>
                <svg viewBox="0 0 420 190" aria-hidden="true">
                  <polyline points="18,146 68,106 118,142 174,94 224,47 282,118 334,66 381,90 410,34" />
                  <path d="M392 29 L414 31 L405 53" />
                </svg>
              </div>
              <div className="mini-panels">
                <div className="lead-panel">
                  <div className="donut" aria-hidden="true"></div>
                  <div>
                    <span>Leads Generated</span>
                    <strong>+180%</strong>
                  </div>
                </div>
                <div>
                  <span>Ranked Keywords</span>
                  <strong>#1</strong>
                  <small>+156%</small>
                </div>
              </div>
              <div className="monitor-stand" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats" id="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card reveal"><Counter target={200} suffix="+" /><div className="stat-label">Happy Clients</div></div>
            <div className="stat-card reveal delay-1"><Counter target={112} /><div className="stat-label">Professionals Joined Forces</div></div>
            <div className="stat-card reveal delay-2"><Counter target={8} suffix="+" /><div className="stat-label">Years Experience</div></div>
            <div className="stat-card reveal delay-3"><Counter target={226} /><div className="stat-label">Businesses Digitalized</div></div>
          </div>
        </div>
      </section>

      <section className="home-skills-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Our Skills</span>
            <h2>Focused Services For <span className="grad">Growth</span></h2>
            <p>Start with the three essentials: SEO, Google Map Optimization, and Web Design.</p>
          </div>

          <div className="home-skills-grid">
            {skills.map((skill, i) => (
              <article className={`home-skill-card reveal${i ? ` delay-${i}` : ''}`} key={skill.title}>
                <img src={skill.image} alt={`${skill.title} preview`} />
                <div>
                  <h3>{skill.title}</h3>
                  <p>{skill.desc}</p>
                  <Link to="/services" className="service-link">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-faq-section">
        <div className="container home-faq-grid">
          <div className="home-faq-title reveal">
            <span>FAQs</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="home-faq-list reveal delay-1">
            {faqs.map((faq, i) => (
              <details key={faq.question} className="faq-item" open={i === 0}>
                <summary>
                  {faq.question}
                  <i className="fas fa-chevron-down" aria-hidden="true"></i>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
