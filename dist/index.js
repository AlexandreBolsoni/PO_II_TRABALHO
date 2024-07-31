"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Atendente_1 = __importDefault(require("./Atendente"));
const Funcionario_1 = __importDefault(require("./Funcionario"));
const Gerente_1 = __importDefault(require("./Gerente"));
const Cliente_1 = require("./Cliente"); // Ajuste na importação
// Criação do vetor de Funcionários
const vetFuncionarios = [
    new Atendente_1.default("caixa", 2500, "Agência 1", "Fernando", "Rua A, 10", "11966666666", new Date(1990, 3, 10)),
    new Gerente_1.default("regional", 5000, "Agência 1", "Marta", "Rua C, 30", "11944444444", new Date(1980, 1, 5)),
    new Atendente_1.default("pessoal", 2700, "Agência 2", "Ana", "Rua B, 20", "11955555555", new Date(1987, 7, 22)),
    new Gerente_1.default("regional", 6000, "Agência 2", "Carlos", "Rua D, 40", "11933333333", new Date(1975, 5, 15)),
    new Atendente_1.default("caixa", 2800, "Agência 3", "Pedro", "Rua E, 50", "11944444444", new Date(1995, 11, 5)),
    new Gerente_1.default("conta", 4500, "Agência 3", "Lucas", "Rua F, 60", "11933333333", new Date(1978, 9, 15)),
    new Atendente_1.default("pessoal", 2900, "Agência 4", "Juliana", "Rua G, 70", "11922222222", new Date(2000, 1, 1)),
    new Gerente_1.default("conta", 5500, "Agência 4", "Bruno", "Rua H, 80", "11911111111", new Date(1985, 3, 3))
];
// Criação de um objeto Cliente
const cliente = new Cliente_1.Cliente("Agência 5", "Cliente Nome", "Rua I, 90", "11900000000", new Date(1992, 6, 12));
// Verificar se o objeto é uma instância de Funcionario antes de adicionar ao vetor
if (cliente instanceof Funcionario_1.default) {
    vetFuncionarios.push(cliente);
}
else {
    console.error("Erro: Cliente não pode ser adicionado ao vetor de Funcionários.");
}
// Exibição do vetor de funcionários para verificar a inserção
vetFuncionarios.forEach((funcionario) => console.log(funcionario.toString()));
// Verificação e execução do método bonificacao
vetFuncionarios.forEach((funcionario) => {
    console.log(`Bonificação do ${funcionario.nome}: ${funcionario.bonificacao()}`);
    console.log(`Bonificação do ${funcionario.nome} com percentual 5%: ${funcionario.bonificacao(5).toFixed(2)}`);
    console.log(`Bonificação do ${funcionario.nome} com percentual 10%: ${funcionario.bonificacao(10).toFixed(2)}`);
});
//# sourceMappingURL=index.js.map