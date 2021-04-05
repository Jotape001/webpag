document.querySelector('.menu-btn').addEventListener(
    'click', ()=> {
        document.querySelector('.nav-menu').classList.toggle('show');
    }
);
ScrollReveal({ reset: true, rotate: {y: 100} });
ScrollReveal().reveal('.nav-main');
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-1', { delay: 100 });
ScrollReveal().reveal('.news-2', { delay: 200 });
ScrollReveal().reveal('.news-3', { delay: 250 });
ScrollReveal().reveal('.news-4', { delay: 150 });
ScrollReveal().reveal('.cards-banner-one', { delay: 100 });

