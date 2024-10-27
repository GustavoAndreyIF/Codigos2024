function calcular(){
    let celsius = document.querySelector("#cel").value
   // (0 °C × 9/5) + 32 = 32 °F
   let result = (celsius * 9/5) + 32
    document.getElementById("result").innerHTML = 
    `FireHigh ${result}`;
}
const input = document.getElementById('cel');

input.addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
 event.preventDefault();
 calcular();
 // Executar ações desejadas
}
}); 