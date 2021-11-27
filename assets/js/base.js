//pedir al usuario un string
//contar las vocales y las consonantes
//imprimir en consola
//vocales y consonantes
/*
const wordUser = prompt("Ingresa tus palabras favoritas").toLowerCase()
let vowels = 0
let consonant = 0

if (wordUser.length > 0) {

    for(i = 0; i < wordUser.length; i++) {

        let letter = wordUser[i]
        if(letter !== " ") {
            if(
                letter === "a" ||
                letter === "e" ||
                letter === "i" ||
                letter === "o" ||
                letter === "u" ||
                letter === "á" ||
                letter === "é" ||
                letter === "í" ||
                letter === "ó" ||
                letter === "ú"
            ) {
                vowels++
            } else {
                consonant++
            }
        }
    }
    console.log(`${vowels} vocales y ${consonant} consonantes.` )
} else{
    console.log("Inserta una palabra por favor.")
}
*/
// pedir una palanbra con espacio al inicio y al final
// contar las letras "a" y "e", 
// Contar numero de espacios, sin contar los espacios
// al inicio y al final
/*
const wordUser = prompt("Ingresa tus palabras favoritas").toLowerCase().trim()
let vowelsa = 0
let vowelse = 0
let consonant = 0
let space = 0
if (wordUser.length > 0) {
    for(i = 0; i < wordUser.length; i++) {
        let letter = wordUser[i]
            if(
                letter === "a" ||
                letter === "á"   
            ) {
                vowelsa++
            }else if(letter === "e" ||
                letter === "é" 
            ){
                vowelse++
            }else if(letter === " "){
                space++        
            }else {
                consonant++
            }
    }
    console.log(`${vowelsa} vocales a, ${vowelse} vocales e, y ${space} espacios.`)
} else{
    console.log("Inserta una palabra por favor.")
}
*/
//Pedir el usuario 1 numero entre 1 y 100
//sumar todos los numeros entre el 1 y este numero
//Mandar un alert con el  total
/*
let numberUser = parseInt(prompt("Dame un número de 1 al 100"))
let previos = 0

if(!isNaN(numberUser) && numberUser > 0 && numberUser < 101){

    for(i = 1; i <= numberUser; i++){
    previos = previos + i
    }
    alert(`La suma es: ${previos}`)
}else{
    console.error("Número invalido")
}
*/
/*
let numberNew = parseInt(prompt("Dame un número de 1 al 100"))
let previos = 0
let numberMark = 0

if(!isNaN(numberNew) && numberNew > 0 && numberNew <= 100){
    while(numberMark <= numberNew ){
        previos = previos + numberMark
        numberMark = numberMark + 1
    }
    alert(`La suma es: ${previos}`)
}else{
    console.error("Número invalido");
}
*/
//pedir al usuario una palabra (permitir espacios, mayusculas)
//Verificar que sea un palindromo
//mandar en consola el resultado
//-> La palabra "anita lava la tina" es un palindromo
// For solution
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