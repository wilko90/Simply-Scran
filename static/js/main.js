const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-data');
const container = document.querySelector('.container');
let searchQuery = '';

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    console.log(searchQuery)

})


"/======SCROLL REVEAL======/"
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2200,
    reset: true
});

sr.reveal(`.home-margin, .initial-home-image, .veg-image-size, .about-us-col, .inspiration-reveal, .card-1-reveal, .card-2-reveal, .card-3-reveal, .card-4-reveal, .card-5-reveal, .card-6-reveal, .contact-reveal, .contact-button`, {
    interval: 200
})


$("#exampleModal").modal("hide");