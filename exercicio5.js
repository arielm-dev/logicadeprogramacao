let consumoKwh = 150;
let precoPorKwh;
let valorTotal;


if (consumoKwh <= 100) {
    precoPorKwh = 0.60;
} else {
    if (consumoKwh <= 200) {
        precoPorKwh = 0.75;
    } else {
        precoPorKwh = 0.90;
    }
}


valorTotal = consumoKwh * precoPorKwh;


console.log("CONTA DE ENERGIA");
console.log("Consumo: " + consumoKwh + " kWh");
console.log("Preço por kWh: R$ " + precoPorKwh);
console.log("Valor total: R$ " + valorTotal);