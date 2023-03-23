/*
Exercício: Encontre o elemento mais frequente em um array

Problema:
Escreva uma função findMostFrequentElement(arr) que recebe um array arr como entrada e retorna o elemento mais frequente no array. Se houver empate, retorna o elemento que aparecer primeiro no array.

Exemplo:
*/
let input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let output = findMostFrequentElement(input);
console.log(output); // 5

input = ["apple", "banana", "apple", "orange", "banana", "apple"];
output = findMostFrequentElement(input);
console.log(output); // "apple"

/*
Explicação:
No primeiro exemplo, o elemento mais frequente no array de entrada é 5, que ocorre três vezes. No segundo exemplo, "maçã" é o elemento mais frequente, porque ocorrendo três vezes.

Dicas:

Use um objeto JavaScript (ou Map) para armazenar a contagem de frequência de cada elemento na matriz.
Percorra a matriz, atualizando a contagem de frequência de cada elemento.
Acompanhe o elemento mais frequente e sua frequência à medida que itera pelo array.
*/
