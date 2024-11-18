class Funcionario {

    constructor(
        protected _nome: string,
        protected _salario: number
    ){}
}

type Nivel = "Estagiario" | "Junior" | "Pleno" | "Senior"

class Desenvolvedor extends Funcionario {

    constructor(
        _nome: string,
        _salario: number,
        private _nivel: Nivel = "Estagiario"
    ){
        super(_nome, _salario)
    }
    promover(){
        switch(this._nivel){
            case "Estagiario":
                this._nivel = "Junior"
                this._salario *= 1.05
                console.log("Promovido para " + this._nivel)
                break
            case "Junior":
                this._nivel = "Pleno"
                this._salario *= 1.20;
                console.log("Promovido para " + this._nivel)
                break
            case "Pleno":
                this._nivel = "Senior"
                this._salario *= 1.40;
                console.log("Promovido para " + this._nivel)
                break
            case "Senior":
                console.log("Nivel Maximo")
                break
            default:
                return console.error("Nivel desconhecido")
        }
    }
}

const dev: Desenvolvedor = new Desenvolvedor("Jão", 1000)
dev.promover()
dev.promover()
dev.promover()
dev.promover()