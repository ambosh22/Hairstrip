import logo from '../../assets/hairstrip.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="Hair Strip Salon" className="footer-logo-img" />
            <div>
              <span className="footer-logo-name">Hair Strip</span>
              <span className="footer-logo-tag">Salon</span>
            </div>
          </div>
          <p className="footer-brand-desc">
            Your trusted salon for premium hair care and styling. 
            Let us bring out the best in you.
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }) }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}>About</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }}>Services</a></li>
              <li><a href="#gallery" onClick={(e) => { e.preventDefault(); document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }) }}>Gallery</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="footer-location">801 Tolentino Compound, Rizal St. Poblacion, Mangaldan Behind Verons Shoe Square</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <a href="tel:09289656466">0928 965 6466</a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:zandrei07@icloud.com">zandrei07@icloud.com</a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <a href="https://www.facebook.com/profile.php?id=100063841281984" target="_blank" rel="noopener noreferrer">Follow us on Facebook</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-line"></div>
          <p>&copy; {new Date().getFullYear()} Hair Strip Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
