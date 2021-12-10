// metodos de los objetos
// "anterior: elemento.metodo(parametros)"
// object.keys(obj)
// object. para revisar en el navegador


// Object.keys(obj)
const salariosCheck  = {
    'jorge':  3000,
    'juan':  3000,
    'Pedro':  3000
}
/*
let empleados = []
for( item in salariosCheck){
    empleados.push(item)
}

console.log( Object.values(salariosCheck) )
*/

// funcion
// recibe un objeto
// retornar el total de los salarios

// hint : reduce
// hint : forEach
/*
const sumaRedi = (obj) => {
    let suma = 0
    suma = Object.values( obj ).reduce((acc, key) =>{
        console.log(key),
        return acc + obj[key]
    },0)
*/

// clase 12

// console.log(this)
// console.log(this.alert)
/*
let koder = {
    name:"jorge",
    lastName:"Camarillo",
    age: 30,
    average: [10, 10, 10, 8, 9]
    // getFullName: function () {
    //     console.log(this)
    //     return `${ this.name } ${ this.lastName } ${this.age}`
    // }
}

koder.getFullName = function () {
    console.log(this)
    return `${ this.name } ${ this.lastName } ${this.age}`
}

console.log(koder.getFullName())

//console.log(koder.getAverage())
// -> 9.4
*/

let koder = {
    name:"jorge",
    lastName:"Camarillo",
    age: 30,
    average: [10, 10, 10, 8, 9],
    totalAverage: 10
}
/*
koder.getAverage = function () {
    let suma = 0
    this.average.forEach(element => {
        suma = suma + element / this.average.length
    });
    return suma
}
console.log(koder.getAverage())

koder.setavarege = function() {
   this.totalAverage = this.getAverage()
}

koder.setavarege ()

console.log(koder)
*/
// Agregar un metodo para calcular el IMC 

koder.setGetIMC = function () { 
    this.peso = 57 
    this.altura = 1.50 
    this.IMC = this.peso/this.altura**2 } 
    
// Agregar un metodo para Agregar un nuevo promedio 

koder.setNewAve = function () { 
    this.average.push(10) } 
    
// Agregar un metodo para agregar una nueva propiedad 
koder.addNewProperty = function (key,value) {
     this[key] = value 
    } 
    
    koder.setGetIMC() 
    koder.addNewProperty('nationality','Mexican') 
    koder.setNewAve() 
    koder.setAverage() 
    
    console.log(koder) 