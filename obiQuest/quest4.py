#quantida de numeros para a soma
quantN = int(input())
nu = []
if 1 <= quantN <= 100000:
    for i in range(quantN):
        #adiciona todos os valores na lista
        nu.append(int(input()))
        if nu[i] <= 100:
            if nu[i] == 0 and i > 0:
                
                #o pop remove o último elemento da lista
                nu.pop()
                nu.pop()
            
        else:
            #para tudo
            break
#soma toda a lista
print(sum(nu))