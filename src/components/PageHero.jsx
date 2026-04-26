import { Link } from 'react-router-dom'

export default function PageHero({ eyebrow, title, gradTitle, description, current }) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow && <span className="eyebrow reveal">{eyebrow}</span>}
        <h1 className="reveal delay-1">
          {title} {gradTitle && <span className="grad">{gradTitle}</span>}
        </h1>
        {description && <p className="reveal delay-2">{description}</p>}
        <nav className="breadcrumbs reveal delay-3" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="sep">/</span>
          <span className="current">{current}</span>
        </nav>
      </div>
    </section>
  )
}
