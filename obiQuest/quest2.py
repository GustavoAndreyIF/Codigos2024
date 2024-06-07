#megabytes por mes
megax = int(input())
#meses de uso
meses = int(input())
#megabytes totais dos meses
mega = megax * (meses+1)
#restricoes
if 1 <= megax <= 100 and 1 <= meses <= 100 and 0 <= mega <= 10000:
            for i in range(meses):
                 #input pra os megabytes usados em cada mês
                 usado = int(input())
                 #megabytes sobrando
                 mega = mega - usado
            #testando para impedir resultado negativo
            if mega >= 0:
                print(mega)
            else:
                print("Erro")