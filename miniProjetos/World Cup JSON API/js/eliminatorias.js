// função para criar cards, pequenos blocos para cada partidas
function criarCard(partida) {
	const card = document.createElement("div") // cria uma tag div
	card.classList.add("card") // coloca uma classe CSS na div card
	// coloca as bandeiras nos seus respectivos times
	const bandeiraTime1 = bandeirasPaises[partida.home_team.country]
	const bandeiraTime2 = bandeirasPaises[partida.away_team.country]

	card.innerHTML = `
	<div class="team">
	<!-- Adicona as bandeiras e nomes dos times.
	e em seguida os gols marcados na partida, mais o lugar e horario. -->
		<img width="20" height="15" src="${bandeiraTime1}"/>
		<h3>${nomesPaises[partida.home_team.name]} vs ${
		nomesPaises[partida.away_team.name]
	}</h3>
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
// exibirpartidas no HTML
function exibirPartidas() {
	// Obtém os dados do localStorage ou faz a requisição se não estiver disponível
	let partidas = JSON.parse(localStorage.getItem("matches")) || fetchJogos()
	// Pega o ID da <div> container onde as tabelas das eliminatorias vão ser inseridas
	const container = document.getElementById("partidasContainer")
	container.innerHTML = "" // Limpa o conteúdo da div antes de adicionar tudo
	// objeto para trocar as strings em ingles da API para portugues. chave : valor,
	const fases = {
		"First stage": "Fase de Grupos",
		"Round of 16": "Oitavas de final",
		"Quarter-final": "Quartas de final",
		"Semi-final": "Semifinais",
		Final: "Final da Copa do Mundo",
		"Play-off for third place": "Disputa pelo terceiro lugar",
	}
	// O object keys e usado para conseguir as strings das chaves do objeto
	// com isso o forEach percorre cada elemento do objeto.
	Object.keys(fases).forEach((fase) => {
		const divFase = document.createElement("div") // cria a div
		divFase.classList.add("fase") // coloca um atributo class
		// adiciona o titulo da fase de elminatoria atual
		// o nome exibido e acessando o valor da chave da fase inserida pelo JSON
		divFase.innerHTML = `<h2>${fases[fase]}</h2>`
		// cria uma div para cada partida dentro da fase atual
		const cardsContainer = document.createElement("div")
		cardsContainer.classList.add("cardsContainer") // coloca uma classe css
		// coloca os cards dentro do container da fase
		const cards = partidas
			.filter((partida) => partida.stage_name === fase)
			//usa o filter para filtrar o estagio que a fase de classificação
			//e compara com a fase atual que esta sendo percorrido
			.map((partida) => criarCard(partida))
		// o map aplica uma função para cada valor dentro de um objeto ou lista
		// adiciona cada card dentro do cardsContainer
		cards.forEach((card) => {
			cardsContainer.appendChild(card)
		})
		// Adiciona o container de cards à div da fase e adicona a div de fase no container
		divFase.appendChild(cardsContainer)
		container.appendChild(divFase)
	})
}
// Chama a função para carregar a página
exibirPartidas()
