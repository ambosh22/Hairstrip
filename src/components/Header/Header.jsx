import { useState, useEffect } from 'react'
import logo from '../../assets/hairstrip.png'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <img src={logo} alt="Hair Strip Salon Logo" className="logo-img" />
          <div className="logo-text">
            <span className="logo-name">Hair Strip</span>
            <span className="logo-tagline">Salon</span>
          </div>
        </a>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
            <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a></li>
            <li><a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>Gallery</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a></li>
          </ul>
        </nav>

        <div className="header-contact">
          <a href="tel:09289656466" className="header-phone">0928 965 6466</a>
          <a href="mailto:zandrei07@icloud.com" className="header-email">zandrei07@icloud.com</a>
        </div>

        <button className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
