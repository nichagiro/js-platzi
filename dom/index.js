// insertar dom
const main = document.querySelector('#main');

const beforebegin = document.createElement('small');
beforebegin.innerText = 'beforebegin';

const beforeend = document.createElement('small');
beforeend.innerText = 'beforeend';

const afterbegin = document.createElement('small');
afterbegin.innerText = 'afterbegin';

const afterend = document.createElement('small');
afterend.innerText = 'afterend';

main.insertAdjacentElement("beforebegin", beforebegin);
main.insertAdjacentElement("beforeend", beforeend);
main.insertAdjacentElement("afterbegin", afterbegin);
main.insertAdjacentElement("afterend", afterend);

// remove dom
afterend.remove()

// intl (formatos rpecios y fechas)
const precios = [1000, 5000, 1500, 500, 4749, 5555, 9458]

const viewPrecios =  precios => {
    formaterPrecio =  data => {
        return new Intl.NumberFormat("en-EN",{
            style: 'currency',
            currency: "USD",
            maximumSignificantDigits:2
        }).format(data)
    }
    precios.forEach(valor => {
        console.log(formaterPrecio(valor))
    });
}

viewPrecios(precios)