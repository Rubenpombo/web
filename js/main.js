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

    // --- HERO TEXT ANIMATION ---
    const heroTitle = document.querySelector('#hero h1');
    if (heroTitle) {
        // Get the text content (trimming excess whitespace but keeping internal spaces)
        const text = heroTitle.textContent.trim();
        // Clear current content
        heroTitle.innerHTML = '';
        
        // Split text and wrap in spans
        const chars = text.split('');
        
        chars.forEach((char, index) => {
            // If it's a space, just append a text node or a simple span to preserve layout
            if (char === ' ') {
                const space = document.createTextNode(' ');
                heroTitle.appendChild(space);
                return;
            }

            // Create mask (wrapper)
            const mask = document.createElement('span');
            mask.className = 'hero-char-mask';
            
            // Create content (character)
            const span = document.createElement('span');
            span.textContent = char;
            span.className = 'hero-char';
            span.style.animationDelay = `${index * 0.04}s`; // Stagger delay
            
            mask.appendChild(span);
            heroTitle.appendChild(mask);
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
        // 1. Get original content
        const originalContent = content.innerHTML;
        
        // 2. Duplicate content multiple times (e.g., 10x) to ensure no gaps on 4k+ screens
        //    and to allow for a long, smooth animation loop.
        //    We use 10 copies. Since the animation moves 50% of the width, 
        //    we need 2 sets of "fill the screen". 
        //    10 copies is extremely safe for any resolution.
        content.innerHTML = originalContent.repeat(10);

        // 3. Calculate duration for constant speed
        //    Standard speed: ~50px/s
        //    Total width (scrollWidth) includes all copies.
        //    Distance to move = 50% of total width.
        //    Time = Distance / Speed
        
        // We need a small delay or requestAnimationFrame to ensure DOM has updated 
        // and scrollWidth is accurate (images have fixed width classes, so layout should be known).
        requestAnimationFrame(() => {
            const totalWidth = content.scrollWidth;
            const distance = totalWidth / 2; // We move -50%
            const speed = 50; // pixels per second
            const duration = distance / speed;
            
            content.style.animationDuration = `${duration}s`;
        });
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
});