import React from 'react'
import './About.css'

const About = () => {
  const skills = [
    'Video-to-Comic AI',
    'Computer Vision',
    'Deep Learning',
    'Generative AI',
    'Machine Learning',
    'Natural Language Processing',
    'AI Automation',
    'Business Intelligence',
    'Predictive Analytics',
    'Content Generation',
    'AI Pipeline Development',
    'Enterprise AI Solutions'
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
                Pioneering AI solutions that transform how businesses create content and operate. 
                With expertise in <strong>video-to-comic generation</strong> and <strong>enterprise AI systems</strong>, 
                I help companies achieve unprecedented efficiency and creativity through artificial intelligence.
              </p>
            </div>

            <div className="experience-section">
              <h3>Professional Experience</h3>
              
              <div className="experience-highlight">
                <div className="exp-icon">🎮</div>
                <div className="exp-content">
                  <h4>Puntoon Kids YouTube Channel</h4>
                  <p className="exp-role">AI Developer - Video to Comic Generation</p>
                  <p>
                    Developed and implemented a revolutionary <strong>AI-based video-to-comic generation system</strong> 
                    for one of YouTube's leading kids' channels with 3.4 million subscribers. This groundbreaking 
                    technology automatically transforms video content into engaging comic strips, revolutionizing 
                    content creation and distribution.
                  </p>
                  <div className="exp-achievements">
                    <span>🎨 Video-to-Comic AI Pipeline</span>
                    <span>📹 3.4M+ Subscribers Impact</span>
                    <span>🚀 20x Faster Production</span>
                    <span>🤖 Automated Comic Generation</span>
                  </div>
                </div>
              </div>

              <div className="experience-highlight">
                <div className="exp-icon">💼</div>
                <div className="exp-content">
                  <h4>Vidunit</h4>
                  <p className="exp-role">AI Business Solutions Developer</p>
                  <p>
                    Architected and deployed comprehensive <strong>AI business solutions</strong> at Vidunit, 
                    focusing on enterprise automation, intelligent workflows, and data-driven decision making. 
                    Helped businesses achieve digital transformation through custom AI implementations.
                  </p>
                  <div className="exp-achievements">
                    <span>🏢 Enterprise AI Solutions</span>
                    <span>📊 Business Intelligence</span>
                    <span>⚡ Process Automation</span>
                    <span>💰 500% Average ROI</span>
                  </div>
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

            <div className="specialization-cards">
              <div className="spec-card">
                <i className="fas fa-video"></i>
                <h4>Video-to-Comic AI</h4>
                <p>Expert in transforming video content into comic strips using advanced AI</p>
              </div>
              <div className="spec-card">
                <i className="fas fa-building"></i>
                <h4>Enterprise Solutions</h4>
                <p>Custom AI implementations for business transformation and growth</p>
              </div>
              <div className="spec-card">
                <i className="fas fa-robot"></i>
                <h4>AI Automation</h4>
                <p>Automating complex processes to achieve 10x efficiency gains</p>
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
                <i className="fas fa-film"></i>
                Video-to-Comic
              </div>
              <div className="floating-badge badge-2">
                <i className="fas fa-users"></i>
                3.4M+ Reach
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