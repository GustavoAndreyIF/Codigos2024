fetch("https://jsonplaceholder.typicode.com/posts")
    .then(Response => Response.json())
    .then(dados => {
        localStorage.setItem("posts", JSON.stringify(dados))
    })
let posts = JSON.parse(localStorage.getItem("posts")) || []


function exibirPosts(){
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