let temperatura = [67, 71, 77, 85, 88, 94];
let total = 0;

for (let i = 0; i < temperatura.length; i++) {
    total += temperatura[i];
    
    if (temperatura[i] >= 80) {
        console.log("temperatura maior que 80", temperatura[i]);
    }
    if (temperatura[i] >= 90) {
        console.log("ALERTA CRÍTICO TEMPERATURA ELEVADA", temperatura[i]);
    }
}

let media = total / temperatura.length;
console.log("Temperatura total somada =", total);
console.log("Média das temperaturas = " + media + "°C");