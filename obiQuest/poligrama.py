nLetras = int(input())
palavra = str(input())

def poligrama(n, p):
    metade1 = list(p[:n//2])
    metade2 = list(p[n//2:])
    metade = list(p[:n//2])
    verdade = -1
    for i in range(n):
        if(p[i] == p[0]):
            verdade += 1
    if(verdade > n//2):
        return p[0]
    if(metade1.sort() == metade2.sort() and metade1[0] == metade2[0]):
        return "".join(metade)
    return "*"

resultado = poligrama(nLetras, palavra)
print(resultado)