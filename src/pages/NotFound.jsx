import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="Page"
        gradTitle="Not Found"
        description="Sorry, the page you're looking for doesn't exist or has been moved."
        current="404"
      />
      <section>
        <div className="container" style={{ textAlign: 'center' }}>
          <Link to="/" className="btn btn-primary" data-cursor="hover">
            Go Home <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  )
}
