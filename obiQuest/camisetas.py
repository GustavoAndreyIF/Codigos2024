n = int(input())
#Numero de premiados
t = str(input())
#Tamanho das camisetas, 1 para P, e 2 pada M
p1 = 0
m1 = 0
er = False
#variaveis usadas no loop
if 1 <= n <= 1000:
    t = list(map(int, t.split()))
    #o map converte a string t em uma lista de int usando o split que separa a string pelos espaços 
    p = int(input())
    #quantidade de camisetas pequenas
    m = int(input())
    #quantidade de camisetas medias
    if n <= p + m <= n and 1 <= p <= 100 and 1 <= m <= 100:
        #a soma de p e m não pode ser menor que n e nem maior que n. e a quantidade de camisetas p e m não pode ser maior que 100.
        for i in t:
            #o loop percorre a lista t, e no i fala qual o valor possui no index da lista.
            if i == 1:
                p1 = p1+1
            if i == 2:
                m1 = m1+1
            if 1 < i > 2:
                #se o valor de i não for 1 e nem 2 o programa para.
                er = True
    if p1 == p and m1 == m:
        #testa para dar positivo a quantidade de camisetas pedidas e entregues
        print("s")
    elif er == False:
        #faz com que o programa pare caso um erro tenha acontecido no loop, e se não tiver erro vai dar a resposta oposta a "s"
        print("n")