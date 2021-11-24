/*
    Ejercicio 1:
    Pedir 2 variables por prompt
    Si a > b dividir entre b
    Si a < b sumar a más b
    Si a == B multiplicar ambos numeros
    imprimir el resultado en consola
    */

let number1 = parseInt(prompt("ingresa un valor"))
let number2 = parseInt(prompt("ingresa un segundo valor"))
 
if (number1 > number2){
    console.log("es una division", number1 / number2)
}else if (number1 < number2){
    console.log("es una suma", number1 + number2)
}else if (number1 == number2){
    console.log("es una multiplicacion", number1 * number2)
}
/* el else if final si lo quito el if manda error y no corre en el navegador*/