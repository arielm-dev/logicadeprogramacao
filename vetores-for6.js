let consumoKwh = [47, 49, 50, 55, 58];
let total = 0;
let consumo_alto = 0;
let consumo_critico = 0;

for (let i = 0; i < consumoKwh.length; i++) {
    total += consumoKwh[i];
    
    if (consumoKwh[i] > 58) {
        consumo_critico++;
        console.log("Consumo CRITICO:", consumoKwh[i], "kWh");
    } else if (consumoKwh[i] > 50) {
        consumo_alto++;
        console.log("Consumo ALTO:", consumoKwh[i], "kWh");
    }
}

let media = total / consumoKwh.length;

console.log("Total de consumo somado =", total, "kWh");
console.log("Media do consumo de energia =", media.toFixed(2), "kWh");
console.log("Consumos acima de 50 kWh:", consumo_alto);
console.log("Consumos CRITICOS acima de 58 kWh:", consumo_critico);