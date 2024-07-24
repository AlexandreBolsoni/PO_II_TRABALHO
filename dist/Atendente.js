"use strict";
/*Classe Atendente - especialização da classe Funcionário:
Atributos: tipo (string, pode ter os valores "caixa" ou "pessoal").
Método bonificacao(percentual), que sobrescreve o da superclasse:
se receber o valor do percentual, deve apenas usar o método bonificacao da suplerclasse;
caso o valor do percentual não seja passado na chamada do método, deve aplicar percentuais diferentes de bonificação, de acordo com o atributo tipo: "caixa" - 7% e "pessoal" - 10%.
Método toString() que retorna uma string contendo os valores dos atributos de atendente: iniciar informando se tratar de um "Atendente", seu tipo e, em seguida, fazendo uso do toString() da super classe.*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_js_1 = __importDefault(require("./Funcionario.js"));
class Atendente extends Funcionario_js_1.default {
    constructor(tipo, matricula, salario, agencia, nome, endereco, telefone, dataNascimento) {
        super(matricula, salario, agencia, nome, endereco, telefone, dataNascimento);
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    bonificacao(percentual) {
        if (percentual) {
            return super.bonificacao(percentual);
        }
        else {
            switch (this._tipo) {
                case "caixa":
                    return super.bonificacao(7);
                case "pessoal":
                    return super.bonificacao(10);
            }
        }
    }
    toString() {
        return `Atendente do tipo: ${this._tipo}${super.toString()}`;
    }
}
exports.default = Atendente;
//# sourceMappingURL=Atendente.js.map