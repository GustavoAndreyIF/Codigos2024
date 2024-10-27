function calcular(){
    let altura = document.querySelector("#altu").value;
    let massa = document.querySelector("#mass").value;
    let imc = massa / (altura ** 2);

    document.getElementById("result").innerHTML = 
        "Valor IMC = " + imc.toFixed(2);

        let situ;
        if (imc <= 18.5){ situ = "Magreza"
        } else if (imc >= 18.5 && imc <= 24.9){
                "Normal"
            }
        
}