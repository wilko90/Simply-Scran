fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/324694/analyzedInstructions?stepBreakdown=true", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "ae23dff16dmsh22f76a1569fe669p1624f8jsn623c761b8b11",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});



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