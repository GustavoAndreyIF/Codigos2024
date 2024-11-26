"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var catalogo_1 = require("./catalogo");
var filme_1 = require("./filme");
function filtrarFilmesPorAno(filmes, ano) {
    return filmes.filter(function (filme) {
        if (filme._anoLancamento == ano) {
            return filme._anoLancamento;
        }
    });
}
var filme1 = new filme_1.Filme("A Origem", "Christopher Nolan", 2010, [5, 4]);
var filme2 = new filme_1.Filme("Interestelar", "Christopher Nolan", 2014, [5, 5]);
var filme3 = new filme_1.Filme("Matrix", "Lana e Lilly Wachowski", 1999, [4, 4]);
var filme4 = new filme_1.Filme("Pulp Fiction: Tempo de Violência", "Quentin Ta0rantino", 1994, [5, 4]);
var filme5 = new filme_1.Filme("Duna", "Denis Villeneuve", 2021, [5, 5]);
var catalogo1 = new catalogo_1.Catalogo([filme1, filme2, filme3, filme4]);
catalogo1.adicionarFilme(filme5);
catalogo1.listarFilmes();
console.log(filtrarFilmesPorAno(catalogo1.filmes, 2010));
