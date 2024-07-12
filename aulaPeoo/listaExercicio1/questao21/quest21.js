function outraOp(){
    const selecao = document.getElementById("categoria").selectedIndex;
    const container = document.getElementById("container")

    let outinput = document.createElement("input")
    console.log(outinput)
    outinput.setAttribute("type", "text")
    outinput.setAttribute("id", "outinput")
    console.log(outinput)
    if(selecao == 1){
        container.appendChild(outinput)
    } else if(outinput){
        container.removeChild(outinput)
    }
}
