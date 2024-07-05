function vremail(){
    document.getElementById("emailInvalido").innerHTML = ``
    let email = document.querySelector("#useremail").value;
    if (email.search("@") == -1 || email.search(".") == -1){
        document.getElementById("emailInvalido").innerHTML = `Email inserido invalido`
        return false
    } else{
        return true
    }
}

function vrsenha(){
    let senha = document.querySelector("#userpassword").value
    let vrsenha = document.querySelector("#userpasswordconfirm").value

    let regex = /^(?=.*\d).{8,}$/
    if (senha === vrsenha && regex.test(senha) == true){
        return true
    } else {
        return false
    }
}
function vrcamps(){
    let nome = document.querySelector("#username").value
    console.log(nome)
    //escrever um codigo para verificar se a string de nome, email e senha estao vazios.
    //opcoes; teste de regex, metodo search ou tentar um if com string vazia.
}
function cheque(){
    vrcamps()
    /* let vremail1 = vremail()
    let vrsenha1 = vrsenha()
    let vrcamps1 = vrcamps()
    if (vremail1 == true && vrsenha1 == true && vrcamps1 == true){
        document.querySelector("#result").innerHTML = `SUCESSO`
    } */
}