class produtos:
    def __init__(self, nome, preco, categoria):
        self.nome = nome
        self.preco = preco
        self.categoria = categoria
    def mostrar(self):
        print(f"Nome: {self.nome}")
        print(f"Preço: R${self.preco}")
        print(f"Categoria: {self.categoria}")

produto1 = produtos("agua", 1.99, "bebida")
print(produto1.mostrar())

class produtosPereciveis(produtos):
    def __init__(self, nome, preco, categoria, validade)
        super.__init__(nome, preco, categoria)
        self.validade = validade