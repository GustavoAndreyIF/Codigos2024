d = int(input())
if 6 <= d <= 800008:
    print(1) if d % 8 == 6 else None
    print(2) if d % 8 == 7 else None
    print(3) if d % 8 == 0 else None