// Colocar .TS no final do nome dos arquivos caso o runtime for o Deno
import { Funcionario } from "./funcionario";
import { Empresa } from "./empresa";
import { Gerente } from "./gerente";

const empresa1 = new Empresa("Tech Soluções")
const funcionario1 = new Funcionario("funcionario1", "cargo1", 100)
const funcionario2 = new Funcionario("funcionario2", "cargo2", 200)
const funcionario3 = new Funcionario("funcionario3", "cargo3", 300)
const gerente1 = new Gerente(1, "gerente1", "cargo11", 1000)
const gerente2 = new Gerente(1, "gerente2", "cargo12", 2000)

empresa1.adicionarFuncionario(funcionario1)
empresa1.adicionarFuncionario(funcionario2)
empresa1.adicionarFuncionario(funcionario3)
empresa1.adicionarFuncionario(gerente1)
empresa1.adicionarFuncionario(gerente2)

empresa1.listarFuncionarios()

funcionario1.aplicarAumento(1.10)
funcionario2.aplicarAumento(1.15)

gerente1.aplicarBonus(1.25)
gerente2.aplicarBonus(1.35)
