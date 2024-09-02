function exibirPopup(partida) {
	const popup = document.getElementById("popup")
	const overlay = document.getElementById("overlay")
	const detalhesPartida = document.getElementById("detalhesPartida")

	detalhesPartida.innerHTML = `
        <p>Data: ${new Date(partida.datetime).toLocaleDateString()}</p>
        <p>Hora: ${new Date(partida.datetime).toLocaleTimeString()}</p>
        <p>Estádio: ${partida.venue} - ${partida.location}</p>
        <p>${partida.home_team.name} ${partida.home_team.goals} x ${
		partida.away_team.goals
	} ${partida.away_team.name}</p>
    `

	overlay.style.display = "block"
	popup.style.display = "block"
}

function fecharPopup() {
	const popup = document.getElementById("popup")
	const overlay = document.getElementById("overlay")

	overlay.style.display = "none"
	popup.style.display = "none"
}
