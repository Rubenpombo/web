document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS
    // IMPORTANT: You must replace these placeholders with your actual EmailJS keys!
    // 1. Create an account at https://www.emailjs.com/
    // 2. Add a new Email Service (e.g., Gmail) -> Get Service ID
    // 3. Create an Email Template -> Get Template ID
    // 4. Go to Account > API Keys -> Get Public Key
    
    const PUBLIC_KEY = "ogvuqPjn80l6o57Gf"; // e.g., "user_123456"
    const SERVICE_ID = "service_bvz5x9e"; // e.g., "service_xyz"
    const TEMPLATE_ID = "template_0fykrd4"; // e.g., "template_abc"

    try {
        emailjs.init(PUBLIC_KEY);
    } catch (e) {
        console.log("EmailJS not initialized. Please set your PUBLIC_KEY in js/main.js");
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const button = contactForm.querySelector('button[type="submit"]');
            const originalText = button.innerText;
            
            button.disabled = true;
            button.innerHTML = 'Sending...';

            // Prepare parameters matching your EmailJS template variables
            const templateParams = {
                from_email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                to_name: "Ruben" // Optional, if your template uses it
            };

            emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
                .then(function() {
                    alert('Message sent successfully!');
                    contactForm.reset();
                    button.disabled = false;
                    button.innerText = originalText;
                }, function(error) {
                    console.error('FAILED...', error);
                    alert('Failed to send message. Please try again later.');
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
            const keys = key.split('.');
            let value = translations[lang];
            
            // Traverse the translations object
            keys.forEach(k => {
                if (value) value = value[k];
            });

            if (value) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                     el.placeholder = value;
                } else {
                    el.innerHTML = value; // Use innerHTML to support <br> and <span>
                }
            }
        });
        
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
                     btn.classList.remove('text-slate-300', 'border-slate-700');
                     btn.classList.add('text-white', 'border-blue-500', 'bg-slate-700');
                 } else {
                     // Inactive State
                     btn.classList.add('text-slate-300', 'border-slate-700');
                     btn.classList.remove('text-white', 'border-blue-500', 'bg-slate-700');
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

    // --- PROJECTS CAROUSEL LOGIC ---
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('prev-project');
    const nextBtn = document.getElementById('next-project');
    
    if (track && prevBtn && nextBtn) {
        let currentIndex = 0;
        const slides = track.children;
        const totalSlides = slides.length;

        const updateCarousel = () => {
            const width = track.clientWidth; // Get container width
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });

        // Handle Resize to keep alignment correct
        window.addEventListener('resize', updateCarousel);
    }

});