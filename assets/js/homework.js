// pedir al usuario una palabra (permitir espacios, mayusculas)
// Verificar que sea un palindromo
// mandar en consola el resultado
// -> La palabra "anita lava la tina" es un palindromo
/*
const wordValue = prompt(' Prueba de texto palindromo.\n Ingresa tu texto:').trim().toLowerCase()

let wordTest = ''
let wordChange = ''

if(wordValue != ''){
    for(i = 0; i < wordValue.length; i++){
        if(wordValue[i] !== ' '){
            wordTest = wordTest +  wordValue[i]
        }
    }  
    for(j = wordTest.length - 1; j >= 0 ; j--){
        wordChange = wordChange + wordTest[j]
    } 
    wordTest === wordChange ?
        console.log(`La palabra "${wordValue}" es un palindromo.`)
    :
        console.log(`La palabra "${wordValue}" no es un palindromo.`)

} else {
    console.log('Escribe correctamente tu texto')
}
*/
/*
//Ejercicio 1
//imprimir en pantalla los numeros pares entre el 1 al 100
//-> 2
//-> 4
//-> 100

for(i = 0; i <= 100; i+=2)
    console.log(i)

*/


//Ejercicio 2
//Pedir al usuario un string
//invertir el orden e imprimir en consola
//Entrada: "reverse"
//Salida: -> esrever

var wordUser = prompt("Ingresa el texto para verlo al reves.")
var wordChange = ''

while(x >= 0)[
    wordChange = wordChange + x--
]