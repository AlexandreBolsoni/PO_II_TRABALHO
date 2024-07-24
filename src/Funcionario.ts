/*Classe Funcionário - especialização da classe Pessoa:
Atributos: matrícula (number), salário (number) e agência  (string).
Atributo estático: qtFuncionarios (number)
esse atributo deve ser inicializado com zero e incrementado a cada instanciação de um objeto da classe Funcionário;
deve ser usado para gerar automaticamente o número de matrícula ao se instanciar um novo objeto funcionário.
Método bonificacao(percentual) que recebe um percentual (p. ex, se receber como parâmetro o valor 10, equivale a 10%) e retorna (salário*percentual).
Método toString() que retorna uma string contendo os valores dos atributos de funcionário, fazendo obrigatoriamente o uso do toString() da super classe e adicionando os dados específicos do funcionário.*/ 

import Pessoa from "./Pessoa.js";

export default class Funcionario extends Pessoa {
    protected _matricula:number;
    protected _salario:number;
    protected _agencia:string;
    static qtFuncionarios:number = 0;

    constructor(matricula:number, salario:number, agencia:string, nome:string, endereco:string, telefone:string, dataNascimento:Date) {
        super(nome, endereco, telefone, dataNascimento);
        this._matricula = matricula;
        this._salario = salario;
        this._agencia = agencia;
        Funcionario.qtFuncionarios++;
    }

    get matricula(){
        return this._matricula;
    }
    get agencia(){
        return this._agencia;    
    }
    get salario(){
        return this._salario;
    }

    set agencia(agencia:string){
        this._agencia = agencia;
    }
    set salario(salario:number){
        this._salario = salario;
    }

    bonificacao(percentual:number):number{
        return this._salario*percentual/100;
    }

    toString():string{
        return `${super.toString()}, Matricula: ${this._matricula}, Salário: ${this._salario}, Agência: ${this._agencia}`;
    }
}

