let nota1 = 5
let nota2 = 5
let notaRec = 5
let media = (nota1 + nota2) / 2
let resultado = ""


if (media >= 7) {
    resultado = 'aprovado'
} else if (media < 4) {
    resultado = 'reprovado'
} else {
    if (notaRec >= 6) {
        resultado = 'aprovado na recuperação'
    } else {
        resultado = 'reprovado após recuperação'
    }
}


console.log("Nota 1:", nota1)
console.log("Nota 2:", nota2)
console.log("Média:", media)
console.log("Nota de recuperação:", notaRec)
console.log("Resultado:", resultado)