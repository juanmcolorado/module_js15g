  /**
 * 
 * Pedir al usuario por prompt un numero entre 1 y 100
 * verificar si es un par o impar
 * imprimir en resultado en consola
 * Máximo de lineas para este ejercicio, 2 lineas de código
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

    var a = parseInt(prompt("Ingresa un número de 1 al 100: "))
    
    if(a % 2 == 0){
        console.log(a,'es numero par.')
    }else{
        console.log(a,'es numero impar.')
    }
 /**
 * 
 * Pedir al usuario el dia de la semana 
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */
    var day = prompt("Ingresa un dia de la semana")
    switch (day){
        case "Domingo":
            console.log("Domingo -> 1")
            break
        
        case "Lunes":
            console.log("Lunes -> 2")
            break
        
        case "Martes":
            console.log("Martes -> 3")
            break    
        
        case "Miercoles":
            console.log("Miercoles -> 4")
            break
                
        case "Jueves":
            console.log("Jueves -> 5")
            break
        
        case "Viernes":
            console.log("Viernes -> 6")
            break

        case "Sábado":
            console.log("Sábado -> 7")
            break
    }
    /**
 * 
 * Pedir al usuario 2 numeros 
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */

    var num1 = parseInt(prompt("Ingresa un número: "))
    var num2 = parseInt(prompt("Ingresa un segundo número diferente al primero: "))

        if (num1 === num2){
            console.error("los números son iguales")
        }else if (num1 > num2){
            console.log(num1, " es mayor a ", num2 )
            console.log(num2, " es mayor a ", num1 )  
        }else{
            console.log(num2, " es mayor a ", num1)
            console.log(num1, " es mayor a ", num2)
     }