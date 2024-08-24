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
