import { Link } from 'react-router-dom'
import ptLogo from '../../PT logo Background removed.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main-layout">
          <div className="footer-left-side">
            <div className="footer-top-links">
              <div className="footer-col">
                <h4>SEO Services</h4>
                <ul>
                  <li><Link to="/services">Local SEO</Link></li>
                  <li><Link to="/services">Google Map Optimization</Link></li>
                  <li><Link to="/services">SEO for Small Business</Link></li>
                  <li><Link to="/services">Local Business Citations</Link></li>
                  <li><Link to="/services">Technical SEO</Link></li>
                  <li><Link to="/services">Landing Page Optimization</Link></li>
                </ul>

                <h4>SEO Services</h4>
                <ul>
                  <li><Link to="/services">Social Media Management</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Web Design &amp; Development</h4>
                <ul>
                  <li><Link to="/services">WordPress Development</Link></li>
                  <li><Link to="/services">Shopify Development</Link></li>
                </ul>

                <h4>Search Engine Marketing</h4>
                <ul>
                  <li><Link to="/services">PPC Advertising</Link></li>
                  <li><Link to="/services">Google Ads</Link></li>
                </ul>
              </div>
            </div>

            <div className="footer-divider"></div>

            <div className="footer-bottom-links">
              <div className="footer-info-box">
                <h3 className="footer-huge-title">Info.</h3>
                <p>+1(111) 222 333</p>
                <p>contact@paratech.com</p>
                <p>USA</p>
              </div>
              
              <div className="footer-policy-box">
                <ul className="footer-policy-links">
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms &amp; Conditions</a></li>
                  <li><a href="#">Cancellation Policy</a></li>
                  <li><a href="#">Contact Us Policy</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-right-side">
            <Link to="/" className="footer-p-logo" aria-label="ParaTech home">
              <img src={ptLogo} alt="ParaTech" />
            </Link>
            
            <div className="footer-contact-highlight">
              <i className="fas fa-phone-alt"></i>
              <span>+1(111) 222 333</span>
            </div>
            
            <p className="footer-info-desc">Paratech is a top digital agency where our skilled professionals focus solely on improving engagement and boosting website conversions.</p>
            <p className="footer-info-desc">We design digital experiences that are specifically tailored to the needs of the market and our clients.</p>
            
            <Link className="footer-careers" to="/contact"><i className="fas fa-chevron-right" style={{fontSize: '0.6em', marginRight: '8px', verticalAlign: 'middle'}}></i>Careers</Link>
            
            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; Copyright {year} All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  )
}
