class livro {
    titulo: string;
    autor: string;
    preco: number;

    constructor(titulo: string, autor: string, preco: number){
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    };

    descricao(): void{
        let descricao: string = `
        Descrição
        Titulo: ${this.titulo}
        Autor: ${this.autor}
        Preço: ${this.preco}
        `
        return console.log(descricao)
    }
};

const livro01 = new livro("It: A coisa", "Stephen King", 78.99)

livro01.descricao()