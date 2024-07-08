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
        document.getElementById("senhaInvalido").innerHTML = `Senha inserido invalida. 
        escreva 8 caracteres que contenha numeros e letras e escreva a senha igual`
        return false
    }
}
function vrcamps(){
    let nome = document.querySelector("#username").value
    let senha = document.querySelector("#userpassword").value
    let vrsenha = document.querySelector("#userpasswordconfirm").value
    let email = document.querySelector("#useremail").value;

    if (nome !== "" && senha !== "" && vrsenha !== "" && email !== ""){
        return true
    } else{
        return false
    }
}
function cheque(){
    let vremail1 = vremail()
    let vrsenha1 = vrsenha()
    let vrcamps1 = vrcamps()
    if (vremail1 == true && vrsenha1 == true && vrcamps1 == true){
        document.querySelector("#result").innerHTML = `SUCESSO`
    } else{
        document.querySelector("#result").innerHTML = `DEU RUIM`
        
    }
}