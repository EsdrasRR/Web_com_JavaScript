const valores = [5.2, 4.2, 3, 2, 6]

console.log(valores[0], valores[3])
console.log(valores[4])

valores[10] = 10

console.log(valores)
console.log(valores.length)

valores.push('Teste', { id: 3 }, false, null)
console.log(valores)

console.log(valores.pop())

console.log(typeof valores)