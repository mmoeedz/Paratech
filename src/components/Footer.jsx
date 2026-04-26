import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span className="dot"></span>Para<span className="grad">tech</span>
            </Link>
            <p>Building the Future, One Pixel at a Time. Premium web development, SEO, and digital marketing for ambitious brands.</p>
            <div className="socials">
              <a className="social-link" href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a className="social-link" href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a className="social-link" href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a className="social-link" href="#" aria-label="Twitter"><i className="fab fa-x-twitter"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Web Development</Link></li>
              <li><Link to="/services">SEO Optimization</Link></li>
              <li><Link to="/services">Social Media</Link></li>
              <li><Link to="/services">E-Commerce</Link></li>
              <li><Link to="/services">Google Ads</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">SEO Guide</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} Paratech. All rights reserved.</span>
          <span>Made with <i className="fas fa-bolt" style={{ color: 'var(--highlight)' }}></i> in Austin, TX</span>
        </div>
      </div>
    </footer>
  )
}
