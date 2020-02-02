// Função em JS é First-Class Object (Citizens)
// Higher-order function 

// Function de forma literal
function fun1() { }

// Armazenar function em uma variável
const fun2 = function () { }

// Armazenar function em um array 
const array = [function (a, b, ) { return a + b }, fun1, fun2]
console.log(array[0](1, 2))

// Armazenar function em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Olá!' }
console.log(obj.falar())

// Passar função como param
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })

// Uma função poed retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 4)(4)

const somaAeB = soma(2, 4)
const somaAeBeC = somaAeB(4)

// Função como atributo de um objeto

const pessoa = {

    tossir: function () { return console.log('Cof Cof') },
    gritar: function () { return console.log('AHHHHHHHHH!!') },
    assuviar: 'Fiu Fiu'
}

for (let i in pessoa) {
    console.log(`${i} = ${pessoa[i]}`)
}

console.log('Esdras diz: Fiu Fiu, que gatinha :3')