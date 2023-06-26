// Solicitar ao usuário o valor gasto em cada categoria
const alimentacao = 1300;
const transporte = 25.5;
const moradia = 2000;
const entretenimento = 400;

// Calcular o total de despesas
const totalDespesas = alimentacao + transporte + moradia + entretenimento;

// Exibir o total de despesas mensais
console.log(`O total de despesas mensais é de R$ ${totalDespesas.toFixed(2)}`);
