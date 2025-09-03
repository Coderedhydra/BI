// Custom Cursor Effect
const cursor = document.querySelector('.cursor');
const cursorTrail = document.querySelector('.cursor-trail');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let trailX = 0;
let trailY = 0;

// Track mouse movement
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth cursor animation
function animateCursor() {
    // Main cursor
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    // Cursor trail
    trailX += (mouseX - trailX) * 0.05;
    trailY += (mouseY - trailY) * 0.05;
    cursorTrail.style.left = trailX + 'px';
    cursorTrail.style.top = trailY + 'px';
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .portfolio-item, .service-card, input, textarea');
hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
    });
    element.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
    });
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Navbar height
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
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

// Close panel when clicking outside
document.addEventListener('click', (e) => {
    if (contactPanel.classList.contains('active') && 
        !contactPanel.contains(e.target) && 
        !e.target.closest('.btn-primary')) {
        closeContactPanel();
    }
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.service-card, .portfolio-item, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Form submission handling
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // For Netlify forms, we need to let the default submission happen
        // But we can add custom success handling
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        
        // Show loading state
        button.textContent = 'Sending...';
        button.disabled = true;
        
        // Submit the form
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            // Success
            button.textContent = 'Sent! ✓';
            button.style.background = '#48bb78';
            this.reset();
            
            // Close panel if it's the quick contact form
            if (this.name === 'quick-contact') {
                setTimeout(closeContactPanel, 1500);
            }
            
            // Reset button after delay
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
                button.style.background = '';
            }, 3000);
        })
        .catch(() => {
            // Error
            button.textContent = 'Error! Try again';
            button.style.background = '#f56565';
            button.disabled = false;
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
            }, 3000);
        });
    });
});

// Portfolio item click animation
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function() {
        // Add ripple effect
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Typing effect for hero title (optional enhancement)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let index = 0;
    
    function typeWriter() {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Start typing after page load
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}

// Add parallax effect to shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add mouse movement effect to shapes
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = 10 + (index * 5);
        const xMove = (x - 0.5) * speed;
        const yMove = (y - 0.5) * speed;
        shape.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});

// Performance optimization - lazy load images
const images = document.querySelectorAll('img');
const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 300px 0px'
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.src; // Trigger load
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
}, imageOptions);

images.forEach(img => imageObserver.observe(img));