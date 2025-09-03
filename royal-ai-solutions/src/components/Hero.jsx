import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge fade-in">
            <span className="badge-icon">⭐</span>
            <span>AI Expert • 3.4M+ Impact • Enterprise Solutions</span>
          </div>
          
          <h1 className="hero-title fade-in">
            Transforming Businesses with
            <span className="text-gradient"> Royal-Class AI Solutions</span>
          </h1>
          
          <p className="hero-subtitle fade-in">
            Former AI Developer at Puntoon Kids (3.4M YouTube Subscribers). 
            Now helping enterprises achieve 500% ROI through cutting-edge artificial intelligence.
          </p>

          <div className="hero-stats fade-in">
            <div className="stat-item">
              <h3>3.4M+</h3>
              <p>Audience Reached</p>
            </div>
            <div className="stat-item">
              <h3>150+</h3>
              <p>AI Projects</p>
            </div>
            <div className="stat-item">
              <h3>500%</h3>
              <p>Average ROI</p>
            </div>
          </div>

          <div className="hero-cta fade-in">
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-rocket"></i>
              Start Your AI Journey
            </a>
            <a href="https://wa.me/919075228258" className="btn btn-gold">
              <i className="fab fa-whatsapp"></i>
              WhatsApp Consultation
            </a>
          </div>

          <div className="hero-trust fade-in">
            <p>Trusted by leading companies worldwide</p>
            <div className="trust-logos">
              <span className="trust-logo">Puntoon Kids</span>
              <span className="trust-logo">Tech Leaders</span>
              <span className="trust-logo">Enterprises</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero