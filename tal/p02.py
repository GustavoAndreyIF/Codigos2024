
def mostrar_menu():
    menu = """
    ====================
       SISTEMA DE CADASTRO
    ====================
    1. Cadastrar novo nome
    2. Listar cadastro
    3. Atualizar nome
    4. Excluir nome
    5. Sair
    ====================
    """
    print(menu)

def opcao_invalida():
    print("Opção inválida, por favor selecione uma opção válida.")

def cadastro(nome):
    return nome

def listar(nome):
    print(f"Nome: {nome}")

def atualizar():
    nome = input("Cadastre o seu novo nome: ")
    return nome

def excluir():
    return "EXCLUIDO"

def main():
    mostrar_menu()
    cadastro1 = "EXCLUIDO"
    opcao = int(input())
    existe = 0
    while True:
        if opcao == 1:
            cadastro1 = cadastro(input("Cadastre o seu nome: "))
            existe = 1
            mostrar_menu()
            opcao = int(input())
        if opcao == 2:
            listar(cadastro1) if existe == 1 and cadastro1 != "EXCLUIDO" else None
            mostrar_menu()
            opcao = int(input())
        if opcao == 3:
            cadastro1 = atualizar() if existe == 1 else None
            mostrar_menu()
            opcao = int(input())
        if opcao == 4:
            cadastro1 = excluir() if existe == 1 else None
            print("cadastro excluido")
            mostrar_menu()
            opcao = int(input())
        if opcao == 5:
            break
        mostrar_menu()


if __name__ == "__main__":
    main()