const prompt = require('prompt-sync')();

// Cria um array vazio para guardar os nomes
let nomes = [];

// Loop que vai repetir 5 vezes
for (let i = 0; i < 5; i++) {
    // Pede para o usuário digitar um nome
    let nome = prompt(`Digite o ${i + 1}º nome: `);
    
    // Adiciona o nome digitado no vetor
    nomes.push(nome); 
}

// Mostra um título no console
console.log("Nomes cadastrados:");

// Percorre o vetor e mostra cada nome
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// Mostra o vetor completo
console.log(nomes);