// importa as bandeiras
import { bandeirasPaises } from './bandeiras.js';

// Faz o fetch na API de times
// O try e o catch servem para caso a requisição der erro, o catch vai devolver qual o erro.
async function fetchTimes() {
	try {
		const resposta = await fetch("https://worldcupjson.net/teams") // Faz a requisição da API
		const dados = await resposta.json() // Pega a resposta da requisição e extrai o JSON
		localStorage.setItem("teams", JSON.stringify(dados.groups)) // Armazena os dados no localStorage
		console.log("Requisição da API teams completa")
		return dados.groups // Retorna os dados dos grupos
	} catch (error) {
		console.error("Erro na busca de times", error)
	}
} 

// Exibe os times separados por grupos no HTML
async function exibirGrupos() {
	// Obtém os dados do localStorage ou faz a requisição se não estiver disponível
	const grupos =
		JSON.parse(localStorage.getItem("teams")) || (await fetchTimes())

	// Pega o ID da <div> container onde as tabelas dos grupos vão ser inseridas
	const container = document.getElementById("gruposContainer")
	container.innerHTML = "" // Limpa o conteúdo da div antes de adicionar tudo

	// Itera sobre cada grupo
	grupos.forEach((grupo) => {
		// Ordena os times com base nos pontos, vitórias e saldo de gols
		grupo.teams.sort((a, b) => {
			// Se os pontos forem diferentes, o retorno é o time com mais pontos colocado antes
			if (a.group_points !== b.group_points)
				return b.group_points - a.group_points // Ordena por pontos
			// Se os números da primeira condição são iguais, ele compara as vitórias
			if (a.wins !== b.wins) return b.wins - a.wins // Ordena por vitórias
			// Se ambas as condições são iguais, retorna o time com o melhor saldo de gols
			return b.goal_differential - a.goal_differential // Ordena por saldo de gols
		})

		// Cria a tabela para o grupo
		const tabela = document.createElement("table")
		tabela.classList.add("tabela-grupos") // Adiciona uma classe CSS para estilo

		// Define o conteúdo da tabela
		tabela.innerHTML = `
            <thead>
                <tr>
                    <th style="text-align: left">Equipe</th>
                    <th>Pts</th>
                    <th>PJ</th>
                    <th>VIT</th>
                    <th>E</th>
                    <th>DER</th>
                    <th>GM</th>
                    <th>GC</th>
                    <th>SG</th>
                    
                </tr>
            </thead>
            <!-- o thead e tbody são o cabeçalho e corpo da tabela, detalhes de HTML semântico -->
            <tbody>
                <!-- O map é para iterar em cada elemento do array e retornar uma string para cada linha HTML, fornecendo a posição de cada elemento -->
                ${grupo.teams
					.map(
						(time, index) => `
                    <!-- Atribui uma classe CSS apenas nos times com o index abaixo de 2, ou seja, os times classificados. Caso a condição do if ternário não seja satisfeita, a classe é uma string vazia, ou seja, times com index acima de 2 não ganham estilização de classificado -->
                    <tr class="${
						index < 2 ? "classificado" : "desclassificado"
					}">
                        <!-- Acessa cada atributo do objeto, nome do time, partidas jogadas e etc. -->
                        <td><img src="${
							bandeirasPaises[time.country] || "#"
						}" width="20" height="15"><span>${time.name}<span></td>
                        <td class="center">${time.group_points}</td>
                        <td class="center">${time.games_played}</td>
                        <td class="center">${time.wins}</td>
                        <td class="center">${time.draws}</td>
                        <td class="center">${time.losses}</td>
                        <td class="center">${time.goals_for}</td>
                        <td class="center">${time.goals_against}</td>
                        <td class="center">${time.goal_differential}</td>
                    </tr>
                    <!-- O join é para combinar todas as strings do map em uma só. Isso serve para imprimir tudo sem erro no HTML -->
                `
					)
					.join("")}
            </tbody>
        `

		// Cria uma div para colocar a tabela do grupo
		const sessaoGrupo = document.createElement("div")
		sessaoGrupo.classList.add("sessaoGrupo") // Adiciona uma classe CSS para estilo
		// Coloca o nome do grupo no HTML
		sessaoGrupo.innerHTML = `<div class="tituloGrupo">Grupo ${grupo.letter}</div>`

		// Adiciona a tabela do grupo na div de sessão
		sessaoGrupo.appendChild(tabela)

		// Adiciona a div da sessão ao container principal
		container.appendChild(sessaoGrupo)
	})
}

// Chama a função para carregar a página
exibirGrupos()
