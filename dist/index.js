"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
const pessoa1 = new Pessoa_1.default("alexandre", "rua dos bobos, 0", "11 99999-9999", new Date(2000, 1, 1));
const pessoa2 = new Pessoa_1.default("igor", "rua dos bobos, 1", "11 99999-9998", new Date(2000, 2, 1));
const pessoa3 = new Pessoa_1.default("pedro", "rua dos bobos, 2", "11 99999-9997", new Date(2000, 3, 1));
const pessoa4 = new Pessoa_1.default("maria", "rua dos bobos, 3", "11 99999-9996", new Date(2000, 4, 1));
const pessoa5 = new Pessoa_1.default("joao", "rua dos bobos, 4", "11 99999-9995", new Date(2000, 5, 1));
console.log(pessoa1.toString());
console.log(pessoa2.toString());
console.log(pessoa3.toString());
console.log(pessoa4.toString());
//# sourceMappingURL=index.js.map