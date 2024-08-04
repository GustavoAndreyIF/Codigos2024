class SistemaEscolar {
    constructor(){
        this.estudantes = JSON.parse(localStorage.getItem("estudantes")) || []
        function salvarLocal(){
            localStorage.setItem("estudantes", JSON.stringify(this.estudantes))
        }
    }
    cadastrar(matricula, nome, idade){
        let estudante = {
        nome: nome,
        idade: idade,
        matricula: matricula,
        }
        this.estudantes.push(estudante)
        this.salvarLocal()
    }
    atualizar(estudanteMatricula, matricula, nome, idade){
        const estudanteEncontrado = this.estudantes.find(
        function(estudante){
            return estudante.matricula === estudanteMatricula
        })
        if(!estudanteEncontrado){
            console.error("Estudante não encontrado")
            return
        }
        if(estudanteEncontrado){
            let novosDados = {
            nome: nome,
            idade:idade,
            matricula: matricula,
            }
            Object.assign(estudanteEncontrado, novosDados)
            this.salvarLocal()
        }
    }
    excluir(matricula){
        this.estudantes = this.estudantes.filter(
        function(estudante){
            return estudante.matricula !== matricula
        }
        )
        this.salvarLocal()
    }
    listar(){
        return this.estudantes
    }
}


const sistema = new SistemaEscolar()
