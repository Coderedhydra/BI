// Enhanced JavaScript for better interactivity

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translateY(7px)' : '';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translateY(-7px)' : '';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = 70;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Apply animations to elements
document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on scroll
    const animateElements = [
        '.exp-card',
        '.service-card',
        '.stat-item',
        '.contact-content'
    ].join(', ');
    
    document.querySelectorAll(animateElements).forEach(element => {
        observer.observe(element);
    });
    
    // Animate hero content on load
    const heroElements = [
        '.hero-badge',
        '.hero-title',
        '.hero-description',
        '.hero-buttons',
        '.hero-stats'
    ];
    
    heroElements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            setTimeout(() => {
                element.classList.add('fade-in');
            }, index * 100);
        }
    });
});

// Form handling for Netlify
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
    });
}

// Add parallax effect to hero pattern
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroPattern = document.querySelector('.hero-pattern');
    if (heroPattern) {
        heroPattern.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add hover effect to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});