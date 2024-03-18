function vremail(){
    let email = document.querySelector("#email").value
    if (email.search("@") != -1 && email.search(".") != -1){
        return document.getElementById("result").innerHTML = 
        `email valido`;
    } else{
        return document.getElementById("result").innerHTML = 
        `email invalido`;
    }
}
const input = document.getElementById('email');

input.addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
 event.preventDefault();
 vremail();
 // Executar ações desejadas
}
}); 