function calcular(){
    let altura = document.querySelector("#altu").value;
    let massa = document.querySelector("#mass").value;
    let imc = massa / (altura ** 2);

    document.getElementById("result").innerHTML = 
        "Valor IMC = " + imc.toFixed(2);
}