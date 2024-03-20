function calc(){
    let alt = document.querySelector("#alt").value
    let larg = document.querySelector("#larg").value
    let area = alt*larg

    document.getElementById('result').innerHTML = `a area do rentagulo e ${area}`
}
const input = document.getElementById('larg');

input.addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
 event.preventDefault();
 calc();
 // Executar ações desejadas
}
}); 