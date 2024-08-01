from dataclasses import dataclass

@dataclass
class Data:
    dia: int
    mes: int
    ano: int

@dataclass
class Estudante:
    nome: str # Com no mínimo, nome e sobrenome
    matricula: str
    data_nascimento: Data

def mostrar_menu():
    menu = """
    ====================
    1. Cadastrar novo estudante
    2. Listar estudantes
    3. Sair
    ====================
    """
    print(menu)

def opcao_invalida():
    print("Opção inválida, por favor selecione uma opção válida.")

mostrar_menu()
opcao = int(input())
existe = 0

while True:
        if opcao == 1:
            nome = str(input("Nome: "))
            matricula = int(input("Matricula: "))
            data = str(input("data de nascimento: "))
            cadastro1 = Estudante(nome, matricula, data)
            existe = 1
            mostrar_menu()
            opcao = int(input())
        if opcao == 2:
            print(cadastro1) if existe == 1 else None
            mostrar_menu()
            opcao = int(input())
        if opcao == 3:
            break
        if opcao != 1 and opcao != 2:
            opcao_invalida()
        mostrar_menu()