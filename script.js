// Navbar
function navSlide() {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");
	
	burger.addEventListener("click", () => {
		// Toggle Nav
		nav.classList.toggle("nav-active");
		
		// Link fade animation
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = ""
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});
		
		// Burger toggle animation
		burger.classList.toggle("toggle");
	});
	
}

navSlide();


// Carousel
const buttons = document.querySelectorAll("[data-carousel-button]")
buttons.forEach(button => {
	button.addEventListener("click", () => {
		const offset = button.dataset.carouselButton === "next" ? 1 : -1
		const slides = button
			.closest("[data-carousel]")
			.querySelector("[data-slides]")

		const activeSlide = slides.querySelector("[data-active]")
		let newIndex = [...slides.children].indexOf(activeSlide) + offset
		if (newIndex < 0) newIndex = slides.children.length - 1
		if (newIndex >= slides.children.length) newIndex = 0

		slides.children[newIndex].dataset.active = true
		delete activeSlide.dataset.active
	})
})