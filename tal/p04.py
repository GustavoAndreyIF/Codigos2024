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

def opcao_invalida():
    print("Opção inválida, por favor selecione uma opção válida.")

def main():
    class cadastro:
        def __init__(self, nome, matricula, dataNasc):
            self.nome = nome
            self.matricula = matricula
            self.dataNasc = dataNasc
        def atualizar(self):
            self.nome = input("Cadastre o seu novo nome: ")
        
        def listar(self):
            print(f"O seu nome: {self.nome}") if self.nome != "EXCLUIDO" else None
            print(f"A sua matricula: {self.matricula}") if self.nome != "EXCLUIDO" else None
            print(f"A sua data de nascimento: {self.dataNasc}") if self.nome != "EXCLUIDO" else None
        def excluir(self):
            self.nome = "EXCLUIDO"
    
    mostrar_menu()
    opcao = int(input())
    existe = 0
    while True:
        if opcao == 1:
            cadastro1 = cadastro(input("Cadastre o seu nome: "), input("Cadastre sua matricula: "), input("Cadastre sua data de nascimento: "))
            existe = 1
            mostrar_menu()
            opcao = int(input())
        if opcao == 2:
            cadastro1.listar() if existe == 1 else None
            mostrar_menu()
            opcao = int(input())
        if opcao == 3:
            cadastro1.atualizar() if existe == 1 else None
            mostrar_menu()
            opcao = int(input())
        if opcao == 4:
            cadastro1.excluir() if existe == 1 else None
            print("Cadastro Excluido")
            mostrar_menu()
            opcao = int(input())
        if opcao == 5:
            break
        if opcao != 1 and opcao != 2 and opcao != 3 and opcao != 4:
            opcao_invalida()
        mostrar_menu()


if __name__ == "__main__":
    main()