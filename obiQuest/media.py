a, b = map(int, input().split())

def mediaOuMediana(a, b):
    def media(a1, b1, c1):
        valorMedia = (a1+b1+c1)/3
        return valorMedia
    def mediana(a2, b2, c2):
        valorMediana = [a2, b2, c2]
        valorMediana.sort()
        return valorMediana[1]
    c = 0
    while(c < b):
        c += 1
        if(media(a, b, c) == mediana(a, b, c)):
            break
    return c
if(1 <= a <= b <= 10**9):
    resultado = mediaOuMediana(a, b)
    print(resultado)