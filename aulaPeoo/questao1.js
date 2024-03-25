function calc(){
    let palavra = document.querySelector("#texto").value
    let repet = document.querySelector("#repet").value
    console.log(palavra)
    console.log(repet)
    let texto = []

    for(i=1; i <= repet; i++)
        texto.push(palavra)
        console.log(texto)
       document.getElementById("result").innerHTML = 
       `${texto}`;
}