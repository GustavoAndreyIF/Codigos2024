








function vremail(){
    let email = document.querySelector("#useremail").value;
    console.log(email)
    if (email.search("@") != 1 && email.search(".") != 1){
        document.getElementById("emailInvalido").innerHTML = `Email inserido invalido`
    }
}

function vrsenha(){
    let senha = document.querySelector("#userpassword").value
    let vrsenha = document.querySelector("#userpasswordconfirm").value

    let regex = /^(?=.*\d).{8,}$/
    console.log(regex.test(senha))
   if (senha.length <= 8){

    document.getElementById('result').innerHTML = "sim"
   } else {
    document.getElementById('result').innerHTML = "nao"
   }
}