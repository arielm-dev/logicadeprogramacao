let valorCompra = 550;
let desconto = 0;
let valorFinal = 0;


if (valorCompra < 100) {
  desconto = 0;
} else if (valorCompra >= 100 && valorCompra < 300) {
  desconto = valorCompra * 0.05;
} else if (valorCompra >= 300 && valorCompra < 500) {
  desconto = valorCompra * 0.10;
} else {
  desconto = valorCompra * 0.15;
}
valorFinal = valorCompra - desconto;
console.log("Valor da compra: R$ " + valorCompra);
console.log("Desconto: R$ " + desconto);
console.log("Valor final: R$ " + valorFinal);