interface Repositorio<T> {
    adicionar(item: T): void;
    remover(item: T): void
    buscar(condicao: (item: T) => boolean): T | undefined;
}

class Livro {
    constructor(
        public titulo: string, 
        public autor: string,
        ) {}
}

class RepositorioDeLivros implements Repositorio<Livro> {
    private _livros: Livro[] = []
    adicionar(livro: Livro): void {
        this._livros.push(livro)
    }
    remover(livro: Livro): void {
        this._livros = this._livros.filter(i => i !== livro)
    }
    buscar(condicao: (livro: Livro) => boolean): Livro | undefined {
        return this._livros.find(condicao);
    }
}

const repo = new RepositorioDeLivros();
const livro1 = new Livro("1984", "George Orwell");
const livro2 = new Livro("Brave New World", "Aldous Huxley");

repo.adicionar(livro1)
repo.adicionar(livro2)

console.log(repo.buscar(l => l.titulo === "1984")); // Livro { titulo: '1984', autor: 'George Orwell' }
repo.remover(livro1);
console.log(repo.buscar(l => l.titulo === "1984")); // undefined