function cle(){
    let list = document.querySelector("#list").value
    list = list.replace(/ /g, "")
    list = list.split(",")
    console.log(list)

    document.getElementById('result').innerHTML = `${list}`
}