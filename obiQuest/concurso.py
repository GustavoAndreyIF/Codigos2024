n, k = (input()).split()
n, k = int(n), int(k)
a = []
e = False
a1 = []
a = (input()).split()
for i in a:
    a1.append(int(i))
if 1 <= k <= n <= 500:
    for i in a1:
        if 1 >= i >= n and 1 >= i >= 101:
            e = True
    if e == False:
        a1.sort()
        a1.reverse()
        print(a1[k-1])