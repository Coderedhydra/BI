import React from 'react'
import './About.css'

const About = () => {
  const skills = [
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'Natural Language Processing',
    'Generative AI',
    'AI Automation',
    'Predictive Analytics',
    'Chatbot Development',
    'Video-to-Comic AI',
    'Content Generation',
    'Business Intelligence',
    'AI Strategy'
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <div className="about-intro">
              <h3>AI Developer & Business Transformation Expert</h3>
              <p>
                With a proven track record at <strong>Puntoon Kids</strong> (3.4 million YouTube subscribers), 
                I specialize in developing cutting-edge AI solutions that drive real business results. 
                My expertise spans from creating innovative video-to-comic AI pipelines to implementing 
                enterprise-grade automation systems.
              </p>
            </div>

            <div className="experience-highlight">
              <div className="exp-icon">🎮</div>
              <div className="exp-content">
                <h4>Puntoon Kids YouTube Channel</h4>
                <p className="exp-role">AI Developer & Technical Lead</p>
                <p>
                  Developed groundbreaking AI systems for one of YouTube's fastest-growing kids' channels. 
                  Created automated content generation pipelines that transformed their production capabilities 
                  and helped reach millions of young viewers worldwide.
                </p>
                <div className="exp-achievements">
                  <span>3.4M+ Subscribers Impact</span>
                  <span>AI Pipeline Development</span>
                  <span>Content Automation</span>
                </div>
              </div>
            </div>

            <div className="skills-section">
              <h3>Technical Expertise</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <div className="image-placeholder">
                <i className="fas fa-brain"></i>
                <span>AI Expert</span>
              </div>
              <div className="floating-badge badge-1">
                <i className="fas fa-star"></i>
                3.4M+ Reach
              </div>
              <div className="floating-badge badge-2">
                <i className="fas fa-trophy"></i>
                150+ Projects
              </div>
              <div className="floating-badge badge-3">
                <i className="fas fa-chart-line"></i>
                500% ROI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About