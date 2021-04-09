const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-data');
const container = document.querySelector('.container');
let searchQuery = '';
const APP_Key = 'ae23dff16dmsh22f76a1569fe669p1624f8jsn623c761b8b11';
const APP_Host = "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"



searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();

});

async function fetchAPI (){
    
    const baseURL = `https://api.spoonacular.com/recipes/complexSearch?q=${searchQuery}&app_key=${APP_Key}&app_host=${APP_Host}&to=6`;
    const response = await fetch(baseURL);
    const data = await response.json()
    console.log(data)
}

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