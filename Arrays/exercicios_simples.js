 
// Exercicios

// Exercício 1: Inicializar um Array
// Crie um array com um tamanho 5 e inicialize-o com valores inteiros.

const intNumbers = [1, 209, 3, 4, 10]

// Exercício 2: Soma de Array
// Crie uma função que receba um array de numeros como parametro e calcule a soma de todos os elementos do Array.

// function soma (arr) {
//     let somar = 0
//     for ( let i = 0; i < arr.length; i++){
//         somar += arr[i]
//     }
//     return somar;
    
// }

// console.log(soma(intNumbers));




// Exercício 3: Media de um Array
// Crie uma função que receba um array de numeros como parametro e calcule a média de todos os elementos de um array.

// function media ( arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++ ){
//         sum += arr[i];     
//     }
//     return sum / arr.length;
// }

// console.log(media(intNumbers))

// Exercício 4: Encontra o Valor Máximo
// Crie uma função que receba um array de numeros como parametro e encontre o valor máximo dentro do array.

// function maior (arr) {
//     const maxNum = Math.max(...arr)

//     return maxNum;  
// }

// console.log(maior(intNumbers))

// Exercício 5: Encontra o valor mínimo
// Crie uma função que receba um array de numeros como parametro e encontre o valor mínimo de um array.

// function menor ( arr) {
//     const menorNum = Math.min(...arr)

//     return menorNum;
// }

// console.log(menor(intNumbers))

// Exercício 6: Inverter um Array
// Crie uma função que receba um array como parametro e Inverta os elementos do  Array.

function reversoArr (arr){
    let reverso = arr.reverse()
    return reverso
}

console.log(reversoArr(intNumbers))

// Exercício 7: Números Pares
// Crie uma função que receba um array de numeros como parametro e conte o número de números pares de um array.

// Exercício 8: Remover Duplicados
// Crie uma função que receba um array e remova todos os elementos duplicados e retorne o array sem os duplicados.

// Exercício 9: Concatenar arrays
// Crie uma função que receba dois arrays como parametro e retorne a concatenação dos 2 arrays.

// Exercício 10: Rotação do Array
// Crie uma função que receba um array e rode o array para a esquerda em 2 posições.
