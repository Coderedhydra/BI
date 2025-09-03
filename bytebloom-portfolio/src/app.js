export function createApp() {
  // Create the app HTML
  document.querySelector('#app').innerHTML = `
    <!-- Preloader -->
    <div class="preloader" id="preloader">
      <div class="crown-loader">
        <i class="fas fa-crown"></i>
        <div class="loader-text">ByteBloom</div>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="navbar" id="navbar">
      <div class="container">
        <div class="nav-brand">
          <i class="fas fa-crown brand-icon"></i>
          <span>Byte<span class="royal-accent">Bloom</span></span>
        </div>
        <ul class="nav-menu" id="navMenu">
          <li><a href="#home" class="nav-link">Home</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#services" class="nav-link">Solutions</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <div class="nav-toggle" id="navToggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="royal-particles"></div>
      <div class="container">
        <div class="hero-content">
          <div class="crown-badge">
            <i class="fas fa-crown"></i>
            <span>Premium AI Solutions</span>
          </div>
          <h1 class="hero-title">
            <span class="royal-text">Royal Class AI</span>
            <span class="subtitle">For Enterprise Excellence</span>
          </h1>
          <p class="hero-description">
            Experience the pinnacle of artificial intelligence. ByteBloom delivers 
            premium solutions that guarantee <strong>10x ROI</strong> and transform 
            your business into an industry leader.
          </p>
          
          <div class="value-cards">
            <div class="value-card">
              <i class="fas fa-rocket"></i>
              <h3>500%</h3>
              <p>Average ROI</p>
            </div>
            <div class="value-card">
              <i class="fas fa-clock"></i>
              <h3>90%</h3>
              <p>Time Saved</p>
            </div>
            <div class="value-card">
              <i class="fas fa-award"></i>
              <h3>100%</h3>
              <p>Success Rate</p>
            </div>
          </div>

          <div class="hero-cta">
            <button class="btn btn-royal" id="getStarted">
              <i class="fas fa-crown"></i>
              Begin Your Royal Journey
            </button>
            <a href="https://wa.me/919075228258" class="btn btn-outline">
              <i class="fab fa-whatsapp"></i>
              WhatsApp Now
            </a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="royal-orb">
            <div class="orb-core"></div>
            <div class="orb-ring ring-1"></div>
            <div class="orb-ring ring-2"></div>
            <div class="orb-ring ring-3"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            <i class="fas fa-crown"></i>
            The Royal Standard of AI
          </h2>
          <p class="section-subtitle">Where Excellence Meets Innovation</p>
        </div>

        <div class="about-content">
          <div class="story-section">
            <h3>Our Legacy of Excellence</h3>
            <p>
              ByteBloom stands at the pinnacle of AI innovation, serving Fortune 500 
              companies with solutions that redefine what's possible. Our partnership 
              with <strong>Puntoon Games</strong> (3.4M+ subscribers) revolutionized 
              content creation through our groundbreaking video-to-comic AI pipeline.
            </p>
            <div class="achievements">
              <div class="achievement">
                <i class="fas fa-trophy"></i>
                <div>
                  <h4>Industry Leader</h4>
                  <p>Recognized as top AI solutions provider</p>
                </div>
              </div>
              <div class="achievement">
                <i class="fas fa-shield-alt"></i>
                <div>
                  <h4>Enterprise Trust</h4>
                  <p>Secured partnerships with global leaders</p>
                </div>
              </div>
              <div class="achievement">
                <i class="fas fa-gem"></i>
                <div>
                  <h4>Premium Quality</h4>
                  <p>Delivering excellence in every solution</p>
                </div>
              </div>
            </div>
          </div>

          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fas fa-building"></i>
              </div>
              <h3 class="stat-number" data-count="150">0</h3>
              <p>Enterprise Clients</p>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fas fa-dollar-sign"></i>
              </div>
              <h3 class="stat-number" data-count="2.5">0</h3>
              <span class="stat-suffix">M+</span>
              <p>Revenue Generated</p>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fas fa-users"></i>
              </div>
              <h3 class="stat-number" data-count="50">0</h3>
              <span class="stat-suffix">M+</span>
              <p>Users Impacted</p>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fas fa-star"></i>
              </div>
              <h3 class="stat-number" data-count="4.9">0</h3>
              <span class="stat-suffix">/5</span>
              <p>Client Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            <i class="fas fa-crown"></i>
            Royal Suite of Solutions
          </h2>
          <p class="section-subtitle">Premium AI Services for Discerning Enterprises</p>
        </div>

        <div class="services-grid">
          <div class="service-card premium">
            <div class="service-crown">
              <i class="fas fa-crown"></i>
            </div>
            <h3>Enterprise AI Automation</h3>
            <p>Transform your operations with intelligent automation that thinks, learns, and evolves with your business.</p>
            <ul class="service-features">
              <li><i class="fas fa-check"></i> 85% cost reduction</li>
              <li><i class="fas fa-check"></i> 24/7 autonomous operation</li>
              <li><i class="fas fa-check"></i> Zero-error guarantee</li>
            </ul>
            <div class="service-roi">
              <span>Average ROI</span>
              <strong>650%</strong>
            </div>
            <button class="btn-service">Explore Solution</button>
          </div>

          <div class="service-card premium">
            <div class="service-crown">
              <i class="fas fa-brain"></i>
            </div>
            <h3>Predictive Intelligence</h3>
            <p>See the future with AI that predicts market trends, customer behavior, and opportunities before they emerge.</p>
            <ul class="service-features">
              <li><i class="fas fa-check"></i> 95% accuracy rate</li>
              <li><i class="fas fa-check"></i> Real-time insights</li>
              <li><i class="fas fa-check"></i> 3-month ahead forecasting</li>
            </ul>
            <div class="service-roi">
              <span>Revenue Boost</span>
              <strong>+45%</strong>
            </div>
            <button class="btn-service">Explore Solution</button>
          </div>

          <div class="service-card premium">
            <div class="service-crown">
              <i class="fas fa-comments"></i>
            </div>
            <h3>Royal Customer AI</h3>
            <p>Deliver VIP experiences at scale with AI that understands, engages, and delights every customer.</p>
            <ul class="service-features">
              <li><i class="fas fa-check"></i> 50+ languages</li>
              <li><i class="fas fa-check"></i> 98% satisfaction rate</li>
              <li><i class="fas fa-check"></i> Instant resolution</li>
            </ul>
            <div class="service-roi">
              <span>Cost Savings</span>
              <strong>$2.5M/yr</strong>
            </div>
            <button class="btn-service">Explore Solution</button>
          </div>

          <div class="service-card premium">
            <div class="service-crown">
              <i class="fas fa-palette"></i>
            </div>
            <h3>Creative AI Suite</h3>
            <p>Generate premium content that captivates audiences and drives engagement to unprecedented levels.</p>
            <ul class="service-features">
              <li><i class="fas fa-check"></i> 20x faster creation</li>
              <li><i class="fas fa-check"></i> Brand consistency</li>
              <li><i class="fas fa-check"></i> Multi-format output</li>
            </ul>
            <div class="service-roi">
              <span>Engagement</span>
              <strong>+380%</strong>
            </div>
            <button class="btn-service">Explore Solution</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            <i class="fas fa-crown"></i>
            Begin Your Royal Journey
          </h2>
          <p class="section-subtitle">Join the Elite Circle of AI Innovation</p>
        </div>

        <div class="contact-content">
          <div class="contact-info">
            <h3>Royal Treatment Awaits</h3>
            <p>Experience the ByteBloom difference with a personalized consultation 
               tailored to your enterprise needs.</p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <i class="fas fa-phone"></i>
                <div>
                  <h4>Direct Line</h4>
                  <a href="tel:+918459431389">+91-8459431389</a>
                </div>
              </div>
              <div class="contact-method">
                <i class="fab fa-whatsapp"></i>
                <div>
                  <h4>WhatsApp VIP</h4>
                  <a href="https://wa.me/919075228258">+91-9075228258</a>
                </div>
              </div>
              <div class="contact-method">
                <i class="fas fa-envelope"></i>
                <div>
                  <h4>Royal Mail</h4>
                  <a href="mailto:amitjaiswal044@gmail.com">amitjaiswal044@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `

  // Initialize interactions
  initializeApp()
}

function initializeApp() {
  // Hide preloader
  setTimeout(() => {
    const preloader = document.getElementById('preloader')
    if (preloader) {
      preloader.classList.add('fade-out')
      setTimeout(() => {
        preloader.style.display = 'none'
      }, 500)
    }
  }, 1500)

  // Mobile menu toggle
  const navToggle = document.getElementById('navToggle')
  const navMenu = document.getElementById('navMenu')
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active')
    })
  }

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar')
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled')
      } else {
        navbar.classList.remove('scrolled')
      }
    }
  })

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })

  // Button click handler
  document.getElementById('getStarted')?.addEventListener('click', () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  })

  // Animated counters
  const animateValue = (obj, start, end, duration) => {
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const value = progress * (end - start) + start
      obj.innerHTML = Math.floor(value)
      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        obj.innerHTML = end
      }
    }
    window.requestAnimationFrame(step)
  }

  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('stat-number')) {
          const target = parseFloat(entry.target.dataset.count)
          animateValue(entry.target, 0, target, 2000)
          observer.unobserve(entry.target)
        }
      }
    })
  }, { threshold: 0.5 })

  // Observe stat numbers
  document.querySelectorAll('.stat-number').forEach(el => {
    observer.observe(el)
  })
}