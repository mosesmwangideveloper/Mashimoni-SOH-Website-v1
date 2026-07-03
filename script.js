// Toggle the navigation menu
var navLinks = document.getElementById("navLinks");
var overlay = document.getElementById("overlay");

function showMenu(){
    navLinks.style.right = "0";
    overlay.classList.add("active");
}

function hideMenu(){
    navLinks.style.right = "-280px";
    overlay.classList.remove("active");
}

// Slide in animation on scroll for services cards
const serviceCards = document.querySelectorAll('.our-services-col, .fade-up, .partner-col, .cta-section .cta-buttons .hero-btn');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

serviceCards.forEach(card => observer.observe(card));
