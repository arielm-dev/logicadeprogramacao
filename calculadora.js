let num1= 100
let num2= 100
let operacao = "/"

console.log(num1)
console.log(num2)
console.log( "operação:" + operacao)

if (operacao == "+") {
console.log("Resultado:" + num1 + "+" + num2 + "=" + (num1 + num2))
}

else if (operacao == "-") {
console.log("Resultado:" + num1 + "-" + num2 + "=" + (num1 - num2))
}

else if (operacao == "*") {
let resultado = num1 * num2
console.log("Resultado:" + num1 + "*" + num2 + "=" + resultado)

 if (num1 >= 100 && num2 >= 100){
 console.log("ERRO: Número maior que 100!")
  }
}

else if (operacao == "/") {
 if(num2 == 0) {
    console.log("ERRO: é impossível dividir por zero!")
 } else {
    console.log("Resultado:" + num1 + "/" + num2 + "=" + (num1 / num2))
 }
}

else {
    console.log("ERRO: Operação inválida! Use +, -, * ou /")
}