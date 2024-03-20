function calc(){
    let list = document.querySelector("#list").value
    list = list.replace(/ /g, "")
 

    document.getElementById('result').innerHTML = `${list.sort()}`
}
const input = document.getElementById('larg');

input.addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
 event.preventDefault();
 calc();
 // Executar ações desejadas
}
}); 
