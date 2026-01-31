// ================================
// Mobile Navigation Toggle
// ================================

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.querySelector('.menu-toggle');
        
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// ================================
// Smooth Scrolling for Anchor Links
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ================================
// Contact Form Handling
// ================================

function handleSubmit(event) {
    event.preventDefault();
    
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    // Get form data
    const formData = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
    };
    
    // Log form data (in a real app, you'd send this to a server)
    console.log('Form submitted:', formData);
    
    // Hide form and show success message
    form.style.display = 'none';
    successMessage.classList.add('show');
    
    // Optional: Reset form after 5 seconds
    setTimeout(() => {
        form.reset();
        form.style.display = 'block';
        successMessage.classList.remove('show');
    }, 5000);
    
    return false;
}

// ================================
// Navbar Background on Scroll
// ================================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ================================
// Animate Elements on Scroll
// ================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all skill items, cards, etc.
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.skill-item, .learning-card, .skill-detail-card, .tool-item, .timeline-item'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// ================================
// Dynamic Year in Footer
// ================================

document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = yearElement.textContent.replace('2024', currentYear);
    }
});

// ================================
// Add Active Class to Current Page
// ================================

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// ================================
// Skill Level Animation
// ================================

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target;
            const width = fill.style.width;
            fill.style.width = '0';
            
            setTimeout(() => {
                fill.style.width = width;
            }, 200);
            
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.level-fill').forEach(fill => {
        skillObserver.observe(fill);
    });
});

// ================================
// Form Validation Enhancement
// ================================

document.addEventListener('DOMContentLoaded', () => {
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() !== '') {
                this.style.borderColor = 'rgba(39, 201, 63, 0.5)';
            } else if (this.hasAttribute('required')) {
                this.style.borderColor = 'rgba(255, 0, 110, 0.5)';
            }
        });
        
        input.addEventListener('focus', function() {
            this.style.borderColor = 'var(--primary)';
        });
    });
});

// ================================
// Console Message
// ================================

console.log('%c👋 Hello Developer!', 'color: #00f0ff; font-size: 20px; font-weight: bold;');
console.log('%cThanks for checking out my portfolio!', 'color: #a0aec0; font-size: 14px;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #718096; font-size: 12px;');
