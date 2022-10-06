//  IF REDUCIDO
('Nicolas' === 'nicolas')
    ? console.log('IF REDUCE', true)
    : console.log('IF REDUCE', false)

// NULL CHANGE VALUE (Asigna valor si esta nullo)
const nameUser = document.getElementById('name');
const nombre = nameUser ?? 'Nicolas'
console.log('DEFAULT NULL', nombre)

// OPTIONAL SHINY (si no existe marca undefinded "evitar reventar la app")
const user = { name: 'Nicolas', age: 24 }
console.log('OPTIONAL SHINY', user?.age || 25)

// REPLACE TEXT (STR REPLACE)
const groserias = 'hijo de puta es una groseria , pero a quien le importa ';
console.log('REPLACE', groserias.replaceAll('hijo de puta', '*****'))

// POTENCIA
console.log('POTENCIA', 5 ** 3)

//GENERATOR
function* Generator(bandera) {
    bandera ? yield 'HOMBRE' : yield 'MUJER'
}
console.log('GENERATOR', Generator(true).next())
console.log('GENERATOR', Generator(false).next())


//PROMISE
const HandlePromise = (bandera) => {
    return new Promise((resolve, reject) => {
        (bandera)
            ? resolve(console.log('Dijo que si'))
            : reject(console.log('Dijo que noo'))

    })
}
HandlePromise(true)
    .then(console.log('THEN'))
    .catch(error => console.log('ERROR', error))
    .finally(console.log('FIHISH PROMISE'))

// REGEX
const regex = /[0-9]+/  // se debe cumplir que alla numeros del 0 al 9 o mas !
const email = regex.test(4465640)
console.log('REGEX', email)

// IMPORT DINAMICO
document.getElementById('button').addEventListener('click', async () => {
    const module = await import('./actions.js')
    console.log(module)
    module.saludar('Nico')
})

// CALLBACKS
const saludar = name => {
    console.log('CALLBACK', name)
}
const persona = (firstName, LastName, callback) => {
    return callback(`${firstName} ${LastName}`)
}
persona('Nicolas', 'Chamorro', saludar)



