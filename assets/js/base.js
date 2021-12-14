
/**
 * Selecionar elementos
 * 
 * 1. Selecionar por ID
 */
/*
//  1. Selecionar por ID
document.getElementById('head__title') 
document.getElementsByTagName('li')
document.getElementsByClassName('link__menu')

document.querySelector('#head__title')
document.querySelector('li')
document.querySelector('.link__menu')
document.querySelectorAll('.link__menu')
// document.querySelectorAll('')
*/
/**
 * Obtener atributos
 * Setear atributos
 */

// get
/*
let title = document.querySelector('#head__title').getAttribute('data-title')
let level = document.querySelector('#head__title').getAttribute('data-level')

// set
document.querySelector('#head__title').setAttribute('data-custom','random')
// reemplazando clases 
document.querySelector('#head__title').setAttribute('class','trees cuatro')

// Agregar clases
document.querySelector('#head__title').classList.add('clase3')
// remover clases
document.querySelector('#head__title').classList.remove('clase2')

// comprobar si existe un atributo
document.querySelector('#head__title').hasAttribute('class')

*/
// comprobar si el titulo tiene class
/**
 * Si si, comprobar 
 * ---si tiene la clase "clase1 clase2"
 * ----- Agregar la "clase 3"
 * ---sino 
 * ----- Agregar la clase "custom"
 */
/*
 document.querySelector('#head__title').hasAttribute('class')
 console.log(document.querySelector('#head__title').hasAttribute('class'))
 // true

 document.querySelector('#head__title').hasAttribute('class1')
 console.log(document.querySelector('#head__title').hasAttribute('class1'))
 // false

 document.querySelector('#head__title').hasAttribute('class2')
 console.log(document.querySelector('#head__title').hasAttribute('class2'))
 // false

 document.querySelector('#head__title').hasAttribute('custom')
 console.log(document.querySelector('#head__title').hasAttribute('custom'))
 // false

 document.querySelector('#head__title').classList.add('custom')
console.log(head__title)
//<h1 class="otra custom" id="head__title" data-title="DOM" data-level="4">DOM</h1>
*/
/*
let elemenTitle = document.querySelector('#head__title')
if( elemenTitle.hasAttribute('class') ) {
    if( elemenTitle.getAttribute('class') === 'clase1 clase2' ) {
        elemenTitle.classList.add('clase3')
    } else {
        elemenTitle.classList.add('custom')
    }
}
*/
// createElement('tag')
// textContent
// appendChild
/*
let ulElement = document.createElement('ul')
// <ul></ul>

let liFirst = document.createElement('li')
// <li></li>
liFirst.textContent = 'item 1'
// <li>item 1</li>
ulElement.appendChild(liFirst)
// <ul> <li>item 1</li> </ul>

let liSecond = document.createElement('li')
// <li></li>
liSecond.textContent = 'item 2'
// <li>item 2</li>
ulElement.appendChild(liSecond)
// <ul> <li>item 1</li> <li>item 2</li> </ul>

document.getElementsByTagName('body')[0].appendChild(ulElement)
// body -> <ul> <li>item 1</li> <li>item 2</li> </ul>
// data attributes
// propiedades personalizadas
*/
/**
 * Seleccionar padres e hijos (traversing)
 */


/**
 * Manipular elementos del DOM
 */
/*
 let ulElementOne = document.createElement('ul')
 ulElementOne.setAttribute ("id","menu")
 document.querySelector('ulElementOne').classList.add('menu')
 ulElementOne.appendChild(liElementFirst)
 
 let liElementFirst = document.createElement('li')
 liElementFirst.textContent = 'Home'

 ulElementOne.appendChild(liElementSecond)
 
 let liElementSecond = document.createElement('li')
 liElementSecond.textContent = 'Products'
 ulElementOne.appendChild(liElementThird)
 
 let liElementThird = document.createElement('li')
 liElementThird.textContent = 'About us'
 */
 /*
 const reverseUser = () =>{
    let wordIn = document.querySelector('#username').value
    let wordChange = wordIn.split('').reverse().join("")
    document.getElementById('usernamereversed').value= wordChange    
 }
 */
/*
 * Dado un array
 * ['colima', 'colombia','Estado de mexico']
 * 
 * EScuchar el evento keyup en un input
 * Filtrar del array las coincidencias
 * Pintar las coincidencias en una lista
 * 
 */
/*
let cities = ['colima', 'colombia','Estado de mexico']

const filterCity = () => {
    // filtrar ciudades
    let citySearch = document.querySelector('#name__city').value
    let citiesFiltered = cities.filter( (city) => {
        if(city.includes(citySearch) === true){
            return city
        }
    })

    // creo el layout con las ciudades filtradas
    let lista = ''
    citiesFiltered.forEach( (value) => {
        lista += `<li>${value}</li>`
    })

    // agrego el layout
    document.querySelector('#listCity').innerHTML = lista
}

*/
/*
let koders = [
    {
        name: 'emilio',
        age: 30,
        city: 'Guadalajara'
    },
    {
        name: 'Brisset',
        age: 30,
        city: 'Lima'
    },
    {
        name: 'Esteban',
        age: 30,
        city: 'Lima'
    },
    {
        name: 'Sofia',
        age: 30,
        city: 'Lima'
    },
    {
        name: 'Javier',
        age: 30,
        city: 'Lima'
    }
]

const filterKoder = () => {
    let elementKoders = document.querySelector('#name__koder').value
    let kodersElem = koders.filter( (city) => {
        if(city.includes(citySearch) === true){
            return city
        }
    })
*/
let cities = [
    {
        name: 'emilio',
        age: 30,
        city: 'Guadalajara'
    },
    {
        name: 'Brisset',
        age: 30,
        city: 'Lima'
    },
    {
        name: 'Esteban',
        age: 30,
        city: 'Lima'
    },
    {
        name: 'Sofia',
        age: 30,
        city: 'Lima'
    },
    {
        name: 'Javier',
        age: 30,
        city: 'Lima'
    }
]

    const filterCity = () => {
        // filtrar ciudades
        let citySearch = document.querySelector('#name__city').value
        let citiesFiltered = cities.filter( (city) => {
            if(city.includes(citySearch) === true){
                return city
            }
        })
    
        // creo el layout con las ciudades filtradas
        let lista = ''
        citiesFiltered.forEach((keys) => {
            lista += `<li>${keys}</li>`
        })
    
        // agrego el layout
        document.querySelector('#listCity').innerHTML = lista
    }
    