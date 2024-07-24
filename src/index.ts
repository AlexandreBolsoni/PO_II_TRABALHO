import Pessoa from "./Pessoa";
import Atendente from "./Atendente";
import Gerente from "./Gerente";
import Funcionario from "./Funcionario";

const pessoa1 = new Pessoa("alexandre", "rua dos bobos, 0", "11 99999-9999", new Date(2000, 1, 1));
const pessoa2 = new Pessoa("igor", "rua dos bobos, 1", "11 99999-9998", new Date(2000, 2, 1));
const pessoa3 = new Pessoa("pedro", "rua dos bobos, 2", "11 99999-9997", new Date(2000, 3, 1));
const pessoa4 = new Pessoa("maria", "rua dos bobos, 3", "11 99999-9996", new Date(2000, 4, 1));
const pessoa5 = new Pessoa("joao", "rua dos bobos, 4", "11 99999-9995", new Date(2000, 5, 1));  

console.log(pessoa1.toString());
console.log(pessoa2.toString());
console.log(pessoa3.toString());
console.log(pessoa4.toString());
console.log(pessoa5.toString());