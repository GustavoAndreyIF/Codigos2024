abstract class Documento {
    abstract abrir(): void
    abstract fechar(): void
}

class PDF extends Documento {
    abrir(): void {
        console.log("O PDF Abriu")
    }
    fechar(): void {
        console.log("O PDF Fechou")
    }
}

class Word extends Documento {
    abrir(): void {
        console.log("O Word Abriu")
    }
    fechar(): void {
        console.log("O Word Fechou")
    }
}

const pdf1 = new PDF
pdf1.abrir()
pdf1.fechar()
const word1 = new Word
word1.abrir()
word1.fechar()