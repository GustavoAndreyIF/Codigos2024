function calcular(){
    let x1 = document.querySelector("#x1").value
    let x2 = document.querySelector("#x2").value

    let y1 = document.querySelector("#y1").value
    let y2 = document.querySelector("#y2").value

    let resultado =  Math.sqrt(((x2-x1)**2) + ((y2-y1)**2))

    document.getElementById("result").innerHTML = 
    `A distancia entre P1(${x1}, ${x2}) e P2(${y1}, ${y2}) e igual a ${resultado.toFixed(2)}`;
}