// By Github Copilot
class Endereco {
	constructor(public rua: string, public cidade: string, public cep: string) {}
}

class Pessoa {
	constructor(public nome: string, public endereco: Endereco) {}

	mostrarEndereco(): void {
		console.log(
			`Endereço de ${this.nome}: ${this.endereco.rua}, ${this.endereco.cidade} - ${this.endereco.cep}`
		);
	}
}

// Instanciando objetos de Endereco e Pessoa
const endereco1 = new Endereco("Rua das Flores", "São Paulo", "12345-678");
const pessoa1 = new Pessoa("João", endereco1);

// Chamando o método mostrarEndereco
pessoa1.mostrarEndereco(); // Saída: Endereço de João: Rua das Flores, São Paulo - 12345-678
