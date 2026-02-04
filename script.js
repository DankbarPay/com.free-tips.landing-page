document.addEventListener('DOMContentLoaded', function() {
    // 1. Mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = navLinks.querySelectorAll('a');

    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.setAttribute('aria-expanded', navLinks.classList.contains('active'));
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Close mobile menu when clicking on nav items
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                navLinks.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // 2. Language switching system
    let currentLang = 'de';

    // Function to update all translatable elements
    function updateLanguage(lang) {
        currentLang = lang;

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update all elements with data-de and data-en attributes
        const translatableElements = document.querySelectorAll('[data-de], [data-en]');

        translatableElements.forEach(element => {
            // Skip language switcher buttons
            if (element.classList.contains('lang-btn')) return;

            // For elements with innerText
            if (element.dataset[lang] !== undefined) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    // Update placeholder for input elements
                    const placeholderAttr = element.getAttribute(`data-${lang}-placeholder`);
                    if (placeholderAttr) {
                        element.placeholder = placeholderAttr;
                    }
                } else if (element.tagName === 'LABEL') {
                    // Handle labels with required asterisk
                    const text = element.dataset[lang];
                    if (text.includes('*')) {
                        const parts = text.split('*');
                        element.innerHTML = `${parts[0]}<span class="required">*</span>${parts[1] || ''}`;
                    } else {
                        element.textContent = text;
                    }
                } else {
                    element.textContent = element.dataset[lang];
                }
            }
        });

        // Special handling for complex elements
        updateComplexElements(lang);

        // Save language preference
        localStorage.setItem('stimmtso-lang', lang);
    }

    // Function for complex elements that need special handling
    function updateComplexElements(lang) {
        // Update hero title (two lines)
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const lines = heroTitle.querySelectorAll('.title-line');
            if (lines.length === 2) {
                lines[0].textContent = lang === 'de' ? 'Bargeldlose Trinkgelder' : 'Cashless Tips';
                lines[1].textContent = lang === 'de' ? 'für die deutsche Gastronomie' : 'for the German Hospitality Industry';
            }
        }

        // Update section titles
        document.querySelectorAll('.section-title').forEach(title => {
            const textSpan = title.querySelector('.section-title-text');
            const highlightSpan = title.querySelector('.section-title-highlight');
            const restSpan = title.querySelector('.section-title-rest');

            if (textSpan) {
                textSpan.textContent = textSpan.dataset[lang];
            }
            if (highlightSpan) {
                highlightSpan.textContent = highlightSpan.dataset[lang];
            }
            if (restSpan) {
                restSpan.textContent = restSpan.dataset[lang];
            }
        });

        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    // 3. Language switcher buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });

    // 4. Load saved language preference
    const savedLang = localStorage.getItem('stimmtso-lang');
    if (savedLang && (savedLang === 'de' || savedLang === 'en')) {
        updateLanguage(savedLang);
    }

    // 5. Contact form modal
    const modal = document.getElementById('contactFormModal');
    const openFormButtons = document.querySelectorAll('.open-form');
    const closeModalButton = document.querySelector('.close-modal');
    const contactForm = document.getElementById('contactForm');
    const formContent = document.getElementById('formContent');
    const thankYouMessage = document.getElementById('thankYouMessage');

    // Open form when QR code is clicked
    document.querySelector('.qr-visual').addEventListener('click', function(e) {
        e.preventDefault();
        openModal();
    });

    // Open form from buttons
    openFormButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    });

    // Open modal function
    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';
    }

    // Close modal function
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '';
    }

    // Close form
    closeModalButton.addEventListener('click', closeModal);

    // Close form on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Close form on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Basic validation
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const company = document.getElementById('company').value.trim();

        if (!name || !phone || !company) {
            const errorMessage = currentLang === 'de'
                ? 'Bitte füllen Sie alle Pflichtfelder aus.'
                : 'Please fill in all required fields.';
            alert(errorMessage);
            return;
        }

        // Show success message
        formContent.style.display = 'none';
        thankYouMessage.style.display = 'block';

        // Reset form after 5 seconds
        setTimeout(() => {
            contactForm.reset();
            formContent.style.display = 'block';
            thankYouMessage.style.display = 'none';
            closeModal();
        }, 5000);
    });

    // 6. Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href === '#' || href.startsWith('mailto:') || href.startsWith('tel:')) {
                return;
            }

            e.preventDefault();

            const targetId = href;
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (window.innerWidth <= 992 && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    // 7. Update current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // 8. Add scroll effect to header
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }

        if (scrollTop > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }

        lastScrollTop = scrollTop;
    });

    // 9. Add loading animation for cards
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

    // Observe feature cards, steps, and industry cards
    document.querySelectorAll('.feature-card, .step, .industry-card, .testimonial-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // 10. Initialize tooltips for accessibility
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.setAttribute('title', element.getAttribute('data-tooltip'));
    });
});
