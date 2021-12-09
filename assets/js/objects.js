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