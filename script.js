// Navbar
function navbar() {
	const burger = document.querySelector(".burger");
	const nav_links = document.querySelector(".nav-links");
	const nav_item = document.querySelectorAll(".nav-links li");
	
	burger.addEventListener("click", () => {
		// toggle .nav-links
		nav_links.classList.toggle("nav-active");
		
		// .nav-links animation
		nav_item.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = ""
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});
		
		// burger animation
		burger.classList.toggle("toggle");
	});
	
}

navbar();
