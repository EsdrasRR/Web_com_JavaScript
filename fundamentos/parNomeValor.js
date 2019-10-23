//par nome/valor

const saudacao = 'Olá' // contexto léxico 1

function exec() {
    const saudacao = 'Oi' // contexto léxico 2
    return saudacao    
}

// Objetos são grupos aninhados de pares nomes/valor
const cliente = {
    nome: 'Esdras',
    idade: 19,
    peso: 70,
    endereco: {
        rua: 'Rua de Pedra',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)