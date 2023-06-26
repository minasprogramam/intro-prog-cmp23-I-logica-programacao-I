// Receber dois números do usuário
const numero1 = 23;
const numero2 = Number(prompt("Digite o segundo número:"));

// Verificar qual é o menor número
if (numero1 < numero2) {
  console.log(`O menor número é: ${numero1}`);
} else if (numero2 < numero1) {
  console.log(`O menor número é: ${numero2}`);
} else {
  console.log("Os números são iguais");
}
