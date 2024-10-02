// URL da API para buscar os times da Copa do Mundo
const teamsUrl = "https://worldcupjson.net/teams"

// Função para buscar e exibir as tabelas de classificação dos grupos
function exibirClassificacao() {
	// Faz uma requisição para a API dos times usando a função fetch
	fetch(teamsUrl)
		.then((response) => response.json()) // Converte a resposta da API para o formato JSON
		.then((data) => {
			// Obtém o elemento <div> do HTML onde as tabelas de classificação serão exibidas
			const classificacaoDiv = document.getElementById("classificacao")

			// Limpa o conteúdo anterior da <div> para garantir que apenas as tabelas mais recentes sejam exibidas
			classificacaoDiv.innerHTML = ""

			// Itera sobre os grupos de times
			data.groups.forEach((group) => {
				// Cria uma tabela HTML para cada grupo
				const tabela = document.createElement("table")

				// Adiciona um cabeçalho à tabela com os nomes das colunas
				tabela.innerHTML = `
                    <caption><h3>Grupo ${group.letter}</h3></caption> <!-- Adiciona um título à tabela -->
                    <tr>
                        <th>Equipe</th>
                        <th>Jogos</th>
                        <th>Vitórias</th>
                        <th>Empates</th>
                        <th>Derrotas</th>
                        <th>Gols Pró</th>
                        <th>Gols Contra</th>
                        <th>Saldo de Gols</th>
                        <th>Pontos</th>
                    </tr>
                `

				// Ordena os times dentro do grupo com base no número de pontos, do maior para o menor
				// O método `sort()` organiza os elementos de um array em uma ordem específica.
				// A função de comparação `(a, b) => b.group_points - a.group_points` faz com que os times com mais pontos venham antes dos times com menos pontos.
				// O resultado é uma lista de times ordenada de forma decrescente pelos pontos acumulados.
				const timesOrdenados = group.teams.sort(
					(a, b) => b.group_points - a.group_points
				)

				// Itera sobre os times ordenados dentro do grupo
				timesOrdenados.forEach((team) => {
					// Cria uma nova linha na tabela para cada time
					const linha = document.createElement("tr")

					// Adiciona as células com informações do time
					linha.innerHTML = `
                        <td>${team.name}</td> <!-- Nome do time -->
                        <td>${team.games_played}</td> <!-- Número de jogos jogados -->
                        <td>${team.wins}</td> <!-- Número de vitórias -->
                        <td>${team.draws}</td> <!-- Número de empates -->
                        <td>${team.losses}</td> <!-- Número de derrotas -->
                        <td>${team.goals_for}</td> <!-- Número de gols marcados -->
                        <td>${team.goals_against}</td> <!-- Número de gols sofridos -->
                        <td>${team.goal_differential}</td> <!-- Saldo de gols (gols marcados - gols sofridos) -->
                        <td>${team.group_points}</td> <!-- Pontos acumulados -->
                    `

					// Adiciona a linha à tabela
					tabela.appendChild(linha)
				})

				// Adiciona a tabela à <div> de classificação no HTML
				classificacaoDiv.appendChild(tabela)
			})
		})
}

// Chama a função para exibir as tabelas de classificação ao carregar a página
exibirClassificacao()
