class produtos{
    constructor(nome, preco, categoria){
        this.nome = nome
        this.preco = preco
        this.categoria = categoria
    }
    mostrar() {
        console.log(`nome: ${this.nome}`)
        console.log(`preço: R$${this.preco}`)
        console.log(`categoria: ${this.categoria}`)
    }
}

let produto1 = new produtos('agua', 1.99, 'bebida')
console.log(produto1.mostrar())
