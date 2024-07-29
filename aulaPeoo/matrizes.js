const a = [
    [1, 2, 3],
    [3, 2, 1]
]

const b = [
    [4, 5, 6],
    [6, 5, 4]
]

let somarMatrizes = function(x, y) {
    const resultado = [];
    for (let lin = 0; lin < x.length; lin++) {
        resultado[lin] = [];

        for (let col = 0; col < x[lin].length; col++) {
            resultado[lin][col] = x[lin][col] + y[lin][col];
        }
    }

    return resultado;
}

console.log(somarMatrizes(a, b))