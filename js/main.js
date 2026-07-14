document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        once: true,
        offset: 50,
        duration: 800,
        easing: 'ease-in-out-cubic',
    });

    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.85)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.6)';
            navbar.style.padding = '20px 0';
        }
    });

    // Handle missing images gracefully for any that I might have missed with onerror
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function () {
            // Replace with a placeholder or hide
            if (!this.src.includes('placeholder')) {
                this.src = 'https://via.placeholder.com/150';
            }
        });
    });

    // Initialize Vanta.js 3D Background on Hero Section
    if (typeof VANTA !== 'undefined' && document.getElementById('vanta-bg')) {
        VANTA.NET({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x0ea5e9, // Soft sky blue matching the brand/gradient
            backgroundAlpha: 0.0, // Transparent background to show CSS gradient
            points: 6.00,
            maxDistance: 12.00,
            spacing: 35.00,
            showDots: false
        });
    }
});
