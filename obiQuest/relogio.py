h, m, s, t= int(input()), int(input()), int(input()), int(input())
if 0 <= h <= 23 and 0 <= m <= 59 and 0 <= s <= 59 and 0 <= t <= 10**9:
    s += t
    while s >= 60:
        s -= 60
        m += 1
    while m >= 60:
        m -= 60
        h += 1
        if h >= 24:
            h -= 24
    print(h)
    print(m)
    print(s)