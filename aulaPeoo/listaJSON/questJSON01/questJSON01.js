// lista de URLs das APIs
const urls = [
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/photos",
    "https://jsonplaceholder.typicode.com/users"
]

// Função para chamar todas as APIs e armazerna no LocalStorage
async function fetchData(urls) {
    try {
        for(i=0; i < urls.length; i++){
            let reposta = await fetch(urls[i])
            // esse await e pra esperar a reposta da promise
            let dados = await reposta.json()
            let index = `apiDados${i}`
            // o index e o valor para acessar cada api diferente dentro do getItem
            localStorage.setItem(index, JSON.stringify(dados))
        }
        console.log("Armazenado com sucesso")
    }
    catch(error) {
        console.error("erro na busca do dado:", error)
    }
}

fetchData(urls)

function exibirPosts(){
    let dataPosts = localStorage.getItem("apiDados0")
    let posts = JSON.parse(dataPosts)
    const divposts = document.querySelector("#posts")
    divposts.innerHTML = ""

    posts.forEach(dadospost => {
    const topico = document.createElement("div")
    topico.innerHTML = `
    <div id="${dadospost.id}">
        <p>UserID: ${dadospost.userId}</p>
        <p>${dadospost.title}</p>
        <p>${dadospost.body}</p>
    </div><br>
    `
    divposts.appendChild(topico)
});
}
exibirPosts()
