function vremail(){
    let email = document.querySelector("#email").value
    let senha = email.length
   if (senha <= 6){
    document.getElementById('result').innerHTML = "sim"
   } else {
    document.getElementById('result').innerHTML = "nao"
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