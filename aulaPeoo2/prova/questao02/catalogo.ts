import { Filme } from "./filme"

export class Catalogo {
    constructor(
        protected _filmes: Filme[] = []
    ){}

    adicionarFilme(filme: Filme): void {
        this._filmes.push(filme)
    }

    listarFilmes(): void{
        console.log("FILMES")
        this._filmes.forEach(filme => {
            filme.descricao()
        })
    }
    get filmes(): Filme[]{
        return this._filmes
    }
}