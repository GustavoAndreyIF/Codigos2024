// Objeto para armazenar as URLs das bandeiras dos países
const bandeirasPaises = {
	QAT: "https://flagcdn.com/w320/qa.png",
	ECU: "https://flagcdn.com/w320/ec.png",
	SEN: "https://flagcdn.com/w320/sn.png",
	NED: "https://flagcdn.com/w320/nl.png",
	ENG: "https://flagcdn.com/w320/gb-eng.png",
	IRN: "https://flagcdn.com/w320/ir.png",
	USA: "https://flagcdn.com/w320/us.png",
	WAL: "https://flagcdn.com/w320/gb-wls.png",
	ARG: "https://flagcdn.com/w320/ar.png",
	KSA: "https://flagcdn.com/w320/sa.png",
	MEX: "https://flagcdn.com/w320/mx.png",
	POL: "https://flagcdn.com/w320/pl.png",
	FRA: "https://flagcdn.com/w320/fr.png",
	AUS: "https://flagcdn.com/w320/au.png",
	DEN: "https://flagcdn.com/w320/dk.png",
	TUN: "https://flagcdn.com/w320/tn.png",
	ESP: "https://flagcdn.com/w320/es.png",
	CRC: "https://flagcdn.com/w320/cr.png",
	GER: "https://flagcdn.com/w320/de.png",
	JPN: "https://flagcdn.com/w320/jp.png",
	BEL: "https://flagcdn.com/w320/be.png",
	CAN: "https://flagcdn.com/w320/ca.png",
	MAR: "https://flagcdn.com/w320/ma.png",
	CRO: "https://flagcdn.com/w320/hr.png",
	BRA: "https://flagcdn.com/w320/br.png",
	SRB: "https://flagcdn.com/w320/rs.png",
	SUI: "https://flagcdn.com/w320/ch.png",
	CMR: "https://flagcdn.com/w320/cm.png",
	POR: "https://flagcdn.com/w320/pt.png",
	GHA: "https://flagcdn.com/w320/gh.png",
	URU: "https://flagcdn.com/w320/uy.png",
	KOR: "https://flagcdn.com/w320/kr.png",
}

// Faz o fetch na API de partidas e armazena no localStorage
async function fetchJogos() {
	try {
		const resposta = await fetch("https://worldcupjson.net/matches")
		const dados = await resposta.json()
		localStorage.setItem("matches", JSON.stringify(dados)) // Armazena a lista de partidas no localStorage
		console.log("Dados armazenados no localStorage:", dados)
		return dados
	} catch (error) {
		console.error("Erro na requisição:", error)
	}
}

// Função para exibir o nome das fases de eliminatórias em português
function fasesNomes(faseNome) {
	switch (faseNome) {
		case "First stage":
			return "Fase de Grupos"
		case "Round of 16":
			return "Oitavas de final"
		case "Quarter-final":
			return "Quartas de final"
		case "Semi-final":
			return "Semifinais"
		case "Final":
			return "Final da Copa do Mundo"
		case "Play-off for third place":
			return "Disputa pelo terceiro lugar"
		default:
			return faseNome // Retorna o valor original se não houver tradução
	}
}

// Função para criar um card com as informações da partida
function criarCard(partida) {
	const card = document.createElement("div")
	card.classList.add("card")

	const bandeiraTime1 =
		bandeirasPaises[partida.home_team.country] ||
		"https://via.placeholder.com/32"
	const bandeiraTime2 =
		bandeirasPaises[partida.away_team.country] ||
		"https://via.placeholder.com/32"
		card.innerHTML = `
        <div class="team">
		<!-- Adicona as bandeiras e nomes dos times.
		e em seguida os gols marcados na partida, mais o lugar e horario. -->
            <img width="20" height="15" src="${bandeiraTime1}"/>
			<h3>${partida.home_team.name} vs ${partida.away_team.name}</h3>
			<img width="20" height="15" src="${bandeiraTime2}">
        </div>
        <p>${partida.home_team.goals} - ${partida.away_team.goals}</p>
        <h4>Estadio</h4>
		<p>${partida.location}</p>
		<h4>Data e Horario</h4>
        <p>${new Date(partida.datetime).toLocaleDateString()} - ${new Date(
		partida.datetime
	).toLocaleTimeString()}</p>
    `
	return card
}

// Função para exibir as partidas no HTML
async function exibirPartidas() {
	let partidas = JSON.parse(localStorage.getItem("matches"))

	if (!partidas) {
		partidas = await fetchJogos() // Faz a requisição se não houver dados
	}

	console.log("Partidas obtidas:", partidas)

	const container = document.getElementById("partidasContainer")
	container.innerHTML = "" // Limpa o conteúdo da div antes de adicionar tudo

	const fases = {
		"First stage": "Fase de Grupos",
		"Round of 16": "Oitavas de final",
		"Quarter-final": "Quartas de final",
		"Semi-final": "Semifinais",
		Final: "Final da Copa do Mundo",
		"Play-off for third place": "Disputa pelo terceiro lugar",
	}

	Object.keys(fases).forEach((fase) => {
		const divFase = document.createElement("div")
		divFase.classList.add("fase")
		divFase.innerHTML = `<h3>${fases[fase]}</h3>`
		const cardsContainer = document.createElement("div")
		cardsContainer.classList.add("cards-container")

		// Cria os cards e os adiciona ao container
		const cards = partidas
			.filter((partida) => partida.stage_name === fase)
			.map((partida) => criarCard(partida))

		// Adiciona os cards ao container com no máximo 8 cards por linha
		cards.forEach((card, index) => {
			if (index % 8 === 0 && index !== 0) {
				// Adiciona uma quebra de linha após 8 cards
				cardsContainer.appendChild(document.createElement("br"))
			}
			cardsContainer.appendChild(card)
		})

		// Adiciona o container de cards à div da fase
		divFase.appendChild(cardsContainer)
		container.appendChild(divFase)

		// Adiciona uma barra de rolagem horizontal se houver mais de 16 cards
		if (cards.length > 16) {
			cardsContainer.style.overflowX = "auto"
			cardsContainer.style.whiteSpace = "nowrap"
		}
	})
}

// Chama a função para carregar a página
exibirPartidas()
