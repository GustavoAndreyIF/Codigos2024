function calcular(){
    let n = document.querySelector("#pimp").value
    let s = n%2
    if (s == 0){
        document.getElementById("result").innerHTML = 
        `${n} e par`;
    } else if (s != 0){
        document.getElementById("result").innerHTML = 
        `${n} e impar`;
    }
}
const input = document.getElementById('pimp');

input.addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
 event.preventDefault();
 calcular();
 // Executar ações desejadas
}
}); 