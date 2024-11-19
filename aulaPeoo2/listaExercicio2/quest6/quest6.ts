abstract class Produto {
    constructor(
        protected _preco: number,
        protected _icms: number,
        protected _importacao: number = 0
    ){}

    abstract calcularPrecoFinal(): void
}

class ProdutoDigital extends Produto {
    constructor(
        _preco: number, 
        _icms: number, 
        _importacao: number
        ){
        super(_preco, _icms, _importacao)
    }

    calcularPrecoFinal(): void {
        console.log("Preço Final: R$" + (this._preco + this._icms + this._importacao).toFixed(2))
    }
}

class ProdutoFisico extends Produto {
    constructor(
        _preco: number, 
        _icms: number, 
        ){
        super(_preco, _icms)
    }

    calcularPrecoFinal(): void {
        console.log("Preço Final: R$" + (this._preco + this._icms).toFixed(2))
    }
}

const plutonio = new ProdutoDigital(12, 3, 6)
const uranio = new ProdutoFisico(12, 3)

plutonio.calcularPrecoFinal()
uranio.calcularPrecoFinal()