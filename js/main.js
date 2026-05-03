document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS
    // IMPORTANT: You must replace these placeholders with your actual EmailJS keys!
    // 1. Create an account at https://www.emailjs.com/
    // 2. Add a new Email Service (e.g., Gmail) -> Get Service ID
    // 3. Create an Email Template -> Get Template ID
    // 4. Go to Account > API Keys -> Get Public Key
    
    const PUBLIC_KEY = "a5gX8a2eoWhuJ86Sz"; // e.g., "user_123456"
    const SERVICE_ID = "service_02b2zdt"; // e.g., "service_xyz"
    const TEMPLATE_ID = "template_go839fo"; // e.g., "template_abc"

    try {
        emailjs.init(PUBLIC_KEY);
    } catch (e) {
        console.log("EmailJS not initialized. Please set your PUBLIC_KEY in js/main.js");
    }

    // Helper for manual translations
    const getNestedValue = (obj, path) => {
        return path.split('.').reduce((acc, part) => acc && acc[k = part], obj);
        var k;
    };

    const getTranslation = (key, lang) => {
        const currentLang = lang || localStorage.getItem('preferredLanguage') || 'en';
        return getNestedValue(translations[currentLang], key) || key;
    };

    // --- MOBILE MENU LOGIC ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    const showFormMessage = (text, isError = false) => {
        if (!formMessage) return;
        formMessage.textContent = text;
        formMessage.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-green-100', 'text-green-700');
        formMessage.classList.add(isError ? 'bg-red-100' : 'bg-green-100');
        formMessage.classList.add(isError ? 'text-red-700' : 'text-green-700');
        
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    };

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // 1. Honeypot check
            const honeypot = document.getElementById('website_url').value;
            if (honeypot) return; // Silently fail

            // 2. Rate limiting
            const lastSent = localStorage.getItem('lastEmailSent');
            const now = Date.now();
            const fiveMinutes = 5 * 60 * 1000;
            const currentLang = localStorage.getItem('preferredLanguage') || 'en';

            if (lastSent && (now - parseInt(lastSent)) < fiveMinutes) {
                const waitTime = Math.ceil((fiveMinutes - (now - parseInt(lastSent))) / 60000);
                const msg = getTranslation('contact.form.rateLimit', currentLang).replace('{min}', waitTime);
                showFormMessage(msg, true);
                return;
            }
            
            const button = contactForm.querySelector('button[type="submit"]');
            const originalText = button.innerText;
            
            button.disabled = true;
            button.innerHTML = 'Sending...';

            // 3. Sanitization
            const sanitize = (str) => {
                const div = document.createElement('div');
                div.textContent = str;
                return div.innerHTML;
            };

            const templateParams = {
                name: sanitize(document.getElementById('email').value),
                email: sanitize(document.getElementById('email').value),
                title: sanitize(document.getElementById('subject').value),
                message: sanitize(document.getElementById('message').value)
            };

            emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
                .then(function() {
                    showFormMessage(getTranslation('contact.form.success', currentLang));
                    localStorage.setItem('lastEmailSent', Date.now().toString());
                    contactForm.reset();
                    button.disabled = false;
                    button.innerText = originalText;
                }, function(error) {
                    console.error('FAILED...', error);
                    showFormMessage(getTranslation('contact.form.error', currentLang), true);
                    button.disabled = false;
                    button.innerText = originalText;
                });
        });
    }

    // --- IMAGE MODAL LOGIC ---
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const closeBtn = document.getElementById('modal-close');
    const triggers = document.querySelectorAll('.image-modal-trigger');

    if (modal && modalImg && triggers.length > 0) {
        // Open Modal
        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const imgSrc = trigger.getAttribute('href');
                const caption = trigger.innerText;
                
                modalImg.src = imgSrc;
                if (modalCaption) modalCaption.innerText = caption;
                
                modal.classList.remove('hidden');
                // Small delay to allow display:flex to apply before opacity transition
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                }, 10);
            });
        });

        // Close Modal Function
        const closeModal = () => {
            modal.classList.add('opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
                modalImg.src = '';
            }, 300); // Match transition duration
        };

        // Close on button click
        if (closeBtn) closeBtn.addEventListener('click', closeModal);

        // Close on click outside image
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });
    }


    // --- INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ---
    const scrollTargets = document.querySelectorAll('.scroll-target');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0 }); // Changed from 0.1 to 0

    scrollTargets.forEach(target => {
        observer.observe(target);
    });

    // --- TECH MARQUEE LOGIC ---
    const marqueeContents = document.querySelectorAll('.marquee-content');
    marqueeContents.forEach(content => {
        content.innerHTML += content.innerHTML;
    });

    // --- SPOTLIGHT CARD LOGIC ---
    document.querySelectorAll('.spotlight-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // --- I18N / LANGUAGE SWITCHING ---
    const langToggle = document.getElementById('lang-toggle');
    const langDropdown = document.getElementById('lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const langOptionsMobile = document.querySelectorAll('.lang-option-mobile');
    
    // Toggle Dropdown
    if (langToggle && langDropdown) {
        langToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.add('hidden');
            }
        });
    }

    // Function to update text content based on language
    const updateContent = (lang) => {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = getTranslation(key, lang);

            if (value !== undefined && value !== null) {
                if (Array.isArray(value)) {
                    // Handle arrays (like tags)
                    el.innerHTML = value.map(tag => 
                        `<span class="px-3 py-1 bg-stone-100 border border-stone-200 rounded text-slate-600 text-sm">${tag}</span>`
                    ).join(' ');
                } else if (typeof value === 'string') {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                         el.placeholder = value;
                    } else if (el.hasAttribute('data-i18n-attr')) {
                        // Handle attributes like title or alt
                        const attr = el.getAttribute('data-i18n-attr');
                        el.setAttribute(attr, value);
                        // If it's a tooltip span, we also want the text inside for accessibility/mobile
                        if (el.classList.contains('skill-tooltip')) el.textContent = value;
                    } else {
                        el.innerHTML = value; // Use innerHTML to support <br> and <span>
                    }
                }
            }
        });
        
        // Update Document Title and Lang
        const pageTitle = getTranslation('title', lang);
        if (pageTitle) document.title = pageTitle;
        document.documentElement.lang = lang;

        // Update Toggle Button Text/Icon (Desktop)
        if (langToggle) {
            const code = lang === 'en' ? 'EN' : 'ES';
            // The first span is the text "EN"/"ES"
            const textSpan = langToggle.querySelector('span');
            if (textSpan) textSpan.textContent = code;
        }

        // Update Mobile Buttons Active State
        if (langOptionsMobile.length > 0) {
             langOptionsMobile.forEach(btn => {
                 if (btn.dataset.lang === lang) {
                     // Active State
                     btn.classList.remove('text-slate-600', 'border-stone-200', 'bg-stone-50');
                     btn.classList.add('text-blue-600', 'border-blue-500', 'bg-stone-100');
                 } else {
                     // Inactive State
                     btn.classList.add('text-slate-600', 'border-stone-200', 'bg-stone-50');
                     btn.classList.remove('text-blue-600', 'border-blue-500', 'bg-stone-100');
                 }
                 // Clear inline styles if any were set previously
                 btn.style.opacity = '';
                 btn.style.borderColor = '';
             });
        }

        // Save to localStorage
        localStorage.setItem('preferredLanguage', lang);
    };

    // Event Listeners for Language Options (Desktop)
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            updateContent(lang);
            langDropdown.classList.add('hidden');
        });
    });

    // Event Listeners for Mobile Options
    langOptionsMobile.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            updateContent(lang);
        });
    });

    // Initialize Language
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    updateContent(savedLang);

    // --- SCROLL LOGIC (PROGRESS BAR & BACK TO TOP) ---
    const progressBar = document.getElementById('scroll-progress');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        
        // Update Progress Bar
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }

        // Show/Hide Back to Top Button
        if (backToTopBtn) {
            if (window.scrollY > 500) {
                backToTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
            } else {
                backToTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
            }
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- PROJECTS CAROUSEL LOGIC ---
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('prev-project');
    const nextBtn = document.getElementById('next-project');
    const indicatorsContainer = document.getElementById('carousel-indicators');
    
    if (track && prevBtn && nextBtn && indicatorsContainer) {
        let currentIndex = 0;
        const slides = track.children;
        const totalSlides = slides.length;

        // Create Indicators
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('button');
            dot.classList.add('w-2', 'h-2', 'rounded-full', 'bg-stone-200', 'hover:bg-stone-300', 'transition-all', 'focus:outline-none');
            dot.setAttribute('aria-label', `Project ${i + 1}`);
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateCarousel();
            });
            indicatorsContainer.appendChild(dot);
        }

        const updateCarousel = () => {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            // Update Indicators
            Array.from(indicatorsContainer.children).forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.remove('bg-stone-200');
                    dot.classList.add('bg-stone-400', 'w-4'); // Active: slightly darker and wider
                } else {
                    dot.classList.add('bg-stone-200');
                    dot.classList.remove('bg-stone-400', 'w-4');
                }
            });
        };

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });

        // Initialize first indicator
        updateCarousel();

        // Handle Resize to keep alignment correct
        window.addEventListener('resize', updateCarousel);
    }

});