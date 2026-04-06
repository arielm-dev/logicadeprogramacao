const prompt = require('prompt-sync')();

// Vetor para armazenar os números
let numeros = [];
let soma = 0;

// Loop para pedir 5 números
for (let i = 0; i < 5; i++) {
    // Pede o número e converte para Number
    let num = Number(prompt(`Digite o ${i + 1}º número: `));
    
    // Soma os valores
    soma += num;
}

// Mostra a soma total
console.log("Soma total:", soma);