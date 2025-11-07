document.addEventListener('DOMContentLoaded', () => { 
    // Initialize EmailJS
    const publicKey = 'VBnMLyn8Dn59qS08z';
    emailjs.init(publicKey);
    console.log("EmailJS initialized for contact form");
    
    // CONTACT FORM HANDLER
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        const submitButton = contactForm.querySelector('.submit-button');
        const successMessage = document.getElementById('successMessage');
        const errorMessage = document.getElementById('errorMessage');

        console.log("Contact form found");

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log("Contact form submitted!");

           
            // Hide previous messages
            if (successMessage) successMessage.classList.remove('show');
            if (errorMessage) errorMessage.classList.remove('show');

            // Get form data
            const contactData = {
                name: document.querySelector('#contact-name').value,
                email: document.querySelector('#contact-email').value,
                phone: document.querySelector('#phone').value,
                message: document.querySelector('#message').value
            };

            console.log("Contact form data:", contactData);

            // Send email using EmailJS
            emailjs.send('service_acsot6a', 'template_5shanbz', contactData)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success message
                if (successMessage) {
                    successMessage.classList.add('show');
                } else {
                    alert('Message sent successfully! We will contact you soon.');
                }
                
                // Reset form
                contactForm.reset();
                
                // Re-enable button
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';

                // Hide success message after 5 seconds
                setTimeout(() => {
                    if (successMessage) successMessage.classList.remove('show');
                }, 5000);
            })
            .catch(function(error) {
                console.log('FAILED...', error);
                
                // Show error message with details
                if (errorMessage) {
                    errorMessage.textContent = '✗ Error: ' + (error.text || 'Please try again');
                    errorMessage.classList.add('show');
                } else {
                    alert('There was an error sending your message. Please try again.');
                }
                
                // Re-enable button
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';

                // Hide error message after 5 seconds
                setTimeout(() => {
                    if (errorMessage) errorMessage.classList.remove('show');
                }, 5000);
            });
        });
    } else {
        console.error('Contact form not found in the DOM.');
    }
});