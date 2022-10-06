function Suma(a: number, b: number): number {
    return a + b
}
const a: number = 5;
const b: number = 25;
console.log('Suma', Suma(a, b))

function SumaProfeta(list: Array<number>): number {
    return list.reduce((previus, next) => previus + next)
}

const numeros: Array<number> = [1, 2, 3, 4]
console.log('SumaProfeta', SumaProfeta(numeros))
