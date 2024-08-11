class Produto {
    constructor(nome, quantidade, categoria, id){
        this.nome = nome
        this.quantidade = quantidade
        this.categoria = categoria
        this.id = id
    }
}

class CRUDprodutos {
    constructor(){
        this.produtos = [] //lista de produtos
        this.prodID = 0 // id unico para cada produto
    }
    createProduto(){
        const nome = document.querySelector("#nomeProduto").value
        const quantidade = document.querySelector("#quantProduto").value
        const categoria = document.querySelector("#categoProduto").value

        if(nome !== "" && quantidade !== "" && categoria !== ""){
            const novoProduto = new Produto(nome, quantidade, categoria, this.prodID++)
            this.produtos.push(novoProduto)
            this.readProduto()
        }
    }
    readProduto(){
        const tabela = document.querySelector("#tabela tbody")
        
        tabela.innerHTML = ""
        
        this.produtos.forEach(produto => {
            const linha = document.createElement("tr")
            linha.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.quantidade}</td>
            <td>${produto.categoria}</td>
            <td>
                <button onclick='crud.deleteProduto(${produto.id})'>Excluir</button>
                <br>
                <button onclick='atualizarCadastro("${produto.id}")'>Editar</button>
            </td>
            `
            tabela.appendChild(linha)     
        })
    }
    updateProduto(id, novosDados){
        const index = this.produtos.findIndex(produto => produto.id === id);
        if (index !== -1) {
            this.produtos[index].nome = novosDados.nome || this.produtos[index].nome;
            this.produtos[index].quantidade = novosDados.quantidade || this.produtos[index].quantidade;
            this.produtos[index].categoria = novosDados.categoria || this.produtos[index].categoria;
            this.readProduto();
        }
    }
    deleteProduto(id){
        const index = this.produtos.findIndex(prodID => prodID.id === id)
        if(index !== -1){
            this.produtos.splice(index, 1)
            this.readProduto()
        }
        
    }
}

const crud = new CRUDprodutos()

function cadastrarProduto(){
    crud.createProduto()
}

function atualizarCadastro(id){
    indexId = Number(id)
    const novoNome = prompt("Novo nome: ");
    const novaQuantidade = prompt("Nova quantidade: ");
    const novaCategoria = prompt("Nova categoria: ");

    if (novoNome || novaQuantidade || novaCategoria) {
        crud.updateProduto(indexId, {
            nome: novoNome || undefined,
            quantidade: novaQuantidade || undefined,
            categoria: novaCategoria || undefined
        });
    }
}