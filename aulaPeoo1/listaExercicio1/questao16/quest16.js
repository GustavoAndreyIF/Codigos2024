function cle(){
    let list = document.querySelector("#list").value
    let letras = list.length
    list = list.split(" ")
    let palavras = list.length
    console.log(list)

    document.getElementById('result').innerHTML = `O texto tem ${palavras} palavras e ${letras} letras` 
}