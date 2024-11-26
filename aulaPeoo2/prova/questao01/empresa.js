"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
var Empresa = /** @class */ (function () {
    function Empresa(_nome, _funcionarios) {
        if (_funcionarios === void 0) { _funcionarios = []; }
        this._nome = _nome;
        this._funcionarios = _funcionarios;
    }
    Empresa.prototype.adicionarFuncionario = function (funcionario) {
        this._funcionarios.push(funcionario);
    };
    Empresa.prototype.listarFuncionarios = function () {
        console.log("FUNCIONARIOS");
        this._funcionarios.forEach(function (funcionario) {
            funcionario.descricao();
        });
    };
    return Empresa;
}());
exports.Empresa = Empresa;
