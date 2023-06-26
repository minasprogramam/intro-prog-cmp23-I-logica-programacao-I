




const precoTenis = 129.99;
const dinheiroDisponivel = 80;
const quantidadeTenis = 1;

const valorTotal = precoTenis * quantidadeTenis;
const porcentagemDesconto = (((valorTotal - dinheiroDisponivel) * 100) / valorTotal).toFixed(2);

console.log(`Para comprar o tênis, vc precisa de um desconto de ${porcentagemDesconto}`);
