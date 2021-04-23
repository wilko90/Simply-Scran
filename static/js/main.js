//scroll sections
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');
window.addEventListener('scroll', () => {
	let current = '';
	sections.forEach(section => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (pageYOffset >= (sectionTop - sectionHeight / 4)) {
			current = section.getAttribute('id');
		}
	})
	console.log(current)
	navLi.forEach(li => {
		li.classList.remove('active-nav');
		if (li.classList.contains(current)) {
			li.classList.add('active-nav')
		}
	})
})
//scroll reveal
const sr = ScrollReveal({
	origin: 'top',
	distance: '30px',
	duration: 2200,
	reset: true
});
sr.reveal(`.home-margin, .initial-home-image, .inspiration-reveal, .card-1-reveal, .card-2-reveal, .card-3-reveal, .veg-image-size, .about-us-col, .map-media, .maps-col,  .contact-reveal, .contact-button`, {
	interval: 200
});
//closes recipe modal
$("#close-modal-button").modal("hide");