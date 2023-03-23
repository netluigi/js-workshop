/* 
 Exercício: encontre o maior prefixo comum de um conjunto de strings

 Problema:
 Escreva uma função findLongestCommonPrefix(strArray) que receba um array de strings strArray como input e retorne o maior prefixo comum das strings na matriz. Se não houver um prefixo comum, retorne uma string vazia.

 Exemplo:
*/

let input = ["flor", "flow", "flight", "floa"];
let output = findLongestCommonPrefix(input);
console.log(output); // "fl"

input = ["dog", "racecar", "car"];
output = findLongestCommonPrefix(input);
console.log(output); // ""

/* Explicação:
 No primeiro exemplo, o prefixo comum mais longo das strings de entrada é "fl". No segundo exemplo, não há prefixo comum, então a função retorna uma string vazia.
 */

// Dicas:

// Começa por encontrar a string mais curta no array. Esta será o comprimento máximo do prefixo comum.
// Percorre os caracteres da string mais curta e os compara com os caracteres correspondentes nas outras strings.
// Se houver incompatibilidade, retorna o prefixo comum encontrado até o momento. Se o loop for concluído sem nenhuma incompatibilidade, retorna a string mais curta inteira.


