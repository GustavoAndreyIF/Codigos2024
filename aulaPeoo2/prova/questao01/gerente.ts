import { Funcionario } from "./funcionario";

export class Gerente extends Funcionario {
    constructor(
        private _bonus: number = 0,
        protected _nome: string,
        protected _cargo: string,
        protected _salario: number
    ){
        super(_nome, _cargo, _salario)
    }
    descricao(): void{
        console.log(`
        ------------------------
        Nome: ${this._nome}
        Cargo: ${this._cargo}
        Salario: ${this._salario.toFixed(2)}
        Bonus: ${this._bonus}
        Total: ${(this._salario * this._bonus).toFixed(2)}
        ------------------------
        `)
    }
    get bonus(): number{
        return this._bonus
    }
    aplicarBonus(novoBonus: number){
        if(novoBonus >= 0){
            let bonusAntigo = this._bonus
            this._bonus = novoBonus
            console.log(`
                Salario Antigo: ${bonusAntigo.toFixed(2)}
                Salario Novo: ${this._salario.toFixed(2)}
                `)
        } else {
            console.log("Valor invalido para bonus")
        }
    }
}