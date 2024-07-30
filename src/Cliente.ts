import Pessoa from "./Pessoa";


export class Cliente extends Pessoa {
    private _agencia: string;


    constructor(agencia: string, nome: string, endereco: string, telefone: string, dataNascimento: Date) {
        super(nome, endereco, telefone, dataNascimento);
        this._agencia = agencia != undefined ? agencia : "001";
    }

    get agencia() {
        return this._agencia;
    }
    set agencia(novaAgencia: string) {
        if (novaAgencia != "") {
            this._agencia = novaAgencia;
        }
       
    }
    toString(): string{
        return "Cliente:\n"+
            super.toString() +
            "\nAgência : " + this._agencia;
    }
}