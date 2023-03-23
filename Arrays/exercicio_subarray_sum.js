/* 
Exercício: Encontre o Subarray com Soma máxima possivel (Algoritmo de Kadane)

Kadane's Algorithm
https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d

Problema:
Escreva uma função findMaxSubarray(arr) que receba um array arr de numeros inteiros como input e retorne um subarray com a soma máxima. Se houver vários subarrays com a mesma soma máxima, retorne aquele que tenha o índice mais baixo.

Exemplo:
*/

let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let output = findMaxSubarray(input);
console.log(output); // [4, -1, 2, 1]

input = [1, 2, -1, 2, -3, 2, 2, -1, 4];
output = findMaxSubarray(input);
console.log(output); // [2, -1, 2, -3, 2, 2, -1, 4]

/* 
Explicação:
No primeiro exemplo, o subarray com a soma máxima é [4, -1, 2, 1] com uma soma de 6. 
No segundo exemplo, o subarray com a soma máxima é [2, -1, 2, -3 , 2, 2, -1, 4] com uma soma de 7.

Dicas:
Use o algoritmo de Kadane para encontrar a soma máxima do subarray.
Acompanhe os índices inicial e final do subarray máximo conforme você itera pelo array de entrada.
*/