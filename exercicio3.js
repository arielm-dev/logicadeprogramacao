let idade = 17;
let temAutorizacao = true;
let resultado;


if (idade >= 18) {
    resultado = "acesso liberado";
} else {
    if (idade >= 16 && temAutorizacao == true) {
        resultado = "acesso liberado";
    } else {
        resultado = "acesso negado";
    }
}


console.log("Idade: " + idade);
console.log("Tem autorização: " + temAutorizacao);
console.log("Resultado: " + resultado);