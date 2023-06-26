const precoOriginal = 100; // Preço original do produto
const porcentagemDesconto = 20; // Porcentagem de desconto

// Calcula o valor do desconto
const valorDesconto = (precoOriginal * porcentagemDesconto) / 100;

// Calcula o preço final com desconto
const precoFinal = precoOriginal - valorDesconto;

// Exibe o preço final com desconto
console.log(`Preço original: R$ ${precoOriginal}`);
console.log(`Desconto: R$ ${valorDesconto}`);
console.log(`Preço final com desconto: R$ ${precoFinal}`);
