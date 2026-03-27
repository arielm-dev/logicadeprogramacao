let saldo = 100;
let valorCompra = 150;
let temLimite = true;
let limite = 50;
let aprovado;
let saldoFinal;
let mensagem;


if (saldo >= valorCompra) {
    aprovado = true;
    saldoFinal = saldo - valorCompra;
    mensagem = "Aprovado";
} else {
    if (temLimite == true && (saldo + limite) >= valorCompra) {
        aprovado = true;
        saldoFinal = saldo - valorCompra;
        mensagem = "Aprovado usando limite";
    } else {
        aprovado = false;
        saldoFinal = saldo;
        mensagem = "Negado";
    }
}
console.log("=== TRANSAÇÃO ===");
console.log("Saldo: R$ " + saldo);
console.log("Valor da compra: R$ " + valorCompra);
console.log("Tem limite: " + temLimite);
console.log("Limite disponível: R$ " + limite);
console.log("Resultado: " + mensagem);


if (aprovado == true) {
    console.log("Saldo final: R$ " + saldoFinal);
}