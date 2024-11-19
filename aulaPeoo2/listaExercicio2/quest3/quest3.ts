interface Pagamento {
    realizarPagamento(): void
}

class PagamentoComCartao implements Pagamento {
    realizarPagamento(): void {
        console.log("Pagamento com Cartão")
    }
}

class PagamentoComBoleto implements Pagamento {
    realizarPagamento(): void {
        console.log("Pagamento com Boleto")
    }
}

const pagamento1 = new PagamentoComCartao
const pagamento2 = new PagamentoComBoleto

pagamento1.realizarPagamento()
pagamento2.realizarPagamento()