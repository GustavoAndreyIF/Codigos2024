export class Livro {
    constructor(
        public _titulo: string,
        public _autor: string,
        public _preco: number
    ){}
}

class Biblioteca {
    private _livros: Livro[]
    constructor(){
        this._livros = []
    }
    get livros(): Livro[] {
        return this._livros
    }
    set livros(novosLivros: Livro[]){
        this._livros = novosLivros
    }

    adcionarLivro(livro: Livro): void {
        this._livros.push(livro)
    }
    listarLivros(): void {
        return console.log(this._livros)
    }
    
}

const bibliotecaFiccao = new Biblioteca
const livro03 = new Livro("It: A coisa", "Stephen King", 78.99);

bibliotecaFiccao.adcionarLivro(livro03)
bibliotecaFiccao.listarLivros()