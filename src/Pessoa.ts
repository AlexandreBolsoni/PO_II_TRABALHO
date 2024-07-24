/* Classe Pessoa:
Atributos: nome (string), endereço (string), telefone (string), cpf (string) e data de nascimento (Date).
Método toString() que retorna uma string com os valores dos atributos da pessoa.*/
export default class Pessoa{

    protected _nome:string;
    protected _endereco:string;
    protected _telefone:string;
    protected _dataNascimento:Date;

    constructor(nome:string, endereco:string, telefone:string, dataNascimento:Date){
        if (telefone.length != 9){
            this._nome = nome;
            this._endereco = endereco;
            this._telefone = telefone;
            this._dataNascimento = dataNascimento;

        }else{
            throw new Error("Número de telefone inválido");
        }


    }

    get nome(){
        return this._nome;
    }
    get telefone(){
        return this._telefone;
    }
    get endereco(){
        return this._telefone;
    }
    get dataNascimento(){
        return this._dataNascimento;
    }

    set nome(nome:string){
        this._nome = nome;
    }
    set endereco(endereco:string){
        this._endereco = endereco;
    }
    set telefone(telefone:string){
        if (telefone.length != 9){
            this._telefone = telefone;

        }else{
            throw new Error("Número de telefone inválido");
        }
    }
    set dataNascimento(dataNascimento:Date){
        this._dataNascimento = dataNascimento;
    }

    toString():string{
        return `Nome: ${this._nome}, Endereço: ${this._endereco}, Telefone: ${this._telefone}, Data de Nascimento: ${this._dataNascimento}`;
    }
}

