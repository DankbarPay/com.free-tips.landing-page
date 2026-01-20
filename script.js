document.addEventListener('DOMContentLoaded', function() {
    // 1. Mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', function() {
        const isVisible = navLinks.style.display === 'flex';
        navLinks.style.display = isVisible ? 'none' : 'flex';

        if (!isVisible) {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'white';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        }
    });

    // 2. Translations
    const translations = {
        de: {
            navFeatures: 'Funktionen',
            navHowItWorks: 'So funktioniert\'s',
            navIndustries: 'Branchen',
            navTestimonials: 'Kundenstimmen',
            navCTA: 'Kostenlos starten',
            heroTitle: 'Digitale Trinkgelder <span>ohne Kleingeld</span>',
            heroText: 'Stimmtso ermöglicht Restaurants, Cafés, Friseuren, Autowaschanlagen und Dienstleistungsunternehmen, digitale Trinkgelder einfach anzunehmen. Kein Bargeld nötig – einfach scannen und Trinkgeld geben.',
            heroCTA: 'Kostenlos testen',
            heroSecondary: 'So funktioniert\'s',
            qrHint: 'Scannen Sie mit Ihrem Smartphone',
            featuresTitle: 'Warum <span>Stimmtso</span> wählen',
            feature1Title: 'Einfache QR-Codes',
            feature1Text: 'Erstellen Sie individuelle QR-Codes für jeden Mitarbeiter oder jedes Team. Gäste scannen einfach – kein App-Download erforderlich.',
            feature2Title: 'Höhere Trinkgelder',
            feature2Text: 'Erhöhen Sie die Trinkgeldbeträge um 15–30 %, indem Sie das Trinkgeldgeben für Kunden, die nur mit Karte zahlen, bequem und zugänglich machen.',
            feature3Title: 'Echtzeit-Analytik',
            feature3Text: 'Verfolgen Sie Trinkgelder, Leistung und Gästezufriedenheit über unser umfassendes Dashboard mit Exportfunktionen.',
            feature4Title: 'Team-Management',
            feature4Text: 'Verteilen Sie Trinkgelder einfach unter Teams mit anpassbaren Verteilungsregeln. Stärken Sie den Teamgeist durch Transparenz.',
            feature5Title: '100 % konform',
            feature5Text: 'Vollständig konform mit deutschen Steuervorschriften und Trinkgeldgesetzen. Automatisierte Berichte vereinfachen die Buchhaltung.',
            feature6Title: 'Schnelle Integration',
            feature6Text: 'Verbinden Sie sich mit Ihren bestehenden Kassensystemen oder nutzen Sie die Standalone-Lösung. In weniger als 10 Minuten startklar.',
            howItWorksTitle: 'So <span>funktioniert es</span>',
            step1Title: 'Kostenlos anmelden',
            step1Text: 'Erstellen Sie in wenigen Minuten Ihr Geschäftskonto. Keine Einrichtungsgebühren oder monatlichen Kosten. Nur Bezahlung pro Transaktion.',
            step2Title: 'QR-Codes erhalten',
            step2Text: 'Generieren Sie personalisierte QR-Codes für Ihre Mitarbeiter oder Teams. Drucken Sie sie aus, zeigen Sie sie digital an oder integrieren Sie sie in Rechnungen.',
            step3Title: 'Trinkgelder erhalten',
            step3Text: 'Gäste scannen den Code mit jeder Smartphone-Kamera und geben Trinkgeld mit ihrer bevorzugten Zahlungsmethode.',
            step4Title: 'Automatische Auszahlungen',
            step4Text: 'Trinkgelder gehen direkt auf die Bankkonten der Mitarbeiter. Flexible Verteilungsregeln und Echtzeit-Verfolgung.',
            industriesTitle: 'Perfekt für <span>Ihr Unternehmen</span>',
            industry1Title: 'Restaurants & Cafés',
            industry1Text: 'Servicekräfte, Barkeeper und Empfangsmitarbeiter erhalten Trinkgelder direkt.',
            industry2Title: 'Friseure & Salons',
            industry2Text: 'Friseure, Stylisten und Kosmetikerinnen erhalten digitale Trinkgelder.',
            industry3Title: 'Autowaschanlagen',
            industry3Text: 'Mitarbeiter erhalten Wertschätzung für hervorragenden Service.',
            industry4Title: 'Hotels',
            industry4Text: 'Porter, Hauspersonal und Concierge-Mitarbeiter profitieren.',
            industry5Title: 'Lieferdienste',
            industry5Text: 'Fahrer erhalten Trinkgelder direkt zu ihrem Verdienst hinzugefügt.',
            industry6Title: 'Wellness & Fitness',
            industry6Text: 'Trainer, Therapeuten und Instruktoren erhalten digitale Trinkgelder.',
            industry7Title: 'Taxi-Dienste',
            industry7Text: 'Taxifahrer erhalten Trinkgelder bequem per digitaler Zahlung.',
            industry8Title: 'Event-Services',
            industry8Text: 'Catering- und Event-Mitarbeiter sammeln Trinkgelder einfach ein.',
            testimonialsTitle: 'Was unsere <span>Kunden sagen</span>',
            testimonial1Text: 'Seit der Einführung von Stimmtso haben sich die Trinkgelder unseres Personals um 22 % erhöht. Das System ist für unser Team und die Gäste unglaublich einfach.',
            testimonial1Name: 'Maria Schmidt',
            testimonial1Role: 'Restaurantbesitzerin, Berlin',
            testimonial2Text: 'Als Friseur habe ich früher Trinkgelder verpasst, wenn Kunden nur Karten dabeihatten. Jetzt erhalte ich täglich Trinkgelder über Stimmtso – das hat mein Einkommen erheblich verändert.',
            testimonial2Name: 'Thomas Jäger',
            testimonial2Role: 'Friseursalon, Hamburg',
            testimonial3Text: 'Die Team-Verteilungsfunktion hat alle Streitigkeiten über die Trinkgeldaufteilung beseitigt. Unsere Mitarbeiter lieben die Transparenz und sofortigen Auszahlungen.',
            testimonial3Name: 'Anna Keller',
            testimonial3Role: 'Café-Managerin, München',
            ctaTitle: 'Bereit, Ihre Trinkgelder zu erhöhen?',
            ctaText: 'Schließen Sie sich Hunderten von Dienstleistungsunternehmen in Deutschland an, die bereits Stimmtso nutzen, um digitale Trinkgelder zu vereinfachen und das Einkommen der Mitarbeiter zu steigern.',
            ctaButton: 'Jetzt kostenlos testen',
            ctaSubtext: 'Keine Kreditkarte erforderlich • Kostenlose Einrichtungsunterstützung • Jederzeit kündbar',
            footerAbout: 'Digitale Trinkgeldlösungen für Deutschlands Dienstleistungsbranche. Machen Sie das Trinkgeldgeben einfach, transparent und profitabel für alle.',
            footerProduct: 'Produkt',
            footerLegal: 'Rechtliches',
            footerContact: 'Kontakt',
            formTitle: 'Kostenlose Testversion starten',
            formDescription: 'Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen, um Ihre kostenlose Testversion einzurichten.',
            nameLabel: 'Name *',
            namePlaceholder: 'Ihr Vor- und Nachname',
            phoneLabel: 'Telefonnummer *',
            phonePlaceholder: '+49 123 456789',
            companyLabel: 'Unternehmen *',
            companyPlaceholder: 'Name Ihres Unternehmens',
            emailLabel: 'E-Mail (optional)',
            emailPlaceholder: 'ihre.email@beispiel.de',
            submitButton: 'Jetzt kostenlos testen',
            thankYouTitle: 'Vielen Dank!',
            thankYouText: 'Ihre Anfrage wurde erfolgreich übermittelt. Мы werden uns innerhalb von 24 Stunden bei Ihnen melden, um Ihre kostenlose Testversion von Stimmtso einzurichten.',
            closeButton: 'Schließen'
        },
        en: {
            navFeatures: 'Features',
            navHowItWorks: 'How it works',
            navIndustries: 'Industries',
            navTestimonials: 'Testimonials',
            navCTA: 'Get Started',
            heroTitle: 'Digital Tips <span>Without the Change</span>',
            heroText: 'Stimmtso enables restaurants, cafés, barbers, car washes and service businesses to accept digital tips easily. No cash needed – just scan and tip.',
            heroCTA: 'Start Free Trial',
            heroSecondary: 'See How It Works',
            qrHint: 'Scan with your smartphone',
            featuresTitle: 'Why Choose <span>Stimmtso</span>',
            feature1Title: 'Simple QR Codes',
            feature1Text: 'Generate unique QR codes for each employee or team. Guests simply scan to tip – no app download required.',
            feature2Title: 'Higher Tips',
            feature2Text: 'Increase tip amounts by 15–30% by making tipping convenient and accessible for card-only customers.',
            feature3Title: 'Real-time Analytics',
            feature3Text: 'Track tips, performance, and guest satisfaction through our comprehensive dashboard with export capabilities.',
            feature4Title: 'Team Management',
            feature4Text: 'Easily distribute tips among teams with customizable allocation rules. Strengthen team spirit with transparency.',
            feature5Title: '100% Compliant',
            feature5Text: 'Fully compliant with German tax regulations and tipping laws. Automated reporting simplifies accounting.',
            feature6Title: 'Fast Integration',
            feature6Text: 'Connect with your existing POS systems or use standalone. Get started in less than 10 minutes.',
            howItWorksTitle: 'How It <span>Works</span>',
            step1Title: 'Sign Up Free',
            step1Text: 'Create your business account in minutes. No setup fees or monthly charges. Only pay per transaction.',
            step2Title: 'Get Your QR Codes',
            step2Text: 'Generate personalized QR codes for your staff or teams. Print them, display digitally, or embed in receipts.',
            step3Title: 'Start Receiving Tips',
            step3Text: 'Guests scan the code with any smartphone camera and tip using their preferred payment method.',
            step4Title: 'Automatic Payouts',
            step4Text: 'Tips go directly to employees\' bank accounts. Flexible distribution rules and real-time tracking.',
            industriesTitle: 'Perfect For <span>Your Business</span>',
            industry1Title: 'Restaurants & Cafés',
            industry1Text: 'Waitstaff, bartenders, and hosts receive tips directly.',
            industry2Title: 'Barbers & Salons',
            industry2Text: 'Hairdressers, stylists, and beauticians get digital tips.',
            industry3Title: 'Car Washes',
            industry3Text: 'Attendants receive appreciation for great service.',
            industry4Title: 'Hotels',
            industry4Text: 'Porters, housekeeping, and concierge staff benefit.',
            industry5Title: 'Delivery Services',
            industry5Text: 'Drivers get tips added directly to their earnings.',
            industry6Title: 'Wellness & Fitness',
            industry6Text: 'Trainers, therapists, and instructors receive digital tips.',
            industry7Title: 'Taxi Services',
            industry7Text: 'Taxi drivers receive tips conveniently via digital payment.',
            industry8Title: 'Event Services',
            industry8Text: 'Catering and event staff easily collect tips.',
            testimonialsTitle: 'What Our <span>Clients Say</span>',
            testimonial1Text: 'Since implementing Stimmtso, our staff tips have increased by 22%. The system is incredibly easy for both our team and guests.',
            testimonial1Name: 'Maria Schmidt',
            testimonial1Role: 'Restaurant Owner, Berlin',
            testimonial2Text: 'As a barber, I used to miss out on tips when clients only had cards. Now I receive tips daily through Stimmtso – it\'s changed my earnings significantly.',
            testimonial2Name: 'Thomas Jäger',
            testimonial2Role: 'Barbershop, Hamburg',
            testimonial3Text: 'The team distribution feature has eliminated all disputes about tip sharing. Our employees love the transparency and instant payouts.',
            testimonial3Name: 'Anna Keller',
            testimonial3Role: 'Café Manager, Munich',
            ctaTitle: 'Ready to Increase Your Tips?',
            ctaText: 'Join hundreds of service businesses across Germany already using Stimmtso to simplify digital tipping and boost employee earnings.',
            ctaButton: 'Start Your Free Trial Now',
            ctaSubtext: 'No credit card required • Free setup support • Cancel anytime',
            footerAbout: 'Digital tipping solutions for Germany\'s service industry. Making tipping easy, transparent, and profitable for everyone.',
            footerProduct: 'Product',
            footerLegal: 'Legal',
            footerContact: 'Contact',
            formTitle: 'Start Free Trial',
            formDescription: 'Fill out the form and we\'ll contact you within 24 hours to set up your free trial.',
            nameLabel: 'Name *',
            namePlaceholder: 'Your first and last name',
            phoneLabel: 'Phone Number *',
            phonePlaceholder: '+49 123 456789',
            companyLabel: 'Company *',
            companyPlaceholder: 'Your company name',
            emailLabel: 'Email (optional)',
            emailPlaceholder: 'your.email@example.com',
            submitButton: 'Start Free Trial Now',
            thankYouTitle: 'Thank You!',
            thankYouText: 'Your request has been successfully submitted. We will contact you within 24 hours to set up your free trial of Stimmtso.',
            closeButton: 'Close'
        }
    };

    // 3. Apply translation function
    function applyTranslation(lang) {
        const t = translations[lang];

        // Navigation
        document.querySelectorAll('.nav-links a')[0].textContent = t.navFeatures;
        document.querySelectorAll('.nav-links a')[1].textContent = t.navHowItWorks;
        document.querySelectorAll('.nav-links a')[2].textContent = t.navIndustries;
        document.querySelectorAll('.nav-links a')[3].textContent = t.navTestimonials;
        document.querySelector('.nav-links .cta-button').textContent = t.navCTA;

        // Hero
        document.querySelector('.hero h1').innerHTML = t.heroTitle;
        document.querySelector('.hero p').textContent = t.heroText;
        document.querySelector('.hero-buttons .cta-button').textContent = t.heroCTA;
        document.querySelector('.hero-buttons .secondary-button').textContent = t.heroSecondary;
        document.querySelector('.qr-hint').innerHTML = `<i class="fas fa-mobile-alt"></i>${t.qrHint}`;

        // Features
        document.querySelector('#features .section-title').innerHTML = t.featuresTitle;
        const features = document.querySelectorAll('.feature-card');
        features[0].querySelector('h3').textContent = t.feature1Title;
        features[0].querySelector('p').textContent = t.feature1Text;
        features[1].querySelector('h3').textContent = t.feature2Title;
        features[1].querySelector('p').textContent = t.feature2Text;
        features[2].querySelector('h3').textContent = t.feature3Title;
        features[2].querySelector('p').textContent = t.feature3Text;
        features[3].querySelector('h3').textContent = t.feature4Title;
        features[3].querySelector('p').textContent = t.feature4Text;
        features[4].querySelector('h3').textContent = t.feature5Title;
        features[4].querySelector('p').textContent = t.feature5Text;
        features[5].querySelector('h3').textContent = t.feature6Title;
        features[5].querySelector('p').textContent = t.feature6Text;

        // How It Works
        document.querySelector('#how-it-works .section-title').innerHTML = t.howItWorksTitle;
        const steps = document.querySelectorAll('.step');
        steps[0].querySelector('h3').textContent = t.step1Title;
        steps[0].querySelector('p').textContent = t.step1Text;
        steps[1].querySelector('h3').textContent = t.step2Title;
        steps[1].querySelector('p').textContent = t.step2Text;
        steps[2].querySelector('h3').textContent = t.step3Title;
        steps[2].querySelector('p').textContent = t.step3Text;
        steps[3].querySelector('h3').textContent = t.step4Title;
        steps[3].querySelector('p').textContent = t.step4Text;

        // Industries
        document.querySelector('#industries .section-title').innerHTML = t.industriesTitle;
        const industries = document.querySelectorAll('.industry-card');
        industries.forEach((card, i) => {
            card.querySelector('h3').textContent = t[`industry${i+1}Title`];
            card.querySelector('p').textContent = t[`industry${i+1}Text`];
        });

        // Testimonials
        document.querySelector('#testimonials .section-title').innerHTML = t.testimonialsTitle;
        const testimonials = document.querySelectorAll('.testimonial-card');
        testimonials[0].querySelector('.testimonial-text').textContent = t.testimonial1Text;
        testimonials[0].querySelector('h4').textContent = t.testimonial1Name;
        testimonials[0].querySelector('p').textContent = t.testimonial1Role;
        testimonials[1].querySelector('.testimonial-text').textContent = t.testimonial2Text;
        testimonials[1].querySelector('h4').textContent = t.testimonial2Name;
        testimonials[1].querySelector('p').textContent = t.testimonial2Role;
        testimonials[2].querySelector('.testimonial-text').textContent = t.testimonial3Text;
        testimonials[2].querySelector('h4').textContent = t.testimonial3Name;
        testimonials[2].querySelector('p').textContent = t.testimonial3Role;

        // CTA
        document.querySelector('.cta-section h2').textContent = t.ctaTitle;
        document.querySelector('.cta-section p').textContent = t.ctaText;
        document.querySelector('.cta-section .cta-button').textContent = t.ctaButton;
        document.querySelector('.cta-subtext').textContent = t.ctaSubtext;

        // Footer
        document.querySelectorAll('.footer-column')[0].querySelector('p').textContent = t.footerAbout;
        document.querySelectorAll('.footer-column')[1].querySelector('h3').textContent = t.footerProduct;
        document.querySelectorAll('.footer-column')[2].querySelector('h3').textContent = t.footerLegal;
        document.querySelectorAll('.footer-column')[3].querySelector('h3').textContent = t.footerContact;

        // Form
        document.querySelector('#formContent h2').textContent = t.formTitle;
        document.querySelector('#formContent p').textContent = t.formDescription;
        document.querySelector('label[for="name"]').innerHTML = t.nameLabel.replace('*', '<span class="required">*</span>');
        document.querySelector('#name').placeholder = t.namePlaceholder;
        document.querySelector('label[for="phone"]').innerHTML = t.phoneLabel.replace('*', '<span class="required">*</span>');
        document.querySelector('#phone').placeholder = t.phonePlaceholder;
        document.querySelector('label[for="company"]').innerHTML = t.companyLabel.replace('*', '<span class="required">*</span>');
        document.querySelector('#company').placeholder = t.companyPlaceholder;
        document.querySelector('label[for="email"]').textContent = t.emailLabel;
        document.querySelector('#email').placeholder = t.emailPlaceholder;
        document.querySelector('.submit-btn').textContent = t.submitButton;

        // Thank You
        document.querySelector('#thankYouMessage h2').textContent = t.thankYouTitle;
        document.querySelector('#thankYouMessage p').textContent = t.thankYouText;
        document.querySelector('#thankYouMessage .cta-button').textContent = t.closeButton;

        // Update document language
        document.documentElement.lang = lang;
    }

    // Apply German by default
    applyTranslation('de');

    // 4. Language switcher
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');

            // Update active button
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Apply translations
            applyTranslation(lang);
        });
    });

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
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Open form from buttons
    openFormButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close form
    closeModalButton.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close form on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Here would be server submission
        // For demo, just show message
        formContent.style.display = 'none';
        thankYouMessage.style.display = 'block';

        // Reset form after 5 seconds
        setTimeout(() => {
            contactForm.reset();
            formContent.style.display = 'block';
            thankYouMessage.style.display = 'none';
        }, 5000);
    });

    // 6. Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Close mobile menu
                if (window.innerWidth <= 992) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });

    // 7. Update current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
