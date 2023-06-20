// - Livro
// - Autor
// - Quantidade de páginas
// - Preço
// - Já leu?

//declarei a variavel livro e atribui o valor "O Conto da Aia" (tipo de dado string)
const livro = "O vendedor de sonhos"
//declarei a variavel autor e atribui o valor "Margaret Atwood" (tipo de dado string)
const autor = "Augusto Cury"
//declarei a variavel quantidadeDePaginas e atribui o valor tipo int 368 (tipo de dado inteiro)
const quantidadeDePaginas = 368
//declarei a variavel preco e atribui o valor 39.90 (tipo de dado float)
let preco = 39.90
//declarei a variavel jaLeu e atribui o valor false (tipo de dado booleano)
const jaLeu = true

//imprimi as variaveis no console
console.log("O nome do livro é:", livro, "o autor é:", autor, "e possui", quantidadeDePaginas, "páginas.")

//imprimi as variaveis no console utilizando template string
console.log(`O nome do livro é: ${livro}, o autor é ${autor} e possui ${quantidadeDePaginas} páginas.`)
