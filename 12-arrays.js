// Um array é uma estrutura de dados utilizada para armazenar uma coleção(lista) de valores dentro de uma única variável

let aluno1 = "Jotape";
let aluno2 = "Murilo";
let aluno3 = "Clara";
let aluno4 = "Duda";
let aluno5 = "Luis";
let aluno6 = "Gustavo";

// Organizando estrutura com arrays
// A estrutura de um array é representada por []
const alunos = ["Jotape", "Murilo", "Clara", "Duda", "Luis", "Gustavo"]

console.log(alunos);

// Acessando informações de um array
console.log("--- ACESSANDO ELEMENTOS ---")

console.log(alunos[0]);
console.log(alunos[3]);

// Acessando um elemento sem valor definido
console.log(alunos[6]);

// Descobrindo o tamanho de um array
console.log("O tamanho do array é: ", alunos.length);

// Iterando sobre um array
console.log("--- PERCORRENDO ARRAY - FOR ---");

for (let index = 0; index < alunos.length; index++) {

    const element = alunos[index];
    console.log(element)
}

console.log("--- PERCORRENDO ARRAY - FOR/OF ---");
for (let aluno of alunos) {
    console.log(aluno);
}
