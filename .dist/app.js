"use strict";
// 8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4
// exercicio 1
const lista = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4];
let impares = lista.filter((numb) => numb % 2 !== 0);
console.log(impares);
// exercicio 2
class Pessoa {
    constructor(nome, idade, salario) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
    }
}
let lucas = new Pessoa('Lucas', 28, 950);
let joao = new Pessoa('Joao', 45, 800);
let ana = new Pessoa('Ana', 13, 1070);
let lucia = new Pessoa('Lucia', 32, 2350);
let rosa = new Pessoa('Rosa', 23, 2000);
const listaPessoas = [lucas, joao, ana, lucia, rosa];
let menor23 = listaPessoas.filter((pessoa) => pessoa.idade < 23);
console.log(menor23);
// exercicio 3
let soma = lista.reduce((x, y) => x + y);
console.log(soma);
// exercicio 4
let menor30 = listaPessoas.filter((pessoa) => pessoa.idade < 30);
let menor30M = Math.floor(menor30.reduce((x, y) => x + y.idade, 0) / menor30.length);
console.log(menor30M);
// exercicio 5
let quadrado = lista.map((x) => x * x);
console.log(quadrado);
// exercicio 6
// let pobres = listaPessoas.filter((pessoa) => {
//    if (pessoa.salario) {
//       return pessoa.salario < 1027;
//    }
// });
// console.log(pobres);
// let nomes = pobres.map((x) => new Pessoa(x.nome, x.idade));
// console.log(nomes);
let pobres = listaPessoas.filter((pessoa) => {
    if (pessoa.salario) {
        return pessoa.salario < 1027;
    }
});
let nomes = pobres.map((x) => `nome: ${x.nome}, idade: ${x.idade}`);
