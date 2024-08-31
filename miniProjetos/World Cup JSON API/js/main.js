// Carrega o HTML de outras paginas sem a necessidade de carregar uma nova pagina
// Entra como parametro a URL da pagina que e passado no momento de executar a função no index.html
async function carregarConteudo(urlPage, urlScript) {
	// o fetch faz a requisição para a pagina HTMl clicada
	fetch(urlPage)
		.then((resposta) => {
			// igual o try e catch, mas aqui o erro e retornado pelo if, se a reposta nao estiver ok, imprime o erro
			if (!resposta.ok) {
				throw new Error(
					// o objeto Eroor criado retorna o status do erro.
					`Erro ${resposta.status}: ${resposta.statusText}`
				)
			}
			// o metodo text e usado para pegar o conteudo da respota do fetch, ou seja os dados
			return resposta.text()
		})
		.then((dados) => {
			// adiciona todos os dados da pagina html no conteudo main
			document.getElementById("conteudoPagina").innerHTML = dados
			// cria uma tag script para que o codigo da pagina funcione
			const script = document.createElement("script")
			// atribui a tag script o atributo src, que como valor e passado o endereço do script da pagina
			script.src = urlScript
			// adiciona o script no body do html
			document.body.appendChild(script)
		})
		// se tudo der errado, o catch vai imprimir no console
		.catch((error) => console.error("Erro ao carregar o conteúdo:", error))
}
// Faz o fetch nas APIs teams e matches
// O try e o catch servem para caso a requisição der erro, o catch vai devolver qual o erro.
// Faz o fetch apenas se os dados não estiverem no localStorage
if (!localStorage.getItem("teams") || !localStorage.getItem("matches")) {
	async function fetchData() {
		try {
			// declara duas constantes
			const [teamsResponse, matchesResponse] = await Promise.all([
				// o Promise.all quer dizer que o codigo vai esperar (await) todas as requisições da api
				fetch("https://worldcupjson.net/teams"),
				fetch("https://worldcupjson.net/matches"),
			])

			const teamsData = await teamsResponse.json()
			const matchesData = await matchesResponse.json()
			// armazena os dados em diferentes lugares do localStorage do navegador
			localStorage.setItem("teams", JSON.stringify(teamsData.groups))
			localStorage.setItem("matches", JSON.stringify(matchesData))

			console.log("Dados carregados e armazenados no localStorage")
		} catch (error) {
			console.error("Erro ao buscar dados:", error)
		}
	}
	// se os dados não tiverem no localStorage a função de carregar os dados e feita
	fetchData()
}
// essa função serve para pegar o nome escrito na barra de pesquisa, e retorna ele ingles.
// isso serve porque eu não quis fazer outro objeto de nomes de paises mas chaves e valores invenrtidos.
// e complicado, mas em resumo tanto a pesquisa em portugues, quanto em ingles funcionam
function encontrarTime(termoPesquisa, nomesPaises) {
	// Convertendo o termo de pesquisa para lowercase para deixar tudo menisculo
	const termoLower = termoPesquisa.toLowerCase()
	// passa a chave e o valor do objeto nomesPaises, e ve se o nome em portugues que e o valor ou o ingles que e a chave e igual ao termo de pesquisa.
	for (const [key, value] of Object.entries(nomesPaises)) {
		if (
			value.toLowerCase() === termoLower ||
			key.toLowerCase() === termoLower
		) {
			return { nomeIngles: key, nomePortugues: value }
		}
	}

	// Se nada foi encontrado, retornamos null ou uma mensagem de erro
	return null
}

function sugerir(termoPesquisa) {
	// deixa o termo todo minusculo
	const termoLower = termoPesquisa.toLowerCase()
	//lista com todas as sugestões possiveis
	const sugestoes = []
	//percorrer cada valor e chave do nome dos paises
	for (const [key, value] of Object.entries(nomesPaises)) {
		if (
			key.toLowerCase().startsWith(termoLower) ||
			value.toLowerCase().startsWith(termoLower)
		) {
			// adiciona a lista de sugestões as sugestões possiveis
			sugestoes.push({ nomeIngles: key, nomePortugues: value })
		}
	}

	mostrarSugestoes(sugestoes)
}

function mostrarSugestoes(sugestoes) {
	// pega o id da div que vai exibir os nomes sugeridos
	const container = document.getElementById("sugestoesContainer")
	container.innerHTML = "" // Limpa as sugestões anteriores
	// percorrer a lista de possiveis sugestões
	sugestoes.forEach((sugestao) => {
		const divSugestao = document.createElement("div") // cria uma div para colocar cada sugestão
		divSugestao.classList.add("sugestao-item") // coloca um css pra deixar bonito
		// adiciona de conteudo do texto da div o nome e portugues e entre chaves em ingles
		divSugestao.textContent = `${sugestao.nomePortugues} (${sugestao.nomeIngles})`
		// adiciona um onclick na div de cada nome sugerido
		divSugestao.onclick = function () {
			// pega o valor da barra de pesquisa e coloca o nome sugerido clicado
			document.getElementById("barraPesquisa").value =
				sugestao.nomePortugues
			container.innerHTML = "" // Limpa as sugestões após a seleção
			pesquisar() // executa a pesquisa apos seleção
		}
		// adiciona a sugestão na div de sugestões
		container.appendChild(divSugestao)
	})
}

// função para criar cards, pequenos blocos para cada partida exibida.
function criarCard(partida) {
	const card = document.createElement("div") // cria uma tag div
	card.classList.add("card") // coloca uma classe CSS na div card
	// coloca as bandeiras nos seus respectivos times
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
	// esse date e para pegar a string da data json e converte ela para um formato de data que nos usamos.
	return card
}

// Função para exibir as partidas filtradas no main
function exibirPartidasNoMain(partidas) {
	const container = document.getElementById("conteudoPagina")
	container.innerHTML = "" // Limpa o conteúdo anterior

	partidas.forEach((partida) => {
		const card = criarCard(partida)
		container.appendChild(card)
	})
}

function pesquisar() {
	// pega o valor da barra de pesquisa
	const termoPesquisa = document
		.getElementById("barraPesquisa")
		.value.toLowerCase()
	// executa a função para encontrar os times
	const timeEncontrado = encontrarTime(termoPesquisa, nomesPaises)
	// se o time não for encontrado a função retorna nada
	if (!timeEncontrado) {
		console.log("Time não encontrado.")
		return
	}
	// como a função encontrarTime() retorna um objeto, eu consigo pegar o nome em portugues e ingles
	const nomeIngles = timeEncontrado.nomeIngles.toLowerCase()
	const nomePortugues = timeEncontrado.nomePortugues.toLowerCase()
	// pega os jsons de time e partidas
	const times = JSON.parse(localStorage.getItem("teams"))
	const partidas = JSON.parse(localStorage.getItem("matches"))
	// procura com um filtro se tem algum time com o nome inserido na barra de pesquisa, seja ingles ou portugues
	const timesFiltrados = times.filter((grupo) =>
		grupo.teams.some(
			// pega o parametro grupo, e acessa cada array dentro da lista de times.
			// o some verifica se um dos nomes dos times sejam ingles ou portugues atendem o requisito.
			(time) =>
				time.name.toLowerCase().includes(nomeIngles) ||
				time.name.toLowerCase().includes(nomePortugues)
		)
	)
	// procura o nome seja no time da casa ou convidado se o nome esta inserido dentro do json de partidas
	// o include serve exatamente para checar se o nome do time esta dentro do objeto
	const partidasFiltradas = partidas.filter(
		(partida) =>
			partida.home_team.name.toLowerCase().includes(nomeIngles) ||
			partida.home_team.name.toLowerCase().includes(nomePortugues) ||
			partida.away_team.name.toLowerCase().includes(nomeIngles) ||
			partida.away_team.name.toLowerCase().includes(nomePortugues)
	)
	// pega o id do main pra inserir o conteudo pesquisado.
	const conteudoPagina = document.getElementById("conteudoPagina")
	conteudoPagina.innerHTML = "" // Limpa o conteúdo anterior
	const sugestaoContainer = document.getElementById("sugestoesContainer") // pega as sugestoes e limpa elas
	sugestaoContainer.innerHTML = ""
	// se o conteudo digitado for maior que zero ele insere o conteudo.
	if (timesFiltrados.length > 0) {
		// cria uma tag h2 para titulo
		const tituloTimes = document.createElement("h2")
		tituloTimes.textContent = "Time encontrado:" // adiciona como conteudo do texto
		conteudoPagina.appendChild(tituloTimes) // insere o titulo
		// percorre os time encontrado, boa parte desse codigo e reciclado.
		timesFiltrados.forEach((grupo) => {
			const tabela = document.createElement("table") // cria uma tabela
			tabela.classList.add("tabela-grupos") // coloca um atributo css
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
                    <!-- O join é para combinar todas as strings do map em uma só. Isso serve para imprimir tudo sem erro no HTML -->
                `
					)
					.join("")}
            </tbody>
        `
			conteudoPagina.appendChild(tabela)
		})
	} else {
		// caso nenhum time seja encontrado, imprime uma mensagem.
		const msg = document.createElement("p") // cria uma tag de paragrafo
		msg.textContent = "Nenhum time encontrado."
		conteudoPagina.appendChild(msg)
	}

	// insere as partidas filtradas
	if (partidasFiltradas.length > 0) {
		// executa a função para criar um filtro de data de data para as partidas
		selecionarDataPesquisa(partidasFiltradas)
		const tituloPartidas = document.createElement("h2") //cria uma tag h2 de titulo
		tituloPartidas.textContent = "Partidas encontradas:" //adiona conteudo na tag
		const divPartidas = document.createElement("div") // cria uma div para as partidas
		divPartidas.id = "partidasFiltro" // coloca um id na div
		conteudoPagina.appendChild(tituloPartidas)
		conteudoPagina.appendChild(divPartidas) // adiciona tanto o titulo quanto a div das partidas
		// percorre todas as partidas que o time jogou
		partidasFiltradas.forEach((partida) => {
			// cria um card usando a função e passando a partida que o forEach ta percorrendo
			const card = criarCard(partida)
			divPartidas.appendChild(card)
		})
	} else {
		// cria um paragrafo para imprimir caso nenhum time seja encontrado
		const msg = document.createElement("p")
		msg.textContent = "Nenhuma partida encontrada."
		conteudoPagina.appendChild(msg)
	}
	selecionarDataPesquisa(partidasFiltradas)
}

function selecionarDataPesquisa(partidas) {
	// pega o id da div
	const divPartidas = document.querySelector("#partidasFiltro")
	// pega a tag nav
	const nav = document.querySelector("nav")
	// pega o id da tag select se ja existir uma
	let selectDatas = document.getElementById("selectDatas")
	// remove a tag select se ja existir uma e evita duplicações
	if (selectDatas) {
		selectDatas.remove()
	}
	// cria uma nova tag select
	selectDatas = document.createElement("select")
	selectDatas.id = "selectDatas" // coloca o id no select
	selectDatas.innerHTML = `<option value="">Selecione uma data</option>`
	// extrai e organiza as datas das partidas que tem no JSON
	const datasUnicas = [
		...new Set(
			partidas.map((partida) =>
				new Date(partida.datetime).toLocaleDateString()
			)
		),
	]
	datasUnicas.sort() // Ordena as datas
	// Adiciona cada data como uma opção no select
	datasUnicas.forEach((data) => {
		const option = document.createElement("option") //cria uma nova opção
		option.value = data // adiciona de valor a data que o forEach ta percorrendo
		option.textContent = data // e como valor de texto tambem coloca a data
		selectDatas.appendChild(option) // adciona a opção dentro do select
	})

	// Adiciona o select ao nav
	nav.appendChild(selectDatas)

	// usa um evento html para filtrar as as partidas por data.
	// e algo parecido com o onclick(), mas aqui a gente ta usando change(), que dispara a função do evento quando o valor e selecionado
	// o evento e colocado na tag select
	selectDatas.addEventListener("change", (select) => {
		const dataSelecionada = select.target.value // pega o valor da opções selecionadaa
		const partidasFiltradasPorData = partidas.filter(
			(partida) =>
				// esse date e um objeto de data, pra formatar as datas para um modo que estamos acostumados
				new Date(partida.datetime).toLocaleDateString() ===
				dataSelecionada // pega apenas as partidas que foram selecionadas
		)
		divPartidas.innerHTML = ""
		partidasFiltradasPorData.forEach((partida) => {
			const card = criarCard(partida)
			if (card) {
				divPartidas.append(card)
			}
		})
	})
}

function exibirPartidasNoMain(partidas) {
	const container = document.getElementById("conteudoPagina")
	container.innerHTML = "" // Limpa o conteúdo anterior

	partidas.forEach((partida) => {
		const card = criarCard(partida)
		container.appendChild(card)
	})
}
// objeto com o nome de todos o paises em pt br
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
// objeto javascript com todas as bandeiras
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
