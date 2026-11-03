// Funções são blocos de código criadas para executar uma tarefa específica.

/*
estrutura de uma função

function nomeDaFuncao() {
bloco de código que será executado
}
*/

// Exemplo básico de uma função

function darBoasVindas() {
    console.log("Olá, seja bem vind@!");
}

// Ativando/Invocando/Chamando a função
darBoasVindas();

// Funções com parâmetros e argumentos
function fazerSuco(fruta) {
    console.log(`Preparando o suco de ${fruta}...`);
}

fazerSuco("Laranja");
fazerSuco("Banana");
fazerSuco("Maçã");

function soma(a, b) {
    let resultado = a + b;
    console.log(resultado);
}

// NaN = Not a Nuber
soma(10, 37);
soma(32, 37);
soma(37, 48);
soma(21, 42);

// Casos bizarros
soma("Gabriel", "Lucas");
soma("Gabriel", 10);
soma("Gabriel", null);
soma(10, null);
soma(10, undefined);
soma([10], { undefined });

// Apresentando pessoas
function apresentandoPessoa(nome, sobrenome) {
    // O sinal de + pode ser utilizado para concatenar informações
    // concatenar = unir/juntar dados
    console.log("Olá, meu nome é " + nome + " " + sobrenome + " .");
    // console.log(`Olá, meu nome é ${nome} ${sobrenome} .`);
}

apresentandoPessoa("Leila", "da Silva");

// Funções com retorno
console.log("--- Funções com retorno ---");

function multiplicar(a, b) {
    return a * b;
}

multiplicar(2, 5);

const resultado = multiplicar(3, 5);
console.log(resultado);