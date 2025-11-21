document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // --- INTEGRATION INSTRUCTIONS ---
            // To make this form functional, you can use a service like EmailJS (https://www.emailjs.com/).
            // 1. Sign up for EmailJS and create a service and a template.
            // 2. Include the EmailJS SDK in your index.html.
            // 3. Use the following code to send the email:
            /*
            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
                from_email: email,
                subject: subject,
                message: message
            }).then(
                function(response) {
                    alert("Message sent successfully!");
                    contactForm.reset();
                },
                function(error) {
                    alert("Failed to send message. Please try again.");
                }
            );
            */

            // --- MOCK SUBMISSION FOR DEMO PURPOSES ---
            console.log('Form Submitted:', { email, subject, message });
            
            const button = contactForm.querySelector('button[type="submit"]');
            const originalText = button.innerText;
            
            button.disabled = true;
            button.innerHTML = 'Sending...';
            
            // Simulate network delay
            setTimeout(() => {
                alert('Thank you for your message! This is a demo form. To make it functional, integrate a backend service like EmailJS.');
                contactForm.reset();
                button.disabled = false;
                button.innerText = originalText;
            }, 1500);
        });
    }
});
