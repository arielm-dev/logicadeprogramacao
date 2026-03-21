let tipoCliente = "PF";
let faturamento = 5000;
let valorPlano;
let categoria;


if (tipoCliente == "PF") {
    valorPlano = 29.90;
    categoria = "Pessoa Física - Plano Fixo";
} else {
    if (tipoCliente == "PJ") {


        if (faturamento < 10000) {
            valorPlano = 99;
            categoria = "Pessoa Jurídica - Pequena Empresa";
        } else {
            if (faturamento <= 50000) {
                valorPlano = 199;
                categoria = "Pessoa Jurídica - Média Empresa";
            } else {
                valorPlano = 399;
                categoria = "Pessoa Jurídica - Grande Empresa";
            }
        }
    } else {
        valorPlano = 0;
        categoria = "Tipo de cliente inválido";
    }
}


console.log("=== PLANO DO CLIENTE ===");
console.log("Tipo: " + tipoCliente);
console.log("Faturamento: R$ " + faturamento);
console.log("Categoria: " + categoria);
console.log("Valor do plano: R$ " + valorPlano);