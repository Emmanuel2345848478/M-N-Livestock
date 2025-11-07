const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');


hamburger.addEventListener('click', () =>mobileMenu.classList.toggle('mobile-menu-active'));

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal(' .certificate-details', { origin: 'right' });
ScrollReveal().reveal('.certificate-image-container', { origin: 'bottom' });


 