// O JavaScript possui 7 tipos de dados primitivos (que guardam um único valor simples)

// 1 - Strings
// O tipo String representa sequências de caracteres, como nomes, mensagens endereços, emails, ou seja, textos de modo geral.

const nome = "Jotape";
const cidade = 'São Paulo';
const mensagem = `Olá, fulanx`;

console.log(nome)
console.log(cidade)
console.log(mensagem)
console.log("---------------")

// 2 - Number
// O JavaScript usa o tipo Number para representar números inteiros e decimais.

const idade = 18;
const altura = 1.80;
const preco = 599.90;
const temperatura = -3.17;

console.log(idade)
console.log(altura)
console.log(preco)
console.log(temperatura)

console.log("------------------")

// 3 - BigInt
// O tipo bigint permite representar números inteiros maiores do que o limite de precisão dos números internos comuns do tipo Number.
const numeroGrande = 13676913888676913888n
// o "n" no final do número indica que ele é um bigint
console.log(numeroGrande)

// 4 - Boolean - Valores lógicos
// O tipo boolean representa apenas dois valores:
// true = verdadeiro
// false = falso
// É muito utilizado para verificar condições, controlar funcionalidades e representar estados.

const estaLogada = true;
const temPermissao = false;


console.log(estaLogada)
console.log(temPermissao)

console.log("------------------")

// 5 - Undefined
// No JavaScript, undefined (indefinido) representa um valor que não foi definido.

let fruta;
console.log(fruta)
console.log(typeof fruta);

console.log("------------------")

// 6 - Null
// O null no JavaScript representa a ausência INTENCIONAL de um valor

const fotoDePerfil = null;
console.log(fotoDePerfil)
console.log(typeof fotoDePerfil)

console.log("------------------")

// 7 - Symbol
// O symbol é utilizado para criar identificadores únicos

const id1 = Symbol("id")
const id2 = Symbol("id")

console.log(id1 === id2)