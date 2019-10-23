// Armazenar função em uma variavel

const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(03, 09)

// Armazenando uma função arrow em um variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(4, 6))

// Retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(5, 3))

const imprimir2 = a => console.log(a)
imprimir2("Arrow Function")