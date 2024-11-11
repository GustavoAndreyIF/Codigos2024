import { Livro } from "../quest03/quest03";

class LivroDigital extends Livro{
    
    constructor(
        _titulo: string,
        _autor: string,
        _preco: number,
        public _formato: string
        ){
            super(_titulo, _autor, _preco)
    }
    descricao(): void {
        console.log(`
        Descrição
        Titulo: ${this._titulo}
        Autor: ${this._autor}
        Preço: ${this._preco}
        Formato: ${this._formato}
        `)
    }
}

const livro04 = new LivroDigital("It: A coisa", "Stephen King", 78.99, "PDF");
livro04.descricao()