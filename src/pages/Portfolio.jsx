import { useEffect, useState } from 'react'
import PageHero from '../components/PageHero.jsx'

const projects = [
  { title: 'City and Beyond', url: 'https://cityandbeyond1.com/' },
  { title: 'Prestigious Custom Cabinets', url: 'https://prestigiouscustomcabinets.com/' },
  { title: 'PMZ Mortgage', url: 'https://www.pmzmortgage.com/' },
  { title: 'DH Driving School', url: 'https://dhdrivingschool.com/' },
  { title: 'Rami Loans', url: 'https://www.ramiloans.com/' },
  { title: 'The Rental Authority', url: 'https://www.therentalauthority.com/' },
]

function domain(url) {
  return url.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '')
}

function previewUrl(url) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200`
}

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeProject])

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Our"
        gradTitle="Work"
        description="A selection of live websites we've helped bring online for businesses across service, finance, real estate, and home improvement industries."
        current="Portfolio"
      />

      <section className="portfolio-work-section">
        <div className="container">
          <div className="portfolio-work-grid">
            {projects.map((project, i) => (
              <button
                type="button"
                key={project.url}
                className={`portfolio-work-card reveal${i % 3 ? ` delay-${i % 3}` : ''}`}
                onClick={() => setActiveProject(project)}
                data-cursor="hover"
              >
                <span className="portfolio-preview-frame" aria-hidden="true">
                  <img src={previewUrl(project.url)} alt="" loading="lazy" />
                </span>
                <span className="portfolio-preview-overlay">
                  <span className="portfolio-card-number">{String(i + 1).padStart(2, '0')}</span>
                  <span className="portfolio-card-title">{project.title}</span>
                  <span className="portfolio-card-url">{domain(project.url)}</span>
                  <span className="portfolio-card-action">View inside page <i className="fas fa-arrow-right"></i></span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <div className="portfolio-viewer" role="dialog" aria-modal="true" aria-label={`${activeProject.title} website preview`}>
          <div className="portfolio-viewer-bar">
            <div>
              <strong>{activeProject.title}</strong>
              <span>{domain(activeProject.url)}</span>
            </div>
            <button type="button" onClick={() => setActiveProject(null)} aria-label="Close preview">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <iframe src={activeProject.url} title={`${activeProject.title} website`} />
        </div>
      )}
    </>
  )
}
