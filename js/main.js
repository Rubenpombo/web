document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS
    const PUBLIC_KEY = "a5gX8a2eoWhuJ86Sz";
    const SERVICE_ID = "service_02b2zdt";
    const TEMPLATE_ID = "template_go839fo";

    try {
        emailjs.init(PUBLIC_KEY);
    } catch (e) {
        console.log("EmailJS not initialized. Please set your PUBLIC_KEY in js/main.js");
    }

    const getNestedValue = (obj, path) => {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    };

    const getTranslation = (key, lang) => {
        const currentLang = lang || localStorage.getItem('preferredLanguage') || 'en';
        return getNestedValue(translations[currentLang], key) || key;
    };

    // --- MOBILE MENU ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

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

            const honeypot = document.getElementById('website_url').value;
            if (honeypot) return;

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

    // --- IMAGE MODAL (event thumbnails) ---
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const closeBtn = document.getElementById('modal-close');
    const triggers = document.querySelectorAll('.image-modal-trigger');

    if (modal && modalImg && triggers.length > 0) {
        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const imgSrc = trigger.getAttribute('href')
                    || trigger.getAttribute('data-full-src')
                    || trigger.querySelector('img')?.getAttribute('src');
                const caption = trigger.getAttribute('aria-label')
                    || trigger.innerText.trim()
                    || trigger.querySelector('img')?.getAttribute('alt')
                    || '';

                if (!imgSrc) return;

                modalImg.src = imgSrc;
                modalImg.alt = caption;
                if (modalCaption) modalCaption.textContent = caption;

                modal.classList.remove('hidden');
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                }, 10);
            });
        });

        const closeModal = () => {
            modal.classList.add('opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
                modalImg.src = '';
                modalImg.alt = '';
            }, 300);
        };

        if (closeBtn) closeBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });
    }

    // --- I18N ---
    const langToggle = document.getElementById('lang-toggle');
    const langDropdown = document.getElementById('lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const langOptionsMobile = document.querySelectorAll('.lang-option-mobile');

    if (langToggle && langDropdown) {
        langToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('hidden');
        });

        document.addEventListener('click', (e) => {
            if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.add('hidden');
            }
        });
    }

    const updateContent = (lang) => {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = getTranslation(key, lang);

            if (value !== undefined && value !== null) {
                if (Array.isArray(value)) {
                    el.innerHTML = value.map(tag =>
                        `<span class="px-3 py-1 bg-stone-100 border border-stone-200 rounded text-slate-600 text-sm">${tag}</span>`
                    ).join(' ');
                } else if (typeof value === 'string') {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.placeholder = value;
                    } else if (el.hasAttribute('data-i18n-attr')) {
                        const attr = el.getAttribute('data-i18n-attr');
                        el.setAttribute(attr, value);
                    } else {
                        el.innerHTML = value;
                    }
                }
            }
        });

        const page = document.body.dataset.page;
        const pageTitleKeys = {
            projects: 'projects.pageTitle',
            background: 'background.pageTitle',
            events: 'events.pageTitle'
        };
        const pageTitle = pageTitleKeys[page]
            ? getTranslation(pageTitleKeys[page], lang)
            : getTranslation('title', lang);
        if (pageTitle) document.title = pageTitle;
        document.documentElement.lang = lang;

        if (langToggle) {
            const code = lang === 'en' ? 'EN' : 'ES';
            const textSpan = langToggle.querySelector('span');
            if (textSpan) textSpan.textContent = code;
        }

        if (langOptionsMobile.length > 0) {
            langOptionsMobile.forEach(btn => {
                if (btn.dataset.lang === lang) {
                    btn.classList.remove('text-slate-600', 'border-stone-200', 'bg-stone-50');
                    btn.classList.add('text-stone-900', 'border-stone-900', 'bg-stone-100', 'font-bold');
                } else {
                    btn.classList.add('text-slate-600', 'border-stone-200', 'bg-stone-50');
                    btn.classList.remove('text-stone-900', 'border-stone-900', 'bg-stone-100', 'font-bold');
                }
                btn.style.opacity = '';
                btn.style.borderColor = '';
            });
        }

        localStorage.setItem('preferredLanguage', lang);
    };

    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            updateContent(lang);
            langDropdown.classList.add('hidden');
        });
    });

    langOptionsMobile.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            updateContent(lang);
        });
    });

    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    updateContent(savedLang);

    // --- SCROLL PROGRESS & BACK TO TOP ---
    let progressBar = document.getElementById('scroll-progress');
    if (!progressBar) {
        const header = document.querySelector('header');
        if (header) {
            progressBar = document.createElement('div');
            progressBar.id = 'scroll-progress';
            progressBar.setAttribute('aria-hidden', 'true');
            header.appendChild(progressBar);
        }
    }

    const backToTopBtn = document.getElementById('back-to-top');

    const updateScrollState = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

        if (progressBar) {
            progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
        }

        if (backToTopBtn) {
            if (scrollTop > 500) {
                backToTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
            } else {
                backToTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
            }
        }
    };

    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                updateScrollState();
                isScrolling = false;
            });
            isScrolling = true;
        }
    }, { passive: true });

    window.addEventListener('resize', updateScrollState, { passive: true });
    updateScrollState();

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
