abstract class ContaBancaria {
    abstract calcularSaldo(): void
}

class ContaCorrente extends ContaBancaria {
    calcularSaldo(): void {
        console.log("Saldo Conta Corrente")
    }
}
class ContaPoupanca extends ContaBancaria {
    calcularSaldo(): void {
     console.log("Saldo Conta Poupança")
 }
}

const contaCorrente1 = new ContaCorrente
const contaPoupanca1 = new ContaPoupanca

contaCorrente1.calcularSaldo()
contaPoupanca1.calcularSaldo()