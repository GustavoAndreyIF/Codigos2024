let jogo = [['', '', ''], ['', '', ''], ['', '', '']];
let jogador = "X"
let gameOver = false
function detectarClick(celula, linha, coluna){
    if (jogador !== "X"){
        jogador = "X"
    }else {
        jogador = "0"
    }

    celula.textContent = jogador
    jogo[linha][coluna] = jogador

}
