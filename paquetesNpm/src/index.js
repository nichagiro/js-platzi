const names = [
    "Nicolas Chamorro",
    "Angela Rojas",
    "Luisa Flores",
    "Luz Mary Giron",
    "Jessica Reyes",
    "Diego Gomez",
    "Natalia Giraldo"
]

const phone = [
    3174865702,
    3001818645,
    3015548489,
    3221561848,
    3357898567,
    3248987568,
    3189758756
]


const GetNames = () => {
    return names[Math.floor(Math.random() * names.length)]
}

const GetPhone = () => {
    return phone[Math.floor(Math.random() * phone.length)]
}

module.exports = {GetNames , GetPhone}