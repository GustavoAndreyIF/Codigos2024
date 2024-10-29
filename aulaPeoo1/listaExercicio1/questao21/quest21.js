/* function outraOp(){
    const selecao = document.getElementById("categoria").selectedIndex;
    const container = document.getElementById("divContainer")
    const outinput = document.createElement("input")
    outinput.setAttribute("type", "text")
    outinput.setAttribute("id", "outinput")
    
    if(selecao == 0){
        const outinputremove = document.getElementById("outinput")
        outinputremove.remove()
    }
    if(selecao == 1){
        document.body.insertBefore(outinput, container)
    }
} */


/*Construir script para adicionar valores dentro de uma tabela, pode usar innerhtml ou insertBefore*/

function registrarNome(){
    const nomeProduto = document.querySelector("#nome").value
    if (nomeProduto != ""){
    return nomeProduto
    }
}

function registrarPreco(){
    const precoProduto = document.querySelector("#preco").value
    if (precoProduto != ""){
    return precoProduto
    }
}

function registrarCategoria(){
    const categoriaProduto = document.querySelector("#categoria").value
    return categoriaProduto
}

function registrarDescricao(){
    const descricaoProduto = document.querySelector("#descricao").value
    if (descricaoProduto != ""){
    return descricaoProduto
    }
}

function registrarTabela(){
    const tabela = document.querySelector("#tabela").insertRow(-1)
    tabela.insertCell(0).textContent = registrarNome()
    tabela.insertCell(1).textContent = registrarPreco()
    tabela.insertCell(2).textContent = registrarCategoria()
    tabela.insertCell(3).textContent = registrarDescricao()
}