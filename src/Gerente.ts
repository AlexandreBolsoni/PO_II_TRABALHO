/*Classe Gerente - especialização da classe Funcionário:
Atributos: nível (string, pode ter os valores "conta", "agência" ou "regional" - indicando se tratar de um gerente de contas, de agência ou de uma região).
Método bonificacao(percentual), que sobrescreve o da superclasse e deve permitir que o parâmetro não seja passado na chamada do método (parâmetro opcional):
se receber o valor do percentual, deve apenas usar o método bonificacao da suplerclasse;
caso o valor do percentual não seja passado na chamada do método, deve aplicar percentuais diferentes de bonificação, de acordo com o atributo nível: "conta" - 15%, "agência" - 20% e "regional" - 25%.
Método toString() que retorna uma string contendo os valores dos atributos de gerente: iniciar informando se tratar de um "Gerente", seu nível e, em seguida, fazendo uso do toString() da super classe.*/ 

import Funcionario from "./Funcionario.js";

type tiposNivel = "conta"|"agência"|"regional"

export default class Gerente extends Funcionario{
    protected _niveis:tiposNivel;

    constructor(nivel:tiposNivel, matricula:number, salario:number, agencia:string, nome:string, endereco:string, telefone:string, dataNascimento:Date){ 
        super(matricula, salario, agencia, nome, endereco, telefone, dataNascimento);
        this._niveis = nivel;
 
    }

    get niveis(){
        return this._niveis;
    }

    set niveis(nivel:tiposNivel){
        this._niveis = nivel;
    }

    bonificacao(percentual?:number): number{
        if(percentual){
            return super.bonificacao(percentual);

        }else{
            switch(this._niveis){
                case "conta":
                    return super.bonificacao(15);
                case "agência":
                    return super.bonificacao(20);
                case "regional":
                    return super.bonificacao(25);
            }

        }
    }

    toString():string{
        return `Gerente do Nível: ${this._niveis}${super.toString()}, `;
    
}
}

