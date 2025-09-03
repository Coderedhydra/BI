import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '🎬',
      title: 'Video-to-Comic AI Generation',
      description: 'Transform your video content into engaging comic strips using the same technology I developed for Puntoon Kids. Perfect for content creators and media companies.',
      features: [
        'Automatic scene detection',
        'AI-powered comic layout',
        'Character extraction',
        'Speech bubble generation'
      ],
      price: 'Custom Quote',
      roi: '20x faster production'
    },
    {
      icon: '🤖',
      title: 'Enterprise AI Automation',
      description: 'Complete business process automation using cutting-edge AI. Reduce operational costs by up to 70% while improving accuracy.',
      features: [
        'Workflow automation',
        'Intelligent document processing',
        'Predictive maintenance',
        '24/7 autonomous operation'
      ],
      price: 'From $5,000/month',
      roi: '650% average ROI'
    },
    {
      icon: '📊',
      title: 'AI Business Intelligence',
      description: 'Make data-driven decisions with AI-powered analytics. Predict trends, identify opportunities, and stay ahead of competition.',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Customer behavior analysis',
        'Market trend forecasting'
      ],
      price: 'From $3,000/month',
      roi: '+45% revenue growth'
    },
    {
      icon: '💬',
      title: 'Conversational AI Systems',
      description: 'Deploy intelligent chatbots and virtual assistants that understand context and deliver exceptional customer experiences.',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Sentiment analysis',
        'CRM integration'
      ],
      price: 'From $2,000/month',
      roi: '90% query resolution'
    },
    {
      icon: '🎨',
      title: 'Creative AI Solutions',
      description: 'Generate content, designs, and creative assets at scale. Perfect for marketing teams and content creators.',
      features: [
        'Content generation',
        'Image creation',
        'Video editing automation',
        'Brand consistency'
      ],
      price: 'From $1,500/month',
      roi: '280% engagement boost'
    },
    {
      icon: '🔧',
      title: 'Custom AI Development',
      description: 'Bespoke AI solutions tailored to your unique business challenges. From concept to deployment.',
      features: [
        'Custom model training',
        'API development',
        'System integration',
        'Ongoing optimization'
      ],
      price: 'Project-based',
      roi: 'Tailored to your needs'
    }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>AI Services & Solutions</h2>
          <p className="section-subtitle">
            Comprehensive AI solutions that transform your business operations and drive exponential growth
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <span className="service-icon">{service.icon}</span>
                <span className="service-roi">{service.roi}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="service-footer">
                <span className="service-price">{service.price}</span>
                <button className="btn-service">Get Started</button>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h3>Ready to Transform Your Business with AI?</h3>
          <p>Let's discuss how these solutions can be customized for your specific needs</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-calendar"></i>
              Schedule Consultation
            </a>
            <a href="https://wa.me/919075228258" className="btn btn-gold">
              <i className="fab fa-whatsapp"></i>
              Quick Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services