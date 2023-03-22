/*
Exercício: Criar um codificador e decodificador Caesar Cipher

Neste exercício, tens de criar uma função de codificação e decodificação Caesar Cipher. 
Uma Cifra de César é uma cifra de substituição simples que muda as letras do alfabeto por um número fixo de posições. 

Por exemplo, com um deslocamento de 3, A se tornaria D, B se tornaria E e assim por diante. Ca for atingido o Z com uma mudança de 1 se tornaria A.

Instruções:
Crie uma função chamada caesarCipher que aceite dois argumentos: uma string chamada input e um inteiro chamado shift.
Dentro da função, crie uma string vazia chamada result.
Iterar sobre cada caractere na string de entrada.
Se o caractere for uma letra maiúscula, aplique a Cifra de César com o deslocamento fornecido e anexe o caractere resultante à string de resultado.
Se o caractere for uma letra minúscula, aplique a Cifra de César com o deslocamento fornecido e anexe o caractere resultante à string de resultado.
Se o caractere não for uma letra, anexe-o à string de resultado inalterada.
Retorne a string de resultado.

Crie uma função chamada caesarCipherDecode que aceite os mesmos argumentos que caesarCipher, mas decodifique o texto Caesar Cipher fornecido.

Teste suas funções com algumas strings de amostra para garantir que funcionem conforme o esperado.

*/

function caesarCipher(input, shift) {
    // Passo 2: Crie uma string vazia chamada result
    
     // Passo 3: iterar sobre cada caractere na string de entrada (input)
    
     // Passos 4-6: Aplique a Cifra de César e anexe o caractere resultante à string de resultado
    
     // Passo 7: Retorne a string de resultado
  }
  
  function caesarCipherDecode(input, shift) {
  // Semelhante a caesarCipher, mas decodificando em vez de codificar
  }
  
  // Testa as tuas funções
  let encoded = caesarCipher("Hello, World!", 3);
  console.log(encoded); // Expected output: "Khoor, Zruog!"
  console.log(caesarCipherDecode(encoded, 3)); // Expected output: "Hello, World!"
  