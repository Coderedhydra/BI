import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-header">
              <span className="brand-icon">👑</span>
              <h3>Royal<span className="brand-accent">AI</span></h3>
            </div>
            <p>
              Transforming businesses with royal-class AI solutions. 
              From video-to-comic generation to enterprise automation, 
              we deliver results that matter.
            </p>
            <div className="footer-badges">
              <span className="badge">🏆 150+ Projects</span>
              <span className="badge">⭐ 4.9/5 Rating</span>
              <span className="badge">🚀 500% ROI</span>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Me</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-services">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Video-to-Comic AI</a></li>
              <li><a href="#services">Enterprise Automation</a></li>
              <li><a href="#services">Business Intelligence</a></li>
              <li><a href="#services">Conversational AI</a></li>
              <li><a href="#services">Custom Development</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <a href="tel:+918459431389">+91-8459431389</a>
            </div>
            <div className="contact-item">
              <i className="fab fa-whatsapp"></i>
              <a href="https://wa.me/919075228258">+91-9075228258</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:amitjaiswal044@gmail.com">amitjaiswal044@gmail.com</a>
            </div>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 RoyalAI Solutions. All rights reserved.</p>
          <p>Developed with 💜 by AI Expert | Former Developer at Puntoon Kids & Vidunit</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer