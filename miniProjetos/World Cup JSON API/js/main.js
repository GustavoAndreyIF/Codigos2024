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

const nomePaises = {
	
}