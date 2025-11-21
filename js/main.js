document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS
    // IMPORTANT: You must replace these placeholders with your actual EmailJS keys!
    // 1. Create an account at https://www.emailjs.com/
    // 2. Add a new Email Service (e.g., Gmail) -> Get Service ID
    // 3. Create an Email Template -> Get Template ID
    // 4. Go to Account > API Keys -> Get Public Key
    
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // e.g., "user_123456"
    const SERVICE_ID = "YOUR_SERVICE_ID"; // e.g., "service_xyz"
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // e.g., "template_abc"

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

            if (PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
                 setTimeout(() => {
                    alert("EmailJS is not configured yet! Please open js/main.js and add your Public Key, Service ID, and Template ID.");
                    button.disabled = false;
                    button.innerText = originalText;
                }, 1000);
                return;
            }

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
});