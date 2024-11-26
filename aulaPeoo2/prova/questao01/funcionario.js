"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(_nome, _cargo, _salario) {
        this._nome = _nome;
        this._cargo = _cargo;
        this._salario = _salario;
    }
    Funcionario.prototype.descricao = function () {
        console.log("\n        ------------------------\n        Nome: ".concat(this._nome, "\n        Cargo: ").concat(this._cargo, "\n        Salario: ").concat(this._salario, "\n        ------------------------\n        "));
    };
    Funcionario.prototype.aplicarAumento = function (porcentagem) {
        if (porcentagem > 0) {
            var salarioAntigo = this._salario;
            this._salario = this._salario * porcentagem;
            console.log("\n            Salario Antigo: ".concat(salarioAntigo.toFixed(2), "\n            Salario Novo: ").concat(this._salario.toFixed(2), "\n            "));
        }
        else {
            console.log("Digite um valor maior que 0%");
        }
    };
    Object.defineProperty(Funcionario.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (novoNome) {
            this._nome = novoNome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "cargo", {
        get: function () {
            return this._cargo;
        },
        set: function (novoCargo) {
            this._cargo = novoCargo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        enumerable: false,
        configurable: true
    });
    return Funcionario;
}());
exports.Funcionario = Funcionario;
