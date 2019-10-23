// Usando este codigo, o compilador atraves do hoisting faz o içamento da variavel a
console.log('a = ', a)

var a = 2
console.log('a = ', a)

// Desta forma:

var a 
console.log('a = ', a)

a = 2
console.log('a = ', a)

// O içamento também acontece dentro de uma função

function teste() {
    console.log('a = ', a)
    var a = 2

    console.log('a = ', a)
}

teste()

console.log('b = ', b)

let b = 2

console.log('b = ', b)