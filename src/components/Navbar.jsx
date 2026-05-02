import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import ptLogo from '../../PT logo Background removed.png'

const megaCols = [
  {
    title: 'Search Engine Optimization',
    items: [
      ['fas fa-map-marker-alt', 'Local SEO', 'Dominate local search results'],
      ['fas fa-map', 'Google Map Optimization', 'Rank in the local 3-pack'],
      ['fas fa-store', 'SEO For Small Business', 'Affordable growth-focused SEO'],
      ['fas fa-quote-right', 'Local Business Citation', 'Consistent NAP listings'],
      ['fas fa-bullseye', 'Landing Page Optimization', 'Higher conversion rates'],
      ['fas fa-cogs', 'Technical SEO', 'Site speed, schema, indexing'],
    ],
  },
  {
    sections: [
      {
        title: 'Search Engine Marketing',
        items: [
          ['fas fa-mouse-pointer', 'Pay Per Click Advertising', 'High-intent paid traffic'],
          ['fab fa-google', 'Google Ads', 'Search, Display & YouTube'],
        ],
      },
      {
        title: 'Web Design & Development',
        items: [
          ['fab fa-wordpress', 'WordPress Development', 'Custom themes & plugins'],
          ['fab fa-shopify', 'Shopify Development', 'High-converting stores'],
        ],
      },
    ],
  },
  {
    sections: [
      { title: 'Social Media', items: [['fas fa-share-alt', 'Social Media Management', 'Content, ads & community']] },
      { title: 'Marketing Automation', items: [['fas fa-users-cog', 'CRM Development', 'Custom CRM & workflows']] },
      { title: 'Software Development', items: [['fas fa-mobile-alt', 'App Development', 'iOS, Android & cross-platform']] },
      { title: 'Virtual Assistant', items: [['fas fa-headset', 'Virtual Assistant', 'Dedicated support & ops']] },
    ],
  },
]

function MegaItem({ icon, title, sub, closeMenu }) {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  return (
    <Link className="mega-link" to={`/services#${slug}`} onClick={closeMenu}>
      <span className="mega-icon"><i className={icon}></i></span>
      <span className="mega-text">
        <span className="mega-title">{title}</span>
        <span className="mega-sub">{sub}</span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const megaRef = useRef(null)
  const location = useLocation()

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
  }, [location.pathname, location.hash])

  const closeMenu = () => {
    setMobileOpen(false)
    setMegaOpen(false)
  }

  // Scroll glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Outside-click & ESC for mega menu
  useEffect(() => {
    const onClick = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) setMegaOpen(false)
    }
    const onKey = (e) => { if (e.key === 'Escape') setMegaOpen(false) }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo" data-cursor="hover">
          <img className="pt-logo-img" src={ptLogo} alt="ParaTech" />
        </Link>

        <nav className="nav-links" aria-label="Primary">
          <NavLink to="/" end>Home</NavLink>

          <div 
            className={`has-mega${megaOpen ? ' open' : ''}`} 
            ref={megaRef}
            onMouseEnter={() => {
              if (window.matchMedia('(min-width: 901px)').matches) setMegaOpen(true)
            }}
            onMouseLeave={() => {
              if (window.matchMedia('(min-width: 901px)').matches) setMegaOpen(false)
            }}
          >
            <NavLink
              to="/services"
              aria-haspopup="true"
              aria-expanded={megaOpen}
              onClick={(e) => {
                if (window.matchMedia('(min-width: 901px)').matches && !megaOpen) {
                  e.preventDefault()
                  setMegaOpen(true)
                }
              }}
            >
              Services <i className="fas fa-chevron-down caret"></i>
            </NavLink>
            <div className="mega" role="menu" aria-label="Services menu">
              <div className="mega-grid">
                {megaCols.map((col, i) => (
                  <div key={i} className="mega-col">
                    {col.title && (
                      <>
                        <h5>{col.title}</h5>
                        <ul>
                          {col.items.map(([icon, t, s], j) => (
                            <li key={j}><MegaItem icon={icon} title={t} sub={s} closeMenu={closeMenu} /></li>
                          ))}
                        </ul>
                      </>
                    )}
                    {col.sections && col.sections.map((sec, k) => (
                      <div key={k}>
                        <h5>{sec.title}</h5>
                        <ul>
                          {sec.items.map(([icon, t, s], j) => (
                            <li key={j}><MegaItem icon={icon} title={t} sub={s} closeMenu={closeMenu} /></li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/about">About</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="nav-cta">
          <Link to="/contact" className="btn btn-glow" data-cursor="hover">
            Get Free Audit
          </Link>
          <button
            className={`hamburger${mobileOpen ? ' active' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu${mobileOpen ? ' active' : ''}`}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <Link to="/contact" className="btn btn-primary mobile-cta">
          Get in Touch <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </header>
  )
}
