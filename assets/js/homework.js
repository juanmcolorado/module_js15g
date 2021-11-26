/*
 * 
 * Pedir al usuario el dia de la semana 
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */
    let day = prompt("Ingresa un dia de la semana")
    let dayMod = day.toLowerCase ()
        switch (dayMod){
            case "domingo":
                console.log(dayMod, " -> 1")
                break 
            case "lunes":
                console.log(dayMod, " -> 2")
                break
            case "martes":
                console.log(dayMod, " -> 3")
                break    
            case "miercoles":
            case "miércoles":
                console.log(dayMod, " -> 4")
                break
            case "jueves":
                console.log(dayMod, " -> 5")
                break
            case "viernes":
                console.log(dayMod, " -> 6")
                break
            case "sábado":
            case "sabado":
                console.log(dayMod, " -> 7")
                break
            default:
                console.log("No reconozco el día")
        }
