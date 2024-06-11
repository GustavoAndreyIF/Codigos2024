chocoNumber = int(input())
preco = []
if 1 <= chocoNumber <= 100000:
    for i in range(chocoNumber):
        preco.append(int(input()))
    preco.sort()
    if (chocoNumber // 3) == 0:
        promo = (chocoNumber // 3)
    else:
        if (chocoNumber + 2) % 3 == 0:
            promo = ((chocoNumber - 1) // 3)
        if (chocoNumber + 1) % 3 == 0:
            promo = ((chocoNumber - 2) // 3)
    if 1 <= preco[0] <= 1000:
        preco.sort(reverse=True)
        for i in range(promo):
            preco.pop()
        print(sum(preco))