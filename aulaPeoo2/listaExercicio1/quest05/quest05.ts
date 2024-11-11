interface Produto {
    nome: string,
    preco: number
}

class CarrinhoDeCompras {
    private _produtos: Produto[]
    constructor(){
        this._produtos = []
    }
    adcionarProduto(produto: Produto): void {
        this._produtos.push(produto)
    }
    listarProdutos(): void {
        return console.log(this._produtos)
    }
    calcularTotal(): void {
        let total: number = 0
        this._produtos.forEach((produto) => {
            total += produto.preco
        })
        this.listarProdutos()
        console.log("Preço Total: " + total)
    }
}

const produtos: Produto[] = [
    { nome: "Produto 1", preco: 10.0 },
    { nome: "Produto 2", preco: 20.0 },
    { nome: "Produto 3", preco: 30.0 }
];

const carrinho = new CarrinhoDeCompras();

produtos.forEach((produto) => {
    carrinho.adcionarProduto(produto);
});

carrinho.calcularTotal();