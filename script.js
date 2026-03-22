/**
 * ============================================
 * PORTFOLIO WEBSITE - MAIN JAVASCRIPT
 * ============================================
 * 
 * Features:
 * - Scroll reveal animations using Intersection Observer
 * - Navbar scroll effect with blur and shadow
 * - Smooth scroll navigation
 * - Staggered card animations
 * - Intro splash typing transition
 * - Form handling and validation
 * - Project selection
 * - WhatsApp integration
 * - Premium interactions
 */

// ============================================
// LANGUAGE DATA
// ============================================

const translations = {
    id: {
        "intro.text": "Halo, saya Charlie Michael",
        "nav.home": "Beranda",
        "nav.about": "Tentang",
        "nav.project": "Karya",
        "nav.contact": "Kontak",
        "hero.heading": "Hai, saya Charlie Michael.",
        "hero.location": "Indonesia",
        "hero.description": "Saya seorang web developer yang menciptakan website bersih, fungsional dengan desain modern.",
        "about.role": "Frontend Developer",
        "about.location": "Berbasis di Indonesia",
        "about.highlight1": "UI bersih dengan design system yang rapi.",
        "about.highlight2": "Prioritas performa dengan alur UX jelas.",
        "about.stackTitle": "Teknologi yang Digunakan",
        "about.kicker": "HALO, SAYA <span class=\"wave-hand\" aria-hidden=\"true\">👋</span>",
        "about.description": "Saya adalah creative frontend developer yang fokus membangun website modern dengan tampilan bersih, performa cepat, dan pengalaman pengguna yang jelas. Saya suka mengubah ide menjadi produk digital yang terasa hidup, responsif, dan siap digunakan untuk kebutuhan brand maupun personal project.",
        "about.ctaPrimary": "Konsultasi Gratis",
        "project.title": "Showcase Proyek",
        "project.subtitle": "Hover ke tiap card untuk preview fokus project, klik untuk buka website project di tab baru.",
        "project.card1.title": "Barbershop",
        "project.card1.meta": "React + Tailwind CSS",
        "project.card1.description": "Website barbershop modern dengan booking yang jelas.",
        "project.card1.badge1": "Maskulin UI",
        "project.card1.badge2": "Booking Cepat",
        "project.card1.cta": "Lihat Website",
        "project.card2.title": "Bengkel Mobil",
        "project.card2.meta": "Website Marketing",
        "project.card2.description": "Website bengkel mobil dengan layanan yang jelas.",
        "project.card2.badge1": "Auto Service",
        "project.card2.badge2": "Lead Funnel",
        "project.card2.cta": "Lihat Website",
        "project.card3.title": "Klinik Kecantikan",
        "project.card3.meta": "Website Kecantikan",
        "project.card3.description": "Website klinik estetik modern dengan alur booking jelas.",
        "project.card3.badge1": "UI Elegan",
        "project.card3.badge2": "Alur Booking",
        "project.card3.cta": "Lihat Website",
        "project.card4.title": "Personal Branding",
        "project.card4.meta": "Website Personal",
        "project.card4.description": "Website personal branding modern untuk menonjolkan profil dan karya.",
        "project.card4.badge1": "Personal Brand",
        "project.card4.badge2": "Portfolio",
        "project.card4.cta": "Lihat Website",
        "project.card5.title": "Bursa Mobil ",
        "project.card5.meta": "Website Bursa Mobil",
        "project.card5.description": "Website bursa mobil untuk menampilkan daftar kendaraan yang tersedia.",
        "project.card5.badge1": "Car Listing",
        "project.card5.badge2": "Search Filter",
        "project.card5.cta": "Lihat Website",
        "contact.title": "Hubungi Saya",
        "contact.subtitle": "Isi form di bawah untuk diskusi project. Saya akan lanjutkan via WhatsApp.",
        "contact.name": "Nama Anda",
        "contact.email": "Email Anda",
        "contact.message": "Ceritakan kebutuhan project kamu",
        "contact.submit": "Kirim Permintaan",
        "footer.copy": "© 2026 Charlie Michael. Semua hak dilindungi.",
        "whatsapp.title": "Chat via WhatsApp"
    },
    en: {
        "intro.text": "Hi, I'm Charlie Michael",
        "nav.home": "Home",
        "nav.about": "About",
        "nav.project": "Work",
        "nav.contact": "Contact",
        "hero.heading": "Hi, I'm Charlie Michael.",
        "hero.location": "Indonesia",
        "hero.description": "I'm a web developer who creates clean, functional websites with modern design.",
        "about.role": "Frontend Developer",
        "about.location": "Based in Indonesia",
        "about.highlight1": "Clean UI with a scalable design system.",
        "about.highlight2": "Performance-first build with clear UX flow.",
        "about.stackTitle": "Tech Stack",
        "about.kicker": "HI, I'M <span class=\"wave-hand\" aria-hidden=\"true\">👋</span>",
        "about.description": "I am a creative frontend developer focused on building modern websites with clean visuals, fast performance, and clear user experience. I enjoy turning ideas into digital products that feel alive, responsive, and ready for brand or personal projects.",
        "about.ctaPrimary": "Get In Touch",
        "project.title": "Selected Work",
        "project.subtitle": "A few projects that showcase my approach to design and development.",
        "project.card1.title": "Barbershop",
        "project.card1.meta": "React + Tailwind CSS",
        "project.card1.description": "Modern barbershop website with a clear booking flow.",
        "project.card1.badge1": "Masculine UI",
        "project.card1.badge2": "Fast Booking",
        "project.card1.cta": "View Website",
        "project.card2.title": "Car Workshop",
        "project.card2.meta": "Marketing Website",
        "project.card2.description": "Car workshop website with clear service information.",
        "project.card2.badge1": "Auto Service",
        "project.card2.badge2": "Lead Funnel",
        "project.card2.cta": "View Website",
        "project.card3.title": "Beauty Clinic",
        "project.card3.meta": "Beauty Website",
        "project.card3.description": "Modern beauty clinic site with a clear booking flow.",
        "project.card3.badge1": "Elegant UI",
        "project.card3.badge2": "Booking Flow",
        "project.card3.cta": "View Website",
        "project.card4.title": "Personal Branding",
        "project.card4.meta": "Personal Website",
        "project.card4.description": "Modern personal branding website to highlight profile and work.",
        "project.card4.badge1": "Personal Brand",
        "project.card4.badge2": "Portfolio",
        "project.card4.cta": "View Website",
        "project.card5.title": "Bursa Mobil",
        "project.card5.meta": "Website Bursa Mobil",
        "project.card5.description": "Website bursa mobil untuk menampilkan daftar kendaraan yang tersedia.",
        "project.card5.badge1": "Car Listing",
        "project.card5.badge2": "Search Filter",
        "project.card5.cta": "View Website",
        "contact.title": "Let's Work Together",
        "contact.subtitle": "Have a project in mind? Drop me a message and I'll get back to you soon.",
        "contact.name": "Your Name",
        "contact.email": "Your Email",
        "contact.message": "Tell me about your project",
        "contact.submit": "Send Message",
        "footer.copy": "© 2026 Charlie Michael. Crafted with care.",
        "whatsapp.title": "Chat on WhatsApp"
    }
};

