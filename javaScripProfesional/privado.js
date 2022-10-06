// MULTIPLES FUNCIONES EN UNA SOLA (la variable conserva el valor)
const gestor = () => {
    let valorTotal = 0;
    return {
        incremrent: (data) => {
            return valorTotal += data
        },
        decrement: (data) => {
            return valorTotal -= data
        },
        getValor: () => {
            return valorTotal
        },
        reset: () => {
            return valorTotal = 0
        }
    }
}
const operator = gestor();
console.log(operator.incremrent(80))
console.log(operator.decrement(20))
console.log(operator.getValor())
console.log(operator.reset())


// COMO SI FUERA EN CLASE
function Person(name) {
    this.name = name;
}
Person.prototype.saludar = () => {
    console.log('HOLA ' + this.name)
}
const Nico = new Person('Nicolas');
Nico.saludar()


// INSTANCIAS DEL THIS CON CALL BIND APPLY
const atleta = { name: 'nicolas', age: '24', nivel: '8' }
function Correr(nivel, status) {
    console.log(`${this.name} corre en un nivel ${nivel} y tiene un estado ${status}`)
}
Correr.call(atleta, 10, 'Excelente')
Correr.apply(atleta, [5, 'Cansado'])
const nicoCorrer = Correr.bind(atleta, 8)
nicoCorrer('Normal')

//  FOREACH CON NODE LIST (dom)
const buttons = document.querySelectorAll('button')
Array.prototype.forEach.call(buttons, button =>
    button.onmouseenter = () => console.log('mouse event')
)

// PROXY (Intermediario de objeto)
const target = {
    red: 'rojo',
    blue: 'azul'
}
const handler = {
    get: (target, prop) => {
        return (prop in target)
            ? 'correcto'
            : 'no existe'
    }
}
const pro = new Proxy(target, handler)
console.log('PROXY', pro.red)
console.log('PROXY', pro.green)
console.log('PROXYMON', 'blue' in target ? true : false)

// GENERATOR SUPREME
function* generator() {
    let a = 1;
    let b = 1;

    while (true) {
        const suma = a + b;

        a = b;
        b = suma;

        yield suma;
    }
}
const gen = generator()

