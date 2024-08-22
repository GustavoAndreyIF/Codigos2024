const urls = [
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/photos",
    "https://jsonplaceholder.typicode.com/users"
]

async function fetchData(urls) {
    try {
        for (let i = 0; i < urls.length; i++) {
            let resposta = await fetch(urls[i])
            let dados = await resposta.json()
            let index = `apiDados${i}`
            localStorage.setItem(index, JSON.stringify(dados))
        }
        console.log("Armazenado com sucesso")
    } catch (error) {
        console.error("Erro na busca do dado:", error)
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function exibirPosts() {
    await fetchData(urls)
    let dataPosts = localStorage.getItem("apiDados0")
    let dataUsers = localStorage.getItem("apiDados3")
    let dataPhotos = localStorage.getItem("apiDados2")
    let posts = JSON.parse(dataPosts)
    let users = JSON.parse(dataUsers)
    let photos = JSON.parse(dataPhotos)

    const userMap = new Map(users.map(user => [user.id, user]))
    const photosMap = new Map(photos.map(photo => [photo.albumId, photo]))

    shuffleArray(posts);

    const divposts = document.querySelector("#posts")
    divposts.innerHTML = ""

    if (Array.isArray(posts) && Array.isArray(users) && Array.isArray(photos)) {
        posts.forEach(dadospost => {
            const user = userMap.get(dadospost.userId)
            const photo = photosMap.get(dadospost.userId)

            const topico = document.createElement("div")
            topico.innerHTML = `
            <div id="${dadospost.id}" style="padding: 10px 0px;">
                <div id="userIcon" style="display: flex; align-items: center;">
                    <img src="${photo ? photo.url : "default-image.png"}" style="width: 50px; border-radius: 50%; margin: 0px 5px 0px 0px">
                    <div>
                        <p style="margin: 0 0 0 0; font-style: bold;"><b>${user ? user.name : "Unknown User"}</b></p>
                        <p style="margin: 0 0 0 0;">${user ? user.username : "Unknown Username"}</p>
                    </div>
                </div>
                <p style="font-size: 24px ;padding: 10px 0px 0px 0px; margin: 0 0 0 0"><b>${dadospost.title}</b></p>
                <p style="font-size: 18px ;padding: 5px 0px 0px 0px; margin: 0 0 0 0">${dadospost.body}</p>
            </div><br>
            `
            divposts.appendChild(topico)
        })
    }
}

async function exibirComentarios() {
    await fetchData(urls)
    let dataComments = localStorage.getItem("apiDados1")
    let comments = JSON.parse(dataComments)

    comments.forEach(dadoscomment => {
        //criar uma div para colocar cada comentario em seu respectivo post.
        //o comentario deve ser indexado usando o postId.
        //usar o id do dadosposts.id para dar um appendchild nele.
        //criar um botão para exibir ou esconder os comentarios, talvez nem precise do forEach
        //o comentario pode ser indexado usando filter ou find
    })
}

exibirPosts()