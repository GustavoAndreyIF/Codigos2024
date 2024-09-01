async function carregarConteudo(urlPage, urlScript) {
	fetch(urlPage)
		.then((resposta) => {
			if (!resposta.ok) {
				throw new Error(
					`Erro ${resposta.status}: ${resposta.statusText}`
				)
			}
			return resposta.text()
		})
		.then((dados) => {
			document.getElementById("conteudoPagina").innerHTML = dados
			const script = document.createElement("script")
			script.src = urlScript
			document.body.appendChild(script)
		})
		.catch((error) => console.error("Erro ao carregar o conteúdo:", error))
}

if (!localStorage.getItem("teams") || !localStorage.getItem("matches")) {
	async function fetchData() {
		try {
			const [teamsResponse, matchesResponse] = await Promise.all([
				fetch("https://worldcupjson.net/teams"),
				fetch("https://worldcupjson.net/matches"),
			])
			const teamsData = await teamsResponse.json()
			const matchesData = await matchesResponse.json()

			localStorage.setItem("teams", JSON.stringify(teamsData.groups))
			localStorage.setItem("matches", JSON.stringify(matchesData))

			console.log("Dados carregados e armazenados no localStorage")
		} catch (error) {
			console.error("Erro ao buscar dados:", error)
		}
	}

	fetchData()
}

function encontrarTime(termoPesquisa, nomesPaises) {
	const termoLower = termoPesquisa.toLowerCase()

	for (const [key, value] of Object.entries(nomesPaises)) {
		if (
			value.toLowerCase() === termoLower ||
			key.toLowerCase() === termoLower
		) {
			return { nomeIngles: key, nomePortugues: value }
		}
	}

	return null
}

function sugerir(termoPesquisa) {
	const termoLower = termoPesquisa.toLowerCase()
	const sugestoes = []

	for (const [key, value] of Object.entries(nomesPaises)) {
		if (
			key.toLowerCase().startsWith(termoLower) ||
			value.toLowerCase().startsWith(termoLower)
		) {
			sugestoes.push({ nomeIngles: key, nomePortugues: value })
		}
	}

	mostrarSugestoes(sugestoes)
}

function mostrarSugestoes(sugestoes) {
	const container = document.getElementById("sugestoesContainer")
	container.innerHTML = ""

	sugestoes.forEach((sugestao) => {
		const divSugestao = document.createElement("div")
		divSugestao.classList.add("sugestao-item")
		divSugestao.textContent = `${sugestao.nomePortugues} (${sugestao.nomeIngles})`
		divSugestao.onclick = function () {
			document.getElementById("barraPesquisa").value =
				sugestao.nomePortugues
			container.innerHTML = ""
			pesquisar()
		}

		container.appendChild(divSugestao)
	})
}

function criarCard(partida) {
	const card = document.createElement("div")
	card.classList.add("card")

	const bandeiraTime1 = bandeirasPaises[partida.home_team.country]
	const bandeiraTime2 = bandeirasPaises[partida.away_team.country]

	card.innerHTML = `
	<div id="${partida.datetime}">
		<div class="team">
		<!-- Adicona as bandeiras e nomes dos times.
		e em seguida os gols marcados na partida, mais o lugar e horario. -->
			<img width="20" height="15" src="${bandeiraTime1}"/>
			<h3 class="${
				partida.winner_code === partida.home_team.country
					? "ganhador"
					: "perdedor"
			}">${nomesPaises[partida.home_team.name]}</h3>
			<h3> vs </h3>
			<h3 class="${
				partida.winner_code === partida.home_team.country
					? "ganhador"
					: "perdedor"
			}"${nomesPaises[partida.away_team.name]}></h3>
			<img width="20" height="15" src="${bandeiraTime2}">
		</div>
		<p>${partida.home_team.goals} - ${partida.away_team.goals}</p>
		<h4>Estadio</h4>
		<p>${partida.venue} - ${partida.location}</p>
		<h4>Data e Horario</h4>
		<p>${new Date(partida.datetime).toLocaleDateString()} - ${new Date(
		partida.datetime
	).toLocaleTimeString()}</p>
	</div>
`
	return card
}

