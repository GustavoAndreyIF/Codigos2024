m, a, b = int(input()), int(input()), int(input())
c = m-(a+b)
print(max(a, b, c)) if 40 <= m <= 110 and 1 <= a < m and 1 <= b < m and a != b else None