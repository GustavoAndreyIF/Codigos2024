function cle(){
    let list = document.querySelector("#list").value
    let pa = list
    list = list.split("")
    list = list.reverse()
    list = list.join()
    list = list.replace(/,/g, "")
    console.log(typeof list)
    console.log(typeof pa)
    if (pa == list){
        document.getElementById('result').innerHTML = `${list} e um palíndromo` 
    } else(
        document.getElementById('result').innerHTML = `${list} nao e palíndromo`
    )

    
}