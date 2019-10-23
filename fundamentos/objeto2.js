console.log(typeof Object)

console.log(typeof new Object)

const Cliente = function () { }

console.log(typeof Cliente)
console.log(typeof new Cliente)

// Ao definir uma classe ela será uma função
class Produto { }
console.log(typeof Produto)
// Ao instanciar esta classe, ela se trasnforma em um objeto
console.log(typeof new Produto())