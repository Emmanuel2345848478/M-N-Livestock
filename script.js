const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');


hamburger.addEventListener('click', () =>mobileMenu.classList.toggle('mobile-menu-active'));


 // Initialize Swiper for Products
        const productsSwiper = new Swiper('.productsSwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });

        // Hero Background Slideshow
        let currentHeroSlide = 0;
        const heroSlides = document.querySelectorAll('.hero-slide');
        
        function changeHeroSlide() {
            heroSlides[currentHeroSlide].classList.remove('active');
            currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
            heroSlides[currentHeroSlide].classList.add('active');
           
        }
        
        // Change hero image every 4 seconds
        setInterval(changeHeroSlide, 4000);


       // Animated Counter
        function animateCounter(element, target) {
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target + '+';
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current) + '+';
                }
            }, 20);
        }



        // Trigger counters when visible
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    const target = parseInt(entry.target.getAttribute('data-target'));
                    animateCounter(entry.target, target);
                }
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.stat-number').forEach(stat => {
                statsObserver.observe(stat);
            });
        });

        // Add to cart functionality - Direct WhatsApp
         document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.add-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get product name from the card
                const productCard = this.closest('.product-card');
                const productName = productCard.querySelector('h3').textContent.trim();
                
                // Create WhatsApp message
                const message = `Hi, I'm interested in ordering:\n\n*${productName}*\n\nPlease provide more details.`;
                const whatsappNumber = '2349032469879'; // Replace with your actual WhatsApp number
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                
                // Open WhatsApp
                window.open(whatsappUrl, '_blank');
            });
        });
    });

    ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.section-header', { origin: 'top' });
ScrollReveal().reveal('.contact-item, .about-section p', { origin: 'bottom' });

ScrollReveal().reveal('.feature-card, .contact-info, .about-image', { origin: 'left' });
ScrollReveal().reveal('.about-text,  .contact-form', { origin: 'right' });
ScrollReveal().reveal('.testimonial-info', { origin: 'right' });

