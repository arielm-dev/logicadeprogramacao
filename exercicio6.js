let senha = "sixANDseven67";
let resultado;

if (senha.length < 8) {
    resultado = "Senha inválida - a senha deve ter no mínimo 8 caracteres";
} else {
   
    if (senha.indexOf("123") != -1) {
        resultado = "Senha inválida - a senha não pode conter a sequência '123'";
    } else {
        resultado = "Senha válida";
    }
}
console.log("Senha digitada: " + senha);
console.log("Resultado: " + resultado);