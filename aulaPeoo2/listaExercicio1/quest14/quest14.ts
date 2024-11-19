// By Github Copilot
class Veiculo {
  mover(): void {
		console.log("O veículo está em movimento");
	}
}

class Carro1 extends Veiculo {
	mover(): void {
		console.log("O carro está em movimento");
	}
}

class Bicicleta extends Veiculo {
	mover(): void {
		console.log("A bicicleta está em movimento");
	}
}

function moverVeiculos(veiculos: Veiculo[]): void {
	veiculos.forEach((veiculo) => veiculo.mover());
}

// Instanciando objetos das classes Carro e Bicicleta
const carro = new Carro1();
const bicicleta = new Bicicleta();

// Criando um array de Veiculo com instâncias de Carro e Bicicleta
const veiculos: Veiculo[] = [carro, bicicleta];

// Chamando a função moverVeiculos
moverVeiculos(veiculos);
