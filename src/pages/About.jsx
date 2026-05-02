import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Counter from '../components/Counter.jsx'
import strategyImage from '../../1.png'
import growthImage from '../../2.png'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Paratech"
        title="About"
        gradTitle="Us"
        description="A growth-focused digital team helping brands build stronger websites, cleaner visibility, and smarter online systems."
        current="About"
      />

      <section className="about-green-section about-redesign">
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
              <div className="about-pictures-group" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '32px', zIndex: 2 }}>
                <img src={strategyImage} alt="Digital strategy" style={{ width: '80%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', alignSelf: 'flex-start' }} />
                <img src={growthImage} alt="Growth" style={{ width: '80%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', alignSelf: 'flex-end', marginTop: '-20%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats about-stats-shade">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card reveal"><Counter target={200} suffix="+" /><div className="stat-label">Happy Clients</div></div>
            <div className="stat-card reveal delay-1"><Counter target={112} /><div className="stat-label">Professionals Joined Forces</div></div>
            <div className="stat-card reveal delay-2"><Counter target={8} suffix="+" /><div className="stat-label">Years Experience</div></div>
            <div className="stat-card reveal delay-3"><Counter target={226} /><div className="stat-label">Businesses Digitalized</div></div>
          </div>
        </div>
      </section>
    </>
  )
}