const getPreferredLang = () => {
    return localStorage.getItem('preferredLang') || document.documentElement.getAttribute('data-lang') || 'id';
};

const getTranslation = (lang, key) => {
    const dictionary = translations[lang] || translations.id;
    return dictionary[key] || translations.id[key] || '';
};

const applyLanguage = (lang) => {
    const dictionary = translations[lang] || translations.id;

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        const text = dictionary[key];
        if (text) {
            el.textContent = text;
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
        const key = el.dataset.i18nHtml;
        const text = dictionary[key];
        if (text) {
            el.innerHTML = text;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.dataset.i18nPlaceholder;
        const text = dictionary[key];
        if (text) {
            el.setAttribute('placeholder', text);
        }
    });

    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
        const key = el.dataset.i18nTitle;
        const text = dictionary[key];
        if (text) {
            el.setAttribute('title', text);
        }
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
        const key = el.dataset.i18nAriaLabel;
        const text = dictionary[key];
        if (text) {
            el.setAttribute('aria-label', text);
        }
    });
};

// ============================================
// 1. INTRO SPLASH
// ============================================

/**
 * Show intro splash with typing effect before revealing the website
 */
const revealHeroSection = () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    requestAnimationFrame(() => {
        hero.classList.add('hero-revealed');
    });
};

