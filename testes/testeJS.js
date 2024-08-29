document.addEventListener("DOMContentLoaded", () => {
	// Seleciona os elementos do DOM
	const openPopupButton = document.getElementById("openPopup")
	const popup = document.getElementById("popup")
	const closePopupButton = document.getElementById("closePopup")

	// Função para abrir o pop-up
	openPopupButton.addEventListener("click", () => {
		popup.style.display = "flex"
	})

	// Função para fechar o pop-up
	closePopupButton.addEventListener("click", () => {
		popup.style.display = "none"
	})

	// Fechar o pop-up clicando fora dele
	window.addEventListener("click", (event) => {
		if (event.target === popup) {
			popup.style.display = "none"
		}
	})
})
