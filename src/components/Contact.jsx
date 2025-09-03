import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Let's Build Your AI Future</h2>
          <p className="section-subtitle">
            Get in touch to discuss how AI can transform your business
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Ready to Get Started?</h3>
            <p>
              Whether you need video-to-comic AI like Puntoon Kids or complete business transformation 
              like Vidunit, I'm here to help you achieve extraordinary results.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="method-content">
                  <h4>Phone</h4>
                  <a href="tel:+918459431389">+91-8459431389</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div className="method-content">
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/919075228258">+91-9075228258</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="method-content">
                  <h4>Email</h4>
                  <a href="mailto:amitjaiswal044@gmail.com">amitjaiswal044@gmail.com</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="method-content">
                  <h4>Location</h4>
                  <p>Available Worldwide</p>
                </div>
              </div>
            </div>

            <div className="availability">
              <h4>🟢 Currently Available for Projects</h4>
              <p>Response time: Within 2-4 hours</p>
            </div>

            <div className="quick-actions">
              <a href="https://wa.me/919075228258?text=Hi, I'm interested in AI solutions for my business" className="btn btn-gold">
                <i className="fab fa-whatsapp"></i>
                Quick WhatsApp Chat
              </a>
              <a href="tel:+918459431389" className="btn btn-secondary">
                <i className="fas fa-phone"></i>
                Call Now
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Company Name</label>
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Service Interested In *</label>
                  <select 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="video-to-comic">Video-to-Comic AI</option>
                    <option value="automation">Enterprise AI Automation</option>
                    <option value="analytics">AI Business Intelligence</option>
                    <option value="conversational">Conversational AI</option>
                    <option value="creative">Creative AI Solutions</option>
                    <option value="custom">Custom AI Development</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Budget Range</label>
                <select 
                  name="budget" 
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget range</option>
                  <option value="<5k">Less than $5,000</option>
                  <option value="5k-25k">$5,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>

              <div className="form-group">
                <label>Project Details *</label>
                <textarea 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project and how AI can help your business..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                <i className="fas fa-paper-plane"></i>
                Send Message
              </button>
            </form>

            <div className="form-footer">
              <p>🔒 Your information is secure and confidential</p>
              <p>📞 Prefer to talk? Call +91-8459431389</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact