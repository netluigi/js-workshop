const globalWord = "o papa é pop";
// Exercício 1: Contando o número de palavras de frase

// Exercício 1
// function wordCount(sentence) {
//   const word = sentence.split(" ");
//   const subString = palavra.length;
//   return subString;
// }

// console.log(wordCount(globalWord));

// Crie uma função chamada wordCount que receba um parametro do tipo string e retorne o número de palavras dessa string.

// Exercício 2: Coloque em maiúscula a primeira letra de cada palavra

// Crie uma função chamada capitalizeWords que receba uma string como parametro e retorne uma string com a primeira letra de cada palavra em maiúscula.

// Exercício 2
// function capitalizeWords(sentence) {
//   const word = sentence.split(" "); // vai criar um array com todas as palavras da frase.
//   const arrayCapitalize= word.map((element)=>{ // O element são os valores do array, ele vai passar por todo o array, palavra por palavra.
//     return   element[0].toUpperCase() + element.slice(1)
//   })
//   return arrayCapitalize.join(" ")
// }
// console.log(capitalizeWords(globalWord));

// Exercício 3: Encontrar a palavra mais comprida de uma frase

// Crie uma função chamada longWord que receba uma string como parametro e retorne a palavra com o maior numero de caracteres dessa frase.

// function longestWord(sentence) {
//   const words = sentence.split(' ')
//   let longest = '';
//   words.map((word) => {
//     if ( word.length > longest.length){
//       longest = word
//     }
//   })
//   return longest
// }

// console.log(longestWord('Meu segredo é secreto'))

// Exercício 4: Substituir uma palavra específica em uma frase

// Crie uma função chamada replaceWord que aceite três argumentos: uma frase (string), a palavra a ser substituída (string) e a palavra para substituí-la (string). A função deve retornar a frase modificada.
// function replaceWord(phrase, wordA, wordB) {
//   return phrase.replace(wordA, wordB);
// }
// console.log(replaceWord("O papa é pop", "papa", "cachorro"));

// Exercício 5: Verifique se uma string é um palíndromo (https://pt.wikipedia.org/wiki/Pal%C3%ADndromo)

// Crie uma função chamada isPalindrome que receba uma string como um parametro e retorne true se a string for um palíndromo (o mesmo para frente e para trás) e false caso contrário.

// Exercício 5
// function isPalindrome(sentence) {
//   let word = sentence.split("").reverse().join("");
//   if (sentence === word) {
//     return word;
//   } else {
//     console.error("Não é uma Palíndromo");
//   }
// }

// console.log(isPalindrome("bau"));
