// função que vai ser executada no onclick
function exibir() {
	// pega o valor do numero digitado no input
	const numeroInput = document.getElementById("numeroSelecionado").value
	// testa se o numero degitado e maior igual a 1 ou menor igual a 64
	if (numeroInput >= 1 && numeroInput <= 64) {
		// usa a crase para poder inserir valores dentro da string.
		// o valor insirido e o valor digitado no input
		// o numero e o id da partida que e passada dentro da url para acessar apenas a partida especifica desejada
		const apiUrl = `https://worldcupjson.net/matches/${numeroInput}`
		// o fetch faz a requisição para a api e aguarda a resposta da apii em json
		fetch(apiUrl)
			.then((response) => response.json()) // testa se a resposta e um json
			.then((data) => exibirDetalhes(data)) // pega os dados do json e passa para dentro da função para exibir
	} else {
		alert("Por favor, insira um número entre 1 e 64.")
	}
}

function exibirDetalhes(data) {
	// pega o id da div onde as informações vão ser inseridas
	// para acessar os dados passamos o nome do objeto e logo em seguida o valor que quero acessar
	// alguns valores as vezes dentro de outros objetos mas para acessar basta percorrer com . ate chegar no valor desejado
	// a tag strong deixa em negrito, tag p e um paragrafo, tag h2, h3 e outras são titulos
	document.getElementById("exibirDetalhes").innerHTML = `
		<h2>Detalhes da Partida ${data.id}</h2>
		<p><strong>Data:</strong> ${data.datetime}</p>
		<p><strong>Estádio:</strong> ${data.venue}</p>
		<p><strong>Localização:</strong> ${data.location}</p>
		<p><strong>Status:</strong> ${data.status}</p>
		<p><strong>Fase:</strong> ${data.stage_name}</p>
		<p><strong>Grupo:</strong> ${data.group}</p>
		
		<h3>Times:</h3>
		<p><strong>Casa:</strong> ${data.home_team.name} (${data.home_team.country})</p>
		<p><strong>Fora:</strong> ${data.away_team.name} (${data.away_team.country})</p>
		<p><strong>Placar Final:</strong> ${data.home_team.goals} - ${
		data.away_team.goals
	}</p>
		<p><strong>Placar no 1º Tempo:</strong> ${
			data.home_team.goals_at_half_time
		} - ${data.away_team.goals_at_half_time}</p>
		
		<h3>Estatísticas do ${data.home_team.name} (${data.home_team.country}):</h3>
		<p><strong>Gols Marcados:</strong> ${data.home_team.goals}</p>
		<p><strong>Posse de Bola:</strong> ${data.home_team.possession_percentage}%</p>
		<p><strong>Chutes ao Gol:</strong> ${data.home_team.attempts_on_goal}</p>
		
		<h3>Estatísticas do ${data.away_team.name} (${data.away_team.country}):</h3>
		<p><strong>Gols Marcados:</strong> ${data.away_team.goals}</p>
		<p><strong>Posse de Bola:</strong> ${data.away_team.possession_percentage}%</p>
		<p><strong>Chutes ao Gol:</strong> ${data.away_team.attempts_on_goal}</p>
		
		<h3>Eventos da Partida:</h3>
		<h4>Eventos do ${data.home_team.name} (${data.home_team.country}):</h4>
		${data.home_team_events
			.map(
				(event) =>
					`<p><strong>${event.type_of_event}</strong> - ${event.player} aos ${event.time} minutos</p>`
			)
			.join("")}
		
		<h4>Eventos do ${data.away_team.name} (${data.away_team.country}):</h4>
		${data.away_team_events
			.map(
				(event) =>
					`<p><strong>${event.type_of_event}</strong> - ${event.player} aos ${event.time} minutos</p>`
			)
			.join("")}
	`
}
