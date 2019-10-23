
// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a+b)
}

imprimirSoma(3, 5)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 3, 51, 2)
imprimirSoma()

// Função com retorno
function soma(a, b=2) {
    return a + b
}

console.log(soma(2, 4))
console.log(soma(2))