#Sabemos que Cibele nasceu antes de Camila e Celeste nasceu depois de Camila.
c1 = int(input())
c2 = int(input())
c3 = int(input())
if 5 <= c1 <= 100 and 5 <= c2  <= 100 and 5 <= c3 <=100:
#A idade delas tem que ser maior ou igual a 5 e menor que 100. Limitação pedida pela questão.
    irmas = ["c1", "c2", "c3"]
#Lista com os nomes da variáveis.
    idade = []
    for i in irmas:
#O i do for sera um valor número e vai contar cada item da lista percorrida.
        idade.append(eval(i))
#O eval pega o valor dentro da variável que possui o mesmo nome que a string da lista e adiciona a lista vazia de idade.
        idade.sort()
#O sort vai colocar em ordem numérica as idades e assim colocar a idade de Camila no índice do meio da lista. Como ela é a irmã do meio a sua idade vai ser a idade entre a idade de suas irmãs.
    print(idade[1])
else:
    print("Idade inválida")