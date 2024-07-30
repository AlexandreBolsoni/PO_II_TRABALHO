import Pessoa from "./Pessoa";


export class Cliente extends Pessoa {
    private _agencia: string;


    constructor(agencia: string, nome: string, endereco: string, telefone: string, dataNascimento: Date) {
        super(nome, endereco, telefone, dataNascimento);
        this._agencia = agencia;
    }

    get agencia() {
        return this._agencia;
    }
    set agencia(agencia: string) {
        this._agencia = agencia;
    }
    toString(): string {
        return `${super.toString()}, Agência: ${this._agencia}`
    }
}
