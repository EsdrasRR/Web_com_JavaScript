
const pessoa = {
    nome: 'Esdras',
    idade: 19,
    endereco: {
        logradouro: 'Rua ruazuda',
        numero: 1000
    }
}

console.log(pessoa)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, paciente = true } = pessoa
console.log(sobrenome, paciente)

const { endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)