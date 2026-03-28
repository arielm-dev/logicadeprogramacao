let notas = [5, 6, 7, 8, 8, 9, 10];
let aprovados = 0;
let reprovados = 0;
let maior_nota = 0;
let total = 0;

for (let i = 0; i < notas.length; i++) {
    total += notas[i];
    
    if (notas[i] > maior_nota) {
        maior_nota = notas[i];
    }
    
    if (notas[i] >= 7) {
        console.log("Aprovado - Nota:", notas[i]);
        aprovados++;
    } else {
        console.log("Reprovado - Nota:", notas[i]);
        reprovados++;
    }
}

let media = total / notas.length;

console.log("Média total dos alunos =", media.toFixed(2));
console.log("Total de aprovados =", aprovados);
console.log("Total de reprovados =", reprovados);