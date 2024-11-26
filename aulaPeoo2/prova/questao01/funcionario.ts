export class Funcionario {
    constructor(
        protected _nome: string,
        protected _cargo: string,
        protected _salario: number
    ){}
    descricao(): void{
        console.log(`
        ------------------------
        Nome: ${this._nome}
        Cargo: ${this._cargo}
        Salario: ${this._salario}
        ------------------------
        `)
    }
    aplicarAumento(porcentagem: number): void {
        if (porcentagem > 0){
            let salarioAntigo = this._salario
            this._salario = this._salario * porcentagem
            console.log(`
            Salario Antigo: ${salarioAntigo.toFixed(2)}
            Salario Novo: ${this._salario.toFixed(2)}
            `)
        } else{
            console.log("Digite um valor maior que 0%")
        }
    }
    get nome(): string{
        return this._nome
    }
    get cargo(): string{
        return this._cargo
    }
    get salario(): number{
        return this._salario
    }
    set nome(novoNome: string){
        this._nome = novoNome
    }
    set cargo(novoCargo: string){
        this._cargo = novoCargo
    }
}