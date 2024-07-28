import Pessoa from "./Pessoa";
import Atendente from "./Atendente";
import Gerente from "./Gerente";
import Funcionario from "./Funcionario";

// Criando instâncias de Pessoa
const pessoa1 = new Pessoa("Alexandre", "Rua dos Bobos, 0", "11999999999", new Date(2000, 0, 1));
const pessoa2 = new Pessoa("Igor", "Rua dos Bobos, 1", "11999999998", new Date(2000, 1, 1));
const pessoa3 = new Pessoa("Pedro", "Rua dos Bobos, 2", "11999999997", new Date(2000, 2, 1));
const pessoa4 = new Pessoa("Maria", "Rua dos Bobos, 3", "11999999996", new Date(2000, 3, 1));
const pessoa5 = new Pessoa("João", "Rua dos Bobos, 4", "11999999995", new Date(2000, 4, 1));

// Exibindo informações das pessoas
console.log(pessoa1.toString());
console.log(pessoa2.toString());
console.log(pessoa3.toString());
console.log(pessoa4.toString());
console.log(pessoa5.toString());

// Criando instâncias de Funcionário
const funcionario1 = new Funcionario(3000, "Agência Central", "Carlos", "Rua Principal, 123", "11988888888", new Date(1995, 5, 15));
const funcionario2 = new Funcionario(3200, "Agência Norte", "Roberta", "Rua Secundária, 456", "11977777777", new Date(1985, 10, 25));

// Exibindo informações dos funcionários
console.log(funcionario1.toString());
console.log(funcionario2.toString());

// Criando instâncias de Atendente
const atendente1 = new Atendente("caixa", 2500, "Agência 1", "Fernando", "Rua A, 10", "11966666666", new Date(1990, 3, 10));
const atendente2 = new Atendente("pessoal", 2700, "Agência 2", "Ana", "Rua B, 20", "11955555555", new Date(1987, 7, 22));

// Exibindo informações dos atendentes
console.log(atendente1.toString());
console.log(`Bonificação: ${atendente1.bonificacao()} reais`);
console.log(atendente2.toString());
console.log(`Bonificação: ${atendente2.bonificacao()} reais`);

// Criando instâncias de Gerente
const gerente1 = new Gerente("regional", 5000, "Agência 1", "Marta", "Rua C, 30", "11944444444", new Date(1980, 1, 5));
const gerente2 = new Gerente("conta", 4500, "Agência 2", "Lucas", "Rua D, 40", "11933333333", new Date(1978, 9, 15));

// Exibindo informações dos gerentes
console.log(gerente1.toString());
console.log(`Bonificação: ${gerente1.bonificacao()} reais`);
console.log(gerente2.toString());
console.log(`Bonificação: ${gerente2.bonificacao()} reais`);
