// Initialize particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#6366f1'
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
            color: '#6366f1',
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

// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.preloader').classList.add('fade-out');
    }, 2000);
});

// Enhanced Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorTrail = document.querySelector('.cursor-trail');
const cursorDot = document.querySelector('.cursor-dot');
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

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update particles color
    if (window.pJSDom && window.pJSDom[0]) {
        const pJS = window.pJSDom[0].pJS;
        pJS.particles.color.value = isDark ? '#8b5cf6' : '#6366f1';
        pJS.particles.line_linked.color = isDark ? '#8b5cf6' : '#6366f1';
        pJS.fn.particlesRefresh();
    }
});

// Typewriter Effect
const typewriterTexts = [
    "Transforming Ideas into Intelligent Reality",
    "From Video-to-Comic AI to Enterprise Solutions",
    "Where Innovation Meets Artificial Intelligence",
    "Building Tomorrow's AI Solutions Today"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 50;
const deleteSpeed = 30;
const pauseTime = 2000;

function typeWriter() {
    const element = document.querySelector('.typewriter');
    if (!element) return;
    
    const currentText = typewriterTexts[textIndex];
    
    if (!isDeleting) {
        element.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeWriter, pauseTime);
            return;
        }
    } else {
        element.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typewriterTexts.length;
        }
    }
    
    setTimeout(typeWriter, isDeleting ? deleteSpeed : typeSpeed);
}

// Start typewriter after preloader
setTimeout(typeWriter, 2500);

// Neural Network Canvas Animation
const canvas = document.getElementById('neural-network');
if (canvas) {
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

// Observe stat counters
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const target = parseFloat(entry.target.dataset.target || entry.target.dataset.count);
            animateCounter(entry.target, target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number, [data-count]').forEach(stat => {
    statObserver.observe(stat);
});

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
        title: 'Puntoon Games - Video-to-Comic AI Pipeline',
        content: `
            <h2>Puntoon Games - Video-to-Comic AI Pipeline</h2>
            <div class="modal-stats">
                <div class="stat">
                    <h3>3.4M+</h3>
                    <p>Subscribers Reached</p>
                </div>
                <div class="stat">
                    <h3>80%</h3>
                    <p>Time Saved</p>
                </div>
                <div class="stat">
                    <h3>1000+</h3>
                    <p>Comics Generated</p>
                </div>
            </div>
            <h3>The Challenge</h3>
            <p>Puntoon Games needed to transform their gaming video content into engaging comic-style narratives for cross-platform distribution and enhanced audience engagement.</p>
            <h3>The Solution</h3>
            <p>Developed a cutting-edge AI pipeline that automatically:</p>
            <ul>
                <li>Extracts key frames from gaming videos</li>
                <li>Applies artistic style transfer for comic aesthetics</li>
                <li>Generates contextual dialogue and captions</li>
                <li>Layouts panels with professional comic design</li>
            </ul>
            <h3>Technologies Used</h3>
            <div class="tech-stack">
                <span>Python</span>
                <span>TensorFlow</span>
                <span>OpenCV</span>
                <span>StyleGAN</span>
                <span>Custom ML Models</span>
            </div>
        `
    },
    chatbot: {
        title: 'Enterprise Customer Intelligence Bot',
        content: `
            <h2>Enterprise Customer Intelligence Bot</h2>
            <div class="modal-stats">
                <div class="stat">
                    <h3>10K+</h3>
                    <p>Daily Queries</p>
                </div>
                <div class="stat">
                    <h3>98%</h3>
                    <p>Accuracy Rate</p>
                </div>
                <div class="stat">
                    <h3>15</h3>
                    <p>Languages</p>
                </div>
            </div>
            <h3>Overview</h3>
            <p>Built a sophisticated multi-lingual AI assistant capable of handling complex customer queries across global operations with near-human accuracy.</p>
            <h3>Key Features</h3>
            <ul>
                <li>Natural language understanding in 15 languages</li>
                <li>Context-aware conversation management</li>
                <li>Integration with enterprise CRM systems</li>
                <li>Sentiment analysis and escalation protocols</li>
            </ul>
        `
    },
    analytics: {
        title: 'Predictive Analytics Dashboard',
        content: `
            <h2>Predictive Analytics Dashboard</h2>
            <p>Real-time AI-driven insights platform processing millions of data points for actionable business intelligence.</p>
        `
    },
    creative: {
        title: 'AI Content Generation Suite',
        content: `
            <h2>AI Content Generation Suite</h2>
            <p>End-to-end creative AI platform generating images, videos, and interactive content at scale.</p>
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