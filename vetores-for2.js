let vendas = [6, 14, 22, 26, 67, 114, 169];
let total = 0;
let acima100 = 0;
let maiorVenda = 0;
for (i = 0; i < vendas.length;i++) {
    total += vendas[i]; 
    if (vendas[i] > 100){
    acima100++;
    }
    
    if (vendas[1] > maiorVenda){
    maiorVenda = vendas[i]
    }
}
let media = (total / vendas.length)
console.log("Valor Total de vendas foi = R$" + total);
console.log("Média diária foi = R$" + media.toFixed(2));
console.log("Dias com vendas acima de 100" , acima100);
console.log("Dia com a maior venda" , maiorVenda);
