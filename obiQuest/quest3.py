#V se o participante venceu o jogo, ou P se o jogador perdeu o jogo
resu = 0
for i in range(6):
    r = str(input().upper())
    if r == "V":
        resu += 1
#participantes que venceram 5 ou 6 jogos serão colocados no Grupo 1;
if resu >= 5:
    print(1)
#participantes que venceram 3 ou 4 jogos serão colocados no Grupo 2;
elif resu >= 3:
    print(2)
#participantes que venceram 1 ou 2 jogos serão colocados no Grupo 3;
elif resu >= 1:
    print(3)
#participantes que não venceram nenhum jogo não serão convidados a continuar com os treinamentos.
else:
    print(-1)