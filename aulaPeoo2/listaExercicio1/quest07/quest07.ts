class Funcionarios {
	constructor(protected _nome: string, protected _salario: number) {}
}

class Gerente extends Funcionarios {
	constructor(_nome: string, _salario: number, private _bonus: number) {
		super(_nome, _salario)
	}
	calcularSalarioTotal(): void {
		return console.log(`Salario Total: ${(this._salario + this._bonus).toFixed(2)}`)
	}
}

const gerente1 = new Gerente("Jão", 2000, 500)
gerente1.calcularSalarioTotal()
