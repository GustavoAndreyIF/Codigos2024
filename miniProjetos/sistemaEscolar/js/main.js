class SistemaEscolar {
	constructor() {
		this.estudantes = JSON.parse(localStorage.getItem("estudantes")) || []
	}
	salvarLocal() {
		localStorage.setItem("estudantes", JSON.stringify(this.estudantes))
	}
	cadastrar(matricula, nome, idade) {
		let estudante = {
			nome: nome,
			idade: idade,
			matricula: matricula,
		}
		this.estudantes.push(estudante)
		this.salvarLocal()
	}
	atualizar(estudanteMatricula, matricula, nome, idade) {
		const estudanteEncontrado = this.estudantes.find(function (estudante) {
			return estudante.matricula === estudanteMatricula
		})
		if (!estudanteEncontrado) {
			console.error("Estudante não encontrado")
			return
		}
		if (estudanteEncontrado) {
			let novosDados = {
				nome: nome,
				idade: idade,
				matricula: matricula,
			}
			Object.assign(estudanteEncontrado, novosDados)
			this.salvarLocal()
		}
	}
	excluir(matricula, nome, idade) {
		this.estudantes = this.estudantes.filter(function (estudante) {
			return !(
				estudante.matricula === matricula &&
				estudante.nome === nome &&
				estudante.idade === idade
			)
		})

		this.salvarLocal()
	}
	listar() {
		return this.estudantes
	}
}

const sistema = new SistemaEscolar()

function cadastrarAluno() {
	const nome = document.querySelector("#nome").value
	const idade = document.querySelector("#idade").value
	const matricula = document.querySelector("#matricula").value

	if (nome != "" && idade != "" && matricula != "") {
		sistema.cadastrar(matricula, nome, idade)
	} else {
		alert("Preencha todos os campos antes de o cadastrar")
	}
	exibirEstudantes()
}

function exibirEstudantes() {
	const estudantes = sistema.listar()
	const tabela = document.querySelector("#tabelaEstudantes tbody")

	tabela.innerHTML = ""

	estudantes.forEach((estudante) => {
		const linha = document.createElement("tr")
		linha.innerHTML = `
        <td>${estudante.nome}</td>
        <td>${estudante.idade}</td>
        <td>${estudante.matricula}</td>
        <td><button class="botaoExcluir" onclick='excluirAluno("${estudante.matricula}", "${estudante.nome}", "${estudante.idade}")'>Excluir</button>
        <br><a href="../pages/atualizar.html" class="voltar">Editar</a>
        </td>
        `
		tabela.appendChild(linha)
	})
}

function excluirAluno(matricula, nome, idade) {
	if (confirm("Tem  certeza que deseja excluir este aluno?")) {
		sistema.excluir(matricula, nome, idade)
	}
	exibirEstudantes()
}

function selecionarAluno() {
	const estudantes = sistema.listar()
	const selecao = document.querySelector("#selecao")

	selecao.innerHTML = ""

	estudantes.forEach((estudante) => {
		const opcao = document.createElement("option")
		opcao.value = estudante.matricula
		opcao.textContent = estudante.nome
		selecao.appendChild(opcao)
	})
}

function atualizarCadastro() {
	const matriculaEstudante = document.querySelector("#selecao")
	const valorSelecionado = matriculaEstudante.value

	const nome = document.querySelector("#nome").value
	const idade = document.querySelector("#idade").value
	const matricula = document.querySelector("#matricula").value
	if (nome != "" && idade != "" && matricula != "") {
		if (confirm("Deseja mesmo atualizar os dados desse cadastro?")) {
			sistema.atualizar(valorSelecionado, matricula, nome, idade)
		}
	} else {
		alert("Preencha todos os campos antes de atualizar o cadastro")
		exibirDados()
	}
}

function voltarPagina() {
	window.history.back()
}

function exibirDados() {
	exibirEstudantes()
	selecionarAluno()
}
document.addEventListener("DOMContentLoaded", exibirDados())
