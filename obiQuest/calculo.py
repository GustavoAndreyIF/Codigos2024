s = int(input())
a = int(input())
b = int(input())
retorno = 0

for i in range(b):
    a1 = a
    a1 += i
    a1 = str(a1)
    lista1 = [int(s) for s in a1]
    if(sum(lista1) == s):
        retorno += 1

print(retorno)