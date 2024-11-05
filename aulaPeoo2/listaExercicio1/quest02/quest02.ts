class livroGS {
    private _titulo: string;
    private _autor: string;
    private _preco: number;

    constructor(titulo: string, autor: string, preco: number){
        this._titulo = titulo;
        this._autor = autor;
        this._preco = preco;
    };

    descricao(): void{
        let descricao: string = `
        Descrição
        Titulo: ${this._titulo}
        Autor: ${this._autor}
        Preço: ${this._preco}
        `
        return console.log(descricao)
    };
    get titulo(): string{
        return this._titulo 
    };
    set titulo(novoTitulo: string){
        this._titulo = novoTitulo
    };


    get autor(): string{
        return this._autor 
    };
    set autor(novoAutor: string){
        this._autor = novoAutor
    };


    get preco(): number{
        return this._preco
    };
    set preco(novoPreco: number){
        this._preco = novoPreco
    };


};

const livro02 = new livroGS("It: A coisa", "Stephen King", 78.99);

livro02.descricao();

livro02.titulo = "titulo01";
livro02.autor = "autor01";
livro02.preco = 12.34;

livro02.descricao();