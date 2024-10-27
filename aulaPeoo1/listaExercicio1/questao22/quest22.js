let jogo = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let jogador = "O"
let gameOver = false

function detectarClick(celula, linha, coluna){
    if (gameOver || jogo[linha][coluna]){
        return
    }
    
    if (jogador !== "X"){
        jogador = "X"
    }else {
        jogador = "O"
    }

    celula.textContent = jogador
    jogo[linha][coluna] = jogador

    if (checarVitoria(jogador)){
        document.querySelector("#vitoria").innerHTML = `Vitoria do jogador ${jogador}`
        gameOver = true
        return
    }
    if (empate()){
        document.querySelector("#vitoria").innerHTML = `Empate`
        gameOver = true
        return
    }
}

function checarVitoria(chec){
    for (i = 0; i < 3; i++) {
        if (jogo[i][0] === chec && jogo[i][1] === chec && jogo[i][2] === chec){
            return true
        }
        if (jogo[0][i] === chec && jogo[1][i] === chec && jogo[2][i] === chec){
            return true
        }
    }

    if (jogo[0][0] === chec && jogo[1][1] === chec && jogo[2][2] === chec){
        return true}
    if (jogo[0][2] === chec && jogo[1][1] === chec && jogo[2][0] === chec){
        return true}

    return
}

function empate(){
    let empate = 0

    for (i = 0; i < 3; i++) {
        if (jogo[i][0] !== "" && jogo[i][1] !== "" && jogo[i][2] !== ""){
            empate++ 
        }
        if (jogo[0][i] !== "" && jogo[1][i] !== "" && jogo[2][i] !== ""){
            empate++
        }
    }
    if (empate === 6){
        return true
    }
}