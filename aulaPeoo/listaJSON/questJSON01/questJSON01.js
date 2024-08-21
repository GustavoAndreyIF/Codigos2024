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

async function exibirPosts(){
    await fetchData(urls)
    let dataPosts = localStorage.getItem("apiDados0")
    let dataUsers = localStorage.getItem("apiDados3")
    let dataPhotos = localStorage.getItem("apiDados2")
    let posts = JSON.parse(dataPosts)
    let users = JSON.parse(dataUsers)
    let photos = JSON.parse(dataPhotos)
    const divposts = document.querySelector("#posts")
    divposts.innerHTML = ""

    posts.forEach(dadospost => {
        const topico = document.createElement("div")
        topico.innerHTML = `
        <div id="${dadospost.id} style="padding: 10px 0px;">
            <div id="userIcon" style="display: flex; align-items: center;">
                <img src="${photos[dadospost.id - 1]["url"]}" style="width: 50px; border-radius: 50%; margin: 0px 5px 0px 0px">
                <div>
                    <p style="margin: 0 0 0 0; font-style: bold:"><b>${users[dadospost.id - 1]["name"]}</b></p>
                    <p style="margin: 0 0 0 0;">${users[dadospost.id - 1]["username"]}</p>
                </div>
            </div>
            <p style="font-size: 24px ;padding: 10px 0px 0px 0px; margin: 0 0 0 0"><b>${dadospost.title}</b></p>
            <p style="font-size: 18px ;padding: 5px 0px 0px 0px; margin: 0 0 0 0">${dadospost.body}</p>
        </div><br>  
        `
        divposts.appendChild(topico)
    }
);
}
exibirPosts()