function pesquisar() {
	const termoPesquisa = document
		.getElementById("barraPesquisa")
		.value.toLowerCase()
	const timeEncontrado = encontrarTime(termoPesquisa, nomesPaises)
	const conteudoPagina = document.getElementById("conteudoPagina")

	if (!timeEncontrado) {
		const msgErro = document.createElement("p")
		msgErro.textContent = "Time não encontrado."
		conteudoPagina.appendChild(msgErro)
		return
	}

	const nomeIngles = timeEncontrado.nomeIngles.toLowerCase()
	const nomePortugues = timeEncontrado.nomePortugues.toLowerCase()

	const times = JSON.parse(localStorage.getItem("teams"))
	const partidas = JSON.parse(localStorage.getItem("matches"))

	const timesFiltrados = times.filter((grupo) =>
		grupo.teams.some(
			(time) =>
				time.name.toLowerCase().includes(nomeIngles) ||
				time.name.toLowerCase().includes(nomePortugues)
		)
	)

	const partidasFiltradas = partidas.filter(
		(partida) =>
			partida.home_team.name.toLowerCase().includes(nomeIngles) ||
			partida.home_team.name.toLowerCase().includes(nomePortugues) ||
			partida.away_team.name.toLowerCase().includes(nomeIngles) ||
			partida.away_team.name.toLowerCase().includes(nomePortugues)
	)
	conteudoPagina.innerHTML = ""
	const sugestaoContainer = document.getElementById("sugestoesContainer")
	sugestaoContainer.innerHTML = ""

	if (timesFiltrados.length > 0) {
		const tituloTimes = document.createElement("h2")
		tituloTimes.textContent = "Time encontrado:"
		conteudoPagina.appendChild(tituloTimes)

		timesFiltrados.forEach((grupo) => {
			const tabela = document.createElement("table")
			tabela.classList.add("tabela-grupos")
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
            <tbody>
                <!-- O map é para iterar em cada elemento do array e retornar uma string para cada linha HTML, fornecendo a posição de cada elemento -->
                ${grupo.teams
					.map(
						(time, index) => `
                    <!-- Atribui uma classe CSS apenas nos times com o index abaixo de 2, ou seja, os times classificados. Caso a condição do if ternário não seja satisfeita, a classe é uma string vazia, ou seja, times com index acima de 2 não ganham estilização de classificado -->
                    <tr class="${
						index < 2 ? "classificado" : "desclassificado"
					}">
                        <td><img src="${
							bandeirasPaises[time.country] || "#"
						}" width="20" height="15"><span>${
							nomesPaises[time.name]
						}<span></td>
                        <td class="center">${time.group_points}</td>
                        <td class="center">${time.games_played}</td>
                        <td class="center">${time.wins}</td>
                        <td class="center">${time.draws}</td>
                        <td class="center">${time.losses}</td>
                        <td class="center">${time.goals_for}</td>
                        <td class="center">${time.goals_against}</td>
                        <td class="center">${time.goal_differential}</td>
                    </tr>
                `
					)
					.join("")}
            </tbody>
        `
			conteudoPagina.appendChild(tabela)
		})
	}

	if (partidasFiltradas.length > 0) {
		selecionarDataPesquisa(partidasFiltradas)
		const tituloPartidas = document.createElement("h2")
		tituloPartidas.textContent = "Partidas encontradas:"
		const divPartidas = document.createElement("div")
		divPartidas.id = "partidasFiltro"
		conteudoPagina.appendChild(tituloPartidas)
		conteudoPagina.appendChild(divPartidas)

		partidasFiltradas.forEach((partida) => {
			const card = criarCard(partida)
			divPartidas.appendChild(card)
		})
	} else {
		const msg = document.createElement("p")
		msg.textContent = "Nenhuma partida encontrada."
		conteudoPagina.appendChild(msg)
	}
	selecionarDataPesquisa(partidasFiltradas)
}

function exibirPartidasNoMain(partidas) {
	const container = document.getElementById("conteudoPagina")
	container.innerHTML = ""

	partidas.forEach((partida) => {
		const card = criarCard(partida)
		container.appendChild(card)
	})
}

function selecionarDataPesquisa(partidas) {
	const divPartidas = document.querySelector("#partidasFiltro")
	const nav = document.querySelector("nav")
	let selectDatas = document.getElementById("selectDatas")

	if (selectDatas) {
		console.log(selectDatas)
		selectDatas.remove()
	}

	selectDatas = document.createElement("select")
	selectDatas.id = "selectDatas"
	selectDatas.innerHTML = `<option value="">Selecione uma data</option>`

	const optionTodas = document.createElement("option")
	optionTodas.value = "todas"
	optionTodas.textContent = "Todas as Partidas"
	selectDatas.appendChild(optionTodas)

	const datasUnicas = [
		...new Set(
			partidas.map((partida) =>
				new Date(partida.datetime).toLocaleDateString()
			)
		),
	]
	datasUnicas.sort()

	datasUnicas.forEach((data) => {
		const option = document.createElement("option")
		option.value = data
		option.textContent = data
		selectDatas.appendChild(option)
	})

	nav.appendChild(selectDatas)

	selectDatas.addEventListener("change", (select) => {
		const dataSelecionada = select.target.value
		const partidasFiltradasPorData = partidas.filter(
			(partida) =>
				new Date(partida.datetime).toLocaleDateString() ===
				dataSelecionada
		)

		divPartidas.innerHTML = ""
		partidasFiltradasPorData.forEach((partida) => {
			const card = criarCard(partida)
			if (card) {
				divPartidas.append(card)
			}
		})

		if (dataSelecionada === "todas") {
			partidas.forEach((partida) => {
				const card = criarCard(partida)
				if (card) {
					divPartidas.appendChild(card)
				}
			})
		}
	})
}

function exibirPartidasNoMain(partidas) {
	const container = document.getElementById("conteudoPagina")
	container.innerHTML = ""

	partidas.forEach((partida) => {
		const card = criarCard(partida)
		container.appendChild(card)
	})
}

const nomesPaises = {
	Qatar: "Catar",
	Ecuador: "Equador",
	Senegal: "Senegal",
	Netherlands: "Países Baixos",
	England: "Inglaterra",
	Iran: "Irã",
	"United States": "Estados Unidos",
	Wales: "País de Gales",
	Argentina: "Argentina",
	"Saudi Arabia": "Arábia Saudita",
	Mexico: "México",
	Poland: "Polônia",
	France: "França",
	Australia: "Austrália",
	Denmark: "Dinamarca",
	Tunisia: "Tunísia",
	Spain: "Espanha",
	"Costa Rica": "Costa Rica",
	Germany: "Alemanha",
	Japan: "Japão",
	Belgium: "Bélgica",
	Canada: "Canadá",
	Morocco: "Marrocos",
	Croatia: "Croácia",
	Brazil: "Brasil",
	Serbia: "Sérvia",
	Switzerland: "Suíça",
	Cameroon: "Camarões",
	Portugal: "Portugal",
	Ghana: "Gana",
	Uruguay: "Uruguai",
	Korea: "Coreia do Sul",
}

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
