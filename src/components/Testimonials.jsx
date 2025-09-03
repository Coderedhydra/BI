import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Puntoon Kids Team',
      role: 'YouTube Content Creators',
      company: '3.4M Subscribers',
      text: 'The video-to-comic AI system developed by our AI expert has completely transformed our content strategy. We can now repurpose our videos into engaging comic strips in minutes instead of days. This innovation has opened up entirely new revenue streams for us.',
      rating: 5,
      featured: true
    },
    {
      name: 'Sarah Chen',
      role: 'CEO',
      company: 'TechVentures Inc.',
      text: 'Working with this AI expert was a game-changer. The automation solutions reduced our operational costs by 65% while improving accuracy. The ROI was evident within the first month.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'Vidunit',
      text: 'The AI business solutions implemented have given us a competitive edge we never imagined. Predictive analytics helped us identify opportunities months ahead of our competitors.',
      rating: 5
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Director of Operations',
      company: 'HealthTech Solutions',
      text: 'The custom AI solution developed for our diagnostic processes has improved accuracy to 97% while reducing diagnosis time by 60%. Truly revolutionary work.',
      rating: 5
    },
    {
      name: 'David Kumar',
      role: 'Head of Digital',
      company: 'E-commerce Giant',
      text: 'Our AI-powered customer service now handles 90% of queries automatically with higher satisfaction rates than our human agents. Incredible implementation.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'VP Marketing',
      company: 'Creative Agency',
      text: 'The content generation AI has increased our output by 20x while maintaining brand consistency. We\'re creating personalized content at a scale we never thought possible.',
      rating: 5
    }
  ]

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Client Success Stories</h2>
          <p className="section-subtitle">
            Hear from the businesses transformed by our AI solutions
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial-card ${testimonial.featured ? 'featured' : ''}`}>
              {testimonial.featured && <span className="featured-badge">⭐ Featured</span>}
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>

              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-stats">
          <div className="stat-box">
            <h3>150+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-box">
            <h3>98%</h3>
            <p>Client Retention</p>
          </div>
          <div className="stat-box">
            <h3>500%</h3>
            <p>Average ROI</p>
          </div>
          <div className="stat-box">
            <h3>4.9/5</h3>
            <p>Client Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials