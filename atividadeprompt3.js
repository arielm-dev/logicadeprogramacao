const prompt = require('prompt-sync')();
//repetição que vai executar 3 vezes (para três alunos)
for (let i = 1; i <= 3; i++) {
    //solicitar o nome do aluno e armazena na variável "nome"
    let nome = prompt("Digite o nome do aluno:");
    
    //solicitar a nota do aluno, converte para número e armazena na variável "nota"
    let nota = Number(prompt("Digite a nota do aluno:"));
    //verifica se a nota é maior ou igual a 7
    if (nota >= 7) {
        //se for, exibe que o aluno está aprovado
        console.log(nome + " - Aprovado");
    } else {
        //caso contrário, exibe que o aluno está reprovado
        console.log(nome + " - Reprovado");
    }
}