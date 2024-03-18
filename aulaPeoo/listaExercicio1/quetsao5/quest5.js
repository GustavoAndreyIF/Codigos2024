function contar(){
    let texto = document.querySelector("texto").value
    let letra = document.querySelector("texto").value

}
const input = document.getElementById('texto');

input.addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
 event.preventDefault();
 contar();
 // Executar ações desejadas
}
}); 