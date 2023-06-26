// Recebe os dois números
let primeiroNumero = 2;
let segundoNumero =3;

// Verifica qual é o menor número utilizando if/else
if (primeiroNumero < segundoNumero) {
  console.log(`O número ${primeiroNumero} é menor do que o número ${segundoNumero}.`);
} else if (primeiroNumero > segundoNumero) {
  console.log(`O número ${segundoNumero} é menor do que o número ${primeiroNumero}.`);
} else {
  console.log(`Os números ${primeiroNumero} e ${segundoNumero} são iguais.`);
}

// Verifica qual é o menor número utilizando operadores relacionais
let primeiroNumeroMenor = primeiroNumero < segundoNumero;
let segundoNumeroMenor = primeiroNumero > segundoNumero;
let numerosIguais = primeiroNumero === segundoNumero;
