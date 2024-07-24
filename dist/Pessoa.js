"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Classe Pessoa:
Atributos: nome (string), endereço (string), telefone (string), cpf (string) e data de nascimento (Date).
Método toString() que retorna uma string com os valores dos atributos da pessoa.*/
class Pessoa {
    constructor(nome, endereco, telefone, dataNascimento) {
        if (telefone.length != 9) {
            this._nome = nome;
            this._endereco = endereco;
            this._telefone = telefone;
            this._dataNascimento = dataNascimento;
        }
        else {
            throw new Error("Número de telefone inválido");
        }
    }
    get nome() {
        return this._nome;
    }
    get telefone() {
        return this._telefone;
    }
    get endereco() {
        return this._telefone;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    set nome(nome) {
        this._nome = nome;
    }
    set endereco(endereco) {
        this._endereco = endereco;
    }
    set telefone(telefone) {
        if (telefone.length != 9) {
            this._telefone = telefone;
        }
        else {
            throw new Error("Número de telefone inválido");
        }
    }
    set dataNascimento(dataNascimento) {
        this._dataNascimento = dataNascimento;
    }
    toString() {
        return `Nome: ${this._nome}, Endereço: ${this._endereco}, Telefone: ${this._telefone}, Data de Nascimento: ${this._dataNascimento}`;
    }
}
exports.default = Pessoa;
//# sourceMappingURL=Pessoa.js.map