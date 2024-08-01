
def mostrar_menu():
    menu = """
    ====================
       SISTEMA ESCOLAR
    ====================
    1. Cadastrar novo estudante
    2. Listar todos os estudantes
    3. Atualizar dados de um estudante
    4. Excluir um estudante
    5. Sair
    ====================
    """
    print(menu)

def repetir():
    s = 1

def opcao_invalida():
    print("Opção inválida, por favor selecione uma opção válida.")

def main():
    while True:
        mostrar_menu()
        opcao = int(input())
        if opcao == 5:
            break
        if opcao != 1 and opcao != 2 and opcao != 3 and opcao != 4:
            opcao_invalida()

            


if __name__ == "__main__":
    main()