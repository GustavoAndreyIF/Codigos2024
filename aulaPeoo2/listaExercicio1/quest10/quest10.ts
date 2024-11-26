class Carro {
	constructor(
		private _marca: string,
		private _modelo: string,
		private _ano: number = 2024
	) {}
	public get marca(): string {
		return this._marca;
	}
	public get modelo(): string {
		return this._modelo;
	}
	public get ano(): number {
		return this._ano;
	}
}

const Uno98: Carro = new Carro("Fiat", "Uno", 1998);
const Uno24: Carro = new Carro("Fiat", "Uno");

console.log(Uno24.ano);
