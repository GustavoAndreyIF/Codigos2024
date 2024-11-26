"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filme = void 0;
var Filme = /** @class */ (function () {
    function Filme(_nome, _diretor, _anoLancamento, _avaliacoes) {
        if (_avaliacoes === void 0) { _avaliacoes = []; }
        this._nome = _nome;
        this._diretor = _diretor;
        this._anoLancamento = _anoLancamento;
        this._avaliacoes = _avaliacoes;
    }
    Filme.prototype.adicionarAvaliacao = function (avaliacao) {
        if (avaliacao > 0 && avaliacao < 6) {
            this._avaliacoes.push(avaliacao);
        }
    };
    Filme.prototype.calcularMediaAvaliacoes = function () {
        var totalAvaliacao = 0;
        this._avaliacoes.forEach(function (avaliacao) {
            totalAvaliacao += avaliacao;
        });
        return console.log("Media: ".concat(totalAvaliacao / this._avaliacoes.length));
    };
    Filme.prototype.descricao = function () {
        console.log("\n        ------------------------\n        Nome: ".concat(this._nome, "\n        Diretor: ").concat(this._diretor, "\n        Ano de Lan\u00E7amento: ").concat(this._anoLancamento, "\n        Media de Avalia\u00E7\u00F5es: ").concat(this.calcularMediaAvaliacoes(), "\n        ------------------------\n        "));
    };
    Object.defineProperty(Filme.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (novoNome) {
            this._nome = novoNome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "diretor", {
        get: function () {
            return this._diretor;
        },
        set: function (novoDiretor) {
            this._diretor = novoDiretor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "anoLancamento", {
        get: function () {
            return this._anoLancamento;
        },
        set: function (novoAnolancamento) {
            this._anoLancamento = novoAnolancamento;
        },
        enumerable: false,
        configurable: true
    });
    return Filme;
}());
exports.Filme = Filme;
