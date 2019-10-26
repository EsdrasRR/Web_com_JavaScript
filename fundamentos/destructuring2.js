const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 20, 12, 31, 30]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [10, [31, 40]]
console.log(nota)