// Initialize particles.js with floral theme - only if library is loaded
if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
    particlesJS('particles-js', {
    particles: {
        number: {
            value: 60,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#ff6b9d', '#c44569', '#f8b595']
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ff6b9d',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
    });
}

// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.classList.add('fade-out');
            // Also remove it from DOM after animation
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 1500);
});

// Fallback in case load event doesn't fire
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        if (preloader && !preloader.classList.contains('fade-out')) {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 3000);
});

// Enhanced Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorTrail = document.querySelector('.cursor-trail');
const cursorDot = document.querySelector('.cursor-dot');

if (cursor && cursorTrail && cursorDot) {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let trailX = 0;
    let trailY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Cursor dot follows mouse exactly
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    function animateCursor() {
        // Main cursor with lag
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        // Cursor trail with more lag
        trailX += (mouseX - trailX) * 0.05;
        trailY += (mouseY - trailY) * 0.05;
        cursorTrail.style.left = trailX + 'px';
        cursorTrail.style.top = trailY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
}

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .portfolio-item, .service-card, input, textarea, .filter-btn');
hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
    });
    element.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
    });
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

if (themeToggle) {
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Update particles color for floral theme
        if (window.pJSDom && window.pJSDom[0]) {
            const pJS = window.pJSDom[0].pJS;
            pJS.particles.color.value = isDark ? ['#c44569', '#f67280'] : ['#ff6b9d', '#c44569', '#f8b595'];
            pJS.particles.line_linked.color = isDark ? '#c44569' : '#ff6b9d';
            pJS.fn.particlesRefresh();
        }
    });
}

// Add bloom animation to elements on scroll
const bloomElements = document.querySelectorAll('.bloom-animation, .benefit-card, .service-card');
const bloomObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'bloomIn 0.8s ease-out forwards';
        }
    });
}, { threshold: 0.1 });

bloomElements.forEach(el => bloomObserver.observe(el));

