import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const projects = [
    {
      title: 'Puntoon Kids - Video to Comic AI',
      category: 'Content Generation',
      description: 'Developed an AI pipeline that automatically converts YouTube videos into comic strips, revolutionizing content distribution for 3.4M+ subscribers.',
      stats: {
        impact: '3.4M+ Users',
        efficiency: '20x Faster',
        cost: '80% Reduced'
      },
      tags: ['Computer Vision', 'Deep Learning', 'Generative AI'],
      featured: true
    },
    {
      title: 'Vidunit - Enterprise AI Platform',
      category: 'Business Solutions',
      description: 'Built comprehensive AI business solutions including automation, predictive analytics, and intelligent workflows for enterprise clients.',
      stats: {
        impact: '50+ Clients',
        efficiency: '500% ROI',
        cost: '$2.5M Saved'
      },
      tags: ['Enterprise AI', 'Automation', 'Business Intelligence']
    },
    {
      title: 'E-commerce AI Assistant',
      category: 'Conversational AI',
      description: 'Created an intelligent shopping assistant that increased conversion rates by 45% through personalized recommendations and 24/7 support.',
      stats: {
        impact: '10K+ Queries/Day',
        efficiency: '45% Conversion',
        cost: '90% Automated'
      },
      tags: ['NLP', 'Chatbot', 'Machine Learning']
    },
    {
      title: 'Manufacturing Predictive AI',
      category: 'Predictive Analytics',
      description: 'Implemented predictive maintenance system that reduced downtime by 70% and saved millions in operational costs.',
      stats: {
        impact: '70% Less Downtime',
        efficiency: '95% Accuracy',
        cost: '$1.2M Saved'
      },
      tags: ['IoT', 'Predictive Analytics', 'Machine Learning']
    },
    {
      title: 'Healthcare Diagnostic AI',
      category: 'Healthcare AI',
      description: 'Developed AI-powered diagnostic tools that assist doctors in early disease detection with 97% accuracy.',
      stats: {
        impact: '10K+ Patients',
        efficiency: '97% Accuracy',
        cost: '60% Faster'
      },
      tags: ['Medical AI', 'Deep Learning', 'Image Recognition']
    },
    {
      title: 'Financial Fraud Detection',
      category: 'Security AI',
      description: 'Built real-time fraud detection system processing millions of transactions with 99.9% accuracy.',
      stats: {
        impact: '$10M+ Protected',
        efficiency: '99.9% Accurate',
        cost: 'Real-time'
      },
      tags: ['Fraud Detection', 'Real-time AI', 'Security']
    }
  ]

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>Portfolio & Case Studies</h2>
          <p className="section-subtitle">
            Real-world AI implementations that delivered transformative results
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className={`portfolio-card ${project.featured ? 'featured' : ''}`}>
              {project.featured && <span className="featured-badge">Featured Project</span>}
              <div className="portfolio-header">
                <h3>{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>
              <p className="project-description">{project.description}</p>
              
              <div className="project-stats">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="stat">
                    <span className="stat-value">{value}</span>
                    <span className="stat-label">{key}</span>
                  </div>
                ))}
              </div>

              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>

              <button className="btn-view-case">
                View Case Study <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <h3>Have a Project in Mind?</h3>
          <p>Let's discuss how AI can transform your business</p>
          <a href="#contact" className="btn btn-primary">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio