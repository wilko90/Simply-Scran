//SCROLL SECTIONS
//https://www.youtube.com/watch?v=RsPWEmfOQdU
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })

    navLi.forEach(li => {
        li.classList.remove('active-nav');
        if (li.classList.contains(current)) {
            li.classList.add('active-nav')
        }
    })
})




//SCROLL REVEAL
//https://stackoverflow.com/questions/40620736/scrollreveal-javascript-not-defined
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2200,
    reset: true
});

sr.reveal(`.home-margin, .initial-home-image, .inspiration-reveal, .card-1-reveal, .card-2-reveal, .card-3-reveal, .veg-image-size, .about-us-col, .map-media, .maps-col,  .contact-reveal, .contact-button`, {
    interval: 200
});




