// Os objetos são uma estrutura de dados que nos permitem armazenar várias informações relacionadas dentro de uma ÚNICA váriavel

/*
estrutura de um objeto
const objeto = {
key: value,
chave: valor.
propriedade: valor,
outraPropriedade: outroValor
}
*/

// Exemplo: Criando informações de um aluno
let nome = "Jotape";
let idade = 18;
let curso = "JavaScript"
let email = "jotape@gameplay.com";
let matriculado = true;

// Organizando estrutura com objetos
const aluno = {
    nome: "Jotape",
    idade: 18,
    curso: "JavaScript",
    email: "jotape@gameplay.com",
    matriculado: true
}

// Exibindo o objeto completo
console.log(aluno);

// Acessando informações específicas
// Com o ponto final . (dot notation)
console.log("--- ACESSANDO COM . ---");
console.log(aluno.nome);
console.log(aluno.email);

// Com o colchete [] - (bracket notation)
console.log("--- ACESSANDO COM [] ---");
console.log(aluno["curso"]);
console.log(aluno["idade"]);

// Alterando informações de um objeto
console.log("--- ALTERANDO PROPRIEDADES ---");
aluno.curso = "React";
console.log(aluno);

// Adicionando propriedades ao objeto
console.log("--- ADICIONANDO PROPRIEDADES ---");
aluno.nota = 9.5;
console.log(aluno);

// Removendo propriedades do objeto
console.log("--- REMOVENDO PROPRIEDADES ---");
delete aluno.nota;
console.log(aluno);

// Objetos aninhados
console.log("--- OBJETOS ANINHADOS---");

const pessoa = {
    nome: "Joao",
    sobrenome: "Pedro",
    idade: 18,

    endereco: {
        cidade: "São Paulo",
        cep: "00000-000",
        numero: 67,
        rua: "Logo ali",
        coordinates: {
            lat: "-23.5475",
            long: "-46.6361"
        }
    }
}

console.log(pessoa.endereco.cep);

// Objetos com funções (métodos)
const cachorro = {
    nome: "Renato",
    idade: 3,
    raca: "Husky Siberiano",

    // Método
    latir: function () {
        console.log("Au au");
    }
}

cachorro.latir()

// Exemplos comuns
const produto = {
    tela: "Amoled 16pol",
    armazenamento: "SSD 1TB",
    Processador: "Ryzen 5500U",
    memoriaRam: "16GB",
    bateria: "",
    preco: 3500,
    estoque: 10,
    disponivel: true,
}

const clima = {
    cidade: "São Paulo",
    temperatura: 24,
    umidade: 70,
    vento: 13,
}

console.log(`Temperatura: ${clima.temperatura.toFixed(2)} C°`)

// Retornando apenas AS CHAVES do objeto trabalhado acima
console.log(Object.keys(clima));

// Retornando apenas os VALORES do objeto
console.log(Object.values(clima));

// Retornando pares de chave e valor
console.log(Object.entries(clima))

// Iterando sobre um objeto
// Acessando chaves
for (const key in produto) {
    console.log(key)
}

// Acessando valores
for (const banana in produto) {
    const element = produto[banana];

    console.log(element);
}