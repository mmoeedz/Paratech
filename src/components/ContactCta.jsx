import { Link } from 'react-router-dom'
import contactCta from '../../Contact us.png'

export default function ContactCta() {
  return (
    <section className="site-contact-cta" style={{ backgroundImage: `url("${contactCta}")` }} aria-label="Contact us">
      <div className="container">
        <Link to="/contact" className="contact-cta-button" data-cursor="hover">
          Contact Us <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  )
}
