// pedir al usuario una palabra (permitir espacios, mayusculas)
// Verificar que sea un palindromo
// mandar en consola el resultado
// -> La palabra "anita lava la tina" es un palindromo

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