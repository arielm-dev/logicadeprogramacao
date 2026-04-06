// Importa o módulo para entrada de dados no terminal
const prompt = require('prompt-sync')();

// Vetores para armazenar nomes e idades
let nomes = [];
let idades = [];

// Variável de controle do menu
let opcao = 0;

// Loop principal: roda até o usuário escolher sair (opção 3)
while (opcao != 3) {
    console.log("=== Menu ===");
    console.log("1 - Cadastrar");
    console.log("2 - Listar");
    console.log("3 - Sair");
    // Lê a opção do usuário e converte para número
    opcao = Number(prompt("Escolha uma opção: "));
    // Opção 1: Cadastrar pessoa
    if (opcao === 1){
        console.log("---- CADASTRAR ----");
        // Recebe nome e idade
        let nome = prompt("Digite o nome: ");
        let idade = Number(prompt("Digite a idade: "));
        // Armazena nos vetores
        nomes.push(nome);
        idades.push(idade);
        console.log("Cadastro realizado!");
    }
    // Opção 2: Listar pessoas cadastradas
    else if (opcao === 2){
        console.log("---- LISTAR ----");
        // Verifica se há cadastros
        if (nomes.length === 0){
            console.log("Nenhum cadastro.");
        } else {
            // Percorre os vetores e exibe os dados
            for (let i = 0; i < nomes.length; i++){
                console.log((i + 1) + " - " + nomes[i] + ", " + idades[i] + " anos");
            }
        }
    }
    // Opção 3: Sair do programa
    else if (opcao === 3) {
        console.log("Saindo...");
    }
    // Caso o usuário digite uma opção inválida
    else {
        console.log("Opção inválida!");
    }
}
// Mensagem final após sair do loop
console.log("=== PROGRAMA ENCERRADO ===");