n = input()
palitos = map(int, input().split())

def tamanho(palitos1):
    palitos = palitos1
    palitos.sort()
    sub = []
    for valor1 in range(1, n):
        subtracao = palitos[valor1] - palitos[valor1-1]
        sub.append(subtracao)
    return sub

result = tamanho(palitos)
result.sort()
print(result[-1])