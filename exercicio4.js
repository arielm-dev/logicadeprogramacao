let bairro = "pau miudo";  
let valorPedido = 80;  
let valorFrete;
let valorTotal;

if (bairro == "centro") {
    valorFrete = 5;
} else if (bairro == "brotas") {
    valorFrete = 8;
} else if (bairro == "itapuã") {
    valorFrete = 12;
} else {
    valorFrete = 15;
}


if (valorPedido >= 80) {
    valorFrete = 0;
    valorTotal = valorPedido;
} else {
    valorTotal = valorPedido + valorFrete;
}

console.log("BAIRRO: " + bairro);
console.log("VALOR DO PEDIDO: R$ " + valorPedido);
console.log("VALOR DO FRETE: R$ " + valorFrete);
console.log("VALOR TOTAL: R$ " + valorTotal);