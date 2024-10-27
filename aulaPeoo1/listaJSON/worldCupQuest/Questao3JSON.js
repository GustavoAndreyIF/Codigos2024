// URL da API para buscar os times da Copa do Mundo
const teamsUrl = "https://worldcupjson.net/teams"

// URL da API para buscar as partidas da Copa do Mundo
const matchesUrl = "https://worldcupjson.net/matches"

// Função para buscar e carregar os times no <select> ao carregar a página
function carregarTimes() {
	// Faz uma requisição para a API dos times usando fetch
	// .then() é usado para executar uma função quando uma promessa (promise) é resolvida com sucesso, geralmente após uma operação assíncrona como fetch.
	fetch(teamsUrl)
		.then((response) => response.json()) // Converte a resposta para JSON
		.then((data) => {
			const select = document.getElementById("teamSelect") // Obtém o select do HTML pelo ID

			// Itera sobre os grupos de times, forEach() é usado para iterar sobre todos os elementos de um array, executando uma função callback para cada item.
			// Um callback é uma função que é passada como argumento para outra função e será executada dentro dela em determinado momento. No caso do forEach(), o callback é chamado para cada item do array, permitindo que você execute uma ação com base nesse item.
			data.groups.forEach((group) => {
				// Para cada grupo, iteramos sobre os times
				group.teams.forEach((team) => {
					const option = document.createElement("option") // Cria um elemento HTML option <option>
					option.value = team.country // O valor da opção será o código do país (ex: "QAT")
					option.textContent = team.name // O texto da opção será o nome do país (ex: "Qatar")
					select.appendChild(option) // Adiciona a opção ao select
				})
			})
		})
}

// Função para buscar os jogos do time selecionado
function buscarJogos() {
	const select = document.getElementById("teamSelect") // Obtém o select do HTML pelo ID
	const equipeSelecionada = select.value // Obtém o valor da equipe selecionada (código do país)

	// Faz a requisição para a API de partidas usando fetch
	fetch(matchesUrl)
		.then((response) => response.json()) // Converte a resposta para JSON
		.then((data) => {
			const resultadosDiv = document.getElementById("resultados") // Obtém a div de resultados
			resultadosDiv.innerHTML = "" // Limpa os resultados anteriores

			// Filtra os jogos que envolvem a equipe selecionada
			// Filtra a lista de jogos para encontrar aqueles que envolvem a equipe selecionada
			// A função `filter` cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.
			// Nesse caso, a função fornecida verifica se o jogo inclui a equipe selecionada, seja como time da casa (home_team) ou time visitante (away_team).
			const jogosDaEquipe = data.filter(
				(jogo) =>
					// Verifica se o código do país do time da casa (home_team) é igual ao código da equipe selecionada
					jogo.home_team.country === equipeSelecionada ||
					// Ou se o código do país do time visitante (away_team) é igual ao código da equipe selecionada
					jogo.away_team.country === equipeSelecionada
			)

			// Verifica se foram encontrados jogos para a equipe selecionada
			// A propriedade `length` do array `jogosDaEquipe` retorna o número de jogos encontrados. Se o valor for maior que 0, significa que há jogos para a equipe.
			if (jogosDaEquipe.length > 0) {
				// Se houver jogos para a equipe, iteramos sobre cada um deles usando `forEach`.
				// A função `forEach` executa uma função callback para cada elemento do array, permitindo que criemos e exibamos informações para cada jogo.
				jogosDaEquipe.forEach((jogo) => {
					// Cria um novo elemento HTML <div> para exibir as informações de um jogo
					const elementoJogo = document.createElement("div")

					// Define o conteúdo HTML do novo elemento <div> para incluir detalhes do jogo
					// Utiliza template literals (backticks) para criar uma string HTML com informações do jogo, como:
					// - Nomes dos times e seus respectivos gols
					// - Data e hora do jogo formatadas de forma legível
					// - Local e estádio onde o jogo ocorreu
					elementoJogo.innerHTML = `
            <p>${jogo.home_team.name} ${jogo.home_team.goals} x ${
						jogo.away_team.goals
					} ${jogo.away_team.name}</p>
            <p>Data: ${new Date(jogo.datetime).toLocaleString()}</p>
            <p>Local: ${jogo.location} - ${jogo.venue}</p>
            <br>
        `

					// Adiciona o novo elemento <div> com as informações do jogo à <div> de resultados no HTML
					resultadosDiv.appendChild(elementoJogo)
				})
			} else {
				// Se não houver jogos para a equipe, exibe uma mensagem informando que nenhum jogo foi encontrado
				resultadosDiv.innerHTML =
					"<p>Nenhum jogo encontrado para essa equipe.</p>"
			}
		})
}

// Carrega os times quando a página é carregada
carregarTimes()
