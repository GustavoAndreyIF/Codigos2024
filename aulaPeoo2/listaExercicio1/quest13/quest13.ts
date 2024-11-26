class Conta {
	constructor(protected _saldo: number) {}
	depositar(valor: number): void {
		this._saldo += valor;
		console.log(`Valor de ${valor} depositado na conta. Total de ${this._saldo}`);
	}
}

class ContaPoupanca extends Conta {
	constructor(_saldo: number, protected _taxa: number = 1.2) {
		super(_saldo);
	}
	depositar(valor: number): void {
		this._saldo += valor * this._taxa;
		console.log(`Valor de ${valor} depositado na conta. Total de ${this._saldo}`);
	}
}

const conta1 = new Conta(10);
const conta2 = new ContaPoupanca(10);

conta1.depositar(10);
conta2.depositar(10);
