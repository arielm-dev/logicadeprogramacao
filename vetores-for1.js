let numeros = [10,20,30,40,50];
soma = 0;

for (i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
     soma += numeros[i]; 
}

console.log('Somando todos os números = ' + soma);