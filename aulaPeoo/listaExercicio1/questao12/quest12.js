function cresce(){
    let list = document.querySelector("#list").value
    list = list.split(" ")
    list = list.sort()
    list = list.reverse()
    console.log(list)

    document.getElementById('result').innerHTML = `${list[0]}`
}