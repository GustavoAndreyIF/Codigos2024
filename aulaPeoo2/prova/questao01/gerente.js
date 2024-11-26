"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
var funcionario_1 = require("./funcionario");
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(_bonus, _nome, _cargo, _salario) {
        if (_bonus === void 0) { _bonus = 0; }
        var _this = _super.call(this, _nome, _cargo, _salario) || this;
        _this._bonus = _bonus;
        _this._nome = _nome;
        _this._cargo = _cargo;
        _this._salario = _salario;
        return _this;
    }
    Gerente.prototype.descricao = function () {
        console.log("\n        ------------------------\n        Nome: ".concat(this._nome, "\n        Cargo: ").concat(this._cargo, "\n        Salario: ").concat(this._salario.toFixed(2), "\n        Bonus: ").concat(this._bonus, "\n        Total: ").concat((this._salario * this._bonus).toFixed(2), "\n        ------------------------\n        "));
    };
    Object.defineProperty(Gerente.prototype, "bonus", {
        get: function () {
            return this._bonus;
        },
        enumerable: false,
        configurable: true
    });
    Gerente.prototype.aplicarBonus = function (novoBonus) {
        if (novoBonus >= 0) {
            var bonusAntigo = this._bonus;
            this._bonus = novoBonus;
            console.log("\n                Salario Antigo: ".concat(bonusAntigo.toFixed(2), "\n                Salario Novo: ").concat(this._salario.toFixed(2), "\n                "));
        }
        else {
            console.log("Valor invalido para bonus");
        }
    };
    return Gerente;
}(funcionario_1.Funcionario));
exports.Gerente = Gerente;
