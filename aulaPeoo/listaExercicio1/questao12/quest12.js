function calc(){
    let list = document.querySelector("#list").value
    list = list.split(" ")
    let numeros = list.map(Number)
    let total = 0
    for (let i = 0; i < numeros.length; i++ ){
        total += numeros[i];
    }

        document.getElementById('result').innerHTML = `${total}`
}