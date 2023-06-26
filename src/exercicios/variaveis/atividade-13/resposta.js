let numero = 7;

// Verifica se o número é igual a 2 (único número primo par) 
let ehPrimo = (numero === 2); 
// Verifica se o número é dois OU se é diferente de 2 E não é divisível por nenhum número ímpar menor que ele 
ehPrimo = ehPrimo || (numero !== 2 && (numero % 2) == 1);
// imprime o resultado
console.log(`O número ${numero} é primo? ${ehPrimo}`);