const setupIntroSplash = () => {
    return new Promise((resolve) => {
        const splash = document.getElementById('introSplash');
        const typingTarget = document.getElementById('introTyping');

        if (!splash || !typingTarget) {
            revealHeroSection();
            resolve();
            return;
        }

        // Get intro text based on current language
        const currentLang = getPreferredLang();
        const introText = getTranslation(currentLang, 'intro.text');
        
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const typingSpeed = prefersReducedMotion ? 0 : 62;
        const startDelay = prefersReducedMotion ? 0 : 260;
        const holdAfterTyping = prefersReducedMotion ? 260 : 720;
        let charIndex = 0;
        let finished = false;

        const finishIntro = () => {
            if (finished) return;
            finished = true;
            splash.classList.add('intro-done');
            document.body.classList.remove('intro-active');
            revealHeroSection();
            window.scrollTo({ top: 0, behavior: 'auto' });

            setTimeout(() => {
                splash.remove();
                resolve();
            }, 820);
        };

        document.body.classList.add('intro-active');
        window.scrollTo({ top: 0, behavior: 'auto' });
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        const typeNextChar = () => {
            if (charIndex >= introText.length) {
                setTimeout(finishIntro, holdAfterTyping);
                return;
            }

            typingTarget.textContent += introText.charAt(charIndex);
            charIndex += 1;
            setTimeout(typeNextChar, typingSpeed);
        };

        setTimeout(() => {
            if (typingSpeed === 0) {
                typingTarget.textContent = introText;
                setTimeout(finishIntro, holdAfterTyping);
                return;
            }

            typeNextChar();
        }, startDelay);

        splash.addEventListener('click', finishIntro);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                finishIntro();
            }
        }, { once: true });
    });
};

// ============================================
// 2. NAVBAR SCROLL EFFECT
// ============================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// 2. SCROLL REVEAL - INTERSECTION OBSERVER API
// ============================================

/**
 * Initialize Intersection Observer for scroll reveal animations
 * Elements fade in and slide up when entering viewport
 */
const initScrollReveal = () => {
    // Configuration for Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Create observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // When element enters viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with scroll-reveal class
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((element) => {
        observer.observe(element);
    });
};

// ============================================
// 3. SMOOTH SCROLL TO ANCHOR LINKS
// ============================================

/**
 * Handle smooth scrolling when clicking navbar links
 */
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                // Smooth scroll with offset for navbar
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// ============================================
// 4. ACTIVE NAV LINK HIGHLIGHTING
// ============================================

/**
 * Update active nav link based on scroll position
 */
const setupActiveNavLinks = () => {
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        let current = '';
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
};

// ============================================
// 5. SCROLL INDICATOR
// ============================================

/**
 * Setup scroll indicator functionality
 */
const setupScrollIndicator = () => {
    const indicator = document.querySelector('.scroll-indicator');
    if (!indicator) return;

    // Hide indicator when user starts scrolling
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            indicator.style.opacity = '0';
            indicator.style.pointerEvents = 'none';
        } else {
            indicator.style.opacity = '1';
            indicator.style.pointerEvents = 'auto';
        }
    });

    // Make indicator clickable to scroll down
    const scrollToNextSection = () => {
        const nextSection = document.querySelector('.stats');
        if (nextSection) {
            nextSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    indicator.addEventListener('click', scrollToNextSection);
    indicator.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToNextSection();
        }
    });
};

// ============================================
// 6. HERO INTERACTIONS (LOAD, HOVER, SCROLL, CLICK)
// ============================================

const setupHeroInteractions = () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const parallaxLayer = hero.querySelector('.hero-parallax');
    const rotatingItems = hero.querySelectorAll('.effect-spin');

    const updateHeroOnScroll = () => {
        if (prefersReducedMotion || !parallaxLayer) return;

        const heroHeight = Math.max(hero.offsetHeight, window.innerHeight);
        const scrollAmount = Math.min(window.scrollY, heroHeight);
        const progress = Math.min(Math.max(scrollAmount / heroHeight, 0), 1);
        const offsetY = progress * 28;

        parallaxLayer.style.transform = `translate3d(0, ${offsetY}px, 0)`;
        hero.style.setProperty('--hero-scroll-progress', progress.toFixed(3));
        hero.style.setProperty('--hero-orbit-opacity', `${(1 - (progress * 0.72)).toFixed(3)}`);
    };

    updateHeroOnScroll();
    window.addEventListener('scroll', updateHeroOnScroll, { passive: true });

    const clickableTargets = hero.querySelectorAll('.btn, .scroll-indicator');
    clickableTargets.forEach((element) => {
        element.addEventListener('click', () => {
            element.classList.remove('is-clicked');
            void element.offsetWidth;
            element.classList.add('is-clicked');
            setTimeout(() => element.classList.remove('is-clicked'), 450);
        });
    });

    hero.addEventListener('mouseenter', () => {
        if (prefersReducedMotion) return;
        rotatingItems.forEach((item) => {
            item.style.animationDuration = '8s';
        });
    });

    hero.addEventListener('mouseleave', () => {
        rotatingItems.forEach((item) => {
            item.style.animationDuration = '';
        });
    });
};

