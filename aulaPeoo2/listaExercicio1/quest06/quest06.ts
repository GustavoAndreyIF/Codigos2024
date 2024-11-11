class ContaBancaria {
    
    constructor(
        private titular: string,
        private saldo: number
    ){}

    depositar(valor: number): void{
        if(valor > 0){
            this.saldo += valor
            return console.log(this.saldo)
        } else{
            return console.log("nao")
        }
    } 
    sacar(valor: number): void{
        if(valor <= this.saldo){
            this.saldo -= valor
            return console.log(this.saldo)
        } else {
            return console.log("nao")
        }
    }
    mostrarSaldo(): void{
        return console.log("Saldo Total: " + this.saldo.toFixed(2))
    }
}

const conta1 = new ContaBancaria("Ermersonr", 100)
conta1.depositar(100)
conta1.sacar(100)
conta1.mostrarSaldo()