export class Filme {
    constructor(
        public _nome: string,
        public _diretor: string,
        public _anoLancamento: number,
        public _avaliacoes: number[] = []
    ){}

    adicionarAvaliacao(avaliacao: number): void {
        if(avaliacao > 0 && avaliacao < 6){
            this._avaliacoes.push(avaliacao)
        }
    }
    calcularMediaAvaliacoes():void{
        let totalAvaliacao = 0
        this._avaliacoes.forEach(avaliacao => {
            totalAvaliacao += avaliacao
        })
        return console.log(`Media: ${totalAvaliacao / this._avaliacoes.length}`)
    }

    descricao(){
        console.log(`
        ------------------------
        Nome: ${this._nome}
        Diretor: ${this._diretor}
        Ano de Lançamento: ${this._anoLancamento}
        Media de Avaliações: ${this.calcularMediaAvaliacoes()}
        ------------------------
        `)
    }

        get nome(): string{
            return this._nome
        }
        get diretor(): string{
            return this._diretor
        }
        get anoLancamento(): number{
            return this._anoLancamento
        }

        set nome(novoNome: string){
            this._nome = novoNome
        }
        set diretor(novoDiretor: string){
            this._diretor = novoDiretor
        }
        set anoLancamento(novoAnolancamento: number){
            this._anoLancamento = novoAnolancamento
        }
}