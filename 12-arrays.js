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

console.log("--- PERCORRENDO ARRAY - forEACH ---");
alunos.forEach((aluno) => {
    console.log(aluno)
})

// Métodos importantes dos arrays
const frutas = ["Banana", "Maçã", "Pêra", "Manga", "Uva"];

// 1 - Includes (verifica se um elemento existe)
console.log("--- INCLUDES ---")
console.log(frutas.includes("Banana"));
console.log(frutas.includes("Goiaba"));

// 2 - IndexOf (verifica a posição de um elemento)
console.log("--- indexOF ---")
console.log(frutas.indexOf("Goiaba"));
console.log(frutas.indexOf("Banana"));

// 3 - Find (encontrar um elemento)
console.log("--- find ---")
const notas = [4, 5, 7, 8, 10]

const resultado = notas.find((nota) => {
    return nota > 7;
})

console.log(resultado);

// 4 - Filter ()
// Diferente do find, o filter retorna todos os elementos que atendem uma determinada condição.
console.log("--- filter() ---")

const aprovados = notas.filter((nota) => {
    return nota >= 7;
})

const reprovados = notas.filter(nota => nota < 7);

console.log(aprovados);
console.log(reprovados);

// Manipulando arrays
const animais = ["Cachorro", "Pássaro", "Ornitorrinco"];
console.log(animais)

console.log("--- push() ---")
// Insere um elemento no final do array
animais.push("Gorila");

console.log("--- unshift() ---")
// Insere um elemento no inicio do array
animais.unshift("Girafa");

console.log("--- pop() ---")
// Remove o ultimo elemento da lista
animais.pop();

console.log("--- shift() ---")
// Remove o primeiro elemento da lista
animais.shift();

// Tipos de dados que um array suporta
const dados = [
    "João Pedro",
    18,
    true,
    null,
    undefined,
    { cidade: "SP" },
    [1, 2, 3, ["kkkkkkkk"]],
    function () {
        console.log("Olá");
    }
]

dados[7]();
console.log(dados[1]);
console.log(dados[6][3][0])

// Exemplo pratico
const student = [
    {
        nome: "Jotape",
        idade: 19,
        linguagens: ["Python", "Java"],
        ativo: true
    },
    {
        nome: "Murilo",
        idade: 20,
        linguagens: ["HTML", "CSS"],
        ativo: true
    },
    {
        nome: "Duda",
        idade: 20,
        linguagens: ["JavaScript", "C++"],
        ativo: true
    },
    {
        nome: "Clara",
        idade: 18,
        linguagens: ["JavaScript", "HTML", "PHP"],
        ativo: false
    }
]
// Para um estudante da lista de estudantes, faça...
for(let student of students){
    console.log("--- Alun@ ---");
    console.log(student.nome);
    console.log(student.idade);
    console.log(student.linguagens);
    console.log(student.ativo);
}