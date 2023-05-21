function abrirmenu() {
	let BarraMenuAberto = document.getElementById("barra-menu");

	if (BarraMenuAberto.style.width == "0px") {
		BarraMenuAberto.style.width = "180px";
	} else {
		BarraMenuAberto.style.width = "0px";
	}
}

const links = document.querySelectorAll(".scroll-link");

// Para cada link, adiciona um evento de clique que rola a página suavemente para a
// seção correspondente
links.forEach((link) => {
	link.addEventListener("click", (event) => {
		event.preventDefault();

		const sectionId = link.getAttribute("href").substring(1);
		const section = document.getElementById(sectionId);

		window.scrollTo({
			top: section.offsetTop,
			behavior: "smooth",
		});
	});
});
