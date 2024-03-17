function calcular(){
    let data = document.querySelector("#data").value
    let dataNas = new Date(data)
    let hoje = new Date()
    
    let idade = hoje.getFullYear() - dataNas.getFullYear()
    let mes = hoje.getMonth() - dataNas.getMonth()
    
    if (mes <= 0){
        idade--;
    }
    
    if (mes <= 0 && idade <= 0 || isNaN(idade)){
        alert("Invalido")
    } else{
        if (idade == 0){
                document.getElementById("result").innerHTML = `voce tem ${mes} meses`
        } else{
                    document.getElementById("result").innerHTML = `voce tem ${idade} anos e ${mes} meses`
          }}
}