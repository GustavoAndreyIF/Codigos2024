import re
placa = input()
padraoBR = r'^[A-Z]{3}-\d{4}$'
padraoMS = r'^[A-Z]{3}\d[A-Z]\d{2}$'

def validar_placa(placa):
    resultado = 0
    if re.match(padraoBR, placa) is not None:
        resultado += 1
    if re.match(padraoMS, placa) is not None:
        resultado += 2
    return resultado
print(validar_placa(placa))