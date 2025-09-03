import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <a href="#home" className="nav-brand">
            <span className="brand-icon">👑</span>
            <span className="brand-text">Royal<span className="brand-accent">AI</span></span>
          </a>
          
          <ul className={`nav-menu ${mobileMenu ? 'active' : ''}`}>
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          <div className="nav-cta">
            <a href="tel:+918459431389" className="nav-phone">
              <i className="fas fa-phone"></i>
              <span>+91-8459431389</span>
            </a>
            <button 
              className="nav-toggle"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar