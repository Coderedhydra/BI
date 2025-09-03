import './style.css'

// Create the app
document.querySelector('#app').innerHTML = `
  <!-- Floating Contact Buttons -->
  <div class="floating-contact">
    <a href="https://wa.me/919075228258?text=I want to increase my profits with AI" class="float-btn float-whatsapp">
      <i class="fab fa-whatsapp"></i>
    </a>
    <a href="tel:+918459431389" class="float-btn float-call">
      <i class="fas fa-phone"></i>
    </a>
  </div>

  <!-- Navigation -->
  <nav class="navbar">
    <div class="container">
      <a href="#" class="nav-brand">💰 ProfitAI</a>
      <div class="nav-cta">
        <a href="tel:+918459431389" class="nav-phone">
          <i class="fas fa-phone"></i>
          <span>+91-8459431389</span>
        </a>
        <button class="btn btn-primary" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
          Get Free Profit Analysis
        </button>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="profit-banner">
        🚀 LIMITED TIME: Get Your FREE AI Profit Analysis (Worth $5000)
      </div>
      
      <h1 class="hero-title">
        Your Business + My AI = 
        <span class="highlight-money">500% More Profit</span>
      </h1>
      
      <p class="hero-subtitle">
        I've helped 150+ businesses save $2.5M+ using AI. 
        <br>Now it's your turn to print money.
      </p>

      <div class="profit-stats">
        <div class="profit-stat">
          <div class="stat-icon">💰</div>
          <div class="stat-value">$2.5M+</div>
          <div class="stat-label">Client Savings</div>
        </div>
        <div class="profit-stat">
          <div class="stat-icon">📈</div>
          <div class="stat-value">500%</div>
          <div class="stat-label">Average ROI</div>
        </div>
        <div class="profit-stat">
          <div class="stat-icon">⚡</div>
          <div class="stat-value">2-4 Weeks</div>
          <div class="stat-label">To See Results</div>
        </div>
      </div>

      <div class="cta-group">
        <a href="https://wa.me/919075228258?text=I want my FREE profit analysis" class="btn btn-primary">
          <i class="fab fa-whatsapp"></i>
          WhatsApp Me Now
        </a>
        <a href="tel:+918459431389" class="btn btn-secondary">
          <i class="fas fa-phone"></i>
          Call for Instant Help
        </a>
      </div>

      <p style="margin-top: 20px; color: #666;">
        <i class="fas fa-shield-alt" style="color: #00c853;"></i>
        100% Money-Back Guarantee • No Results = No Payment
      </p>
    </div>
  </section>

  <!-- ROI Calculator -->
  <section class="roi-section" id="calculator">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          Calculate Your <span class="highlight-money">Profit Potential</span>
        </h2>
        <p class="section-subtitle">
          See exactly how much money AI can save your business
        </p>
      </div>

      <div class="roi-calculator">
        <div class="calculator-grid">
          <div class="input-group">
            <label>Monthly Operating Cost</label>
            <input type="number" id="monthlyCost" value="100000" placeholder="e.g., 100000">
          </div>
          <div class="input-group">
            <label>Number of Employees</label>
            <input type="number" id="employees" value="50" placeholder="e.g., 50">
          </div>
          <div class="input-group">
            <label>Industry</label>
            <select id="industry">
              <option value="1.5">E-commerce</option>
              <option value="1.8">Finance</option>
              <option value="1.6">Healthcare</option>
              <option value="1.7">Manufacturing</option>
              <option value="1.4">Services</option>
              <option value="2.0">Gaming/Content</option>
            </select>
          </div>
        </div>

        <button class="btn btn-primary" style="width: 100%;" onclick="calculateROI()">
          Calculate My Profit Potential
        </button>

        <div class="roi-results" id="roiResults" style="display: none; margin-top: 30px;">
          <h3>Your AI Profit Potential</h3>
          <div class="result-grid">
            <div class="result-item">
              <h4 id="monthlySavings">$0</h4>
              <p>Monthly Savings</p>
            </div>
            <div class="result-item">
              <h4 id="yearlySavings">$0</h4>
              <p>Yearly Savings</p>
            </div>
            <div class="result-item">
              <h4 id="roiPercent">0%</h4>
              <p>ROI in Year 1</p>
            </div>
          </div>
          <button class="btn btn-secondary" style="background: white; color: var(--profit-green);" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
            Claim These Savings Now →
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Services -->
  <section class="services" id="services">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          AI Solutions That <span class="highlight-money">Print Money</span>
        </h2>
        <p class="section-subtitle">
          Every solution is designed to maximize your profit
        </p>
      </div>

      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">🤖</div>
          <h3>AI Automation</h3>
          <p>Replace 80% of repetitive tasks with AI that works 24/7 without breaks, sick days, or salaries.</p>
          <span class="service-profit">Save $500K/year</span>
          <span class="service-metric">ROI: 650%</span>
        </div>

        <div class="service-card">
          <div class="service-icon">📊</div>
          <h3>Predictive Analytics</h3>
          <p>Know what your customers want before they do. Predict trends 3 months ahead with 95% accuracy.</p>
          <span class="service-profit">+45% Revenue</span>
          <span class="service-metric">ROI: 380%</span>
        </div>

        <div class="service-card">
          <div class="service-icon">💬</div>
          <h3>AI Customer Service</h3>
          <p>Handle 10,000+ customer queries daily in 50+ languages. Happy customers = More money.</p>
          <span class="service-profit">Save $1.2M/year</span>
          <span class="service-metric">ROI: 420%</span>
        </div>

        <div class="service-card">
          <div class="service-icon">🎨</div>
          <h3>Content AI</h3>
          <p>Create viral content 20x faster. Perfect for gaming channels, e-commerce, and marketing.</p>
          <span class="service-profit">+280% Engagement</span>
          <span class="service-metric">ROI: 520%</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="testimonials" id="testimonials">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          Real Clients, <span class="highlight-money">Real Profits</span>
        </h2>
        <p class="section-subtitle">
          Don't just take my word for it - see the money they're making
        </p>
      </div>

      <div class="testimonial-grid">
        <div class="testimonial-card featured">
          <div class="quote-icon">💬</div>
          <p class="testimonial-text">
            "The video-to-comic AI pipeline transformed our content creation. We're saving $1.5M annually and our 3.4M subscribers love it!"
          </p>
          <div class="testimonial-profit">+$1.5M Saved</div>
          <div class="testimonial-author">
            <div class="author-avatar">PG</div>
            <div class="author-info">
              <h4>Puntoon Games</h4>
              <p>3.4M YouTube Subscribers</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="quote-icon">💬</div>
          <p class="testimonial-text">
            "AI automation cut our costs by 65%. We're processing 10x more orders with half the staff."
          </p>
          <div class="testimonial-profit">650% ROI</div>
          <div class="testimonial-author">
            <div class="author-avatar">TC</div>
            <div class="author-info">
              <h4>TechCorp CEO</h4>
              <p>E-commerce Giant</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="quote-icon">💬</div>
          <p class="testimonial-text">
            "Predictive AI helped us spot trends early. Revenue up 45% in just 6 months!"
          </p>
          <div class="testimonial-profit">+45% Revenue</div>
          <div class="testimonial-author">
            <div class="author-avatar">FC</div>
            <div class="author-info">
              <h4>FinanceCore CTO</h4>
              <p>Investment Platform</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="contact" id="contact">
    <div class="container">
      <div class="contact-box">
        <h2 class="contact-title">
          Ready to <span class="highlight-money">Multiply Your Profits?</span>
        </h2>
        <p class="contact-subtitle">
          Let's discuss how AI can transform your business
        </p>

        <div class="contact-methods">
          <a href="https://wa.me/919075228258?text=I want to increase my profits with AI" class="contact-method">
            <i class="fab fa-whatsapp"></i>
            WhatsApp: +91-9075228258
          </a>
          <a href="tel:+918459431389" class="contact-method">
            <i class="fas fa-phone"></i>
            Call Now: +91-8459431389
          </a>
          <a href="mailto:amitjaiswal044@gmail.com" class="contact-method">
            <i class="fas fa-envelope"></i>
            amitjaiswal044@gmail.com
          </a>
        </div>

        <div class="profit-guarantee">
          <h3>🏆 My Profit Guarantee</h3>
          <p>If I don't increase your profits by at least 200% in 90 days, you pay nothing. Zero risk, all reward.</p>
        </div>
      </div>
    </div>
  </section>
`

// Calculate ROI Function
window.calculateROI = function() {
  const monthlyCost = parseFloat(document.getElementById('monthlyCost').value) || 0
  const employees = parseFloat(document.getElementById('employees').value) || 0
  const industryMultiplier = parseFloat(document.getElementById('industry').value) || 1.5
  
  // Calculate savings
  const costReduction = monthlyCost * 0.35 * industryMultiplier // 35% base reduction
  const employeeProductivity = employees * 2000 * industryMultiplier // $2000/employee/month
  const monthlySavingsValue = costReduction + employeeProductivity
  const yearlySavingsValue = monthlySavingsValue * 12
  const roiPercentValue = Math.round((yearlySavingsValue / (monthlyCost * 12)) * 100)
  
  // Update display
  document.getElementById('monthlySavings').textContent = `$${monthlySavingsValue.toLocaleString()}`
  document.getElementById('yearlySavings').textContent = `$${yearlySavingsValue.toLocaleString()}`
  document.getElementById('roiPercent').textContent = `${roiPercentValue}%`
  
  // Show results
  document.getElementById('roiResults').style.display = 'block'
  
  // Scroll to results
  document.getElementById('roiResults').scrollIntoView({ behavior: 'smooth', block: 'center' })
}

// Auto-calculate on page load
setTimeout(() => {
  if (document.getElementById('monthlyCost')) {
    calculateROI()
  }
}, 1000)