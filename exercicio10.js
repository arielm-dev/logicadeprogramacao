let distanciaKm = 10;
let orcamento = 30;
let sugestao;
if (distanciaKm <= 2) {
    sugestao = "A pé";
} else {
    if (distanciaKm <= 8 && orcamento >= 10) {
        sugestao = "Ônibus";
    } else {
        if (distanciaKm <= 15 && orcamento >= 25) {
            sugestao = "Moto/Carro por app";
        } else {
            sugestao = "Não é possível com esse orçamento";
        }
    }
}
console.log("=== SUGESTÃO DE TRANSPORTE ===");
console.log("Distância: " + distanciaKm + " km");
console.log("Orçamento: R$ " + orcamento);
console.log("Sugestão: " + sugestao);