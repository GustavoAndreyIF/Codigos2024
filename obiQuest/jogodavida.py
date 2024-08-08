import numpy as np

matriz = []

n, q = map(int, input().split())
for i in range(n):
    celulas = list(map(int, input().split()))
    matriz.append(celulas)

jogoDaVida = np.array(matriz)

def checarVizinhos(jogoDaVida, posicao):
    i, j = posicao
    linha, coluna = jogoDaVida.shape
    vizinhos = []
    for x in range(max(0, i-1), min(i+2, linha)):
        for y in range(max(0, j-1), min(j+2, coluna)):
            if(x, y) != (i, j):
                vizinhos.append(jogoDaVida[x, y])
    return vizinhos

def checarCelulas(jogoDaVida):
    linha, coluna = jogoDaVida.shape
    nova_matriz = jogoDaVida.copy()
    for i in range(linha):
        for j in range(coluna):
            posicao = (i, j)
            total = sum(checarVizinhos(jogoDaVida, posicao))
            if jogoDaVida[i, j] == 0:
                if total == 3:
                    nova_matriz[i, j] = 1
                else:
                    nova_matriz[i, j] = 0
            elif jogoDaVida[i, j] == 1:
                if total < 2 or total > 3:
                    nova_matriz[i, j] = 0
                else:
                    nova_matriz[i, j] = 1
    return nova_matriz

for i in range(q):
    jogoDaVida = checarCelulas(jogoDaVida)

for linha in jogoDaVida:
    print(''.join(map(str, linha)))