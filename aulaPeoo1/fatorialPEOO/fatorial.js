function fatorial(){
       let n = document.querySelector("#fat").value
       let fat = 1
       for(i=2; i <= n; i++)
       fat = fat * i;
       document.getElementById("result").innerHTML = 
       `Fatorial(${n}) = ${fat}`;
}
const input = document.getElementById('fat');

input.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    fatorial();
    // Executar ações desejadas
  }
}); 