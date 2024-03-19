function contar() {
    let texto = document.getElementById('texto').value;
    let letra = document.getElementById('letra').value;
    texto = texto.toLowerCase();
    letra = letra.toLowerCase();

    let contador = 0;
    for (let i = 0; i < texto.length; i++)
        if (texto[i] === letra)
            contador++;

    document.getElementById('result').innerHTML = `A letra <b>${letra}</b> aparece <b>${contador} vezes</b> no texto.`;
}
const input = document.getElementById('letra');

input.addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
 event.preventDefault();
 contar();
 // Executar ações desejadas
}
}); 