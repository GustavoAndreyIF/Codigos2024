import { Funcionario } from "./funcionario";
export class Empresa {
    constructor(
        private _nome: string,
        private _funcionarios: Funcionario[] = []
    ){}
    adicionarFuncionario(funcionario: Funcionario): void {
        this._funcionarios.push(funcionario)
    }
    listarFuncionarios(): void{
        console.log("FUNCIONARIOS")
        this._funcionarios.forEach(funcionario => {
            funcionario.descricao()
        })
    }
}