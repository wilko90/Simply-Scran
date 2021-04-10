const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-data');
const container = document.querySelector('.container');
let searchQuery = '';
const APP_ID = '8cd9dfe4';
const APP_key = 'd4c908c465e03754de3addc77af6a8a7'
const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}`;

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();

})

async function fetchAPI (){
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&to=6`;
    const response = await fetch (baseURL)
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data)
}
function generateHTML(results){
    let generatedHTML = '';
    results.map(result => {
      generatedHTML +=
     
      `
      <div class="card mb-4 box-shadow">
                    <img class="card-img-top" src="${result.recipe.image}">
                    <div class="card-body">
                        <p class="card-text">${result.recipe.label}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal"
                                    data-target="#exampleModal">View Recipe</button>

                            </div>

                        </div>
                    </div>
                </div>
                `
    })
    searchResultDiv.innerHTML = generatedHTML;
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
});


