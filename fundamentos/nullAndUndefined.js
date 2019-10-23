
const a = { nome: 'Teste'}
// B recebe o endereço para onde o valor de A aponta
const b = a

// Alterando B, A tbm é alterado, pois houve uma atribuição pode endereço, atribuição de referencia
b.nome = 'Hahaha'

console.log(a)

let c = 3
// D recebe o valor de C, como é um valor do tipo primitivo
let d = c

d++

console.log(c, d)

let valor // não inicializada

console.log(valor) //undefined

valor = null // usado para zerar valor e local de referencia na memória

console.log(valor) // não tem valor nem aponta para nenhum local na memória

const produto = { }

console.log(produto.preco)
console.log(produto)

produto.preco = 50.3

console.log(produto)

produto.preco = undefined

console.log(!!produto.preco)
console.log(produto)

produto.preco = null  // sem preco

 