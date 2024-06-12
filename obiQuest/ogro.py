e, d = int(input()), int(input())
if 0 <= e <= 5 and 0 <= d <= 5 and e != d:
    print(e+d) if e > d else None
    print(2*(d - e)) if e < d else None