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
            <div style="padding: 10px 0px;">
                <div id="userIcon" style="display: flex; align-items: center;">
                    <img src="${photo ? photo.url : "default-image.png"}" style="width: 50px; border-radius: 50%; margin: 0px 5px 0px 0px">
                    <div>
                        <p style="margin: 0 0 0 0; font-style: bold;"><b>${user ? user.name : "Unknown User"}</b></p>
                        <p style="margin: 0 0 0 0;">${user ? user.username : "Unknown Username"}</p>
                    </div>
                </div>
                <p style="font-size: 24px ;padding: 10px 0px 0px 0px; margin: 0 0 0 0"><b>${dadospost.title}</b></p>
                <p style="font-size: 18px ;padding: 5px 0px 0px 0px; margin: 0 0 0 0">${dadospost.body}</p><br>
                <button type="button" onclick="exibirComentarios(${dadospost.id})">Show Comments</button>
            </div>
            <div id="${dadospost.id}">
            </div>
            `
            divposts.appendChild(topico)
        })
    }
}

async function exibirComentarios(postId) {
    await fetchData(urls)
    let dataComments = localStorage.getItem("apiDados1")
    let comments = JSON.parse(dataComments)
    if(Array.isArray(comments)){
        let commentsFilter = comments.filter(comment => comment.postId === postId)
        commentsFilter.forEach(comment => {
            const commentsDiv = document.createElement("div")
            const divcomments = document.getElementById(postId)
            commentsDiv.innerHTML = `
            <p style="font-size: 18px ;padding: 10px 0px 0px 0px; margin: 0 0 0 0"><b>${comment.name}</b></p>
            <p style="font-size: 16px ;padding: 5px 0px 0px 0px; margin: 0 0 0 0">${comment.body}</p>
            `
            divcomments.appendChild(commentsDiv)

        })
        const divcomments = document.getElementById(postId)
        divcomments.innerHTML += `<br>
            <button type="button" onclick="excluirComentarios(${postId})">Hide Comments</button>
        `
    }
}

function excluirComentarios(commentId){
     document.getElementById(commentId).replaceChildren()
}

exibirPosts()