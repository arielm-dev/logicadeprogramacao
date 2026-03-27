let valorBoleto = 100;
let diasAtraso = 5;
let valorFinal;

if (diasAtraso == 0) {
    valorFinal = valorBoleto;
} else {
   
    let multa = valorBoleto * 0.02;

    let juros = valorBoleto * 0.001 * diasAtraso;
   
    valorFinal = valorBoleto + multa + juros;
}
console.log("BOLETO");
console.log("Valor original: R$ " + valorBoleto);
console.log("Dias de atraso: " + diasAtraso);
console.log("Valor final: R$ " + valorFinal);