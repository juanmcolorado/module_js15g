// Tarea 1

/**
 * Ejercicio 1.
 * Dado el siguiente Array ['Hoteles', 'Ofertas', 'Viajes', 'Ayuda', 'Cancelaciones']
 * Formar el siguiente markup en el DOM
 * <ul class="menu__booking" data-menu="booking">
        <li class="menu__booking__item">Hoteles</li>
        <li class="menu__booking__item">Ofertas</li>
        <li class="menu__booking__item">Viajes</li>
        <li class="menu__booking__item">Ayuda</li>
        <li class="menu__booking__item">Cancelaciones</li>
    </ul>
 * 
 */






/**
 * Ejercicio 2.
 * Dado el siguiente Array de objetos "objPromesas"
 * Crear una funcion para Formar el markup necesario para que se vea asi
 * https://ibb.co/hWSvpx5
 * 
 * NOTA: recuerda agregas el CSS necesario para lograr este objetivo
 * 
 */

 let objPromesas = [
    {
        imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/hotel1.png',
        titulo: 'LA MAYOR COBERTURA',
    },
    {
        imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/icono_desayuno_cortesia_2_0.png',
        titulo: 'DESAYUNO EN CORTESÍA*',
    },
    {
        imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/icono_cancelacion_flexible_0.png',
        titulo: 'CANCELACIÓN SIN COSTO**',
    },
    {
        imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/icono_wifi_cortesia_2_0.png',
        titulo: 'WIFI EN CORTESÍA',
    }
]

/**
 *  Tarea 2
 * Estudiar lo siguiente:
 * 1. innerHTML son para propiedad
 * 2. insertBefore() inserta un nuevo elemento li antes del primer elemento secundario de un elemento ul
 * 3. insertAfter() metodo que permite insertar un nuevo nodo existente como nodo hijo
 * 4. append() metodo que inserta un conjunto node objetos u  doms string objetos despues del ultimo hijo
 * 5. prepend() metodo inserta un conjunto de node objetos u doms string objetos antes del primer hijo
 * 6. removeChild() elimina el primer elemento li de una lista 
 * 7. DOM events los ev
 * 
 */