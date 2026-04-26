import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Counter from '../components/Counter.jsx'

const tech = [
  ['fab fa-react', 'React'],
  ['fab fa-wordpress', 'WordPress'],
  ['fab fa-shopify', 'Shopify'],
  ['fab fa-node-js', 'Node.js'],
  ['fab fa-google', 'Google'],
  ['fab fa-figma', 'Figma'],
  ['fab fa-html5', 'HTML5'],
  ['fab fa-css3-alt', 'CSS3'],
  ['fab fa-js', 'JavaScript'],
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Paratech"
        title="Built for"
        gradTitle="Ambitious Brands"
        description="We're a results-driven digital agency blending creative design, engineering excellence, and growth strategy."
        current="About"
      />

      <section>
        <div className="container">
          <div className="about-grid">
            <div className="about-text reveal">
              <span className="eyebrow">Why Paratech</span>
              <h2>Why Businesses <span className="grad">Choose Paratech</span></h2>
              <p>Our mission is simple — help ambitious brands win online with websites that perform, content that ranks, and campaigns that convert. We pair senior talent with transparent processes so you always know what&rsquo;s happening and why.</p>

              <div className="features">
                <div className="feature"><span className="feature-check"><i className="fas fa-check"></i></span><span>Transparent Pricing &amp; Reporting</span></div>
                <div className="feature"><span className="feature-check"><i className="fas fa-check"></i></span><span>Dedicated Account Manager</span></div>
                <div className="feature"><span className="feature-check"><i className="fas fa-check"></i></span><span>Proven Results-Driven Approach</span></div>
                <div className="feature"><span className="feature-check"><i className="fas fa-check"></i></span><span>Fast Turnaround Times</span></div>
              </div>

              <Link to="/contact" className="btn btn-primary" data-cursor="hover">Work With Us <i className="fas fa-arrow-right"></i></Link>
            </div>

            <div className="about-visual reveal delay-2">
              <div className="about-blob" aria-hidden="true"></div>
              <div className="tech-stack" aria-label="Tech stack">
                {tech.map(([icon, name]) => (
                  <div key={name} className="tech-item">
                    <div className="ti-inner"><i className={icon}></i><span>{name}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card reveal"><Counter target={200} suffix="+" /><div className="stat-label">Happy Clients</div></div>
            <div className="stat-card reveal delay-1"><Counter target={500} suffix="+" /><div className="stat-label">Projects Delivered</div></div>
            <div className="stat-card reveal delay-2"><Counter target={5} suffix="+" /><div className="stat-label">Years Experience</div></div>
            <div className="stat-card reveal delay-3"><Counter target={98} suffix="%" /><div className="stat-label">Client Satisfaction</div></div>
          </div>
        </div>
      </section>
    </>
  )
}
