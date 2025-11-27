const fadeEls = document.querySelectorAll('.fade-in');
const nav = document.getElementById('navMenu');
const menuBtn = document.getElementById('menuBtn');

window.addEventListener('scroll', () => {
    fadeEls.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 50){
            el.classList.add('visible');
        }
    });
});

// Mobile menu toggle
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});
