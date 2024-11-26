"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalogo = void 0;
var Catalogo = /** @class */ (function () {
    function Catalogo(_filmes) {
        if (_filmes === void 0) { _filmes = []; }
        this._filmes = _filmes;
    }
    Catalogo.prototype.adicionarFilme = function (filme) {
        this._filmes.push(filme);
    };
    Catalogo.prototype.listarFilmes = function () {
        console.log("FILMES");
        this._filmes.forEach(function (filme) {
            filme.descricao();
        });
    };
    Object.defineProperty(Catalogo.prototype, "filmes", {
        get: function () {
            return this._filmes;
        },
        enumerable: false,
        configurable: true
    });
    return Catalogo;
}());
exports.Catalogo = Catalogo;
