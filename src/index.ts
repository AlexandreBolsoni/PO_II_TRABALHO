import Atendente from "./Atendente";
import Funcionario from "./Funcionario";
import Gerente from "./Gerente";
import  Cliente from "./Cliente";


/* 
Criar um vetor de Funcionários e insira nele alguns Gerentes e Atendentes (pelo menos quatro de cada, de forma intercalada e com valores de atributos diversificados). 
Em seguida, usar a estrutura forEach no vetor para executar o método toString dos funcionários, a fim de testar o comportamento polimórfico daquele método.
Usar o método bonificacao() em objetos gerente e atendente, sem informar o valor do percentual como parâmetro, e verificar se os cálculos foram realizados conforme especificado para cada classe.
Usar o método bonificacao(percentual) em objetos gerente e atendente, informando o valor do percentual como parâmetro, e verificar se os cálculos foram realizados conforme especificado para cada classe.
*/

const vetFuncionarios: Array<Funcionario> = [
    new Atendente("caixa", 2500, "Agência 1", "Fernando", "Rua A, 10", "11966666666", new Date(1990, 3, 10)),
    new Gerente("regional", 5000, "Agência 1", "Marta", "Rua C, 30", "11944444444", new Date(1980, 1, 5)),
    new Atendente("pessoal", 2700, "Agência 2", "Ana", "Rua B, 20", "11955555555", new Date(1987, 7, 22)),
    new Gerente("regional", 6000, "Agência 2", "Carlos", "Rua D, 40", "11933333333", new Date(1975, 5, 15)),
    new Atendente("caixa", 2800, "Agência 3", "Pedro", "Rua E, 50", "11944444444", new Date(1995, 11, 5)),
    new Gerente("conta", 4500, "Agência 3", "Lucas", "Rua F, 60", "11933333333", new Date(1978, 9, 15)),
    new Atendente("pessoal", 2900, "Agência 4", "Juliana", "Rua G, 70", "11922222222", new Date(2000, 1, 1)),
    new Gerente("conta", 5500, "Agência 4", "Bruno", "Rua H, 80", "11911111111", new Date(1985, 3, 3))
    new Cliente("agencia 4 ", "Fernando", "Rua A, 10", "11966666666", new Date(1990, 3, 10))


];

vetFuncionarios.forEach((funcionario) => console.log(funcionario.toString()));
vetFuncionarios.forEach((funcionario) => console.log(`Bonificação do ${funcionario.nome}: ${funcionario.bonificacao()}`));
vetFuncionarios.forEach((funcionario) => console.log(`Bonificação do ${funcionario.nome} com percentual 5%: ${funcionario.bonificacao(5).toFixed(2)}`));
vetFuncionarios.forEach((funcionario) => console.log(`Bonificação do ${funcionario.nome} com percentual 10%: ${funcionario.bonificacao(10).toFixed(2)}`));
