const prompt = require('prompt-sync')();
let pedidos = [];
let opcao = 0;

while (opcao !=5) {
    console.log("---- Sistema de Engenharia de Dados ----");
    console.log("1 - Cadastrar Pedidos");
    console.log("2 - Listar Pedidos");
    console.log("3 - Gerar Relatorio Parcial");
    console.log("4 - Console de Listagem Operacional");
    console.log("5 - Sair e Gerar Relatorio Final");

    opcao = Number(prompt("Escolha uma opcao: "));
}
if (opcao === 1){
    console.log("---- CADASTRAR PEDIDO ----");

    let codigo = prompt(("Código do Pedido ex:(PED001): "));
    let produto = prompt(("Nome do produto: "));
    let quantidade = Number(prompt("Quantidade: "));
    let setor = prompt("Setor (Montagem/Solda/Pintura): ");
    let prazo = Number(prompt("Prazo em dias: "));
    let prioridade;
    if (prazo <= 2){
        prioridade = "Urgente";
    } else if (prazo <= 5){
        prioridade = "Alta"
    } else if (prazo <= 9){
        prioridade = "Média"
    } else (prazo >= 10)
        prioridade = "Baixa"
    pedidos.push({
        codigo: codigo,
        produto: produto,
        quantidade: quantidade,
        setor: setor,
        prazo: prazo,
        prioridade: prioridade,
    });
    console.log("Pedido " + codigo + " cadastrado com sucesso! Prioridade: " + prioridade);
}

else if (opcao === 2){
    console.log("---- LISTAR PEDIDOS ----")

    if(pedidos.length === 0){
        console.log("Nenhum pedido cadastrado.");
    } else {
        for (let i = 0; i < pedidos.length; i++){
        let p = pedidos[i];
        console.log((i) = ". " + p.codigo + " | " + p.produto + " | Qtde: " + p.quantidade + " | " + p.setor + " | Prazo: " + p.prazo + " dias | " + p.prioridade);
        }
    }
}
else if (opcao === 3){
    console.log("---- RELATORIO PARCIAL ----")
    if (pedidos.length === 0){
        console.log("Nenhum pedido cadastrado. ");
    } else {
        let totalItens = 0;
        let urgentes = 0;
        let altas = 0;
        let medias = 0;
        let baixas = 0;
        for (let i = 0; i < pedidos.length; i++){
            totalItens = totalItens + pedidos[i].quantidade;
        
            if (pedidos[i].prioridade === "Urgente"){
                urgentes++;
            } else if (pedidos[i].prioridade === "Alta"){
                altas++;
            } else if (pedidos[i].prioridade === "Média"){
                medias++;
            } else if (pedidos[i].prioridade === "Baixa"){
                baixas++;
            }
        }
        console.log("Pedidos: " + pedidos.length + " | Total Itens: " + totalItens);
        console.log("Urgentes: " + urgentes + " | Altas: " + altas + " | Médias: " + medias + " | Baixas: ")
    }
}
