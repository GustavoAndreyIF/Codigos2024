import { Catalogo } from "./catalogo";
import { Filme } from "./filme";

function filtrarFilmesPorAno(filmes: Filme[], ano: number): Filme[] {
    return filmes.filter(filme => {
        if (filme._anoLancamento == ano){
            return filme._anoLancamento
        }
    })
}
const filme1 = new Filme("A Origem", "Christopher Nolan", 2010, [5, 4])
const filme2 = new Filme("Interestelar", "Christopher Nolan", 2014, [5, 5])
const filme3 = new Filme("Matrix", "Lana e Lilly Wachowski", 1999, [4, 4])
const filme4 = new Filme("Pulp Fiction: Tempo de Violência", "Quentin Ta0rantino", 1994, [5, 4])
const filme5 = new Filme("Duna", "Denis Villeneuve", 2021, [5, 5])

const catalogo1 = new Catalogo([filme1, filme2, filme3, filme4])
catalogo1.adicionarFilme(filme5)
catalogo1.listarFilmes()

console.log(filtrarFilmesPorAno(catalogo1.filmes, 2010))