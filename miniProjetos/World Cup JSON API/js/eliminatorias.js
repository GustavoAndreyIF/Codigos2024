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
// a URL com todas as bandeiras dos paises da copa, de cahve e passado o mesmo valor do country da API Teams
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

// Faz a mesma coisa do fetchTimes(), mas com a API matches
async function fetchTimes() {
	try {
		const resposta = await fetch("https://worldcupjson.net/matches") // Faz a requisição da API
		const dados = await resposta.json() // Pega a resposta da requisição e extrai o JSON
		localStorage.setItem("teams", JSON.stringify(dados)) // Armazena os dados no localStorage
		console.log("Requisição da API teams completa")
		return dados // Retorna os dados dos grupos
	} catch (error) {
		console.error("Erro na busca de times", error)
	}
}

// funnção so para exibir os nomes das fases de eliminatorias para portuges
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

function exibirPartidas() {
	// Obtém os dados do localStorage ou faz a requisição se não estiver disponível
	const partidas = JSON.parse(localStorage.getItem("matches")) || fetchJogos()

	// Pega o ID da <div> container onde as tabelas das eliminatorias vão ser inseridas
	const container = document.getElementById("partidasContainer")
	container.innerHTML = "" // Limpa o conteúdo da div antes de adicionar tudo

	// Cria a tabela para cada fase das eliminatorias
	const tabela = document.createElement("table")
	tabela.classList.add("tabela-fases") // Adiciona uma classe CSS para estilo
	partidas.forEach((partida) => {
		// Define o conteúdo da tabela
		tabela.innerHTML = `

            `
		// Cria uma div para colocar a tabela
		const sessaoEliminatorias = document.createElement("div")
		sessaoEliminatorias.classList.add("sessaoFase") // Adiciona uma classe CSS para estilo
		// Coloca o nome da fase de classificação no HTML
		sessaoEliminatorias.innerHTML = `<div class="tituloFase">${fasesNomes(
			partida.stage_name
		)}</div>`

		// Adiciona a tabela do grupo na div de sessão
		sessaoEliminatorias.appendChild(tabela)

		// Adiciona a div da sessão ao container principal
		container.appendChild(sessaoEliminatorias)
	})
}
// Chama a função para carregar a página
exibirPartidas()
