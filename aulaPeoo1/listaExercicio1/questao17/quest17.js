function cle(){
    let texto = document.querySelector("#texto").value
    let pl = document.querySelector("#palavra").value
    let plsub = document.querySelector("#palavrasub").value
    while(true){
        if (texto.includes(pl)){
            texto = texto.replace(pl, plsub)
        } else {
            break
        }
    }
    
    document.getElementById('result').innerHTML = 
    `<strong>o seu texto antigo:</strong> ${texto}`
    console.log(texto)    
}