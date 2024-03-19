function vremail(){
    let email = document.querySelector("#email").value
    document.getElementById('result').innerHTML = `Ola ${email}`
}
const input = document.getElementById('email');

input.addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
 event.preventDefault();
 vremail();
 // Executar ações desejadas
}
}); 