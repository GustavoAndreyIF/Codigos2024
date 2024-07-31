
def sanduiche(a, b):
    for i in range(int(a)):
        combinacaoPoss = []
        combinacaoPoss.append(i)
    combinacaoPro = []
    for i in range(int(b)):
        numeros = input()
        combinacao = [i for i in numeros]
        combinacaoPro.append(combinacao)
    return combinacaoPro
a = 3
b = 2
print(sanduiche(a, b))