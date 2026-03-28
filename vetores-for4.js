let produtos = [0, 3, 4, 6, 7, 9, 14, 26];
let sem_estoque = 0;
let estoque_baixo = 0;

for (let i = 0; i < produtos.length; i++) {
    if (produtos[i] == 0) { 
        sem_estoque++;
    } else if (produtos[i] < 5) { 
        estoque_baixo++;
    }
}

console.log("Produtos com estoque baixo =", estoque_baixo);
console.log("Produtos sem estoque =", sem_estoque);
console.log("Reposições necessárias =", sem_estoque + estoque_baixo);