"use strict";
/*Classe Funcionário - especialização da classe Pessoa:
Atributos: matrícula (number), salário (number) e agência  (string).
Atributo estático: qtFuncionarios (number)
esse atributo deve ser inicializado com zero e incrementado a cada instanciação de um objeto da classe Funcionário;
deve ser usado para gerar automaticamente o número de matrícula ao se instanciar um novo objeto funcionário.
Método bonificacao(percentual) que recebe um percentual (p. ex, se receber como parâmetro o valor 10, equivale a 10%) e retorna (salário*percentual).
Método toString() que retorna uma string contendo os valores dos atributos de funcionário, fazendo obrigatoriamente o uso do toString() da super classe e adicionando os dados específicos do funcionário.*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Funcionario extends Pessoa_1.default {
    constructor(salario, agencia, nome, endereco, telefone, dataNascimento) {
        super(nome, endereco, telefone, dataNascimento);
        this._matricula = ++Funcionario.qtFuncionarios; // Incrementa automaticamente a matrícula
        this._salario = salario;
        this._agencia = agencia;
    }
    get matricula() {
        return this._matricula;
    }
    get agencia() {
        return this._agencia;
    }
    get salario() {
        return this._salario;
    }
    set agencia(agencia) {
        this._agencia = agencia;
    }
    set salario(salario) {
        this._salario = salario;
    }
    bonificacao(percentual) {
        if (percentual == undefined) {
            throw new SyntaxError("O percentual deve ser informado");
        }
        else {
            return this._salario * percentual / 100;
        }
    }
    toString() {
        return `${super.toString()}, Matrícula: ${this._matricula}, Salário: ${this._salario.toFixed(2)}, Agência: ${this._agencia}`;
    }
}
Funcionario.qtFuncionarios = 0;
exports.default = Funcionario;
//# sourceMappingURL=Funcionario.js.map