// ============================================
// 7. SERVICE SELECTION
// ============================================

let selectedService = null;

/**
 * Handle service selection
 */
const selectService = (serviceName) => {
    selectedService = serviceName;
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
        serviceSelect.value = serviceName.split(' - ')[0];
    }
    
    // Scroll to contact form
    const contactForm = document.querySelector('.contact-content');
    if (contactForm) {
        contactForm.scrollIntoView({
            behavior: 'smooth'
        });
    }
    
    // Visual feedback
    const allServiceBtns = document.querySelectorAll('.service-btn');
    allServiceBtns.forEach(btn => {
        btn.style.opacity = '0.6';
    });
    
    const clickedButton = window.event?.target;
    if (clickedButton?.classList?.contains('service-btn')) {
        clickedButton.style.opacity = '1';
    }
};

// ============================================
// 7. CONTACT FORM HANDLING
// ============================================

/**
 * Handle contact form submission
 */
const setupContactForm = () => {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validate required fields
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Create WhatsApp message
        const whatsappMessage = encodeURIComponent(
            `Hi Charlie!\n\n` +
            `I'd like to discuss a project:\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Message: ${message}\n\n` +
            `Looking forward to hearing from you!`
        );

        // Open WhatsApp with message
        const whatsappUrl = `https://wa.me/6281386383801?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');

        // Reset form
        form.reset();

        // Show success message
        alert('Message sent! Opening WhatsApp...');
    });
};

// ============================================
// 8. BOOKING BUTTON
// ============================================

/**
 * Setup booking button functionality
 */
const setupBookingButton = () => {
    const bookingBtn = document.getElementById('bookingBtn');
    if (bookingBtn) {
        bookingBtn.addEventListener('click', () => {
            const contactSection = document.querySelector('.contact-content');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // About section booking button
    const aboutBookingBtn = document.getElementById('aboutBookingBtn');
    if (aboutBookingBtn) {
        aboutBookingBtn.addEventListener('click', () => {
            const contactSection = document.querySelector('.contact-content');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
};

// ============================================
// 9. COUNTER ANIMATION
// ============================================

/**
 * Animate stat numbers when they come into view
 */
const animateCounters = () => {
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                animateCounter(entry.target);
                entry.target.dataset.animated = 'true';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.stat-number').forEach((el) => {
        observer.observe(el);
    });
};

/**
 * Animate individual counter from 0 to target value
 */
const animateCounter = (element) => {
    const target = element.textContent;
    const numericValue = parseInt(target.replace(/[^0-9]/g, ''));
    const suffix = target.replace(/[0-9]/g, '');
    
    let current = 0;
    const increment = Math.ceil(numericValue / 50);
    const duration = 2000; // 2 seconds
    const steps = duration / 50;
    let step = 0;

    const timer = setInterval(() => {
        step++;
        if (step <= steps) {
            current += increment;
            if (current >= numericValue) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = current.toLocaleString() + suffix;
            }
        }
    }, 50);
};

// ============================================
// 10. BUTTON INTERACTIONS
// ============================================

/**
 * Add click handlers to buttons with visual feedback
 */
const initButtonInteractions = () => {
    document.querySelectorAll('.btn').forEach((button) => {
        button.addEventListener('click', function() {
            // Add visual feedback on click
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });

        // Hover effect for desktop
        button.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                this.style.transform = 'translateY(-2px)';
            }
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
};

// ============================================
// 11. IMAGE GALLERY HOVER
// ============================================

/**
 * Add hover effects to gallery items
 */
const setupGalleryHover = () => {
    document.querySelectorAll('.gallery-item').forEach((item) => {
        item.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                this.style.transform = 'translateY(-8px)';
            }
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
};

// ============================================
// 12. SERVICE CARD HOVER
// ============================================

/**
 * Add enhanced hover effects to service cards
 */
const setupServiceCardHover = () => {
    document.querySelectorAll('.service-card').forEach((card) => {
        card.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                // Already handled by CSS
            }
        });
    });
};

// ============================================
// 13. ACCESSIBILITY ENHANCEMENTS
// ============================================

/**
 * Improve keyboard navigation
 */
const setupAccessibility = () => {
    // Add focus visible styles
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });

    // Add keyboard support for buttons
    document.querySelectorAll('.service-btn').forEach((btn) => {
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });
};

// ============================================
// 14. DEBOUNCE UTILITY
// ============================================

/**
 * Debounce function to prevent excessive function calls
 */
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Apply debounce to scroll events for better performance
const debouncedScroll = debounce(() => {
    // Scroll handlers already optimized
}, 250);

window.addEventListener('scroll', debouncedScroll, { passive: true });

// ============================================
// 15. PRELOAD RESOURCES
// ============================================

/**
 * Preload resources for better performance
 */
const preloadResources = () => {
    // Preload SVGs
    const svgs = document.querySelectorAll('svg');
    svgs.forEach((svg) => {
        svg.setAttribute('aria-label', 'Decorative SVG');
    });
};

// ============================================
// 16. FORM FIELD ENHANCEMENTS
// ============================================

/**
 * Add date picker minimum date (today)
 */
const setupDatePicker = () => {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
};

// ============================================
// 16. LANGUAGE TOGGLE
// ============================================

/**
 * Toggle active language pill and apply translations
 */
const setupLanguageToggle = () => {
    const langToggle = document.getElementById('langToggle');
    const langOptions = document.querySelectorAll('.lang-option');
    
    if (!langToggle) return;

    const setActiveLang = (lang) => {
        langOptions.forEach((option) => {
            const isActive = option.dataset.lang === lang;
            option.classList.toggle('active', isActive);
        });

        applyLanguage(lang);
        localStorage.setItem('preferredLang', lang);
    };

    // Set initial language to Indonesian or saved preference
    const initialLang = getPreferredLang();
    setActiveLang(initialLang);

    // Handle clicks on the toggle button - toggle between languages
    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Get current active language and toggle to the other one
        const currentLang = getPreferredLang();
        const nextLang = currentLang === 'id' ? 'en' : 'id';
        
        // Add click animation to toggle button
        langToggle.style.animation = 'none';
        setTimeout(() => {
            langToggle.style.animation = 'buttonPulse 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        }, 10);
        
        setActiveLang(nextLang);
    });
};

// Add animation for button pulse effect
if (!document.getElementById('langToggleAnimations')) {
    const style = document.createElement('style');
    style.id = 'langToggleAnimations';
    style.innerHTML = `
        @keyframes buttonPulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// 17. INITIALIZE ALL ON DOM READY
// ============================================

/**
 * Main initialization function
 * Called when DOM is fully loaded
 */
const init = async () => {
    console.log('%cPortfolio Website Initialized', 
        'color: #14B8A6; font-size: 16px; font-weight: bold;');

    setupLanguageToggle();

    // Intro transition before showing the main content
    await setupIntroSplash();

    // Setup animations
    setupScrollRevealElements();
    initScrollReveal();
    animateCounters();
    
    // Setup interactions
    initSmoothScroll();
    initButtonInteractions();
    setupGalleryHover();
    setupServiceCardHover();
    
    // Setup UI enhancements
    setupScrollIndicator();
    setupHeroInteractions();
    setupActiveNavLinks();
    setupBookingButton();
    setupContactForm();
    setupDatePicker();
    
    // Setup accessibility
    setupAccessibility();
    
    // Performance
    preloadResources();
};

/**
 * Add scroll-reveal class to elements that should animate on scroll
 */
const setupScrollRevealElements = () => {
    // Service cards already have class
    // Project cards already have class
    // Stat items already have class
    // Already set in HTML
};

// Check if DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ============================================
// CONSOLE MESSAGES & BRANDING
// ============================================

console.log('%c Welcome to My Portfolio! ', 
    'background: linear-gradient(135deg, #14B8A6, #0EA5E9); color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('%c Built with Pure HTML5, CSS3 & Vanilla JavaScript ', 
    'color: #0EA5E9; font-size: 12px; font-weight: bold;');
console.log('%c Clean code, clear experience ', 
    'color: #6B7280; font-size: 12px; font-style: italic;');
