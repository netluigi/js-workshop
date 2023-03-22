/*
Exercício: Crie uma função para converter uma string para Pig Latin (acrescentar yay no fim de casa palavra)

Neste exercício, você criará uma função que usa uma string como entrada e a converta em "Pig Latin". 

Pig Latin é um jogo de linguagem onde a primeira consoante ou encontro consonantal é movido para o final da palavra e seguido por "ay". Se a palavra começar com uma vogal, basta adicionar "yay" ao final da palavra.

Instruções:

Crie uma função chamada pigLatin que aceite um único argumento, uma string chamada input.
Verifique se o primeiro caractere da string de entrada é uma vogal. Se for, acrescente "yay" ao final da palavra e retorne o resultado.
Se o primeiro caractere for uma consoante, encontre o índice da primeira vogal na string de entrada.
Mover a substring do início da palavra até a primeira vogal até o final da palavra.
Acrescente "ay" ao final da palavra modificada.
Retorna a versão Pig Latin da palavra de entrada.

*/

function pigLatin(input) {
     // Passo 2: Verifique se o primeiro caractere da string de entrada é uma vogal
    
     // Passo 3: Encontre o índice da primeira vogal na string de entrada
    
     // Passo 4: Mova a substring do início da palavra até a primeira vogal até o final da palavra
    
     // Etapa 5: Acrescente "ay" ao final da palavra modificada
    
     // Passo 6: Retorne a versão Pig Latin da palavra de entrada
  }
  
  // Test your function with some sample words
  console.log(pigLatin("apple")); // Expected output: "appleyay"
  console.log(pigLatin("banana")); // Expected output: "ananabay"
  console.log(pigLatin("cherry")); // Expected output: "errychay"
  