// ROI Calculator Function
function showROICalculator() {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2>Calculate Your AI ROI with ByteBloom</h2>
        <div class="roi-calculator">
            <div class="calculator-input">
                <label>Current Monthly Operating Costs ($)</label>
                <input type="number" id="operatingCosts" value="100000" />
            </div>
            <div class="calculator-input">
                <label>Number of Employees</label>
                <input type="number" id="employees" value="50" />
            </div>
            <div class="calculator-input">
                <label>Average Processing Time (hours/day)</label>
                <input type="number" id="processingTime" value="8" />
            </div>
            <button class="btn btn-primary" onclick="calculateROI()">Calculate Savings</button>
            <div id="roiResults" class="roi-results"></div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function calculateROI() {
    const costs = parseFloat(document.getElementById('operatingCosts').value);
    const employees = parseFloat(document.getElementById('employees').value);
    const time = parseFloat(document.getElementById('processingTime').value);
    
    // ByteBloom's average improvements
    const costReduction = costs * 0.65; // 65% cost reduction
    const timeSaved = time * 0.8; // 80% time saved
    const productivityGain = employees * 0.3 * 50000; // 30% productivity gain worth $50k/employee/year
    
    const totalSavings = (costReduction * 12) + productivityGain;
    const roi = (totalSavings / (costs * 12)) * 100;
    
    document.getElementById('roiResults').innerHTML = `
        <h3>Your Potential Savings with ByteBloom</h3>
        <div class="roi-metric">
            <span class="metric-label">Annual Cost Savings</span>
            <span class="metric-value">$${costReduction.toLocaleString()}/month</span>
        </div>
        <div class="roi-metric">
            <span class="metric-label">Time Saved Daily</span>
            <span class="metric-value">${timeSaved.toFixed(1)} hours</span>
        </div>
        <div class="roi-metric">
            <span class="metric-label">Total Annual Savings</span>
            <span class="metric-value">$${totalSavings.toLocaleString()}</span>
        </div>
        <div class="roi-metric highlight">
            <span class="metric-label">Expected ROI</span>
            <span class="metric-value">${roi.toFixed(0)}%</span>
        </div>
        <p class="roi-cta">Ready to achieve these results? Let's discuss your specific needs.</p>
        <button class="btn btn-primary" onclick="openContactPanel(); closeProjectModal();">Get Started</button>
    `;
}

// Removed Neural Network Canvas - replaced with floral animations
// The floral animations are handled via CSS
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const nodes = [];
    const nodeCount = 50;
    
    class Node {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(99, 102, 241, 0.5)';
            ctx.fill();
        }
    }
    
    for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node());
    }
    
    function drawConnections() {
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - distance / 150)})`;
                    ctx.stroke();
                }
            }
        }
    }
    
    function animateNeuralNetwork() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        nodes.forEach(node => {
            node.update();
            node.draw();
        });
        
        drawConnections();
        requestAnimationFrame(animateNeuralNetwork);
    }
    
    animateNeuralNetwork();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Animated Counter
function animateCounter(element, target, suffix = '') {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Observe stat counters - Updated for ByteBloom metrics
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const target = parseFloat(entry.target.dataset.target || entry.target.dataset.count);
            const isDecimal = target % 1 !== 0;
            animateCounter(entry.target, target, '', isDecimal);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number, [data-target], .metric-item h4').forEach(stat => {
    statObserver.observe(stat);
});

// Enhanced counter animation for decimal values
function animateCounter(element, target, suffix = '', isDecimal = false) {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = isDecimal ? target.toFixed(1) : target;
        }
    };
    
    updateCounter();
}

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.classList.remove('hidden');
                item.style.animation = 'fadeInUp 0.5s ease forwards';
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// Project Modal
const projectModal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');

const projectData = {
    puntoon: {
        title: 'Puntoon Games - Video-to-Comic AI Revolution',
        content: `
            <h2>🎮 Puntoon Games - Video-to-Comic AI Revolution</h2>
            <div class="modal-stats">
                <div class="stat">
                    <h3>3.4M+</h3>
                    <p>Subscribers Impacted</p>
                </div>
                <div class="stat">
                    <h3>20x</h3>
                    <p>Faster Production</p>
                </div>
                <div class="stat">
                    <h3>$1.5M</h3>
                    <p>Annual Savings</p>
                </div>
            </div>
            <h3>The Business Challenge</h3>
            <p>Puntoon Games faced increasing demand for diverse content formats but traditional production methods were too slow and expensive, limiting their growth potential.</p>
            <h3>ByteBloom's Solution</h3>
            <p>We developed an AI-powered pipeline that transforms gaming videos into professional comic content:</p>
            <ul>
                <li>🎯 Automated scene detection and key frame extraction</li>
                <li>🎨 AI-driven artistic style transfer maintaining brand consistency</li>
                <li>💬 Intelligent dialogue generation based on video context</li>
                <li>📐 Professional comic panel layout optimization</li>
                <li>🚀 One-click publishing to multiple platforms</li>
            </ul>
            <h3>Business Impact</h3>
            <div class="impact-metrics">
                <p><strong>Revenue Growth:</strong> 45% increase in content monetization</p>
                <p><strong>Audience Engagement:</strong> 3x higher engagement rates</p>
                <p><strong>Market Expansion:</strong> Entered 5 new content markets</p>
                <p><strong>Team Efficiency:</strong> Creative team focused on strategy vs. production</p>
            </div>
        `
    },
    chatbot: {
        title: 'Global Enterprise Customer AI',
        content: `
            <h2>🌍 Global Enterprise Customer AI</h2>
            <div class="modal-stats">
                <div class="stat">
                    <h3>$2.3M</h3>
                    <p>Annual Savings</p>
                </div>
                <div class="stat">
                    <h3>4.9/5</h3>
                    <p>Customer Satisfaction</p>
                </div>
                <div class="stat">
                    <h3>90%</h3>
                    <p>First-Contact Resolution</p>
                </div>
            </div>
            <h3>Business Challenge</h3>
            <p>A Fortune 500 company struggled with 24/7 global customer support, facing high costs and inconsistent service quality across regions.</p>
            <h3>ByteBloom's Impact</h3>
            <ul>
                <li>💰 Reduced support costs by 65% while improving quality</li>
                <li>🌐 Seamless support in 50+ languages with cultural awareness</li>
                <li>⚡ Average response time reduced from 15 minutes to 30 seconds</li>
                <li>📊 Predictive issue resolution prevents 40% of potential problems</li>
                <li>🔄 Seamless handoff to human agents when needed</li>
            </ul>
        `
    },
    analytics: {
        title: 'Predictive Business Intelligence Platform',
        content: `
            <h2>📊 Predictive Business Intelligence Platform</h2>
            <div class="modal-stats">
                <div class="stat">
                    <h3>95%</h3>
                    <p>Forecast Accuracy</p>
                </div>
                <div class="stat">
                    <h3>35%</h3>
                    <p>Revenue Increase</p>
                </div>
                <div class="stat">
                    <h3>3 months</h3>
                    <p>Ahead of Market</p>
                </div>
            </div>
            <h3>Transforming Data into Profit</h3>
            <p>ByteBloom's AI analytics platform helps businesses see opportunities before competitors and make decisions with confidence.</p>
            <ul>
                <li>🎯 Predictive market trend analysis</li>
                <li>💡 Automated opportunity identification</li>
                <li>⚠️ Risk detection and mitigation</li>
                <li>📈 Real-time performance optimization</li>
            </ul>
        `
    },
    creative: {
        title: 'AI-Powered Creative Suite',
        content: `
            <h2>🎨 AI-Powered Creative Suite</h2>
            <div class="modal-stats">
                <div class="stat">
                    <h3>280%</h3>
                    <p>Engagement Boost</p>
                </div>
                <div class="stat">
                    <h3>20x</h3>
                    <p>Content Velocity</p>
                </div>
                <div class="stat">
                    <h3>$800K</h3>
                    <p>Creative Cost Savings</p>
                </div>
            </div>
            <h3>Scale Creativity Without Limits</h3>
            <p>ByteBloom's creative AI helps brands produce personalized content at scale while maintaining quality and brand consistency.</p>
        `
    }
};

function openProjectModal(project) {
    const data = projectData[project];
    if (data) {
        modalBody.innerHTML = data.content;
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeProjectModal();
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = body.classList.contains('dark-theme') 
            ? 'rgba(15, 23, 42, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = body.classList.contains('dark-theme')
            ? 'rgba(15, 23, 42, 0.8)'
            : 'rgba(255, 255, 255, 0.8)';
    }
    
    lastScroll = currentScroll;
});

// Service card interactions
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotateX(5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0)';
    });
    
    card.querySelector('.service-cta').addEventListener('click', function(e) {
        e.stopPropagation();
        const service = card.dataset.service;
        console.log('Service clicked:', service);
        // Add your service modal or navigation logic here
    });
});

// Contact Panel
const contactPanel = document.getElementById('contactPanel');

function openContactPanel() {
    contactPanel.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeContactPanel() {
    contactPanel.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Form submission
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        
        button.textContent = 'Sending...';
        button.disabled = true;
        
        // Submit form
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(new FormData(this)).toString()
        })
        .then(() => {
            button.textContent = 'Sent! ✓';
            button.style.background = '#10b981';
            this.reset();
            
            if (this.name === 'quick-contact') {
                setTimeout(closeContactPanel, 1500);
            }
            
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
                button.style.background = '';
            }, 3000);
        })
        .catch(() => {
            button.textContent = 'Error! Try again';
            button.style.background = '#ef4444';
            button.disabled = false;
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
            }, 3000);
        });
    });
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Add parallax effect to sections
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero, .about, .services, .portfolio');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
    });
});

// Initialize AOS-like animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('aos-animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Add ripple effect to buttons
document.querySelectorAll('.btn, .portfolio-btn, .service-cta').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});