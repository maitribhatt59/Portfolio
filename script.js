// Custom JavaScript

$(document).ready(function () {
    // Smooth scrolling
    $('a.nav-link').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top - 70,
                },
                800
            );
        }
    });

    // Initialize Wow.js for animations
    new WOW().init();

    // Initialize Vanta.js Birds Animation on the background div
    VANTA.BIRDS({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color1: 0x00a4ff,
        quantity: 3.00,
        backgroundAlpha: 0.00
    });
});
